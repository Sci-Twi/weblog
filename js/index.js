(function () {
  const articles = [
    {
      name: "Dolya Town 1.0.7",
      filename: "dolya-town-1-0-7.html",
      tags: ["游戏", "特别惊喜像素地牢", "Roguelike"],
      time: 1752148996904,
    },
    {
      name: "视野计算：递归投影算法",
      filename: "recursive-shadowcasting.html",
      tags: ["翻译", "算法", "RPG", "Roguelike"],
      time: 1751561506706,
    },
  ];

  const githubPage = "https://github.com/Sci-Twi/";
  document.getElementById("githubPage").href = githubPage;

  for (const article of articles) {
    const tr = document.createElement("tr");
    const time = document.createElement("td");
    const name = document.createElement("td");
    const tags = document.createElement("td");

    time.appendChild(document.createTextNode(new Intl.DateTimeFormat("zh-CN", {
      timeZone: "Asia/Shanghai",
    }).format(new Date(article.time))));

    const a = document.createElement("a");
    a.setAttribute("href", `./articles/${article.filename}`);
    a.setAttribute("target", "_blank");
    a.appendChild(document.createTextNode(article.name));

    name.appendChild(a);
    tags.appendChild(document.createTextNode(article.tags.join("，")));

    tr.appendChild(time);
    tr.appendChild(name);
    tr.appendChild(tags);
    document.querySelector(".articleTable").appendChild(tr);

  }


})();