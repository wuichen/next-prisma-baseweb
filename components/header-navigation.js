/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';
import Link from 'next/link';
import { Block } from 'baseui/block';
import {
  HeaderNavigation,
  StyledNavigationList as NavigationList,
  ALIGN,
} from 'baseui/header-navigation';
import { themedStyled } from '../pages/_app';
import Menu from 'baseui/icon/menu';
import Logo from '../images/mercy_logo.png';
import LogoWhite from '../images/mercy_logo.png';
import GithubLogo from './github-logo';
import SlackLogo from './slack-logo';
import AlignLeftIcon from './align-left-icon';
import AlignRightIcon from './align-right-icon';
// import VersionSelector from './version-selector.js';
import Search from './search';
import { ThemeContext } from 'baseui/styles/theme-provider.js';
import Bulb from './bulb';
import { StatefulTooltip } from 'baseui/tooltip';
import { Button, KIND, SIZE } from 'baseui/button';
import ChevronDown from 'baseui/icon/chevron-down';
import { StatefulPopover, PLACEMENT as PopoverPlacement } from 'baseui/popover';
import { StatefulMenu, NestedMenus } from 'baseui/menu';
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

const LogoSegment = themedStyled(
  'div',
  ({ $searchInputOpen, $theme }) => ({
    display: $searchInputOpen ? 'none' : 'flex',
    justifySelf: 'flex-start',
    justifyContent: 'flex-start',
    flex: 'none',
    [$theme.media.small]: {
      display: 'flex',
    },
  }),
);

// type PropsT = {
//   toggleSidebar: () => void,
//   toggleTheme: () => void,
//   toggleDirection: () => void,
// };

const ExtraMenu = ({ items }) => {
  return (
    <StatefulPopover
      placement={PopoverPlacement.bottomLeft}
      dismissOnClickOutside={false}
      content={({ close }) => {
        return (
          <StatefulMenu
            items={items}
            onItemSelect={({ item }) => {
              if (item.link) {
                window.open(item.link);
              } else if (item.action) {
                item.action()
              }
              close();
            }}
            overrides={{
              List: {
                style: {
                  width: '100px',
                },
              },
              Option: {
                props: {
                  size: 'compact'
                },
              },
            }}
          />
        )
      }}
    >
      <Button
        size="compact"
        kind={KIND.minimal}
        endEnhancer={() => <ChevronDown size={20} />}
      >
        Extra
      </Button>
    </StatefulPopover>
  );
};


const Navigation = ({ toggleSidebar, toggleTheme, toggleDirection }) => {
  const [searchInputOpen, setSearchInputOpen] = React.useState(false);
  return (
    <ThemeContext.Consumer>
      {theme => (
        <HeaderNavigation
          overrides={{
            Root: {
              style: ({ $theme }) => ({
                justifyContent: 'space-between',
                paddingLeft: $theme.sizing.scale800,
                paddingRight: $theme.sizing.scale800,
                paddingTop: $theme.sizing.scale600,
                paddingBottom: $theme.sizing.scale600,
                boxShadow: 'none',
                border: 'none'
              }),
            },
          }}
        >
          <LogoSegment $searchInputOpen={searchInputOpen}>
            <Block display="flex" alignItems="center">
              <Link href="/">
                <Block
                  as="img"
                  height="40px"
                  src={theme.name.startsWith('dark') ? LogoWhite : Logo}
                  overrides={{ Block: { style: { cursor: 'pointer' } } }}
                />
              </Link>
              <Block marginLeft="scale300">
                {/*<VersionSelector />*/}
                <Link href="/blog/base-web-v9">
                  <Button
                    size={SIZE.compact}
                    kind={KIND.minimal}
                    $as="a"
                    href="/blog/base-web-v9"
                    overrides={{
                      BaseButton: {
                        style: {
                          display: 'none',
                          '@media screen and (min-width: 820px)': {
                            display: 'inline-block',
                          },
                        },
                      },
                    }}
                  >
                    {"What's new in v9?"}
                  </Button>
                </Link>
              </Block>
              <Block>
                <Link href="/components">
                  <Button
                    size={SIZE.compact}
                    kind={KIND.minimal}
                    overrides={{
                      BaseButton: {
                        style: {
                          display: 'none',
                          '@media screen and (min-width: 820px)': {
                            display: 'inline-block',
                          },
                        },
                      },
                    }}
                  >
                    Components
                  </Button>
                </Link>
              </Block>
            </Block>
          </LogoSegment>

          <NavigationList $align={ALIGN.right}>
            <Block display="flex" alignItems="center">
              <Search
                searchInputOpen={searchInputOpen}
                toggleSearchInput={() => setSearchInputOpen(!searchInputOpen)}
              />
              <ExtraMenu items={[{
                link: 'http://www.google.com',
                label: <SlackLogo size={24} color={theme.colors.foreground} />
              },
              {
                label: <GithubLogo size={24} color={theme.colors.foreground} />,
                link: 'http://www.github.com'
              }, {
                label: theme.direction === 'rtl' ? (
                  <AlignLeftIcon size={24} color={theme.colors.foreground} />
                ) : (
                    <AlignRightIcon size={24} color={theme.colors.foreground} />
                  ),
                action: toggleDirection
              }, {
                label: <Bulb size={24} color={theme.colors.foreground} />,
                action: toggleTheme
              }]} />
              <Hamburger role="button" onClick={toggleSidebar}>
                <Menu size={32} color={theme.colors.foregroundAlt} />
              </Hamburger>
            </Block>
          </NavigationList>
        </HeaderNavigation>
      )
      }
    </ThemeContext.Consumer >
  );
};
export default Navigation;
