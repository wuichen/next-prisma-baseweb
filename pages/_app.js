/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-env browser */

// @flow
import * as React from 'react';
import {
  createThemedStyled,
  createThemedUseStyletron,
  createThemedWithStyle,
  BaseProvider,
  DarkTheme,
  DarkThemeMove,
  LightTheme,
  LightThemeMove,
} from 'baseui';
import { getMediaQuery } from 'baseui/helpers/responsive-helpers';
// import type { BreakpointsT, ThemeT } from 'baseui/styles/types';

import App from 'next/app';
import { Provider as StyletronProvider } from 'styletron-react';
import { Block } from 'baseui/block';
import Router from 'next/router';
// import type { AppProps } from 'next/app';
// import type { NextPage, NextPageContext } from 'next';

import { styletron, debug } from '../helpers/styletron';
// $FlowFixMe
// import { trackPageView } from '../helpers/ga';
import DirectionContext from '../components/direction-context';

const Breakpoints = {
  small: 670,
  medium: 920,
  large: 1280,
};

const ResponsiveTheme = Object.keys(Breakpoints).reduce(
  (acc, key) => {
    acc.breakpoints[key] = Breakpoints[key];
    acc.media[key] = getMediaQuery({
      'min-width': `${Breakpoints[key]}px`,
    });
    return acc;
  },
  {
    breakpoints: {},
    media: {},
    borders: {
      "useRoundedCorners": true,
      "buttonBorderRadius": "6px",
      "inputBorderRadius": "6px",
      "popoverBorderRadius": "6px",
      "surfaceBorderRadius": "6px"
    },
    "typography": {
      "font100": {
        "fontFamily": "\"Oswald\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontSize": "10px",
        "fontWeight": "normal",
        "lineHeight": "20px"
      },
      "font150": {
        "fontFamily": "\"Oswald\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontSize": "10px",
        "fontWeight": "500",
        "lineHeight": "20px"
      },
      "font200": {
        "fontFamily": "\"Oswald\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontSize": "12px",
        "fontWeight": "normal",
        "lineHeight": "20px"
      },
      "font250": {
        "fontFamily": "\"Oswald\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontSize": "12px",
        "fontWeight": 300,
        "lineHeight": "20px"
      },
      "font300": {
        "fontFamily": "\"Oswald\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontSize": "14px",
        "fontWeight": "normal",
        "lineHeight": "24px"
      },
      "font350": {
        "fontFamily": "\"Oswald\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontSize": "14px",
        "fontWeight": 300,
        "lineHeight": "24px"
      },
      "font400": {
        "fontFamily": "\"Oswald\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontSize": "16px",
        "fontWeight": "normal",
        "lineHeight": "28px"
      },
      "font450": {
        "fontFamily": "\"Oswald\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontSize": "16px",
        "fontWeight": 300,
        "lineHeight": "28px"
      },
      "font550": {
        "fontFamily": "\"Oswald\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontSize": "18px",
        "fontWeight": 300,
        "lineHeight": "28px"
      },
      "font650": {
        "fontFamily": "\"Oswald\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontSize": "22px",
        "fontWeight": 300,
        "lineHeight": "32px"
      },
      "font750": {
        "fontFamily": "\"Oswald\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontSize": "24px",
        "fontWeight": 300,
        "lineHeight": "36px"
      },
      "font850": {
        "fontFamily": "\"Oswald\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontSize": "32px",
        "fontWeight": 300,
        "lineHeight": "40px"
      },
      "font950": {
        "fontFamily": "\"Oswald\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontSize": "36px",
        "fontWeight": 300,
        "lineHeight": "44px"
      },
      "font1050": {
        "fontFamily": "\"Oswald\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontSize": "40px",
        "fontWeight": 300,
        "lineHeight": "52px"
      },
      "font1150": {
        "fontFamily": "\"Oswald\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontSize": "36px",
        "fontWeight": 300,
        "lineHeight": "44px"
      },
      "font1250": {
        "fontFamily": "\"Oswald\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontSize": "44px",
        "fontWeight": 300,
        "lineHeight": "52px"
      },
      "font1350": {
        "fontFamily": "\"Oswald\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontSize": "52px",
        "fontWeight": 300,
        "lineHeight": "64px"
      },
      "font1450": {
        "fontFamily": "\"Oswald\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontSize": "96px",
        "fontWeight": 300,
        "lineHeight": "112px"
      }
    },
  },
);

const themes = {
  LightTheme: {
    ...LightTheme,
    ...ResponsiveTheme,
  },
  LightThemeMove: {
    ...LightThemeMove,
    ...ResponsiveTheme,
  },
  DarkTheme: {
    ...DarkTheme,
    ...ResponsiveTheme,
  },
  DarkThemeMove: {
    ...DarkThemeMove,
    ...ResponsiveTheme,
  },
};

