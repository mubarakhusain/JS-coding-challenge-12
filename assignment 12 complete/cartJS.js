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

//receving data from local storage.
let resultOfStorage = localStorage.getItem("productData");

let finalProductArray = JSON.parse(resultOfStorage);
var uniqueData = [...new Set(finalProductArray)];
console.log(uniqueData);

let productListUrl =
  "https://my-json-server.typicode.com/mubarakhusain/fakeserver/db";

let totalPrice = 0,
  grossPrice = 0,
  priceDifference = 0,
  productPriceCard,
  abc = [],
  counterArray = [],
  productIdArray = [],
  productsList,
  counter = 0,
  cartCounter = 0;

async function loadProducts(productListUrl) {
  fetch("https://my-json-server.typicode.com/mubarakhusain/fakeserver/db")
    .then((response) => response.json())
    .then((json) => {
      productsList = json;
      productsList.products.forEach((product) => {
        if (uniqueData.includes(product.id) == true) {
          //   counterArray.push(product.id);

          counter++;
          cartCounter++;
          htmlReturn =
            '<div id="' +
            product.id +
            '">' +
            '<div class="cardOfProduct" id="">' +
            '<div class="Productimg">' +
            '  <img src="' +
            product.url +
            '"' +
            '       class="" alt="Product-1">' +
            "</div>" +
            '<div class="informationOfProduct">' +
            "  <p>" +
            product.titleProduct +
            "</p>" +
            " <p>color : white </p>" +
            "  <p>Sold by: The Designer private limited</p>" +
            '  <div class="btn-size-qty">' +
            '<div class="dropdown">' +
            '<button class="btn btn-secondary dropdown-toggle btn-size-of-prd" type="button"' +
            '    id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">' +
            "     Size: one size" +
            " </button>" +
            '   <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">' +
            '        <li><a class="dropdown-item" href="#">Size two</a></li>' +
            '         <li><a class="dropdown-item" href="#">Size three</a></li>' +
            '          <li><a class="dropdown-item" href="#">Size four</a></li>' +
            "       </ul>" +
            "    </div>" +
            '     <div class="dropdown">' +
            '          <button class="btn btn-secondary dropdown-toggle btn-qty" type="button"' +
            '               id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">' +
            "                QTY: 1" +
            "             </button>" +
            '              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">' +
            '                   <li><a class="dropdown-item" href="#"><span onclick="" id="twoQty">2</span></a></li>' +
            '                    <li><a class="dropdown-item" href="#"><span id="threeQty">3</span</a></li>' +
            '                     <li><a class="dropdown-item" href="#"><span id="fourQty">4</span></a></li>' +
            "                  </ul>" +
            "               </div>" +
            "            </div>" +
            "        </div>" +
            '        <div class="finalPriceWithOffer">' +
            "            <p>Rs. <span>" +
            product.priceAfterDisc +
            "</span></p>" +
            '            <div class="price-n-offer">' +
            "                <p>Rs. <span>" +
            product.price +
            "</span></p>" +
            "                <P>(60% OFF)</P>" +
            "            </div>" +
            "            <p>Delivery in 4-6 days</p>" +
            "        </div>" +
            "   </div>" +
            '    <div class="sideCard">' +
            '         <button onclick="" type="button" class="btn btn-primary" id="removeBtn">Remove</button>' +
            "        <pre></pre>" +
            '      <button type="button" class="btn btn-primary" id="AddWishlistBtn">Move To Wishlist</button>' +
            "    </div>";
          ("</div>");
          totalPrice += product.priceAfterDisc;
          grossPrice += product.price;
          priceDifference += grossPrice - totalPrice;
          document.querySelector("#appendProduct").innerHTML += htmlReturn;

          // productCard.addEventListner("click", () => {
          //   $(productCard).remove();
          // });

          //   console.log(counterArray.length);
          // document
          //   .querySelectorAll('[id^="productCard"]')
          //   .forEach((productCard) => {
          //     productCard.addEventListener("click", () => {
          //       $(productCard).remove();
          //     });
          //   });
          // clickMe = () => {
          //   document
          //     .querySelectorAll('[id^="productCard"]')
          //     .forEach((productCard) => {
          //       productCard.addEventListener("click", () => {
          //         productCard.remove();
          //         console.log("yes");
          //         abc.push(productCard.id);
          //         console.log(abc);
          //         localStorage.setItem("data", JSON.stringify(abc));
          //       });

          // let xyz = uniqueData.indexOf(productCard.id);
          // console.log(xyz);
          // uniqueData = uniqueData.splice(xyz, 1);
          // document
          //   .querySelectorAll('[id^="productCard"]')
          //   .forEach((productCard) => {
          //     productCard.addEventListener("click", () => {
          //       console.log(productCard.id);
          //       productCard.remove();
          //       counter--;
          //       var price =
          //         productCard.childNodes[0].childNodes[3].childNodes[1]
          //           .childNodes[0];

          //       console.log(price);
          //       totalPrice -= product.price;
          //       console.log(product.id.price);
          //       console.log(totalPrice);
          //     });
          //   });

          //removing the products from the list.

          document
            .querySelectorAll('[id^="productCard"]')
            .forEach((productCard) => {
              productCard.childNodes[2].childNodes[1].addEventListener(
                "click",
                () => {
                  $(productCard).fadeOut(1200, function () {
                    $(this).remove();
                  });
                  // productCard.remove();

                  cartCounter--;
                  counter--;
                  console.log(counter);
                  var finalPriceOfCard =
                    productCard.childNodes[0].childNodes[3].childNodes[1]
                      .childNodes[1].childNodes[0].data;
                  var strikeOfPrice =
                    productCard.childNodes[0].childNodes[3].childNodes[3]
                      .childNodes[1].childNodes[1].childNodes[0].data;

                  totalPrice = totalPrice - finalPriceOfCard;

                  grossPrice = grossPrice - strikeOfPrice;

                  document.getElementById(
                    "totalCostSpan"
                  ).innerHTML = totalPrice;
                  document.getElementById("totalProducts").innerHTML = counter;
                  document.getElementById("grossPrice").innerHTML = grossPrice;
                  document.getElementById(
                    "differenceId"
                  ).innerHTML = priceDifference;
                  document.getElementById(
                    "totalPriceId"
                  ).innerHTML = totalPrice;
                  document.getElementById(
                    "totalPriceId2"
                  ).innerHTML = totalPrice;
                  document.getElementById("CartCount").innerHTML = cartCounter;
                }
              );
            });
        }
      });

      // productPriceCard =
      //   "<h6>PRICE DETAILS</h6>" +
      //   "<div>" +
      //   "<p>Price details</p>" +
      //   "<p>Rs. " +
      //   grossPrice +
      //   "</p>" +
      //   "</div>" +
      //   "<div>" +
      //   "<p>Bag Discount</p>" +
      //   "<p>Rs. " +
      //   priceDifference +
      //   "</p>" +
      //   "</div>" +
      //   "<div>" +
      //   "<p>Coupon Discount</p>" +
      //   "<p>Apply Coupon</p>" +
      //   "</div>" +
      //   "<div>" +
      //   "<p>Order Total</p>" +
      //   "<p>Rs. " +
      //   totalPrice +
      //   "</p>" +
      //   "</div>" +
      //   "<div>" +
      //   "<p>Delivery Charges</p>" +
      //   "<p>Rs. 99</p>" +
      //   "<p>Free</p>" +
      //   "</div>" +
      //   "<hr>" +
      //   '<div id="totalPrice">' +
      //   "<p>Total</p>" +
      //   "<p>Rs. " +
      //   totalPrice +
      //   "</p>" +
      //   "</div>" +
      //   '<div class="btn-place-order-div">' +
      //   '<button type="button" class="btn btn-primary btn-place-order">PLACE ORDER</button>' +
      //   "</div>";

      // document.querySelector("#priceCard").innerHTML += productPriceCard;
      // priceHtml =
      //   '<p class="totalCost" id="totalCost">Total: Rs. ' +
      //   totalPrice +

      document.getElementById("totalCostSpan").innerHTML = totalPrice;
      document.getElementById("totalProducts").innerHTML = counter;
      document.getElementById("grossPrice").innerHTML = grossPrice;
      document.getElementById("differenceId").innerHTML = priceDifference;
      document.getElementById("totalPriceId").innerHTML = totalPrice;
      document.getElementById("totalPriceId2").innerHTML = totalPrice;
      document.getElementById("CartCount").innerHTML = cartCounter;

      // document.getElementById("CartCount").innerHTML = cartCounter;
      //   " </p>";
      // valueHtml =
      //   '<p class="five-item" id="fiveItems">(' + counter + " items)</p>";
      // document.querySelector("#headOfCartDiv").innerHTML += valueHtml;
      // document.querySelector("#headOfCartDiv").innerHTML += priceHtml;
      // grossPriceHtml = "<p>Rs. " + grossPrice + "</p>";
      // document.querySelector("#grossPrice").innerHTML += grossPriceHtml;
      // priceDiffHtml = "<p>Rs. " + priceDifference + "</p>";
      // document.querySelector("#priceDifference").innerHTML += priceDiffHtml;
      // orderTotalHtml = "<p>Rs. " + totalPrice + "</p>";
      // document.querySelector("#totalAmount").innerHTML += orderTotalHtml;
      // totalAmounthtml = "<p>Rs. " + totalPrice + "</p>";
      // document.querySelector("#totalPrice").innerHTML += totalAmounthtml;
    });
}
loadProducts(productListUrl);

