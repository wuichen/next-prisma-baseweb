import React, { Fragment, useState, useEffect } from 'react';
import { Block } from 'baseui/block';
import { Button, KIND } from "baseui/button";
import Link from 'next/link'
import { StyledLink } from 'baseui/link';
import { Tag } from 'baseui/tag';
import fetch from 'isomorphic-fetch';
import { H1, Paragraph2, H4 } from 'baseui/typography';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import Fade from 'react-reveal/Fade';
import { useStyletron } from 'baseui';
import { Input } from "baseui/input";
import classNames from 'classnames';
import ArrowRight from 'baseui/icon/arrow-right';
import ArrowLeft from 'baseui/icon/arrow-left';
import Carousel from "react-multi-carousel";

const Index = (props) => {
  const [useCss, theme] = useStyletron();
  const space = useCss({ marginLeft: theme.sizing.scale500 });
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  const slides = [{ src: '../../images/mercy_logo.png' }]

  const customDotStyle = `.carousel-with-custom-dots {
    margin-top: 100px;
    padding-bottom: 100px;
  }
  .custom-dot {
    border: none;
    margin: 10px;
    outline: none;
  }
  .custom-dot--active {
    transform: scale(1.3);
    outline: auto;
  }`
  const CustomDot = ({
    index,
    onClick,
    active
  }) => {
    return (
      <>
        <style>{customDotStyle}</style>
        <Button
          onClick={e => {
            onClick();
            e.preventDefault();
          }}
          className={classNames("custom-dot", {
            "custom-dot--active": active
          })}
        >
          {React.Children.toArray(slides.map((slide) => slide.src))[index]}
        </Button>
      </>
    );
  };
  return (
    <FlexGrid
      flexGridColumnCount={[1, 2]}
      flexGridColumnGap="scale800"
      flexGridRowGap="scale800"
    >
      <FlexGridItem>

        <Fade bottom delay={30}>
          <Block padding='scale1600'>
            <H1>Start with the basic</H1>
            <Paragraph2>
              Select a starting point from our carefully crafted templates,
              and choose a name for your collection. Dont worry, everything can still be modified.
            </Paragraph2>
            <Block marginTop='scale1200'>
              <Input
                value=''
                onChange={e => console.log(e.target.value)}
                placeholder="Collection name"
              />
            </Block>
            <Block marginTop='scale1200'>
              <Button>Next</Button>
              <span className={space} />
              <Link href='/templates'>
                <StyledLink href='/templates'>
                  Explore more templates
                </StyledLink>
              </Link>
            </Block>
          </Block>
        </Fade>

      </FlexGridItem>

      <FlexGridItem>
        <Carousel
          showDots
          deviceType={props.deviceType}
          ssr
          slidesToSlide={1}
          containerClass="carousel-with-custom-dots"
          responsive={responsive}
          partialVisible
          infinite
          customDot={<CustomDot />}
        >
          {slides.map((slide) => {
            return (
              <Block as='img' src={require(slide.src)} />
            )
          })}
        </Carousel>
      </FlexGridItem>
    </FlexGrid >
  )
};

export default Index;
