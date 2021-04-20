// GO TO TOP
//Get the button:
// var myBtn = document.getElementById("go-to-top-img");

// When the user clicks on the button, scroll to the top of the document
// window.onscroll = function() {
//   if (document.body.scroll >= 300) {
//     document.getElementById("go-to-top-img").style.visibility = "visible";
//   } else {
//     document.getElementById("go-to-top-img").style.visibility = "hidden";
//   }
// };

//go to review tab
// let starCollection = document.getElementsById("stars-cl");
// starCollection.addEventListener("click", rscroller);

// function rscroller() {
//   let reviewSection = document.getElementById("reviewDiv");
//   reviewSection.scrollIntoView({ behavior: "smooth" });
// }

//go to review tab end

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//how to show back to top button when user scrolls more than 150 pixels down from top of document.

var toTopButton = document.querySelector(".go-to-top img");
toTopButton.style.display = "none"; //by default should be hidden
document.querySelector("body").onscroll = function () {
  //whenever they scroll
  if (window.scrollY > 150)
    //if scroll is 150px from top
    toTopButton.style.display = "block";
  //if they scroll down, show
  else toTopButton.style.display = "none"; //if they scroll up, hide
};

// GO TO TOP END

/*
      Sample code
      
      theButton = document.getElementById("test");
      
      => goToTopFunction(){ 
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
      */

// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// Get the header
// var header = document.getElementById("navbar-2");

// Get the offset position of the navbar
// var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

// THIS BLOCK IS THE CONTACT NUMBER CHANGE
let countryInfo = new Map();
countryInfo.set("india", "+919999999");
countryInfo.set("usa", "+928888888");
countryInfo.set("canada", "+937777777");

var test = document
  .getElementById("form-select")
  .addEventListener("change", () => {
    document.getElementById("contact").innerHTML = countryInfo.get(
      document.getElementById("form-select").value
    );
  });
// THIS BLOCK IS THE CONTACT NUMBER CHANGE END

// THIS BLOCK IS FOR THE FLAG CHANGE
// var flagImages = ['https://www.flaticon.com/svg/vstatic/svg/555/555462.svg?token=exp=1614098136~hmac=ecaa1160e546a75c595aecd45c3b18fa', 'https://www.flaticon.com/svg/vstatic/svg/555/555462.svg?token=exp=1614098136~hmac=ecaa1160e546a75c595aecd45c3b18fa', 'https://www.flaticon.com/svg/vstatic/svg/555/555462.svg?token=exp=1614098136~hmac=ecaa1160e546a75c595aecd45c3b18fa'];
var country = document
  .getElementById("form-select")
  .addEventListener("change", () => {
    let country = document.getElementById("form-select").value;
    document.getElementById("contact").innerHTML = countryInfo.get(country);

    var flagChange = document.getElementById("flag-1");
    if ((flagChange.src = country == "india")) {
      flagChange.src =
        "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/india%20(1).png";
    } else if ((flagChange.src = country == "usa")) {
      flagChange.src =
        "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/united-states.png";
    } else {
      flagChange.src =
        "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/canada.png";
    }
  });

// document.getElementById('flag-1').src = `https://www.flaticon.com/svg/vstatic/svg/555/555462.svg?token=exp=1614098136~hmac=ecaa1160e546a75c595aecd45c3b18fa ${country == 'india'}`
// document.getElementById('flag-1').src = `https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/united-states.png ${country == 'usa'}`
// document.getElementById('flag-1').src = `https://www.flaticon.com/svg/vstatic/svg/555/555462.svg?token=exp=1614098136~hmac=ecaa1160e546a75c595aecd45c3b18fa ${country == 'canada'}`
// document.getElementById('flag-1').src = `('https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/united-states.png')${country ==='canada'}`

//  if (country == 'india') {
//     document.querySelector('#flag-1').src = flagImages[0];
//  }
//  else if(country == 'usa') {
//     document.querySelector('#flag-1').src = flagImages[1];
//  }
//  else {
//     document.querySelector('#flag-1').src = flagImages[2];
//  }

// THIS BLOCK IS THE FLAG CHANGE END

// STICKY NAVIGATION BAR
const nav = document.querySelector("#my-container-2");
let navTop = nav.offsetTop;

function fixedNav() {
  if (window.scrollY >= navTop) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
}

window.addEventListener("scroll", fixedNav);
// STICKY NAVIGATION BAR END

//increment and decrement code
function increment() {
  document.getElementById("demoInput").stepUp();
}

function decrement() {
  document.getElementById("demoInput").stepDown();
}

//increment and decrement code end

// go to review section
function scrollWin() {
  window.scrollTo(0, 990);
}
// go to review section end

//change of sign//
// let iconSrc = document.getElementById("quest-1");
// function iconChange() {
//   if (
//     (iconSrc.src =
//       "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/plus.png")
//   ) {
//     iconSrc.src =
//       "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/minus.png";
//   }
// }

/*$("#quest-1").on("click", function clickFn() {
        $("#img-1").attr(
          "src",
          "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/minus.png"
        );
      });*/

// $("#quest-1").on("click", function () {
//   $("#img-1").attr(
//     "src",
//     "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/minus.png"
//   );
// });

