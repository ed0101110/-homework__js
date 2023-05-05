
//1//
function showModal() {
    // отримання списку та його елементів
    const list = document.getElementById("list");
    const items = list.getElementsByTagName("li");

    // встановлення вмісту елементів у модальному вікні
    document.getElementById("first").textContent = items[0].textContent;
    document.getElementById("last").textContent = items[items.length - 1].textContent;
    document.getElementById("second").textContent = items[1].textContent;
    document.getElementById("fourth").textContent = items[3].textContent;
    document.getElementById("third").textContent = items[2].textContent;

    // показ модального вікна
    const modal = document.getElementById("modal");
    modal.style.display = "block";
}

//2//
const header = document.querySelector("h1");
const myDiv = document.getElementById("myDiv");
const mylist = document.getElementById("myList");
const span = document.querySelector("span");

header.style.backgroundColor = "green";
header.style.textAlign = "center";

const firstP = document.querySelector("p");
const secondP = document.querySelectorAll("p")[1];
const thirdP = document.querySelectorAll("p")[2];
const fourthP = document.querySelectorAll("p")[3];

firstP.style.fontWeight = "bold";
secondP.style.color = "red";
thirdP.style.textDecoration = "underline";
fourthP.style.fontStyle = "italic";


const myList = document.getElementById("myList");
const liElements = myList.getElementsByTagName("li");

for (let i = 0; i < liElements.length; i++) {
    liElements[i].style.display = "inline";
}

const spanElement = document.querySelector("span");
spanElement.style.display = "none";

//3//
const body = document.querySelector('body');
const main = document.createElement('main');
const div = document.createElement('div');
const p = document.createElement('p');

main.setAttribute('class', 'mainClass check item');
div.id = 'myDiv';

p.textContent = 'First paragraph';

div.appendChild(p);
main.appendChild(div);
body.appendChild(main);

//4//
const submitBtn = document.querySelector('.btn');
const outBlock = document.querySelector('.out');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const formData = {};
    const inputs = document.querySelectorAll('.arr');

    inputs.forEach((input) => {
        formData[input.dataset.form] = input.value;
    });

    outBlock.textContent = JSON.stringify(formData);
});

//5//
const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
    const animClass = circle.getAttribute('data-anim');
    circle.classList.add(animClass);
});

//6//
const colors = document.querySelectorAll('.color');
const price = document.getElementById('outprice');

let currentPrice = 189.99;

colors.forEach(color => {
    color.addEventListener('click', () => {
        const newPrice = color.getAttribute('data-price');

        price.textContent = newPrice;

        currentPrice = newPrice;

        colors.forEach(c => c.classList.remove('active'));
        color.classList.add('active');
    });
});

