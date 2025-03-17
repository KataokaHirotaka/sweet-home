export default class CmsMain {
  constructor() {
    this.API_URL = "https://sweet-home.microcms.io/api/v1/blog";
    this.API_KEY = "BJECHp6AY6pvqhEjJRTeBxW6p0evY7VD409R";
    this.blogList = document.getElementById("blog-list");
    this.url = location.pathname;
    this.recentPosts = document.getElementById("recent-posts");
  }

  init() {
    // APIからブログのデータ取得
    fetch(this.API_URL, {
      headers: { "X-MICROCMS-API-KEY": this.API_KEY },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(this.url);
        if (this.url === "/news") {
          // urlにnewsが入っているときはnewsページを作成する。
          // newsディレクトリページの作成
          data.contents.forEach((post) => {
            this.createNewsPage(post);
          });

          Object.values(data.contents)
            .slice(0, 5)
            .forEach((post) => {
              //　asideの最新の投稿を5つまで表示する
              this.createLatestPosts(post);
            });
        } else if (this.url === "/") {
          // メインページの新着セクションを作成
          // 最新の投稿4つだけを表示
          Object.values(data.contents)
            .slice(0, 4)
            .forEach((post) => {
              this.createMainSection(post);
            });
          Object.values(data.contents)
            .slice(0, 5)
            .forEach((post) => {
              //　asideの最新の投稿を5つまで表示する
              this.createLatestPosts(post);
            });
        } else if (this.url === "/news/post.html") {
          // 記事詳細ページの作成
          Object.values(data.contents)
            .slice(0, 5)
            .forEach((post) => {
              //　asideの最新の投稿を5つまで表示する
              this.createLatestPosts(post);
            });
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  createMainSection(post) {
    const title = post.title;
    const originalUpdatedAt = post.updatedAt; // 更新日時
    const index = originalUpdatedAt.indexOf("T");
    const updatedAt = originalUpdatedAt.substring(0, index); // 日にち以降の文字をTから削除して整形した日付の文字列
    const category = post.category.name;
    const content = post.content; // 記事の内容
    // タグの色を決める
    let tagColorClass = "";
    if (category === "ブログ") {
      tagColorClass = "red";
    } else if (category === "お知らせ") {
      tagColorClass = "blue";
    }

    // メインページの新着情報セクションの内容作成
    const listItem = document.createElement("li");
    listItem.innerHTML = `
            <a href="/news/post.html?id=${post.id}">
              <figure><img src="${post.eyecatch.url}"></figure>
              <h3>${title}</h3>
              <p>${updatedAt}</p>
              <span class=${tagColorClass}>${category}</span>
              <div class="c-content_wrapper">
                <p>${content}</p>
              </div>
              <button class="c-linkBtn">MORE</button>
            </a>`;
    this.blogList.appendChild(listItem);
  }

  // newsページの作成
  createNewsPage(post) {
    console.log("newsページの作成");
    console.log(post);
    const title = post.title;
    const originalUpdatedAt = post.updatedAt; // 更新日時
    const index = originalUpdatedAt.indexOf("T");
    const updatedAt = originalUpdatedAt.substring(0, index); // 日にち以降の文字をTから削除して整形した日付の文字列
    const category = post.category.name;
    const content = post.content; // 記事の内容
    // タグの色を決める
    let tagColorClass = "";
    if (category === "ブログ") {
      tagColorClass = "red";
    } else if (category === "お知らせ") {
      tagColorClass = "blue";
    }

    // ニュースページの新着情報セクションの内容作成
    const listItem = document.createElement("li");
    listItem.innerHTML = `
            <a href="/news/post.html?id=${post.id}">
              <figure><img src="${post.eyecatch.url}"></figure>
              <h3>${title}</h3>
              <p>${updatedAt}</p>
              <span class=${tagColorClass}>${category}</span>
              <div class="c-content_wrapper">
                <p>${content}</p>
              </div>
              <button class="c-linkBtn">MORE</button>
            </a>`;
    this.blogList.appendChild(listItem);
  }

  createLatestPosts(post) {
    // 最新の投稿セクションを作成する
    const item = document.createElement("li");
    item.innerHTML = `<a href="post.html?id=${post.id}">
          ${post.title} 
        </a>`;
    this.recentPosts.appendChild(item);
  }
}
