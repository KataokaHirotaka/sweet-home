export default class CmsMain {
  constructor() {
    this.API_URL = "https://sweet-home.microcms.io/api/v1/blog";
    this.API_KEY = "BJECHp6AY6pvqhEjJRTeBxW6p0evY7VD409R";
    this.params = new URLSearchParams(window.location.search);
    this.postId = this.params.get("id");
    this.$postTtl = $(".p-ttl");
    this.$postDate = $(".p-date");
    this.$postTxtWrapper = $(".p-content_wrapper");
    this.$postImg = $(".p-img");
  }

  init() {
    fetch(`${this.API_URL}/${this.postId}`, {
      headers: { "X-MICROCMS-API-KEY": this.API_KEY },
    })
      .then((response) => response.json())
      .then((post) => {
        this.createArticle(post);
        this.createBreadcrumbTxt(post);
      })
      .catch((error) => console.error("Error fetching post:", error));
  }

  createArticle(post) {
    // ブログの記事内容を作成する
    const title = post.title;
    const category = post.category?.name || "未分類";
    const postDate = new Date(post.publishedAt).toLocaleDateString();
    const postContent = post.content; // ブログの内容
    const postImgUrl = post.eyecatch.url;

    this.$postTtl.text(title);
    this.$postDate.text(postDate);
    this.$postTxtWrapper.append(postContent);
    this.$postImg.attr("src", postImgUrl);
  }

  createBreadcrumbTxt(post) {
    // パンクズリストのブログのタイトルを作成する
    let txt = ``;
    const breadcrumbTxt = document.getElementById("js-breadcrumbTxt");
    const title = post.title;
    txt += `&nbsp;&gt;&nbsp;${title}`;
    breadcrumbTxt.innerHTML = txt;
  }
}
