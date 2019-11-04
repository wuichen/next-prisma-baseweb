/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
/* global process */

import * as React from 'react';
import { Block } from 'baseui/block';
import { Button, KIND } from "baseui/button";
import { StyledLink as Link } from 'baseui/link';
import { Tag } from 'baseui/tag';
import fetch from 'isomorphic-fetch';
import Layout from '../components/Layout/public';
import { H3, Paragraph2 } from 'baseui/typography';
import { useStyletron } from 'baseui';
import CreateCollection from '../components/CreateCollection'

const Index = (props) => {
  return (
    <Layout
      toggleDirection={props.toggleDirection}
      toggleTheme={props.toggleTheme}
    >
      <CreateCollection deviceType={props.deviceType} />
    </Layout>
  )
};

export default Index;
