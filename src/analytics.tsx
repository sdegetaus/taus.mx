export const Events = Object.freeze({
  click_about: "click_about",
  click_attributions: "click_attributions",
  click_email: "click_email",
  click_portfolio_item: "click_portfolio_item",
  click_blog_post: "click_blog_post",
  click_social: "click_social",
  change_languge: "change_language",
});

export default class Analytics {
  static logEvent = (key: string, value?: any) => {
    // console.log(key, value ?? "");
    // @ts-ignore
    gtag("event", "click", {
      key: key,
      value: value ?? "",
    });
  };
}
