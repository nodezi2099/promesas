(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let API_KEY = "563492ad6f917000010000017a4441f18c394556b67ff6879deb289a";
let API_URL = "https://api.pexels.com/v1/curated?per_page=15&page=1";
let movieList = document.getElementById("movieList");

let getTemplate = () => {
  return `<li>
      <img src=:image: width=200px/>
    </li>
`;
};

let getHeaders = () => {
  let h = new Headers();
  h.append("Authorization", API_KEY);
  return h;
};

let getRequest = () => {
  let req = new Request(API_URL, {
    method: "GET",
    mode: "cors",
    headers: getHeaders()
  });
  return req;
};

let promesa = new Promise((resolve, reject) => {
  fetch(getRequest()).then(response => resolve(response.json())).catch(error => reject(error));
});

let getImage = image => {
  return image.src.original;
};

promesa.then(({
  photos
}) => {
  let cadena = " ";
  photos.map(item => {
    cadena += getTemplate().replace(":image:", getImage(item));
  });
  movieList.innerHTML = cadena;
}).catch(error => console.log(error));

},{}]},{},[1]);
