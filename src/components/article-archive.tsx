import React from "react";
import { injectIntl } from "gatsby-plugin-intl";

import styles from "./article-archive.module.scss";

const ArticleArchive = ({ intl, edges }: ArticleArchiveProps) => {
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
            <li key={slug} className={styles.post}>
              <a
                target={"_blank"}
                rel={"noopener noreferrer"}
                aria-label={slug}
                title={title}
                href={url}
              >
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
