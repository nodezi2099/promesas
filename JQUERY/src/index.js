/*API DE PEXELS => https://www.pexels.com/api/new/ */

let API_KEY = "563492ad6f917000010000017a4441f18c394556b67ff6879deb289a";
let API_URL = "https://api.pexels.com/v1/curated?per_page=15&page=1";
let $ = require("jquery");
let template = require("jquery.tmpl/index");
let image = " <li> <img src=${src.small} width=200px></li>";
template.template("movieTemplate", image);

let promesa = new Promise((resolve, reject) => {
  $.ajax(API_URL, {
    headers: {
      Authorization: API_KEY
    }
  })
    .done(data => resolve(data))
    .fail(err => reject(err));
});

promesa
  .then(({ photos }) => {
    $("#movieList").empty();
    template.tmpl("movieTemplate", photos).appendTo("#movieList");
  })
  .catch(err => console.log(err));
