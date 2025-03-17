export default class Breadcrumb {
  constructor() {
    this.breadbrumb = document.getElementById("js-breadbcrumb");
    this.path = location.pathname;
  }

  init() {
    this.createBreadcrumbHtml();
  }

  createBreadcrumbHtml() {
    let breadcrumbHTML = ``;

    if (this.path === "/news") {
      breadcrumbHTML += `
          <li class="l-breadcrumbList_item visited"><a href="/" class="icon"></a></li>
          <li class="l-breadcrumbList_item">&nbsp;&gt;&nbsp;新着情報</li>
      `;
    } else if (this.path === "/news/post.html") {
      breadcrumbHTML += `
        <li class="l-breadcrumbList_item visited"><a href="/" class="icon"></a></li>
        <li class="l-breadcrumbList_item">&nbsp;&gt;&nbsp;<a href="/news" class="visited">新着情報</a></li>
        <li class="l-breadcrumbList_item" id="js-breadcrumbTxt"></li>
      `;
    } else if (this.path === "/info") {
      breadcrumbHTML += `
          <li class="l-breadcrumbList_item visited"><a href="/" class="icon"></a></li>
          <li class="l-breadcrumbList_item">&nbsp;&gt;&nbsp;ご案内</li>
      `;
    } else if (this.path === "/info/price") {
      breadcrumbHTML += `
        <li class="l-breadcrumbList_item visited"><a href="/" class="icon"></a></li>
        <li class="l-breadcrumbList_item">&nbsp;&gt;&nbsp;<a href="/info" class="visited">ご案内</a></li>
        <li class="l-breadcrumbList_item">&nbsp;&gt;&nbsp;ご利用料金</li>
      `;
    } else if (this.path === "/info/price/month") {
      breadcrumbHTML += `
        <li class="l-breadcrumbList_item visited"><a href="/" class="icon"></a></li>
        <li class="l-breadcrumbList_item">&nbsp;&gt;&nbsp;<a href="/info" class="visited">ご案内</a></li>
        <li class="l-breadcrumbList_item">&nbsp;&gt;&nbsp;<a href="/info/price" class="visited">ご利用料金</a></li>
        <li class="l-breadcrumbList_item">&nbsp;&gt;&nbsp;月額料金案内</li>
      `;
    } else if (this.path === "/info/price/temporary") {
      breadcrumbHTML += `
      <li class="l-breadcrumbList_item visited"><a href="/" class="icon"></a></li>
      <li class="l-breadcrumbList_item">&nbsp;&gt;&nbsp;<a href="/info" class="visited">ご案内</a></li>
      <li class="l-breadcrumbList_item">&nbsp;&gt;&nbsp;<a href="/info/price" class="visited">ご利用料金</a></li>
      <li class="l-breadcrumbList_item">&nbsp;&gt;&nbsp;一時預かり料金案内</li>
    `;
    } else if (this.path === "/info/price/other") {
      breadcrumbHTML += `
      <li class="l-breadcrumbList_item visited"><a href="/" class="icon"></a></li>
      <li class="l-breadcrumbList_item">&nbsp;&gt;&nbsp;<a href="/info" class="visited">ご案内</a></li>
      <li class="l-breadcrumbList_item">&nbsp;&gt;&nbsp;<a href="/info/price" class="visited">ご利用料金</a></li>
      <li class="l-breadcrumbList_item">&nbsp;&gt;&nbsp;その他の料金案内</li>
    `;
    }
    this.breadbrumb.innerHTML = breadcrumbHTML;
  }
}
