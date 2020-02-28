import React from "react";

import { ReactComponent as PythonSvg } from "../images/skills/python.svg";
import { ReactComponent as JavaSvg } from "../images/skills/java.svg";
import { ReactComponent as JSSvg } from "../images/skills/javascript.svg";
import { ReactComponent as Html5Svg } from "../images/skills/html5.svg";
import { ReactComponent as Css3Svg } from "../images/skills/css3.svg";
import { ReactComponent as ReactSvg } from "../images/skills/react.svg";
import { ReactComponent as ReduxSvg } from "../images/skills/redux.svg";
import { ReactComponent as PhpSvg } from "../images/skills/php.svg";
import { ReactComponent as JquerySvg } from "../images/skills/jquery.svg";
import { ReactComponent as SassSvg } from "../images/skills/sass.svg";
import { ReactComponent as MySQLSvg } from "../images/skills/mysql.svg";
import { ReactComponent as MongoDBSvg } from "../images/skills/mongodb.svg";
import { ReactComponent as GitSvg } from "../images/skills/git.svg";
import { ReactComponent as NodeJSSvg } from "../images/skills/node-dot-js.svg";
import { ReactComponent as GimpSvg } from "../images/skills/gimp.svg";
import { ReactComponent as FigmaSvg } from "../images/skills/figma.svg";

// https://simpleicons.org/
export const svg_icons = {
  Java: { color: "#007396", svg: <JavaSvg /> },
  Python: { color: "#3776AB", svg: <PythonSvg /> },
  JavaScript: { color: "#F7DF1E", svg: <JSSvg /> },
  JQuery: { color: "#0769AD", svg: <JquerySvg /> },
  React: { color: "#61DAFB", svg: <ReactSvg /> },
  Redux: { color: "#764ABC", svg: <ReduxSvg /> },
  HTML5: { color: "#E34F26", svg: <Html5Svg /> },
  CSS3: { color: "#1572B6", svg: <Css3Svg /> },
  Sass: { color: "#CC6699", svg: <SassSvg /> },
  PHP: { color: "#777BB4", svg: <PhpSvg /> },
  MySQL: { color: "#3776AB", svg: <MySQLSvg /> },
  NodeJS: { color: "#339933", svg: <NodeJSSvg /> },
  MongoDB: { color: "#47A248", svg: <MongoDBSvg /> },
  Git: { color: "#F05032", svg: <GitSvg /> },
  Gimp: { color: "#5C5543", svg: <GimpSvg /> },
  Figma: { color: "#F24E1E", svg: <FigmaSvg /> }
};
