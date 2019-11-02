/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable flowtype/require-valid-file-annotation */

import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { Provider as StyletronProvider } from 'styletron-react';

import Favicons from '../components/meta-favicons';
import { styletron } from '../helpers/styletron';
// import { GA_ID } from '../helpers/ga';

export default class MyDocument extends Document {
  static getInitialProps(props) {
    const page = props.renderPage(App => props => (
      <StyletronProvider value={styletron}>
        <App {...props} />
      </StyletronProvider>
    ));
    const stylesheets = styletron.getStylesheets() || [];
    // eslint-disable-next-line cup/no-undef
    const isProduction = process.env.NODE_ENV === 'production';
    return { ...page, stylesheets, isProduction };
  }

  // setGoogleTags() {
  //   return {
  //     __html: `
  //       window.dataLayer = window.dataLayer || [];
  //       function gtag(){dataLayer.push(arguments);}
  //       gtag('js', new Date());
  //       gtag('config', '${GA_ID}');
  //     `,
  //   };
  // }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {this.props.stylesheets.map((sheet, i) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs['data-hydrate']}
              key={i}
            />
          ))}

          <link rel="stylesheet" href="/static/fonts.css" />
          <style>{`
            body {
              margin: 0;
            }
          `}</style>
          <Favicons />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/*this.props.isProduction && (
            <React.Fragment>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              />
              <script dangerouslySetInnerHTML={this.setGoogleTags()} />
            </React.Fragment>
          )*/}
        </body>
      </html>
    );
  }
}
