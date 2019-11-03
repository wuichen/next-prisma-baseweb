/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React from 'react';
import { Block } from 'baseui/block';
import Link from 'next/link';
import { themedStyled } from '../pages/_app';


const StyledFooter = themedStyled(
  'footer',
  ({ $theme: { typography, sizing, colors, name } }) => ({
    ...typography.font300,
    position: 'sticky',
    bottom: 0,
    color: colors.foreground,
    backgroundColor: name.startsWith('light-theme')
      ? colors.mono200
      : colors.headerNavigationFill,
    width: '100%',
    marginTop: sizing.scale1400,
    paddingTop: sizing.scale1600,
    paddingBottom: sizing.scale1600,
    textAlign: 'center',
  }),
);

const StyledLink = themedStyled('a', ({ $theme }) => ({
  textDecoration: 'none',
  color: $theme.colors.foreground,
  display: 'inline-block',
  cursor: 'pointer',
  marginLeft: '32px',
  ':first-child': {
    marginLeft: '0',
  },
  ':hover': {
    color: $theme.colors.primary,
    textDecoration: 'none',
  },
}));

export default () => (
  <StyledFooter>
    <Block paddingBottom="scale1000">
      <StyledLink href="https://github.com/uber/baseweb" target="_blank">
        GitHub
      </StyledLink>
      <StyledLink href="https://twitter.com/BaseWebReact" target="_blank">
        Twitter
      </StyledLink>
      <StyledLink
        href="https://join.slack.com/t/baseui/shared_invite/enQtNDI0NTgwMjU0NDUyLTk3YzM1NWY2MjY3NTVjNjk3NzY1MTE5OTI4Y2Q2ZmVkMTUyNDc1MTcwYjZhYjlhOWQ2M2NjOWJkZmQyNjFlYTA"
        target="_blank"
      >
        Slack Chat room
      </StyledLink>
      <StyledLink
        href="https://github.com/uber/baseweb/releases"
        target="_blank"
      >
        Changelog
      </StyledLink>
      <Link href="/blog">
        <StyledLink href="/blog">Blog</StyledLink>
      </Link>
    </Block>
  </StyledFooter>
);
