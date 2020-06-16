import React from "react";
import { SocialData } from "../static-data";

import socialIconsStyles from "./social-icons.module.scss";

const SocialIcons = ({ iconSize = 30 }) => {
  return (
    <ul className={socialIconsStyles.social}>
      {SocialData.map(key => (
        <li key={key.name}>
          <a
            href={key.url.toString()}
            title={key.name}
            aria-label={key.name}
            style={{ fontSize: iconSize }}
          >
            <span className={`${key.icon}`}></span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
