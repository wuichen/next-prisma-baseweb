/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
//@flow
import * as React from 'react';
import { default as SearchIcon } from 'baseui/icon/search';
import { themedStyled } from '../pages/_app';
//$FlowFixMe
// import { trackEvent } from '../helpers/ga';

const SEARCH_INPUT_ID = 'algolia-doc-search';

const PlainInput = themedStyled(
  'input',
  ({ $inputVisible, $theme }) =>
    ({
      display: $inputVisible ? 'block' : 'none',
      borderWidth: '2px',
      borderColor: $theme.colors.inputEnhancerFill,
      borderStyle: 'solid',
      paddingLeft: $theme.direction === 'rtl' ? '9px' : '42px',
      paddingRight: $theme.direction === 'rtl' ? '42px' : '9px',
      backgroundColor: 'transparent',
      paddingTop: '9px',
      paddingBottom: '9px',
      fontSize: '14px',
      width: $inputVisible ? '62vw' : '250px',
      lineHeight: '20px',
      outline: 'none',
      '-webkit-appearance': 'none',
      ':focus': {
        borderColor: $theme.colors.primary,
      },
      [$theme.media.small]: {
        position: 'static',
        display: 'block',
        width: '250px',
      },
    })
);

const SearchContainer = themedStyled(
  'div',
  ({ $theme }) =>
    ({
      display: 'flex',
      alignItems: 'center',
      backgroundColor: $theme.colors.inputEnhancerFill,
      position: 'relative',
    })
);

const IconWrapper = themedStyled(
  'div',
  ({ $inputVisible, $theme }) => ({
    position: 'absolute',
    [$theme.direction === 'rtl' ? 'right' : 'left']: $inputVisible
      ? '12px'
      : '-33px',
    marginTop: $inputVisible ? '4px' : 0,
    height: '32px',
    cursor: 'pointer',
    [$theme.media.small]: {
      [$theme.direction === 'rtl' ? 'right' : 'left']: '12px',
      marginTop: '4px',
      cursor: 'inherit',
    },
  }),
);

class DocSearch extends React.Component {
  state = {
    enabled: true,
  };
  componentDidMount() {
    // eslint-disable-next-line
  }

  render() {
    const { enabled } = this.state;
    const { searchInputOpen, toggleSearchInput } = this.props;

    return enabled ? (
      <React.Fragment>
        <style>{`.ds-dropdown-menu { margin-top: 12px !important }`}</style>
        <SearchContainer>
          <IconWrapper
            $inputVisible={searchInputOpen}
            role="button"
            onClick={toggleSearchInput}
          >
            <SearchIcon
              overrides={{
                Svg: {
                  style: ({ $theme }) => ({
                    height: searchInputOpen ? '22px' : '32px',
                    width: searchInputOpen ? '22px' : '32px',
                    fill: searchInputOpen ? '#666' : '#333',
                    // [$theme.media.small]: {
                    //   height: '22px',
                    //   width: '22px',
                    //   fill: '#666',
                    // },
                  }),
                },
              }}
              color={searchInputOpen ? '#333' : '#666'}
            />
          </IconWrapper>
          <PlainInput
            $inputVisible={searchInputOpen}
            id={SEARCH_INPUT_ID}
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={e => console.log(e.target.value)}
          />
        </SearchContainer>
      </React.Fragment>
    ) : null;
  }
}

export default DocSearch;
