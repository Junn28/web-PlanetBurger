const showModalSignIn = () => {
  const modal = document.querySelector(".modal");
  const pillsLogin = document.querySelector("#pills-login");
  const pillsRegister = document.querySelector("#pills-register");
  const tabLogin = document.querySelector("#tab-login");
  const tabRegister = document.querySelector("#tab-register");

  modal.style.display = "block";
  tabLogin.classList.add("active");
  tabRegister.classList.remove("active");
  pillsLogin.classList.add("active", "show");
  pillsRegister.classList.remove("active", "show");
};

const showModalSignUp = () => {
  const modal = document.querySelector(".modal");
  const pillsLogin = document.querySelector("#pills-login");
  const pillsRegister = document.querySelector("#pills-register");
  const tabLogin = document.querySelector("#tab-login");
  const tabRegister = document.querySelector("#tab-register");

  modal.style.display = "block";
  tabLogin.classList.remove("active");
  tabRegister.classList.add("active");
  pillsLogin.classList.remove("active", "show");
  pillsRegister.classList.add("active", "show");
};

const btnClose = document.querySelector("#btn-close");

btnClose.addEventListener("click", () => {
  const modal = document.querySelector(".modal");

  modal.style.display = "none";
});

const showDemoImg = (n) => {
  const demoImg = document.querySelectorAll(".demo");
  const imgMain = document.querySelector(".img-main");
  const textProduct = document.querySelector("#text-product");

  for (var i = 0; i < demoImg.length; i++) {
    if (i === n - 1) {
      imgMain.setAttribute("src", `${demoImg[i].getAttribute("src")}`);
      textProduct.innerHTML = `${demoImg[i].getAttribute("alt")}`;
    }
    demoImg[i].classList.remove("active-demo");
  }
  demoImg[n - 1].classList.add("active-demo");
};

const textPrice = document.querySelector("#text-price");
let price = 50000;
const btnMin = document.querySelector(".btn-min");
const btnPlus = document.querySelector(".btn-plus");
let counter = document.querySelector(".counter");
let numCounter = 1;
let rupiah = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

textPrice.innerText = rupiah.format(price);

btnMin.addEventListener("click", () => {
  if (numCounter === 1) {
    return numCounter;
  } else {
    numCounter--;
    counter.innerHTML = `${numCounter}`;
    textPrice.innerHTML = rupiah.format(numCounter * price);
  }
});

btnPlus.addEventListener("click", () => {
  numCounter++;
  counter.innerHTML = `${numCounter}`;
  textPrice.innerHTML = rupiah.format(numCounter * price);
});
