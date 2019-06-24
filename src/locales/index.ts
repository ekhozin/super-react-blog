import {addLocaleData} from 'react-intl';
import intlEn from 'react-intl/locale-data/en';
import intlRu from 'react-intl/locale-data/ru';

import en from './en.json';
import ru from './ru.json';

addLocaleData([...intlEn, ...intlRu]);

export default {
  en,
  ru
};
