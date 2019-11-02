/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/* eslint-disable flowtype/require-valid-file-annotation */

import * as React from 'react';

import {H3, Paragraph, UnorderedList, ListItem} from './markdown-elements';
import Code from './code';

const Exports = props => {
  const {component, path, title} = props;

  const exportNames = Object.keys(component);
  const code = `import {${exportNames[0]}} from '${path}'`;
  return (
    <React.Fragment>
      <H3>{title}</H3>
      <Paragraph>You can import this module like so:</Paragraph>
      <Code>{code}</Code>
      <Paragraph>
        It exports the following components or utility functions:
      </Paragraph>
      <UnorderedList>
        {exportNames.map(name => (
          <ListItem key={name}>{name}</ListItem>
        ))}
      </UnorderedList>
    </React.Fragment>
  );
};

export default Exports;
