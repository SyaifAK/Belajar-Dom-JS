//menambahkan paragraph ke section A dengan appen child
const pBaru = document.createElement("p");
const textpBaru = document.createTextNode("paragraph baru");
pBaru.appendChild(textpBaru);
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

//menambhkan list ke section B dengan insert before
const listBaru = document.createElement("li");
const textList = document.createTextNode("ini list baru");
listBaru.appendChild(textList);
const ul = document.querySelector("section#b ul");
const li = document.querySelector("section#b ul li:nth-child(2)");
ul.insertBefore(listBaru, li);

//remove link
const link = document.querySelector("section#a a");
sectionA.removeChild(link);

//replace
const sectionB = document.getElementById("b");
const p4 = document.querySelector("section#b p");
const hBaru = document.createElement("p");
const textHbaru = document.createTextNode("ini paragraph baru");
hBaru.appendChild(textHbaru);
sectionB.replaceChild(hBaru, p4);

//tanda apa aja yang diubah menggunakan dom
pBaru.style.backgroundColor = "blue";
listBaru.style.backgroundColor = "lightblue";
hBaru.style.backgroundColor = "yellow";
