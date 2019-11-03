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
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { StyledLink as Link } from 'baseui/link';
import { Card, StyledBody } from 'baseui/card';
import { Tag } from 'baseui/tag';
import fetch from 'isomorphic-fetch';

const BlogPosts = [{ path: 'http://www.google.com', title: 'google' }]
import Layout from '../components/Layout/public';
import { H3, Paragraph2 } from 'baseui/typography';



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


const Index = (props) => (
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
        <Button overrides={{
          BaseButton: {
            style: ({ $theme }) => ({
              marginTop: $theme.sizing.scale600,
            }),
          },
        }} kind={KIND.secondary} onClick={() => alert("click")}>Get Started</Button>
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
);

// async function fetchContributorsByPage(page = 1) {
//   const res = await fetch(
//     `https://api.github.com/repos/uber/baseweb/contributors?access_token=${process
//       .env.GITHUB_AUTH_TOKEN || ''}&page=${page}`,
//   );
//   return res.json();
// }

Index.getInitialProps = async () => {
  // let contributors = [];
  // let page = 1;
  // while (page !== -1) {
  //   const res = await fetchContributorsByPage(page);
  //   contributors = contributors.concat(res);
  //   if (res.length) {
  //     page += 1;
  //   } else {
  //     page = -1;
  //   }
  // }

  // if (Array.isArray(contributors)) {
  //   return {contributors};
  // }
  return { contributors: [] };
};

export default Index;
