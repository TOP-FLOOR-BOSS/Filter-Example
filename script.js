let properties = JSON.parse(localStorage.getItem("property"))
  ? JSON.parse(localStorage.getItem("property"))
  : localStorage.setItem(
      "property",
      JSON.stringify([
        {
          id: 1,
          Suite: "Top floor apartment in hghgh ,",
          location: "Italy",
          URL: "/Images/Italy Aprtment.jpg",
          bedrooms: 5,
          price: "$5000",
          filterr: "shirt",
          filterr: "jewelry"

        },
        {
          id: 2,
          Suite: "Mansion with 8 bedrooms, ",
          location: "Spain",
          URL: "/Images/Spain House.webp",
          bedrooms: 6,
          price: "$3,631,00",
          filterr: "watch",
          filterr: "gown"
        },
        {
          id: 3,
          Suite: "Luxury villa in Rio, for the ballers,",
          location: "Brazil",
          URL: "/Images/Brazil House.webp",
          bedrooms: 8,
          price: "6,000,000",
          filterr: "watch",
          filterr: "gown"
        },
        {
          id: 4,
          Suite: "Top floor apartment in Cape Town near all the fun,",
          location: "Strandfontein",
          URL: "/Images/Superior-apartments-Waterfront.webp",
          bedrooms: 7,
          price: "$8900,0",
          filterr: "shirt",
          filterr: "jewelry"
        },
        {
          id: 5,
          Suite: "Brand New 3 Bedroom Apartment For Sale in Porto, ",
          location: "Portugal",
          URL: "/Images/Apartm`ent in Portugal.jpeg",
          bedrooms: 4,
          price: "$4,000,00",
          filterr: "shirt",
          filterr: "jewelry"
        },
        {
          id: 6,
          Suite: "Beutiful home Athens,",
          location: "Greece",
          URL: "/Images/Greece house.webp",
          bedrooms: 5,
          price: "$4,000,00",
          filterr: "watch",
          filterr: "gown"
        },
        {
          id: 7,
          Suite: "House with close to the forest",
          location: "Australia",
          URL: "/Images/Australia House.webp",
          bedrooms: 3,
          price: "$5,050,05",
          filterr: "watch",
          filterr: "gown"
        },
        {
          id: 8,
          Suite: "House on the lake,",
          location: "France",
          URL: "/Images/France2 House.jpg",
          bedrooms: 4,
          price: "$4,006,00",
          filterr: "watch",
          filterr: "gown"

        },
        {
          id: 9,
          Suite: "5 Bedroom cozy home in berlin,",
          location: "Germany",
          URL: "/Images/Germany House.jpg",
          bedrooms: 7,
          price: "$4,000,00",
          filterr: "watch",
          filterr: "gown"

        },
        {
          id: 10,
          Suite: "2 Bedroom Apartment, with a street parking,",
          location: "Paris",
          URL: "/Images/Apartment Pariee.jpg",
          bedrooms: 7,
          price: "$4000,0",
          filterr: "jewelry",
          filterr: "shirt"

        },
      ])
    );
localStorage.setItem('property', JSON.stringify(properties));
function getProperties() {
  document.getElementById("Proprtiezzzz").innerHTML = "";
  properties.forEach((property) => {
    document.getElementById("Proprtiezzzz").innerHTML += `
        
                    
        <div class="store-product  ${property.filterr} ${property.filterr}">
        <img src="${property.URL}" id="Portugal" alt="">
        <div class="product-details">
            <h2> ${property.Suite} <i class="fa-solid fa-location-dot"></i> ${property.location}</h2>
            <p>${property.price}</p>
            <a href="#">Add to Cart</a>
        </div>
        </div>
   `;
  });
}

getProperties(properties);

// Eees=============================================================================================================

//Search Function
function theFunction() {
  var input, filter, ul, li, a, p;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");
  for (p = 0; p < li.length; p++) {
    a = li[p].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[p].style.display = "";
    } else {
      li[p].style.display = "none";
    }
  }
}

const btns = document.querySelectorAll(".btn");
const storeProducts = document.querySelectorAll(".store-product");
// const search = document.getElementById(search);

for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    e.preventDefault();

    const filter = e.target.dataset.filter;
    console.log(filter);

    storeProducts.forEach((product) => {
      if (filter === "all") {
        product.style.display = "block";
      } else {
        if (product.classList.contains(filter)) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      }
    });
  });
}

// SEARCH FILTER
const search = document.getElementById("search");
const productName = document.querySelectorAll(".product-details h2");

// A BETTER WAY TO FILTER THROUGH THE PRODUCTS
search.addEventListener("keyup", filterProducts);

function filterProducts(e) {
  const text = e.target.value.toLowerCase();
  // console.log(productName[0]);
  productName.forEach(function (product) {
    const item = product.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      product.parentElement.parentElement.style.display = "block";
    } else {
      product.parentElement.parentElement.style.display = "none";
    }
  });
}

