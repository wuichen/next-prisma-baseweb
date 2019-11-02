/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
/* global process */

import * as React from 'react';
import { Block } from 'baseui/block';
import { Button } from 'baseui/button';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { StyledLink as Link } from 'baseui/link';
import { Card, StyledBody } from 'baseui/card';
import { Tag } from 'baseui/tag';
import fetch from 'isomorphic-fetch';

const BlogPosts = [{ path: 'http://www.google.com', title: 'google' }]
import Layout from '../components/layout';
// import Contributors from '../components/contributors';


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

// const Adopters = (props) => (
//   <>
//     <H2>Who is using Base Web?</H2>
//     <Block>
//       <FlexGrid flexGridColumnCount={3} backgroundColor="mono100">
//         {props.logoSrcs.map((logoSrc, i) => (
//           <FlexGridItem
//             key={i}
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//           >
//             <Block width="125px" $as="img" src={logoSrc} />
//           </FlexGridItem>
//         ))}
//       </FlexGrid>
//       <Button
//         $as="a"
//         href="https://github.com/uber/baseweb/issues/1889"
//         size="compact"
//         kind="secondary"
//         overrides={{
//           BaseButton: {
//             style: ({ $theme }) => ({
//               marginTop: $theme.sizing.scale800,
//             }),
//           },
//         }}
//       >
//         Please let us know if you are using Base Web!
//       </Button>
//     </Block>
//   </>
// );

const Index = (props) => (
  <Layout
    toggleDirection={props.toggleDirection}
    toggleTheme={props.toggleTheme}
  >
    <Block
      marginTop={['scale100', 'scale400', 'scale800']}
      display="block"
      $as="a"
      href={BlogPosts[0].path}
      overrides={{
        Block: {
          style: {
            textDecoration: 'none',
          },
        },
      }}
    >
      <Tag kind="positive" closeable={false}>
        New
      </Tag>
      <Block color="foreground" display="inline-block" font="font250">
        {BlogPosts[0].title}
      </Block>
    </Block>

    <Block
      display="flex"
      marginLeft="-16px"
      marginRight="-16px"
      overrides={{
        Block: {
          style: ({ $theme }) => ({
            flexWrap: 'wrap',
            [$theme.media.small]: {
              flexWrap: 'nowrap',
            },
          }),
        },
      }}
    >
      <Card title="Setup Base Web" overrides={cardOverrides}>
        <StyledBody>
          Base Web is distributed as an npm package. As Base Web is built on top
          of a CSS-in-JS engine, all you need is the dependencies from npm.
        </StyledBody>
        <Button
          $as="a"
          href="/getting-started/setup"
          overrides={{
            BaseButton: {
              style: ({ $theme }) => ({
                boxSizing: 'border-box',
                width: '100%',
              }),
            },
          }}
        >
          Setup Base Web
        </Button>
      </Card>

      <Card title="Learning Base Web" overrides={cardOverrides}>
        <StyledBody>
          Probably the best way to learn Base Web is by start building an
          application using it. On this page, you’ll find a simple and a more
          complex app built using Base Web.
        </StyledBody>
        <Button
          $as="a"
          href="/getting-started/learn"
          overrides={{
            BaseButton: {
              style: ({ $theme }) => ({
                boxSizing: 'border-box',
                width: '100%',
              }),
            },
          }}
        >
          Learn more
        </Button>
      </Card>
    </Block>

    {/*<Adopters
      logoSrcs={[
        '/static/images/uber-logo.png',
        '/static/images/broadcom-logo.png',
        '/static/images/extensis-logo.png',
      ]}
    />
    <Contributors contributors={props.contributors} />*/}
  </Layout>
);

async function fetchContributorsByPage(page = 1) {
  const res = await fetch(
    `https://api.github.com/repos/uber/baseweb/contributors?access_token=${process
      .env.GITHUB_AUTH_TOKEN || ''}&page=${page}`,
  );
  return res.json();
}

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
