import { VNode } from 'lupine.web';
import { MediaQueryMaxWidth, ResponsiveFrame, SliderFrame, SliderFrameHookProps } from 'lupine.components';
import { SideMenuContent } from '../components/side-menu-content';

// Note: Replace with true site config loading if available
const getSiteTitle = async () => 'Lupine PDF Editor';
// const getSiteFooter = async () => '© 2026 Lupine Image Editor';

export const AppResponsiveFrame = async (placeholderClassname: string, vnode: VNode<any>) => {
  const sliderFrameHook: SliderFrameHookProps = {};

  return ResponsiveFrame({
    placeholderClassname,
    mainContent: vnode,
    desktopHeaderTitle: await getSiteTitle(),
    // desktopFooterTitle: await getSiteFooter(),
    desktopTopMenu: undefined,
    mobileBottomMenu: undefined,
    sharedContents: (
      <>
        <SliderFrame hook={sliderFrameHook} />
      </>
    ),
    mobileSideMenuContent: (
      <SideMenuContent
        navItems={undefined}
        settingSliderHook={sliderFrameHook}
        title='Lupine PDF Editor'
        footer='Powered by <a href="https://github.com/uuware/lupine.js">Lupine.js</a>'
      />
    ),
    maxWidth: MediaQueryMaxWidth.DesktopMax,
    autoExtendSidemenu: false,
  });
};
