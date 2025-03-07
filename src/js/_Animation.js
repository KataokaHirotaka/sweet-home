export default class Animation {
  constructor() {
    this.$fadeInItems = $(".fadeIn");
  }
  init() {
    this.addEvents();
  }
  addEvents() {
    $(window).on("scroll", () => this.onScroll());
  }

  onScroll() {
    this.$fadeInItems.each((_, item) => {
      const $target = $(item);
      const elemPos = $target.offset().top;
      const scroll = $(window).scrollTop();
      const winHeight = $(window).height();
      if (scroll > elemPos - winHeight + 150) {
        $target.addClass("fadeIn-up");
      }
    });
  }
}
