import React, { useState, useEffect } from "react";
import { injectIntl } from "gatsby-plugin-intl";
import Analytics, { Events } from "../analytics";

import postsStyles from "./posts.module.scss";

interface WPText {
  rendered: string;
}

interface Post {
  id: number;
  title: WPText;
  link: URL;
  date: Date;
  excerpt: WPText;
  slug: string;
}

interface Posts {
  postSet: Post[];
  error: boolean;
}

const defaultPosts: Posts = {
  postSet: [],
  error: false,
};

const Posts = ({ intl }: PostsProps) => {
  const [posts, setPosts] = useState(defaultPosts);
  useEffect(() => {
    fetch(
      `https://busybytes.com/wp-json/wp/v2/posts?author=3&_fields=id,title,link,date,excerpt,slug`
    )
      .then(response => response.json())
      .then((posts: Post[]) => {
        setPosts({
          postSet: posts,
          error: false,
        });
      })
      .catch(e => {
        console.log(e);
        setPosts({ postSet: [], error: true });
      });
  }, []);

  return (
    <div className={postsStyles.card}>
      <h2 className={postsStyles.title}>
        {intl.formatMessage({ id: "content.posts.title" })}
      </h2>
      {posts && posts.postSet.length > 0 ? (
        <ul className={postsStyles.list}>
          {posts.postSet.map((post: Post) => (
            <li key={post.id} className={postsStyles.post}>
              <a
                onClick={() =>
                  Analytics.logEvent(Events.click_blog_post, post.slug)
                }
                target="_blank"
                rel="noreferrer"
                aria-label={post.link.toString()}
                title={
                  new DOMParser().parseFromString(
                    post.title.rendered,
                    "text/html"
                  ).body.innerHTML
                }
                href={post.link.toString()}
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

interface PostsProps {
  intl: any;
}

export default injectIntl(Posts);
