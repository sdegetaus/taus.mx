import React from "react";
import { SocialData } from "../static-data";

import styles from "./social-icons.module.scss";

const SocialIcons = ({ iconSize = 30 }: SocialIconsProps) => {
  return (
    <ul className={styles.social}>
      {SocialData.map(key => (
        <li key={key.name}>
          <a
            href={key.url.toString()}
            title={key.name}
            target={"_blank"}
            aria-label={key.name}
            rel={"noopener noreferrer"}
            style={{ fontSize: iconSize }}
          >
            <span className={`${key.icon}`}></span>
          </a>
        </li>
      ))}
    </ul>
  );
};

interface SocialIconsProps {
  iconSize?: number;
}

export default SocialIcons;
