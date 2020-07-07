import React, { useState, useEffect } from "react";
import { injectIntl } from "gatsby-plugin-intl";
import Analytics, { Events } from "../analytics";

import styles from "./article-archive.module.scss";

interface WPText {
  rendered: string;
}

interface Article {
  id: number;
  title: WPText;
  link: URL;
  date: Date;
  excerpt: WPText;
  slug: string;
}

const ArticleArchive = ({ intl, edges }: ArticleArchiveProps) => {
  console.log(edges);

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>
        {intl.formatMessage({ id: "content.posts.title" })}
      </h2>
      <ul className={styles.list}>
        {edges.map(
          ({
            node: {
              frontmatter: { date, title, url, slug },
              excerpt,
            },
          }) => (
            <li className={styles.post}>
              <a
                onClick={() => Analytics.logEvent(Events.click_blog_post, slug)}
                target={"_blank"}
                rel={"noopener noreferrer"}
                aria-label={slug}
                title={title}
                href={url}
              >
                {console.log(excerpt)}
                <div className={styles.postTitle}>
                  <h5>{title}</h5>
                  <span className={styles.postDate}>
                    {new Date(date).toLocaleDateString("de-DE")}
                  </span>
                </div>

                <div
                  className={styles.postExcerpt}
                  dangerouslySetInnerHTML={{ __html: excerpt }}
                />
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

interface ArticleArchiveProps {
  intl: any;
  edges: any;
}

export default injectIntl(ArticleArchive);
