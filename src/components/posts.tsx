import React, { useState, useEffect } from "react";
import { injectIntl } from "gatsby-plugin-intl";

import postsStyles from "./posts.module.scss";

const Posts = ({ intl }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(
      `http://busybytes.com/wp-json/wp/v2/posts?author=3&_fields=id,title,link,date,excerpt,slug`
    )
      .then(response => response.json())
      .then(resultData => {
        setPosts(resultData);
      })
      .catch(e => {
        console.log(e);
        setPosts([], { error: true });
      });
  }, []);

  return (
    <div className={postsStyles.card}>
      <h2 className={postsStyles.title}>
        {intl.formatMessage({ id: "content.posts.title" })}
      </h2>
      {posts && posts.length > 0 ? (
        <ul className={postsStyles.list}>
          {posts.map(post => (
            <li key={post.id} className={postsStyles.post}>
              <a
                target="_blank"
                rel="noreferrer"
                aria-label={post.link}
                title={post.title.rendered}
                href={post.link}
              >
                <div className={postsStyles.postTitle}>
                  <h5
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <span className={postsStyles.postDate}>
                    {new Date(post.date).toLocaleDateString("de-DE")}
                  </span>
                </div>

                <div
                  className={postsStyles.postExcerpt}
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
              </a>
            </li>
          ))}
        </ul>
      ) : posts.error ? (
        <div className={`${postsStyles.alert} ${postsStyles.error}`}>
          {intl.formatMessage({ id: "content.posts.error" })}
        </div>
      ) : (
        <div className={`${postsStyles.alert} ${postsStyles.loading}`}>
          {intl.formatMessage({ id: "content.posts.loading" })}
        </div>
      )}
    </div>
  );
};

export default injectIntl(Posts);
