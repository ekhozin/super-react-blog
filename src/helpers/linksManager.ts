import routes from 'constants/routes';
import {trimStart, isNullOrUndefined} from 'helpers/helpers';

interface IRoutes {
  [key: string]: string;
}

interface IRouteConfig {
  [key: string]: string | number | null;
}

interface IConfig {
  [key: string]: IRouteConfig;
}

class LinksManager {
  private routesConfig: IConfig;

  public constructor(routes: IRoutes) {
    this.routesConfig = this.createRoutesConfig(routes);
  }

  /**
   * Takes passed routes object and creates routes config:
   * Each route string in routes object wil be split by '/'.
   * From each variable param (for example ':id') the ':' will be removed.
   * Each value of each route config will be asigned to null.
   *
   * Example of passed routes object:
   * {
   *   ROUTE_NAME_0: '/',
   *   ROUTE_NAME_1: '/entity/:id',
   *   ROUTE_NAME_2: '/entity1/:someId/entity2'
   * }
   *
   * Example of resulted config:
   * {
   *   ROUTE_NAME_0: {
   *     '': null
   *   },
   *   ROUTE_NAME_1: {
   *     'entity': null,
   *     'id': null
   *   },
   *   ROUTE_NAME_2: {
   *     'entity1': null,
   *     'someId': null,
   *     'entity2': null,
   *   }
   * }
   *
   * This config will be used as base for creating link.
   * @param {IRoutes} routes Routes object. Key - name of route, value - route
   * @return {IConfig} Config object.
   */
  private createRoutesConfig = (routes: IRoutes): IConfig =>
    Object.entries(routes).reduce((acc: IConfig, route: string[]): IConfig => {
      const [name, value] = route;
      const trimmedValue = trimStart(value, '/');
      const keysArray = trimmedValue.split('/');
      const config: IRouteConfig = {};

      keysArray.forEach((key: any): any => {
        const trimKey = trimStart(key, ':');
        config[trimKey] = null;
      });

      return {...acc, [name]: config};
    }, {});

  /**
   * Takes passed config object and creates string link from it.
   * If value of some field in config object is not null or undefined then
   * this value will be taken and added to result link.
   * If value of field is null or undefined then field name will be taken and added in result link.
   *
   * Example of route config:
   * {
   *   'entity': null,
   *   'id': 1,
   *   'some-other-entity': null
   * }
   *
   * Example of resulted link:
   * /entity/1/some-other-entity
   * @param {IRouteConfig} config Config object of exact route.
   * @return {string} Page link.
   */
  private createLink = (config: IRouteConfig = {}): string => {
    const resultLink = Object.entries(config).reduce((acc, routeConfig): string => {
      const [name, value] = routeConfig;
      const res = isNullOrUndefined(value) ? name : value;

      return `${acc}/${res}`;
    }, '');

    return resultLink;
  };

  /**
   * Created page link from route config object and passed custom config.
   * @param {string} configName Name of exact route config. It has to be in routes config.
   * @param {customConfig} customConfig Object that will be merged with given route config.
   * @return {string} Page link.
   */
  public createLinkByConfigName = (configName: string = '', customConfig: IRouteConfig = {}): string => {
    const config = this.routesConfig[configName];

    if (!config) {
      return '';
    }

    const mergedConfig = {...config, ...customConfig};
    return this.createLink(mergedConfig);
  };

  /**
   * Created article page link.
   * @param {string | number} id Article id.
   * @return {string} Page link.
   */
  public createArticleLink = (id: string | number): string =>
    this.createLinkByConfigName('ARTICLE', {id});
}

export default new LinksManager(routes);
