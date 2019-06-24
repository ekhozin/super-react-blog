import {connect} from 'react-redux';

import LanguageSwitcher from 'components/common/language-switcher/LanguageSwitcher';
import {localeSelectors, localeActions} from 'ducks/locale';

const mapStateToProps = (state) => ({
  currentLocale: localeSelectors.selectLocaleState(state)
});

const mapDispatchToProps = {
  onSwitchClick: localeActions.changeLocale
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSwitcher);
