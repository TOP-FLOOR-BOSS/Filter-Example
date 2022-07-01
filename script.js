localStorage.setItem( 'property' , JSON.stringify(properties = [{
    id: 1,
    Suite: 'House',
    location: 'Italy',
    URL1: "/imgs/Italy Aprtment.jpg",
    bedrooms: 5, 
    price: 900000
  },
{
  id: 2,
  Suite: 'House',
  location: 'Spain',
  URL2: "/imgs/Spain House.webp",
  bedrooms: 6, 
  price: 1000000

},
{
  id: 3,
  Suite: 'House',
  location: 'Brazil',
  URL3: "/imgs/Brazil House.webp",
  bedrooms: 8, 
  price: 1000000

},
{
  id: 4,
  Suite: 'Apartment',
  location: 'Strandfontein',
  URL4: "/imgs/Superior-apartments-Waterfront.webp",
  bedrooms: 7, 
  price: 1000000

},
{
  id: 5,
  Suite: 'Apartment',
  location: 'Portugal',
  URL5: "/imgs/Apartm`ent in Portugal.jpeg",
  bedrooms: 4, 
  price: 1000000
},
{
  id: 6,
  Suite: 'House',
  location: 'Greece',
  URL6: "/imgs/Greece house.webp",
  bedrooms: 5, 
  price: 1000000
},
{
  id: 7,
  Suite: 'Apartment',
  location: 'Dubai',
  URL7: "/imgs/Dubai Apartment.jpg",
  bedrooms: 3, 
  price: 1000000
},
{
  id: 8,
  Suite: 'House',
  location: 'Australia',
  URL8: "/imgs/Australia House.webp",
  bedrooms: 4, 
  price: 1000000
},
{
  id: 9,
  Suite: 'House',
  location: 'Germany',
  URL9: "/imgs/Germany House.jpg",
  bedrooms: 7, 
  price: 1000000
},
{
  id: 10,
  Suite: 'House',
  location: 'Paris',
  URL10: "/imgs/France2 House.jpg",
  bedrooms: 7, 
  price: 1000000
}
]))


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



const btns = document.querySelectorAll('.btn');
const storeProducts = document.querySelectorAll('.store-product');
// const search = document.getElementById(search);

for (i = 0; i < btns.length; i++) {

    btns[i].addEventListener('click', (e) => {
        e.preventDefault()
        
        const filter = e.target.dataset.filter;
        console.log(filter);
        
        storeProducts.forEach((product)=> {
            if (filter === 'all'){
                product.style.display = 'block'
            } else {
                if (product.classList.contains(filter)){
                    product.style.display = 'block'
                } else {
                    product.style.display = 'none'
                }
            }
        });
    });
};

// SEARCH FILTER
const search = document.getElementById("search");
const productName = document.querySelectorAll(".product-details h2");

// A BETTER WAY TO FILTER THROUGH THE PRODUCTS
search.addEventListener("keyup", filterProducts);


function filterProducts(e) {
    const text = e.target.value.toLowerCase();
    // console.log(productName[0]);
    productName.forEach(function(product) {
        const item = product.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            product.parentElement.parentElement.style.display = "block"
        } else {
            product.parentElement.parentElement.style.display = "none"
        }
    })
}



// This code has been replaced by the function(filterProducts) above which does a better job

// search.addEventListener("keyup", (e) => {
//     e.preventDefault();
//     const searchValue = search.value.toLowerCase().trim();
//     // alert(search.value);

    
//     for (i = 0; i < storeProducts.length; i++) {
//         if (storeProducts[i].classList.contains(searchValue)) {
//             storeProducts[i].style.display = 'block';
//         } else if (searchValue == "") {
//             storeProducts[i].style.display = 'block';
//         } else {
//             storeProducts[i].style.display = 'none';    
//         }

//     //    if (searchValue == "") {
//     //     storeProducts[i].style.display = 'block';
//     //    }
        
//     }

// })
