var input = document.querySelector(".form-input");
var button = document.querySelector(".form-button");
var articles = document.querySelectorAll(".articles-item");

function research() {
  var text = input.value;
  articles.forEach(function (article) {
    console.log(article.innerText);
    if (article.textContent.includes(text)) {
      article.style.display = "block";
    } else {
      article.style.display = "none";
    }
  });
}

button.addEventListener("click", research);
