import {
  CssProps,
  PageProps,
  RefProps,
  PEditor,
  MobileHeaderCenter,
  MobileHeaderTitleIcon,
  MobileHeaderEmptyIcon,
  MobileTopSysIcon,
} from 'lupine.components';

export const HomePage = async (props: PageProps) => {
  let editor: PEditor | undefined;

  const ref: RefProps = {
    onLoad: async () => {
      const container = ref.$('.pe-demo-box');
      if (container) {
        editor = new PEditor(container, {});
      }
    },
  };

  const css: CssProps = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    position: 'relative',
    '.p-edit-container': {
      flex: 1,
      width: '100%',
      backgroundColor: 'var(--primary-bg-color)',
      overflow: 'hidden',
    },
    '.pe-demo-box': {
      width: '100%',
      height: '100%',
    },
  };

  return (
    <div css={css} ref={ref}>
      <MobileHeaderCenter>
        <MobileHeaderTitleIcon
          title='Lupine PDF Editor'
          left={<MobileHeaderEmptyIcon />}
          right={<MobileTopSysIcon />}
        />
      </MobileHeaderCenter>
      <div class='p-edit-container'>
        <div class='pe-demo-box'></div>
      </div>
    </div>
  );
};
