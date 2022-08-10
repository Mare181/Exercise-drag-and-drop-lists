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
	console.log('drag entered');
}
	
//funkcija dragLeave
function dragLeave() {
	console.log('drag left');
}

//funkcija dragDrop
function dragDrop() {
	console.log('drag dropped');
}

//funkcija dragOver
function dragOver(e) {
	e.preventDefault()
	console.log('drag over');
}

let dragElement = null;

//funkcija dragStart, ki naredi element, ki ga vlečemo neviden
function dragStart() {
	console.log('drag started');
	dragElement = this;
	setTimeout(() => this.className = 'invisible', 0)
}

//funkcija dragEnd, ki postavi element, ki smo ga vlekli na novo mesto
//in izpiše vse elemente iz obeh seznamov
function dragEnd() {
	console.log('drag ended');
	this.className = 'element'
	dragElement = null;
}

//funkcija dragDrop
function dragDrop() {
	console.log('drag dropped');
	this.append(dragElement);
}