//minus and plus button on click
$("#quest-1").click(function () {
  if ($("#div-toggle").attr("aria-expanded") === "true") {
    $("#img-1").attr(
      "src",
      "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/minus.png"
    );
  } else {
    $("#img-1").attr(
      "src",
      "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/plus.png"
    );
  }
});

$("#quest-2").click(function () {
  if ($("#div-toggle2").attr("aria-expanded") === "true") {
    $("#img-2").attr(
      "src",
      "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/minus.png"
    );
  } else {
    $("#img-2").attr(
      "src",
      "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/plus.png"
    );
  }
});

$("#quest-3").click(function () {
  if ($("#div-toggle3").attr("aria-expanded") === "true") {
    $("#img-3").attr(
      "src",
      "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/minus.png"
    );
  } else {
    $("#img-3").attr(
      "src",
      "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/plus.png"
    );
  }
});

$("#quest-4").click(function () {
  if ($("#div-toggle4").attr("aria-expanded") === "true") {
    $("#img-4").attr(
      "src",
      "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/minus.png"
    );
  } else {
    $("#img-4").attr(
      "src",
      "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/plus.png"
    );
  }
});

$("#quest-5").click(function () {
  if ($("#div-toggle5").attr("aria-expanded") === "true") {
    $("#img-5").attr(
      "src",
      "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/minus.png"
    );
  } else {
    $("#img-5").attr(
      "src",
      "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/plus.png"
    );
  }
});
//minus and plus button on click end

//hover effect on 3 icons of product card
// var imageDiv = document.querySelectorAll('div[id^="three-icon-product"]');
// var changeOnHover1 = document.getElementById("change-on-hover");
// var changeOnHover2 = document.getElementById("change-on-hover2");
// var changeOnHover3 = document.getElementById("change-on-hover3");

/*changeOnHover1.onmouseover = () => {
      changeOnHover1.src =
        "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/Group%202584%402x.png";
    };
    changeOnHover2.onmouseover = () => {
      changeOnHover2.src =
        "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/Group%202583%402x.png";
    };
    changeOnHover3.onmouseover = () => {
      changeOnHover3.src =
        "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/Group%202582%402x.png";
    };
    changeOnHover1.onmouseout = () => {
      changeOnHover1.src =
        "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/Group%202581%402x.png";
    };
    changeOnHover2.onmouseout = () => {
      changeOnHover2.src =
        "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/Group%202580%402x.png";
    };
    changeOnHover3.onmouseout = () => {
      changeOnHover3.src =
        "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/Group%202579%402x.png";
    };
    */

/*document
      .querySelectorAll('[id^="imageOfProduct"]')
      .forEach((imageOfProduct) => {
        imageOfProduct.addEventListener("mouseover", (event) => {
          imageOfProduct.classList.add("blur");
        });
      });
    document
      .querySelectorAll('[id^="imageOfProduct"]')
      .forEach((imageOfProduct) => {
        imageOfProduct.addEventListener("mouseout", (event) => {
          imageOfProduct.classList.remove("blur");
        });
      });
    
    document.querySelectorAll('[class^="icons"]').forEach((icons) => {
      icons.onmouseover = function () {
        icons.classList.remove("blur");
      };
    });
    document.querySelectorAll('[class^="icons"]').forEach((icons) => {
      icons.onmouseout = function () {
        icons.classList.add("blur");
      };
    });
    */

//get product detail as json
let productListUrl =
  "https://my-json-server.typicode.com/mubarakhusain/fakeserver/db";
var productsList;
let htmlReturn = "",
  review = "",
  i = 0,
  lowStar = 0,
  isNew = "";
