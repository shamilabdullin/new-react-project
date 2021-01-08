import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobaStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

ul,
ol {
  padding: 0;
}

ul {
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: Arial, Helvetica, sans-serif;
  color: #e0e0e0;
  background-color: ${theme.colors.backgroundGrey};
}

ul,
ol {
  list-style: none;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img {
  max-width: 100%;
  display: block;
}

article > * + * {
  margin-top: 1em;
}

input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;
