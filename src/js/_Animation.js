export default class Animation {
  constructor() {
    this.$fadeInItems = $(".fadeIn");
    this.$loading = $("#loading");
    this.$loader = $(".loader");
  }
  init() {
    this.addEvents();
  }
  addEvents() {
    $(window).on("scroll", () => this.onScroll());
    // iosでローディングが止まらないので一旦やめる
    // $(window).on("load", () => this.removeRoading());
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

  removeRoading() {
    // ローディング画面のアニメーション
    setTimeout(() => {
      console.log(this.$loading);
      console.log(this.$loader);
      this.$loading.addClass("loaded");
    }, 1000);
  }
}
