/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import * as React from 'react';
import { useStyletron } from 'baseui';
// import Highlight, { defaultProps } from 'prism-react-renderer';
//$FlowFixMe
// import lightTheme from './yard/light-theme';
//$FlowFixMe
// import darkTheme from './yard/dark-theme';
//$FlowFixMe
// import CodeBox from './yard/code-box';

// type PropsT = {
//   children: string,
//   language: string,
// };

const Code = ({ children, language }) => {
  const [, theme] = useStyletron();
  return (

    <>code</>
  );
};

Code.defaultProps = {
  language: 'jsx',
};

export default Code;
