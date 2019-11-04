import * as React from 'react';
import { Block } from 'baseui/block';
import { Button, KIND } from "baseui/button";
import { StyledLink as Link } from 'baseui/link';
import { Tag } from 'baseui/tag';
import fetch from 'isomorphic-fetch';
import { H3, Paragraph2 } from 'baseui/typography';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import Fade from 'react-reveal/Fade';
import { useStyletron } from 'baseui';

import Basic from './basic'

// const HighlightedText = ({ discount, label }) => {
//   const [useCss, theme] = useStyletron();
//   return (
//     <p className={useCss({
//       display: 'flex',
//       alignItems: 'center',
//       maxWidth: '320px',
//       width: '100%',
//       minHeight: '28px',
//       borderRadius: '80px',
//       padding: '3px 28px 3px 4px',
//       backgroundColor: '#eff0f0',
//     })}>
//       <strong className={useCss({
//         display: 'inline-flex',
//         alignItems: 'center',
//         minWidth: '51px',
//         minHeight: '20px',
//         padding: '3px 11px',
//         borderRadius: '30px',
//         fontSize: '10px',
//         textTransform: 'uppercase',
//         color: theme.colors.mono100,
//         backgroundColor: theme.colors.colorSecondary,
//         marginRight: '10px'
//       })}>{discount}</strong> {label}
//     </p>
//   );
// }

const Index = (props) => {
  return (
    <Block>
      <Basic deviceType={props.deviceType} />
    </Block>
  )
};

export default Index;
