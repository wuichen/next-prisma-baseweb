/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';
import { Block } from 'baseui/block';
import { Button, KIND, SIZE } from 'baseui/button';
import { StatefulTooltip } from 'baseui/tooltip';
import { themedStyled } from '../../pages/_app';
import HeaderNavigation from '../HeaderNavigation';
import Footer from '../footer';
import DirectionContext from '../direction-context';
import Help from '../help';
import Survey from '../survey';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
    };
  }
  render() {
    const { sidebarOpen } = this.state;
    const { toggleTheme, toggleDirection, children } = this.props;

    return (
      <DirectionContext.Consumer>
        {direction => (
          <React.Fragment>
            <HeaderNavigation
              toggleSidebar={() =>
                this.setState(prevState => ({
                  sidebarOpen: !prevState.sidebarOpen,
                }))
              }
              toggleTheme={toggleTheme}
              toggleDirection={toggleDirection}
            />
            {this.props.children}
            <Footer />
            <Help />
            <Survey />
          </React.Fragment>
        )}
      </DirectionContext.Consumer>
    );
  }
}

export default Layout;