// type AppThemeT = ThemeT & { media: $ObjMap<BreakpointsT, <V>(V) => string> };

export const themedStyled = createThemedStyled();
export const themedWithStyle = createThemedWithStyle();
export const themedUseStyletron = createThemedUseStyletron();

const DARK_MEDIA_QUERY = '(prefers-color-scheme: dark)';
const LIGHT_MEDIA_QUERY = '(prefers-color-scheme: light)';

const blockProps = {
  backgroundColor: 'background',
  maxWidth: '100vw',
  overflow: 'hidden',
};

export default class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.LightTheme,
      direction: 'ltr',
    };
    // $FlowFixMe
    this.mediaQueryListener = this.mediaQueryListener.bind(this);
  }

  static async getInitialProps({
    Component,
    ctx,
  }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { path: ctx.asPath, pageProps };
  }

  componentDidMount() {
    // Router.onRouteChangeComplete = url => {
    //   trackPageView(url.split('?')[0]);
    // };
    if (window.matchMedia) {
      const mmDark = window.matchMedia(DARK_MEDIA_QUERY);
      const mmLight = window.matchMedia(LIGHT_MEDIA_QUERY);
      // if no theme is set in localStorage, set theme based on user's OS preference
      if (!this.getThemeStyle() && mmDark.media === DARK_MEDIA_QUERY) {
        const theme = mmDark.matches ? 'dark' : 'light';
        localStorage.setItem('docs-theme', theme);
      }
      mmDark.addListener(this.mediaQueryListener);
      mmLight.addListener(this.mediaQueryListener);
    }
    this.setTheme();
  }

  componentWillUnmount() {
    if (window.matchMedia) {
      const mmDark = window.matchMedia(DARK_MEDIA_QUERY);
      const mmLight = window.matchMedia(LIGHT_MEDIA_QUERY);
      mmDark.removeListener(this.mediaQueryListener);
      mmLight.removeListener(this.mediaQueryListener);
    }
  }

  mediaQueryListener(e) {
    if (e && e.matches) {
      if (e.media === DARK_MEDIA_QUERY) {
        this.setThemeStyle('dark');
      } else if (e.media === LIGHT_MEDIA_QUERY) {
        this.setThemeStyle('light');
      }
      this.setTheme();
    }
  }

  setTheme() {
    const search = window.location.search;
    const ls = window.localStorage;

    const config = {
      font: 'move',
      theme: 'light',
    };

    const presetFont = ls.getItem('docs-font');
    const presetTheme = ls.getItem('docs-theme');

    let fontToSet;
    let themeToSet;

    if (search.includes('font=move')) {
      fontToSet = 'move';
      ls.setItem('docs-font', fontToSet);
    }

    if (search.includes('font=system')) {
      fontToSet = 'system';
      ls.setItem('docs-font', fontToSet);
    }

    if (search.includes('theme=dark')) {
      themeToSet = 'dark';
      ls.setItem('docs-theme', themeToSet);
    }

    if (search.includes('theme=light')) {
      themeToSet = 'light';
      ls.setItem('docs-theme', themeToSet);
    }

    config.font = fontToSet || presetFont || config.font;
    config.theme = themeToSet || presetTheme || config.theme;

    const themeName =
      config.theme === 'dark'
        ? config.font === 'move'
          ? 'DarkThemeMove'
          : 'DarkTheme'
        : config.font === 'move'
          ? 'LightThemeMove'
          : 'LightTheme';

    this.setState({
      theme: themes[themeName],
    });
  }

  getThemeStyle() {
    return localStorage.getItem('docs-theme');
  }

  setThemeStyle(theme) {
    localStorage.setItem('docs-theme', theme);
  }

  toggleTheme() {
    const theme = this.getThemeStyle();

    if (theme === 'dark') {
      this.setThemeStyle('light');
    } else {
      this.setThemeStyle('dark');
    }

    this.setTheme();
  }

  toggleDirection() {
    if (this.state.direction === 'rtl') {
      this.setState({
        direction: 'ltr',
        theme: { ...this.state.theme, direction: 'ltr' },
      });
      if (document.body) {
        document.body.dir = 'ltr';
      }
    } else {
      this.setState({
        direction: 'rtl',
        theme: { ...this.state.theme, direction: 'rtl' },
      });
      if (document.body) {
        document.body.dir = 'rtl';
      }
    }
  }

  render() {
    const { Component, pageProps, path } = this.props;
    return (
      <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
        <BaseProvider theme={this.state.theme}>
          <Block {...blockProps}>
            <DirectionContext.Provider value={this.state.direction}>
              <Component
                {...pageProps}
                path={path}
                toggleTheme={this.toggleTheme.bind(this)}
                toggleDirection={this.toggleDirection.bind(this)}
              />
            </DirectionContext.Provider>
          </Block>
        </BaseProvider>
      </StyletronProvider>
    );
  }
}
