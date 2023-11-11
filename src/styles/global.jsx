/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "./colors";
import ImageContent from '../assets/VETERINARIA.png';

export const reset = css`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playpen+Sans:wght@100;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;1,100;1,200;1,300&display=swap');
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  figure,
  blockquote,
  dl,
  ul,
  li,
  dd,
  hr {
    margin: 0;
  }
  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }
  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }
  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    /* line-height: 1.5; */
  }
  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }
  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }
  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export const global = css`
  body {
    display: flex;
    flex-wrap: wrap;
    background-color: #3bb5fc;
    font-size: 1rem;
    font-family: 'Playpen Sans','Montserrat';
    color: ${colors.gray.dark};
    font-weight: 400;
    background-image: url(${ImageContent});
    background-repeat: repeat;
    background-position: center center;
    background-attachment: fixed;
    background-size: contain;
    word-wrap: break-word;
    min-height: 100vh;
  }
  #root {
    height: 100vh;
    width: 100%;
  }
`;