// document.querySelectorAll('[id^="productCard"]').forEach((productCard) => {
//   productCard.addEventListener("click", () => {
//     let xyz = uniqueData.indexOf(productCard.id);
//     console.log(xyz);
//     uniqueData = uniqueData.splice(xyz, 1);
//     console.log(uniqueData);
//   });
// });

//fetching the json from server
// let productIdArray = [];
// var productsList;
// let htmlReturn = "";
// let productCardUrl =
//   "https://my-json-server.typicode.com/mubarakhusain/fakeserver/db";
// async function loadProducts(productCardUrl) {
//   fetch("https://my-json-server.typicode.com/mubarakhusain/fakeserver/db")
//     .then((response) => response.json())
//     .then((json) => {
//       productsList = json;
//       productsList.products.forEach((product) => {
//         // console.log(product.new);
//         console.log(product.id);
//         productIdArray.push(product.id);
//         console.log(productIdArray);
//         htmlReturn =
//           "<div>" +
//           '<div class="cardOfProduct">' +
//           '<div class="Productimg">' +
//           '  <img src="https://user-images.githubusercontent.com/74973345/100615517-b5242a80-333d-11eb-8feb-b81610bf681a.png"' +
//           '       class="" alt="Product-1">' +
//           "</div>" +
//           '<div class="informationOfProduct">' +
//           "  <p>roduct details</p>" +
//           " <p>color : white </p>" +
//           "  <p>Sold by: The Designer private limited</p>" +
//           '  <div class="btn-size-qty">' +
//           '<div class="dropdown">' +
//           '<button class="btn btn-secondary dropdown-toggle btn-size-of-prd" type="button"' +
//           '    id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">' +
//           "     Size: one size" +
//           " </button>" +
//           '   <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">' +
//           '        <li><a class="dropdown-item" href="#">Size two</a></li>' +
//           '         <li><a class="dropdown-item" href="#">Size three</a></li>' +
//           '          <li><a class="dropdown-item" href="#">Size four</a></li>' +
//           "       </ul>" +
//           "    </div>" +
//           '     <div class="dropdown">' +
//           '          <button class="btn btn-secondary dropdown-toggle btn-qty" type="button"' +
//           '               id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">' +
//           "                QTY: 1" +
//           "             </button>" +
//           '              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">' +
//           '                   <li><a class="dropdown-item" href="#">2</a></li>' +
//           '                    <li><a class="dropdown-item" href="#">3</a></li>' +
//           '                     <li><a class="dropdown-item" href="#">4</a></li>' +
//           "                  </ul>" +
//           "               </div>" +
//           "            </div>" +
//           "        </div>" +
//           '        <div class="finalPriceWithOffer">' +
//           "            <p>Rs. 2099</p>" +
//           '            <div class="price-n-offer">' +
//           "                <p>Rs. 3599</p>" +
//           "                <P>(60% OFF)</P>" +
//           "            </div>" +
//           "            <p>Delivery in 4-6 days</p>" +
//           "        </div>" +
//           "   </div>" +
//           '    <div class="sideCard">' +
//           "        <p>Remove</p>" +
//           "        <pre></pre>" +
//           "       <p>Move To Wishlist </p>" +
//           "    </div>" +
//           "</div>";
//         if (resultOfStorage.indexOf(product.id) !== -1) {
//           console.log("Value exists!");
//         } else {
//           console.log("Value does not exists!");
//         }
//         //This is to append the HTML card
//       });
//     });
//   /*fetch("https://my-json-server.typicode.com/mubarakhusain/fakeserver/db")
//             .then((response) => response.json())
//             .then((json) => {
//               return json;
//             });*/
// }
// loadProducts(productCardUrl);
