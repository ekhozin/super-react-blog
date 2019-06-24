import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {FormattedMessage, injectIntl} from 'react-intl';

import Select from 'components/common/form-components/select/SelectBase';
import locales from 'constants/locales';
import styles from './LanguageSwitcher.scss';

class LanguageSwitcher extends React.PureComponent {
  getOptions = () => {
    const {intl} = this.props;

    return [
      {
        value: locales.en,
        label: intl.formatMessage({id: 'languageSwitcher.en'})
      },
      {
        value: locales.ru,
        label: intl.formatMessage({id: 'languageSwitcher.ru'})
      }
    ];
  };

  handleChange = (e) => {
    const {value} = e.target;
    this.props.onSwitchClick(value);
  };

  render() {
    const {className, currentLocale} = this.props;

    const cssClass = classNames(styles.LanguageSwitcher, className);

    return (
      <div className={cssClass}>
        <div className={styles.lang}>
          <FormattedMessage id='languageSwitcher.lang'/>
        </div>
        <Select
          className={styles.dropdown}
          value={currentLocale}
          id='language-switcher'
          name='language'
          options={this.getOptions()}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

LanguageSwitcher.propTypes = {
  className: PropTypes.string,
  currentLocale: PropTypes.string.isRequired,
  onSwitchClick: PropTypes.func.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
};

LanguageSwitcher.defaultProps = {
  className: ''
};

export default injectIntl(LanguageSwitcher);
