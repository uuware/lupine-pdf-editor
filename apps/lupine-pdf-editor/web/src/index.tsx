// css order is important
import './styles/global.css';
import './styles/app.css';

import {
  bindRouter,
  bindGlobalStyle,
  debugWatch,
  isFrontEnd,
  PageRouter,
  webEnv,
  bindLang,
  bindTheme,
  setDefaultPageTitle,
} from 'lupine.components';
import { baseCss } from './styles/base-css';
import { themes } from './styles/theme';
import { AppResponsiveFrame } from './frames/app-responsive-frame';
import { HomePage } from './pages/home-page';

bindLang('zh-cn', {});
bindTheme('light', themes);
bindGlobalStyle('comm-css', baseCss, false, true);
setDefaultPageTitle('Lupine PDF Editor');

if (isFrontEnd() && webEnv('NODE_ENV', '') === 'development') {
  debugWatch(webEnv('API_PORT', 0));
}

const pageRouter = new PageRouter();
pageRouter.setFramePage({ component: AppResponsiveFrame, placeholderClassname: 'user-page-placeholder' });
pageRouter.use('*', HomePage);

bindRouter(pageRouter);
