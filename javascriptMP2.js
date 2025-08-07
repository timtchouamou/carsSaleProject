function openMenu() {
    document.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}

const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});


  
  // Fetch = function used for making HTTP requests to fecth resources.
  // (JSON Style data, images, files).
  // Simplifies asynchronous data fetching in JavaScript and.
  // user for interacting with APIs to retrieve and send data asynchronously.
  // over the web..
  //fetch(url, {options})

//   fetch(url,options)
        // .then(response => response.json()) // parse response as JSON
        // .then(response => console.log(response) )
        
        // .catch(err => {console.log(`error ${err}`)}); 
        // .catch(error => console.error(error))
        // .then(data => {
//           console.log(data)
//         })


let options = {
    method: 'GET',
    headers: { 'x-api-key': '35CKhj2b4+6T4CcWXVJIgQ==wqPLiPlyXi17eKTH' }
  }
  
  let url = 'https://api.api-ninjas.com/v1/cars?model=camry'
  
async function getCars() {
    const response = await fetch(url,options)
    console.log(response)
    const data = await response.json()
    console.log(data)

// resulsConatiner.innerHTML = data.map((car) => carHTML(car)).join(""),

}
getCars()

// 

function renderCars(filter) {
    const carsWrapper = document.querySelector('.cars');
    const cars = getCars()


    if(filter === 'make') {
        console.log(filter)
        cars.sort((a) => (a.make))
    }else
    if(filter === 'model') {
        cars.sort((a) => (a.model))

    }else
        if(filter === 'keyword') {
            cars.sort((a) => (a.value))
        }

        const carsHTML =  cars.map((car) =>{

            return ` <div class="wrapper">
        <div class="section__title">
            <h2 class="search--input">Search results: <span>${car.model}</span></h2>
            <p>Price range: <span> $0 to $100,000</span></p>
        </div>
        <div class="price-input">
            <div class="field">
                <span>Min</span>
          <input type="number" class="input-min" value="0">
        </div>
        <div class="separator">-</div>
        <div class="field">
            <span>Max</span>
          <input type="number" class="input-max" value="100000">
        </div>
    </div>
    
    <div class="slider">
        <div class="progress"></div>
    </div>
    
    <div class="range-input">
        <input type="range" class="range-min" min="0" max="10000" value="0" step="100">
        <input type="range" class="range-max" min="0" max="10000" value="10000" step="100">
    </div>
</div>`
        }).join("")

        carsWrapper.innerHTML = carsHTML;
        console.log(carsHTML)
}
renderCars(filter)





