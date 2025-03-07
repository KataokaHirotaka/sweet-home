export default class Header {
  constructor() {
    this.$header = $(".l-header");
    this.clientWidth = window.innerWidth;
  }
  init() {
    // TODO画面はばを変えられた時も気にする
    if (this.clientWidth <= "959") this.addEvents();
  }
  addEvents() {
    $(window).on("scroll", () => this.onScroll());
    $(window).on("resize", () => this.onResize());
  }

  onScroll() {
    // 下にスクロールした時にヘッダーのデザインを変えたいのでクラスを付け替える
    const scroll = $(window).scrollTop();
    const width = $(window).innerWidth();
    if (scroll > 0 && width < 959) {
      this.$header.addClass("fixed");
    } else {
      this.$header.removeClass("fixed");
    }
  }

  onResize() {
    // TODOもう一度確認が必要
    const scroll = $(window).scrollTop();
    const width = $(window).innerWidth();
    if (width > 959 && scroll === 0) {
      this.$header.removeClass("fixed");
    } else if (scroll > 0 && width <= 959) {
      this.$header.addClass("fixed");
    }
  }
}
