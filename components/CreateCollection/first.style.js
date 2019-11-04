import { keyframes } from 'styled-components';
import { styled } from 'baseui';


const shake = keyframes`
  0% {
    transform: translateX(0),
    opacity: 0
  }
  50% {
    transform: translateX(7px)
  }
  100% {
    transform: translateX(0),
    opacity: 1;
  }
`;

const BannerWrapper = styled('div', ({ $theme }) => ({
  paddingTop: '30px',
  marginBottom: '81px',
  backgroundColor: $theme.colors.primary,
  '@media (max-width: 1440px)': {
    marginBottom: '60px',
  },
  '@media (max-width: 767px)': {
    padding: '135px 0 82px',
    marginBottom: '42px',
  }
}));


/* ------------------------------------ */
// style for circle loader
/* ------------------------------------ */
const rotate = keyframes`
	to {
		transform: rotate(360deg)
	}
`;

const grow = keyframes`
	50% {
		transform: scale(1)
	}
`;
export const CircleLoader = styled('div', ({ $theme }) => ({
  animation: '${rotate} 3s linear infinite',
  width: '50px',
  height: '50px',
  flexShrink: 0,
  transformOrigin: 'bottom center',

  '.circle': {
    animation: '${grow} 1.5s linear infinite',
    backgroundColor: $theme.colors.colorSecondary,
    borderRadius: '50%',
    display: 'inline-block',
    margin: '-9px',
    height: '40px',
    width: '40px',
    transform: 'scale(0)',

    '&:nth-of-type(2)': {
      animationDelay: '0.75s',
      backgroundColor: $theme.colors.mono100
    }
  },

  '&.alt': {
    '.circle': {
      '&:nth-of-type(2)': {
        backgroundColor: $theme.colors.colorPrimary
      }
    }
  }
}));



export const Container = styled('div', ({ $theme }) => ({
  width: '100%',
  maxWidth: '1580px',
  minHeight: '100vh',
  margin: '0 auto',
  padding: '0 20px',
  display: 'flex',
  alignItems: 'center',
  '@media (max-width: 1600px)': {
    padding: '0 81px',
  },
  '@media (max-width: 1360px)': {
    padding: '0 60px',
  },
  '@media (max-width: 991px)': {
    padding: '0 30px',
  },
  '@media (max-width: 767px)': {
    flexDirection: 'column',
  }
}));


export const ContentArea = styled('div', ({ $theme }) => ({
  width: '595px',
  paddingRight: '88px',
  '@media (max-width: 1600px)': {
    width: '560px',
  },
  '@media (max-width: 1360px)': {
    width: '40%',
  },
  '@media (max-width: 1200px)': {
    width: '45%',
  },
  '@media (max-width: 767px)': {
    width: '100%',
    paddingRight: '50px',
  },
  '@media (max-width: 480px)': {
    paddingRight: 0,
  },

  'p': {
    color: $theme.colors.mono500
  },

  'h1': {
    color: $theme.colors.mono500,

    marginBottom: '30px',
    '+ p': {
      margin: 0,
    }
  }
}));

export const HighlightedText = styled('p', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  maxWidth: '334px',
  width: '100%',
  minHeight: '28px',
  borderRadius: '80px',
  padding: '3px 28px 3px 4px',
  fontSize: '12px',
  lineHeight: '18px',
  fontWeight: 500,
  letterSpacing: 1,
  textTransform: 'uppercase',
  color: $theme.colors.mono500,
  backgroundColor: $theme.colors.colorPrimary,
  margin: '0 0 40px',
  '@media (max-width: 767px)': {
    margin: '0 0 30px',
    padding: '3px 4px',
  },

  'strong': {
    display: 'inline-flex',
    alignItems: 'center',
    minWidth: '51px',
    minHeight: '20px',
    padding: '3px 11px',
    borderRadius: '30px',
    fontSize: '14px',
    fontWeight: 700,
    letterSpacing: 0,
    color: $theme.colors.colorPrimary,
    backgroundColor: $theme.colors.colorSecondary,
    marginRight: '10px',
  }
}));


