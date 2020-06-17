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
  static logEvent = (action: string) => {
    // console.log(action);
    gtag("event", action);
  };

  static logEventWithParams = (action: string, value: any) => {
    // console.log(action, value);
    gtag("event", action, {
      event_category: "general",
      event_label: "custom",
      value: value,
    });
  };
}
