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
import Router from 'next/router'


const cardOverrides = {
  Root: {
    style: ({ $theme }) => ({
      marginLeft: $theme.sizing.scale600,
      marginRight: $theme.sizing.scale600,
      marginTop: $theme.sizing.scale500,
      width: '300px',
    }),
  },
};


const Index = (props) => {
  const [useCss, theme] = useStyletron();
  const space = useCss({ marginLeft: theme.sizing.scale300 });

  return (
    <Layout
      toggleDirection={props.toggleDirection}
      toggleTheme={props.toggleTheme}
    >
      <Block overrides={{
        Block: {
          style: ({ $theme }) => ({
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            width: '100%',
            paddingBottom: $theme.sizing.scale3200,
            background: $theme.colors.mono200
          }),
        },
      }}>
        <Block overrides={{
          Block: {
            style: ({ $theme }) => ({
              padding: $theme.sizing.scale1200,
            }),
          },
        }}>
          <H3>Create your reward collection</H3>
          <Paragraph2>Select photos and products to create collections and start earning rewards!</Paragraph2>
          <Block overrides={{
            Block: {
              style: ({ $theme }) => ({
                marginTop: $theme.sizing.scale600,
              }),
            },
          }}>
            <Button marginRight='10px' kind={KIND.secondary} onClick={() => Router.push("/create")}>Get Started</Button>
            <span className={space} />
            <Button kind={KIND.primary} onClick={() => alert("click")}>Open Dashboard</Button>
          </Block>

        </Block>
        <Block>
          <Block overrides={{
            Block: {
              style: ({ $theme }) => ({
                width: '300px',
                marginTop: $theme.sizing.scale1200,
                [$theme.media.medium]: {
                  marginTop: $theme.sizing.scale3200
                }
              }),
            },
          }} as='img' src={require('../images/undraw/undraw_online_shopping_ga73.svg')} />
        </Block>
      </Block>


    </Layout>
  )
};


export default Index;