export const FormWrapper = styled('div', ({ $theme }) => ({
  marginTop: '45px',
  '@media (max-width: 767px)': {
    marginTop: '40px',
  },

  '.input_element': {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',

    input: {
      width: '100%',
      border: 0,
      fontSize: 16,
      padding: '20px 25px 20px 65px',
      borderRadius: 5,
      color: $theme.colors.mono500,
      backgroundColor: $theme.colors.colorPrimary,

      '&::placeholder': {
        color: $theme.colors.mono700
      }
    },

    '.input-icon': {
      position: 'absolute',
      left: '22px',

      i: {
        color: $theme.colors.mono700,
        svg: {
          width: 'auto',
          height: '24px',
        }
      }
    },

    '&::after': {
      content: '',
      width: '16px',
      height: '16px',
      position: 'absolute',
      top: 'calc(50% - 16px / 2)',
      right: '25px',
    },

    '&.invalid': {
      '&::after': {
        backgroundImage: "url('../../images/error.svg')"
      }
    },
    '&.valid': {
      '&::after': {
        backgroundImage: "url('../../images/success.svg')"
      }
    }
  }
}));


export const ButtonGroup = styled('div', ({ $theme }) => ({
  marginTop: 50,
  '@media (max-width: 767px)': {
    marginTop: 25,
    marginBottom: 54,
  }

  // .reusecore__button {
  //   fontSize: 14,
  //   fontWeight: 500,
  //   borderRadius: 5,
  //   &:first-child {
  //     marginRight: 20,
  //     &:hover {
  //       opacity: 0.95,
  //     }
  //   }

  //   &:hover {
  //     .btn-icon {
  //       animation: ${shake} 1s infinite;
  //     }
  //   }
  // }
}));

export const CarouselArea = styled('div', ({ $theme }) => ({
  width: 'calc(100% - 595px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '@media (max-width: 1600px)': {
    width: 'calc(100% - 560px)',
  },
  '@media (max-width: 1360px)': {
    width: '60%',
  },
  '@media (max-width: 1200px)': {
    width: '55%',
  },
  '@media (max-width: 767px)': {
    width: '100%',
  },

  '#interior_carousel': {
    '.glide__slide ': {
      '.item_wrapper': {
        display: 'block',
        height: '100vh',
        maxHeight: '540px',
        borderRadius: '20px',
        overflow: 'hidden',
        position: 'relative',
        '@media (max-width: 1440px)': {
          maxHeight: '460px',
        },
        '@media (max-width: 1200px)': {
          maxHeight: '420px',
        },
        '@media (max-width: 991px)': {
          maxHeight: '400px',
        },
        '@media (max-width: 767px)': {
          maxHeight: '380px',
        },

        '&::after': {
          content: '',
          display: 'block',
          width: '100%',
          height: '30%',
          background: 'linear-gradient(rgba(255, 255, 255, 0),rgba(0, 0, 0, 0.8))',
          position: 'absolute',
          bottom: 0,
          left: 0,
          transition: 'height 0.3s ease',
        },

        img: {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.3s ease',
        },

        h4: {
          width: '100%',
          position: 'absolute',
          bottom: 0,
          left: 0,
          margin: 0,
          padding: '25px 30px',
          color: $theme.colors.mono500,
          fontWeight: 600,
          zIndex: 1,
          transition: 'bottom 0.3s ease',

          '@media (max-width: 1440px)': {
            fontSize: 20,
          }
        }
      },

      '&:hover': {
        '.item_wrapper': {
          ' &::after': {
            height: '70%',
          },

          img: {
            transform: 'scale(1.1)',
          },

          h4: {
            color: $theme.colors.mono100,
            bottom: 10,
          }
        }
      }
    },

    '.glide__controls': {
      '> div': {
        '> span': {
          '&.next_arrow': {
            width: 45,
            backgroundColor: $theme.colors.colorSecondary,
            '@media (max-width: 667px)': {
              width: 30,
            },

            '&::before': {
              backgroundColor: $theme.colors.colorSecondary,
              transform: 'rotate(42deg)',
            },

            '&::after': {
              backgroundColor: $theme.colors.colorSecondary,
              transform: 'rotate(-42deg)',
            }
          }
        }
      }
    }
  }
}));

export default BannerWrapper;
