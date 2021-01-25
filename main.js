// step1-check if html and js is linked
// console.log("is linked");

//step2-get the variables
let btnPlus = document.querySelectorAll(".btn-plus");
let btnMinus = document.querySelectorAll(".btn-moins");
let btnRemove = document.getElementsByClassName("btn-delete");
let btnLike = document.querySelectorAll(".btn-like");
let like = document.querySelectorAll(".like");

//events
// event increment
for (let i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", function () {
    // alert("hello");
    // first method
    //    qte[i].innerHTML++;
    // second method
    btnPlus[i].previousElementSibling.innerHTML++;
    total();
  });
}
// event decrement
for (let i of btnMinus) {
  i.addEventListener("click", () => {
    if (i.nextElementSibling.innerHTML > 0) {
      i.nextElementSibling.innerHTML--;
      total();
    }
  });
}

for (let i = 0; i < btnRemove.length; i++) {
  btnRemove[i].addEventListener("click", function () {
    btnRemove[i].parentElement.parentElement.remove();
    total();
  });
}

// like events
for (let i = 0; i < btnLike.length; i++) {
  btnLike[i].addEventListener("click", () => {
    if (like[i].style.fill == "red") {
      like[i].style.fill = "black";
    } else {
      like[i].style.fill = "red";
    }
  });
}
function total() {
  let price = document.getElementsByClassName("prx");
  let qte = document.querySelectorAll(".quantity");
  let sum = 0;
  for (let i = 0; i < price.length; i++) {
    sum = sum + price[i].innerHTML * qte[i].innerHTML;
  }
  document.getElementById("prix-total").innerHTML = sum;
}