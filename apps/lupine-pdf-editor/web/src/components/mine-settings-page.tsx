import {
  CssProps,
  HeaderWithBackFrame,
  HtmlVar,
  NotificationColor,
  NotificationMessage,
  RefProps,
  SliderFrame,
  SliderFrameHookProps,
} from 'lupine.components';

import { MineAboutPage } from './mine-about-page';
import { MineSupportPage } from './mine-support-page';

export const MineSettingsPage = (props: { sliderFrameHook: SliderFrameHookProps; onDataChanged: () => void }) => {
  const innerSliderHook: SliderFrameHookProps = {};

  const renderContent = () => {
    const css: CssProps = {
      display: 'flex',
      flexDirection: 'column',
      flex: '1',
      padding: '0 16px',
      backgroundColor: 'var(--secondary-bg-color)',
      overflowY: 'auto',

      '.setting-section-group': {
        marginBottom: '24px',
      },
      '.setting-section-title': {
        fontSize: '14px',
        color: 'var(--secondary-color)',
        marginBottom: '8px',
        paddingLeft: '16px',
        marginTop: '16px',
      },
      '.setting-section-block': {
        backgroundColor: 'var(--primary-bg-color)',
        borderRadius: '12px',
        overflow: 'hidden',
      },
      '.setting-section-item': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px',
        borderBottom: '1px solid var(--primary-border-color)',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
      },
      '.setting-section-item:last-child': {
        borderBottom: 'none',
      },
      '.setting-section-item:active': {
        backgroundColor: 'rgba(0,0,0,0.02)',
      },
      '.setting-section-item-text': {
        fontSize: '16px',
        color: 'var(--primary-color)',
      },
      '.setting-section-item-text.danger': {
        color: '#ff4d4f',
      },
      '.setting-section-item-icon': {
        color: 'var(--secondary-color)',
        opacity: 0.5,
      },
      'a.setting-section-item': {
        textDecoration: 'none',
      },
    };

    const ref: RefProps = {
      onLoad: async (el: Element) => {
        // any sub loaders
      },
    };

    return (
      <div css={css} ref={ref} class='user-settings-top'>
        <div class='setting-section-group'>
          <div class='setting-section-title'>Application</div>
          <div class='setting-section-block'>
            <a
              class='setting-section-item'
              href='javascript:void(0)'
              onClick={() => {
                innerSliderHook.load!(<MineSupportPage sliderFrameHook={innerSliderHook} />);
              }}
            >
              <div class='setting-section-item-text'>Feedback & Support</div>
              <div class='setting-section-item-icon'>
                <i class='ifc-icon ma-chevron-right' />
              </div>
            </a>
            <div
              class='setting-section-item'
              onClick={() => {
                // props.sliderFrameHook.addClass!('desktop-slide-left');
                // innerSliderHook.addClass!('desktop-slide-right');
                innerSliderHook.load!(<MineAboutPage sliderFrameHook={innerSliderHook} />);
              }}
            >
              <div class='setting-section-item-text'>About</div>
              <div class='setting-section-item-icon'>
                <i class='ifc-icon ma-chevron-right' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const dom = new HtmlVar(renderContent());

  return (
    <HeaderWithBackFrame title='Settings' onBack={(event) => props.sliderFrameHook.close!(event)}>
      <>
        <SliderFrame hook={innerSliderHook} />
        {dom.node}
      </>
    </HeaderWithBackFrame>
  );
};
