import React from "react";
import { createGlobalStyle } from "styled-components";

import { color_primary_dark, color_grey_1 } from "../atoms/variables";

import font_bold from "../font/strat-bold.ttf";
import font_heavy from "../font/strat-heavy.ttf";
import font_light from "../font/strat-light.ttf";
import font_medium from "../font/strat-medium.ttf";
import font_regular from "../font/strat-regular.ttf";
import font_thin from "../font/strat-thin.ttf";

import { media } from "../utilities/mediaQueriesBuilder";

const App = () => {
  return (
    <>
      <GlobalStyle />
    </>
  );
};

export default App;

// applies a global reset and global styles
const GlobalStyle = createGlobalStyle`
	@font-face {
	    font-family: "Stratum";
	    src: url('${font_bold}');
	    font-weight: 500;
	}

	@font-face {
	    font-family: "Stratum";
	    src: url('${font_heavy}');
	    font-weight: 600;
	}

	@font-face {
	    font-family: "Stratum";
	    src: url('${font_light}');
	    font-weight: 200;
	}

	@font-face {
	    font-family: "Stratum";
	    src: url('${font_medium}');
	    font-weight: 400;
	}

	@font-face {
	    font-family: "Stratum";
	    src: url('${font_regular}');
	    font-weight: 300;
	}

	@font-face {
	    font-family: "Stratum";
	    src: url('${font_thin}');
	    font-weight: 100;
	}

	*,
	*::before,
	*::after{
		margin: 0;
		padding: 0;
		box-sizing: inherit;
		font-weight: inherit;
	}

	::selection{
		background-color: ${color_primary_dark};
		color: #fff;
	}

	html{
		font-size: 62.5%;
		color: ${color_grey_1};
		box-sizing: border-box;
		font-family: "Stratum", "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
		font-weight: 300;
		line-height: 1;

		${media.sizeI`
			font-size: 57%;
		`}

		${media.sizeII`
			font-size: 50.5%;
		`}
	}

	body{
		min-width: 320px;
	}
}`;
