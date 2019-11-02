/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// @flow

import React from 'react';
import {H2} from '../components/markdown-elements';
import {useStyletron} from 'baseui/styles';

import * as thumbnails from '../components/thumbs';

const COMPONENTS = {
  Inputs: [
    {
      href: '/components/button',
      Component: thumbnails.SvgButton,
    },
    {
      href: '/components/button-group',
      Component: thumbnails.SvgButtonGroup,
    },
    {
      href: '/components/input',
      Component: thumbnails.SvgInput,
    },
    {
      href: '/components/checkbox',
      Component: thumbnails.SvgCheckbox,
    },
    {
      href: '/components/radio',
      Component: thumbnails.SvgRadio,
    },
    {
      href: '/components/textarea',
      Component: thumbnails.SvgTextarea,
    },
    {
      href: '/components/form-control',
      Component: thumbnails.SvgFormControl,
    },
    {
      href: '/components/payment-card',
      Component: thumbnails.SvgPaymentCard,
    },
    {
      href: '/components/pin-code',
      Component: thumbnails.SvgPinCode,
    },
    {
      href: '/components/phone-input',
      Component: thumbnails.SvgPhoneInput,
    },
    {
      href: '/components/slider',
      Component: thumbnails.SvgSlider,
    },
  ],
  Pickers: [
    {
      href: '/components/file-uploader',
      Component: thumbnails.SvgFileUploader,
    },
    {
      href: '/components/menu',
      Component: thumbnails.SvgMenu,
    },
    {
      href: '/components/rating',
      Component: thumbnails.SvgRating,
    },
    {
      href: '/components/select',
      Component: thumbnails.SvgSelect,
    },
  ],
  'Date & Time': [
    {
      href: '/components/datepicker',
      Component: thumbnails.SvgDatepicker,
    },
    {
      href: '/components/time-picker',
      Component: thumbnails.SvgSelect,
    },
    {
      href: '/components/timezone-picker',
      Component: thumbnails.SvgSelect,
    },
  ],
  Navigation: [
    {
      href: '/components/breadcrumbs',
      Component: thumbnails.SvgBreadcrumbs,
    },
    {
      href: '/components/header-navigation',
      Component: thumbnails.SvgHeaderNavigation,
    },
    {
      href: '/components/link',
      Component: thumbnails.SvgLink,
    },
    {
      href: '/components/pagination',
      Component: thumbnails.SvgPagination,
    },
    {
      href: '/components/side-nav',
      Component: thumbnails.SvgSideNavigation,
    },
    {
      href: '/components/tabs',
      Component: thumbnails.SvgTabs,
    },
  ],
  Content: [
    {
      href: '/components/accordion',
      Component: thumbnails.SvgAccordion,
    },
    {
      href: '/components/avatar',
      Component: thumbnails.SvgAvatar,
    },
    {
      href: '/components/dnd-list',
      Component: thumbnails.SvgDndList,
    },
    {
      href: '/components/heading',
      Component: thumbnails.SvgHeading,
    },
    {
      href: '/components/icon',
      Component: thumbnails.SvgIcon,
    },
    {
      href: '/components/table',
      Component: thumbnails.SvgTable,
    },
    {
      href: '/components/table-grid',
      Component: thumbnails.SvgTableGrid,
    },
    {
      href: '/components/table-semantic',
      Component: thumbnails.SvgTable,
    },
    {
      href: '/components/unstable-data-table',
      Component: thumbnails.SvgDataTable,
    },
    {
      href: '/components/tag',
      Component: thumbnails.SvgTag,
    },
    {
      href: '/components/typography',
      Component: thumbnails.SvgTypography,
    },
  ],
  Feedback: [
    {
      href: '/components/notification',
      Component: thumbnails.SvgNotification,
    },
    {
      href: '/components/progress-bar',
      Component: thumbnails.SvgProgressBar,
    },
    {
      href: '/components/spinner',
      Component: thumbnails.SvgSpinner,
    },
    {
      href: '/components/toast',
      Component: thumbnails.SvgToast,
    },
  ],
  Surfaces: [
    {
      href: '/components/card',
      Component: thumbnails.SvgCard,
    },
    {
      href: '/components/drawer',
      Component: thumbnails.SvgDrawer,
    },
    {
      href: '/components/modal',
      Component: thumbnails.SvgModal,
    },
    {
      href: '/components/popover',
      Component: thumbnails.SvgPopover,
    },
    {
      href: '/components/tooltip',
      Component: thumbnails.SvgTooltip,
    },
  ],
  Utility: [
    {
      href: '/components/aspect-ratio-box',
      Component: thumbnails.SvgAspectRatioBox,
    },
    {
      href: '/components/flex-grid',
      Component: thumbnails.SvgFlexGrid,
    },
    {
      href: '/components/layer',
      Component: thumbnails.SvgLayer,
    },
    {
      href: '/components/unstable-a11y',
      Component: thumbnails.SvgUnstableA11y,
    },
    {
      href: '/components/tokens',
      Component: thumbnails.SvgTokens,
    },
    {
      href: '/components/block',
      Component: thumbnails.SvgBlock,
    },
  ],
};

function Thumbnail({children, href}) {
  const [useCss, theme] = useStyletron();
  return (
    <a
      href={href}
      className={useCss({
        ...theme.borders.border300,
        borderColor: theme.colors.border,
        display: 'flex',
        flexDirection: 'column',
        marginRight: theme.sizing.scale800,
        marginBottom: theme.sizing.scale800,
        textDecoration: 'none',
        transitionProperty: 'all',
        transitionDuration: theme.animation.timing100,
        transitionTimingFunction: theme.animation.easeInOutCurve,
        ':hover': {
          border: `solid 1px ${theme.colors.borderFocus}`,
        },
        ':focus': {
          outline: 'none',
          border: `solid 1px ${theme.colors.borderFocus}`,
        },
      })}
    >
      <div
        className={useCss({
          ...theme.typography.font100,
          fontFamily:
            'SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace',
          ...theme.borders.border300,
          borderColor: theme.colors.border,
          borderTop: 0,
          borderLeft: 0,
          borderRight: 0,
          color: `${theme.colors.foregroundAlt}`,
          paddingTop: theme.sizing.scale300,
          paddingBottom: theme.sizing.scale300,
          paddingLeft: theme.sizing.scale500,
          paddingRight: theme.sizing.scale500,
        })}
      >
        {'baseui/' + href.split('/')[2]}
      </div>
      <div
        className={useCss({
          padding: theme.sizing.scale500,
        })}
      >
        {children}
      </div>
    </a>
  );
}

function Section({category}) {
  const [useCss, theme] = useStyletron();
  const colors = theme.name.includes('light-theme')
    ? [theme.colors.mono200, theme.colors.mono400, theme.colors.mono600]
    : [theme.colors.mono700, theme.colors.mono500, theme.colors.mono300];
  return (
    <React.Fragment>
      <H2>{category}</H2>
      <div
        className={useCss({
          display: 'flex',
          flexWrap: 'wrap',
          marginTop: theme.sizing.scale800,
        })}
      >
        {COMPONENTS[category].map(({Component, ...props}) => {
          return (
            <Thumbnail key={props.href} {...props}>
              <Component colors={colors} />
            </Thumbnail>
          );
        })}
      </div>
    </React.Fragment>
  );
}

function Gallery() {
  return (
    <React.Fragment>
      {Object.keys(COMPONENTS).map(category => (
        <Section key={category} category={category} />
      ))}
    </React.Fragment>
  );
}

export default Gallery;
