export default class Nav {
  constructor() {
    this.path = location.pathname;
    this.$monthTable = $("#js-monthTable");
    this.$tempTable = $("#js-tempTable");
    this.$otherTable = $("#js-otherTable");
  }

  init() {
    this.swithDisplay();
  }

  swithDisplay() {
    // 料金案内テーブルの表示切り替え
    if (this.path === "/info/price/month/") {
      this.$tempTable.hide();
      this.$otherTable.hide();
    } else if (this.path === "/info/price/temporary/") {
      this.$monthTable.hide();
      this.$otherTable.hide();
    } else if (this.path === "/info/price/other/") {
      this.$monthTable.hide();
      this.$tempTable.hide();
    }
  }
}