isNewElse = "";
async function loadProducts(productListUrl) {
  /*let response = await fetch(productListUrl);
    if (response == 200) {
      let json = await response.json;
      return json;
    }*/
  /*
    if (response.status == 200) {
      let json = await response.json();
      return json;
    }*/

  /*if (response == 200) {
      let json = await response.json();
      return json;
    }*/
  fetch("https://my-json-server.typicode.com/mubarakhusain/fakeserver/db")
    .then((response) => response.json())
    .then((json) => {
      productsList = json;
      productsList.products.forEach((product) => {
        // console.log(product.new);
        htmlReturn =
          '<div class="col-4 card " id="' +
          product.id +
          '">' +
          '<div class="product-image">' +
          '<img src="' +
          product.url +
          '"' +
          ' id="imageOfProduct" class="card-img-top" alt="Product-1">';
        isNew = '<button class="btn-new">New</button>';
        isNewElse = "<p></p>";
        if (product.new == "TRUE") {
          htmlReturn += isNew;
          isNew = "";
        } else {
          htmlReturn += isNewElse;
        }

        htmlReturn +=
          ' <div class="icons" id="threeIcons1">' +
          ' <a href="#abc" onClick="runFn()"><img id="change-on-hover"' +
          '       src="https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/Group%202581%402x.png"' +
          '        class="' +
          product.fristIcon +
          ' cart" alt=""></a>' +
          ' <a href="#x"><img id="change-on-hover2"' +
          '  src="https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/Group%202580%402x.png"' +
          '  class="' +
          product.secondIcon +
          ' view" alt=""></a>' +
          '<a href="#x"><img id="change-on-hover3"' +
          ' src="https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/Group%202579%402x.png"' +
          ' class="' +
          product.thirdIcon +
          ' like" alt=""></a>' +
          "</div>" +
          "</div>" +
          '<div class="card-body " id="card-body">' +
          '<div class="card-text card-content">' +
          '<p class="title-product">' +
          product.titleProduct +
          "</p>" +
          '<div class="price-group" id="price-group">' +
          '<p class="price">Rs ' +
          product.priceAfterDisc +
          "</p>" +
          '<p class="price-strike">Rs ' +
          product.price +
          "</p>" +
          '<p class="offer">(60% Off)</p>' +
          "</div>" +
          '<div class="star-icon">';
        lowStar = 5 - product.rating;
        for (i = 1; i <= product.rating; i++) {
          review += '<i class="fas fa-star"></i>';
        }
        for (i = 1; i <= lowStar; i++) {
          review += '<i class="far fa-star"></i>';
        }
        htmlReturn += review + product.rating + "/5";
        review = "";
        htmlReturn += "</div>" + " </div>" + "</div>" + "</div>";
        //This is to append the HTML card
        document.querySelector("#appendProduct").innerHTML += htmlReturn;

        //icon change on hover
        $(".firstImg").mouseenter(function () {
          $(this).attr(
            "src",
            "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/Group%202584%402x.png"
          );
        });
        $(".firstImg").mouseleave(function () {
          $(this).attr(
            "src",
            "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/Group%202581%402x.png"
          );
        });
        $(".secondImg").mouseenter(function () {
          $(this).attr(
            "src",
            "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/Group%202583%402x.png"
          );
        });
        $(".secondImg").mouseleave(function () {
          $(this).attr(
            "src",
            "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/Group%202580%402x.png"
          );
        });
        $(".thirdImg").mouseenter(function () {
          $(this).attr(
            "src",
            "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/Group%202582%402x.png"
          );
        });
        $(".thirdImg").mouseleave(function () {
          $(this).attr(
            "src",
            "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/Group%202579%402x.png"
          );
        });
      });

      // IconBlur on hover

      document.querySelectorAll(".icons").forEach((icons) => {
        icons.classList.add("hide");
      });
      document
        .querySelectorAll('[id^="productCard"]')
        .forEach((productCard) => {
          productCard.addEventListener("mouseover", (event) => {
            productCard.childNodes[0].classList.add("blur");
            productCard.childNodes[0].childNodes[3].classList.remove("hide");
            productCard.childNodes[0].childNodes[3].classList.add("show");
          });
        });

      document
        .querySelectorAll('[id^="productCard"]')
        .forEach((productCard) => {
          productCard.addEventListener("mouseout", (event) => {
            productCard.childNodes[0].classList.remove("blur");
            productCard.childNodes[0].childNodes[3].classList.add("hide");
            productCard.childNodes[0].childNodes[3].classList.remove("show");
          });
        });
    });

  /*fetch("https://my-json-server.typicode.com/mubarakhusain/fakeserver/db")
      .then((response) => response.json())
      .then((json) => {
        return json;
      });*/
}
loadProducts(productListUrl);

//storing data in local storage.

let productArray = [];
let runFn = () => {
  document.querySelectorAll('[id^="productCard"]').forEach((productCard) => {
    productCard.childNodes[0].childNodes[3].childNodes[1].addEventListener(
      "click",
      () => {
        var productId = productCard.id;
        productArray.push(productId);
        localStorage.setItem("productData", JSON.stringify(productArray));
        //retrive the ids
        let getting = localStorage.getItem("productData");
        console.log(JSON.parse(getting));
      }
    );
  });
};
//remove products from array

//to get ID of the products

// let productsIds = {
//   id : "productCarda",
//   id : "productCardb",
//   id : "productCardc",
//   id : "productCardd",
//   id : "productCarde",
//   id : "productCardf"
// };
// document.querySelectorAll('[id^="productCard"]').forEach((productCard) => {
//   $(".cart").on("click", () => {
//     localStorage.setItem("product_detail", JSON.stringify(productsIds));
//   });
// });
// const productDetails = localStorage.getItem("product_detail");
// const productDetailsJson = JSON.parse(productDetails);
// console.log(productDetailsJson);

// var testObject = {
//   1: "productCarda",
//   2: "productCardb",
//   3: "productCardc",
//   4: "productCardd",
//   5: "productCarde",
//   6: "productCardf",
// };

// Put the object into storage

// Retrieve the object from storage

// var localData = localStorage.setItem(
//   "productCard.id",
//   JSON.stringify(productCard.id)
// );

// if (localData == productCard.id) {
//   productArray.push(productCard.id);
// } else {
//   return false;
// }

// productIds = productCard.id;

// create an empty array for product ids
// check if local storage is set
//if not set, then add id in the array and set the localstorage item with that array
// if set, then get that item array and set your empty array with that value and now apppend your new id and set the item with the updated array again
// traverse the array to do whatever you want
