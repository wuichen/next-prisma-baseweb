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
import Footer from '../Footer';
import DirectionContext from '../direction-context';
import Help from '../help';

import MobileDetect from "mobile-detect";

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
    const updateChildrenWithProps = React.Children.map(
      this.props.children,
      (child, i) => {
        return React.cloneElement(child, {
          //this properties are available as a props in child components
          deviceType: this.props.deviceType,
        });
      }
    );

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
            {updateChildrenWithProps}
            <Footer />
            <Help />
          </React.Fragment>
        )}
      </DirectionContext.Consumer>
    );
  }
}


Layout.getInitialProps = (req) => {
  let userAgent;
  let deviceType;
  if (req) {
    userAgent = req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  const md = new MobileDetect(userAgent);
  if (md.tablet()) {
    deviceType = "tablet";
  } else if (md.mobile()) {
    deviceType = "mobile";
  } else {
    deviceType = "desktop";
  }
  return { deviceType };
};


export default Layout;
