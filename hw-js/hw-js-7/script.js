//1//
// const awaitDelay = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

// (async function() {
//   const myWindow = window.open('', '', 'width=300,height=300');
//   await awaitDelay(2000);
//   myWindow.resizeTo(500, 500);
//   await awaitDelay(2000);
//   myWindow.moveTo(200, 200);
//   await awaitDelay(2000);
//   myWindow.close();
// })();

//2//
// function changeCSS() {
//     const textElement = document.querySelector('#text');
//     textElement.style.cssText = 'color: orange; font-size: 20px; font-family: Comic Sans MS;';
//   }
  
//   document.querySelector('button').addEventListener('click', changeCSS);

//3//
// const body = document.body;
// const btn1 = document.querySelector('#btn1');
// const btn2 = document.querySelector('#btn2');
// const btn3 = document.querySelector('#btn3');
// const link = document.querySelector('#link');

// btn1.onclick = () => body.style.backgroundColor = 'blue';
// btn2.ondblclick = () => body.style.backgroundColor = 'pink';
// btn3.onmousedown = () => body.style.backgroundColor = 'brown';
// btn3.onmouseup = () => body.style.backgroundColor = 'white';
// link.onmouseover = () => body.style.backgroundColor = 'yellow';
// link.onmouseout = () => body.style.backgroundColor = 'white';

//4//
// const removeBtn = document.querySelector('#removeBtn');
// const mySelect = document.querySelector('#mySelect');

// removeBtn.onclick = () => mySelect.removeChild(mySelect.options[mySelect.selectedIndex]);

//5//
// const button = document.querySelector('#myButton');
// const message = document.querySelector('#message');

// button.addEventListener('click', () => {
//   message.innerHTML = "I was pressed!";
// });

// button.addEventListener('mouseover', () => {
//   message.innerHTML = "Mouse on me!";
// });

// button.addEventListener('mouseout', () => {
//   message.innerHTML = "Mouse is not on me!";
// });

//6//
// const widthSpan = document.getElementById('width');
// const heightSpan = document.getElementById('height');

// function updateWindowSize() {
//   const width = window.innerWidth;
//   const height = window.innerHeight;
//   widthSpan.innerText = width;
//   heightSpan.innerText = height;
// }

// window.addEventListener('resize', updateWindowSize);

//7//
const citiesByCountry = {
    ger: ["Berlin", "Munich", "Frankfurt"],
    usa: ["New York", "Los Angeles", "Chicago"],
    ukr: ["Kyiv", "Lviv", "Odesa"],
  };
  
  const countrySelect = document.getElementById("country");
  const citiesSelect = document.getElementById("cities");
  const output = document.querySelector("p");
  
  countrySelect.addEventListener("change", function() {
    const country = this.value;
    const cities = citiesByCountry[country];
  
    citiesSelect.innerHTML = "";
  
    cities.forEach(function(city) {
      const option = document.createElement("option");
      option.value = city;
      option.text = city;
      citiesSelect.add(option);
    });
  
    const selectedCountry = countrySelect.options[countrySelect.selectedIndex].text;
    const selectedCity = citiesSelect.options[citiesSelect.selectedIndex].text;
    output.textContent = `Selected country: ${selectedCountry}, city: ${selectedCity}`;
  });