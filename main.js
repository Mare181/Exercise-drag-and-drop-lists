//element, ki ga lahko prestavimo
const elements = document.querySelectorAll('.element')
	
//obomočje kjer lahko odložimo elemente
const columns = document.querySelectorAll('.column')
	
//za elemente, ki jih lahko prestavimo, čakamo dogodka
//dragstart, ko začnemo premikati element in
//dragend, ko izpustimo element, ki smo ga premikali
elements.forEach(element => {
	element.addEventListener('dragstart', dragStart)
	element.addEventListener('dragend', dragEnd)
});

//za območja, kamor lahko odložimo elemente, čakamo dogodke
//dragover, ko z miško prečkamo območje, kjer lahko izpustimo element
//dragenter, ko se z miško premaknemo v območje, kjer lahko izpustimo element
//dragleave, ko z miško zapustimo območje, kjer lahko izpustimo elemente
columns.forEach(column => {
	column.addEventListener('dragover', dragOver);
	column.addEventListener('dragenter', dragEnter);
	column.addEventListener('dragleave', dragLeave);
	column.addEventListener('drop', dragDrop);
});

//funkcija dragEnter
function dragEnter() {
}
	
//funkcija dragLeave
function dragLeave() {
}

//funkcija dragDrop
function dragDrop() {
}

//funkcija dragOver
function dragOver(e) {
	e.preventDefault()
}

let dragElement = null;

//funkcija dragStart, ki naredi element, ki ga vlečemo neviden
function dragStart() {
	dragElement = this;
	setTimeout(() => this.className = 'invisible', 0)
}

//funkcija dragEnd, ki postavi element, ki smo ga vlekli na novo mesto
//in izpiše vse elemente iz obeh seznamov
function dragEnd() {
	this.className = 'element'
	dragElement = null;
	
	//izbris prejšnjih izpisov elementov v listu 1
	var izbris = document.getElementById('tekst1');
	while(izbris.firstChild){
		izbris.removeChild(izbris.firstChild);
	}
	
	//izpis trenutnih elementov v listu 1
	var izpisTeksta1 = document.getElementById("tekst1");
	var elementiLista1 = document.getElementById("list1").querySelectorAll(".element");
	for(let i = 0; i< elementiLista1.length; i++){
		izpisTeksta1.innerText += elementiLista1[i].innerText;
	}
	
	//izbris prejšnjih izpisov elementov v listu 2
	var izbris2 = document.getElementById('tekst2');
	while(izbris2.firstChild){
		izbris2.removeChild(izbris2.firstChild);
	}
	
	//izpis trenutnih elementov v listu 2
	var izpisTeksta2 = document.getElementById("tekst2");
	var elementiLista2 = document.getElementById("list2").querySelectorAll(".element");
	for(let i = 0; i< elementiLista2.length; i++){
		izpisTeksta2.innerText += elementiLista2[i].innerText;
	}
}

//funkcija dragDrop
function dragDrop() {
	this.append(dragElement);
}

//izpis elementov v listu 1 ob nalaganju strani
var izpisTeksta1 = document.getElementById("tekst1");
var elementiLista1 = document.getElementById("list1").querySelectorAll(".element");
for(let i = 0; i< elementiLista1.length; i++){
	izpisTeksta1.innerText += elementiLista1[i].innerText;
}

//izpis elementov v listu 2 ob nalaganju strani
var izpisTeksta2 = document.getElementById("tekst2");
var elementiLista2 = document.getElementById("list2").querySelectorAll(".element");
for(let i = 0; i< elementiLista2.length; i++){
	izpisTeksta2.innerText += elementiLista2[i].innerText;
}