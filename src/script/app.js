const highlight = document.getElementsByClassName("main__news__highlight")[0];

async function mainNews() {
  const figureMain = document.createElement("figure");
  const imageMain = document.createElement("img");
  const divMain = document.createElement("div");
  const spanCategory = document.createElement("span");
  const titleMain = document.createElement("a");
  const textMain = document.createElement("p");
  const spanSource = document.createElement("span");

  const responseNews = await fetch(
    `https://kenzie-news-api.herokuapp.com/api/news/6`
  )
    .then((res) => res.json())
    .then((res) => {
      imageMain.src = res.imagem;
      spanCategory.innerText = res.categoria;
      titleMain.innerText = res.titulo;
      titleMain.href = res.noticia_completa;
      textMain.innerText = res.resumo;
      spanSource.innerText = `Fonte: ${res.fonte}`;

      figureMain.appendChild(imageMain);
      divMain.append(spanCategory, titleMain, textMain, spanSource);
      highlight.append(figureMain, divMain);

      return highlight;
    });
}

mainNews();

const newsList = document.querySelector("ul");

async function getNews() {
  const responseNewsList = await fetch(
    `https://kenzie-news-api.herokuapp.com/api/news`
  )
    .then((res) => res.json())
    .then((res) => {
      res.forEach((element) => {
        const listItem = document.createElement("li");
        const figureList = document.createElement("figure");
        const imageList = document.createElement("img");
        const divList = document.createElement("div");
        const spanCategory = document.createElement("span");
        const titleList = document.createElement("a");
        const textList = document.createElement("p");
        const spanSource = document.createElement("span");

        imageList.src = element.imagem;
        spanCategory.innerText = element.categoria;
        titleList.innerText = element.titulo;
        titleList.href = element.noticia_completa;
        textList.innerText = element.resumo;
        spanSource.innerText = `Fonte: ${element.fonte}`;

        figureList.appendChild(imageList);
        divList.append(spanCategory, titleList, textList, spanSource);
        listItem.append(figureList, divList);
        newsList.appendChild(listItem);

        return newsList;
      });
    });
}

getNews();

/* <li>
                <figure>
                    <img src="./src/assets/newsphoto1.png" alt="Foto da nova CMO da Kenzie">
                </figure>
                <div>
                    <span>Negócios</span>
                    <a href="">Silmara Souza é a nova CMO da Kenzie Academy Brasil</a>
                    <p>A executiva acumula 15 anos de experiência em branding e comunicação digital.</p>
                    <span>Fonte: Metrópoles</span>
                </div>
            </li>   */
