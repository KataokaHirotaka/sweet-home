export default class Anchor {
  constructor() {
    this.$anchorLinks = $(".js-anchor li a");
    this.$scrollDown = $(".scrollDown a");
  }
  init() {
    this.addEvents();
  }
  addEvents() {
    this.$anchorLinks.on("click", this.anchorScroll.bind(this));
    this.$scrollDown.on("click", this.anchorScroll.bind(this));
  }

  anchorScroll(e) {
    const $target = $(e.currentTarget);
    const position = this.getPosition($target);
    this.smoothScroll(position);
  }

  smoothScroll(position) {
    $("body,html").animate({ scrollTop: position }, 600, "swing");
    return false;
  }

  getPosition(el) {
    const href = el.attr("href");
    const target = $(href == "#" || href == "" ? "html" : href);
    const position = target.offset().top; // 止まった時の高さ調節
    return position;
  }
}
