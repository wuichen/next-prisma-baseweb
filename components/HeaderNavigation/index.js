/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Block } from 'baseui/block';
import {
  HeaderNavigation,
  StyledNavigationList,
  StyledNavigationItem,
  ALIGN,
} from 'baseui/header-navigation';
import { themedStyled } from '../../pages/_app';
import Menu from 'baseui/icon/menu';
import { ThemeContext } from 'baseui/styles/theme-provider.js';
import { StatefulTooltip } from 'baseui/tooltip';
import { Button, KIND, SIZE } from 'baseui/button';
import ChevronDown from 'baseui/icon/chevron-down';
import { StatefulPopover, PLACEMENT as PopoverPlacement } from 'baseui/popover';
import { StatefulMenu, NestedMenus } from 'baseui/menu';
import { H2, Paragraph4, H5 } from 'baseui/typography';
import { Drawer } from 'baseui/drawer';
import Headroom from "react-headroom";



import { StyledLink } from "baseui/link";

const Hamburger = themedStyled('div', ({ $theme }) => ({
  display: 'block',
  userSelect: 'none',
  height: '32px',
  paddingLeft: $theme.sizing.scale600,
  cursor: 'pointer',
  [$theme.media.medium]: {
    display: 'none',
  },
}));


const Navigation = ({ toggleSidebar, toggleTheme, toggleDirection }) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Headroom>
          <HeaderNavigation
            className='headerNavigation'
            overrides={{
              Root: {
                style: ({ $theme }) => ({
                  border: 'none',
                  background: $theme.colors.mono200,
                  padding: theme.sizing.scale600,
                  display: 'flex',
                  justifyContent: 'space-between',
                  [$theme.media.medium]: {
                    padding: theme.sizing.scale1200
                  }
                }),
              },
            }}
          >
            <StyledNavigationList $align={ALIGN.left}>
              <StyledNavigationItem>
                <Link href="/">
                  <StyledLink href="/">
                    <H5 margin={0}>Mercy</H5>
                  </StyledLink>
                </Link>
              </StyledNavigationItem>
            </StyledNavigationList>


            <StyledNavigationList $align={ALIGN.right}>
              <Block overrides={{
                Block: {
                  style: ({ $theme }) => ({
                    display: 'none',
                    [$theme.media.medium]: {
                      display: 'flex'
                    }
                  }),
                },
              }}>
                <StyledNavigationItem>
                  <Link href="/">
                    <StyledLink href="/">
                      Products
                    </StyledLink>
                  </Link>
                </StyledNavigationItem>
                <StyledNavigationItem>
                  <Link href="/">
                    <StyledLink href="/">
                      Templates
                </StyledLink>
                  </Link>
                </StyledNavigationItem>
                <StyledNavigationItem>
                  <Link href="/">
                    <StyledLink href="/">
                      Plans
                </StyledLink>
                  </Link>
                </StyledNavigationItem>

                <StyledNavigationItem>
                  <Link href="/">
                    <StyledLink href="/">
                      Login
                </StyledLink>
                  </Link>
                </StyledNavigationItem>
              </Block>
              <Block>
                <Hamburger role="button" onClick={() => { setIsDrawerOpen(true) }}>
                  <Menu size={32} />
                </Hamburger>
              </Block>

            </StyledNavigationList>
            <Drawer
              isOpen={isDrawerOpen}
              autoFocus
              onClose={() => setIsDrawerOpen(false)}
            >
              <div>drawer content</div>
            </Drawer>
          </HeaderNavigation>
        </Headroom>
      )}
    </ThemeContext.Consumer >
  );
};
export default Navigation;
