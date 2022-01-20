(function(){

const writeMe = document.querySelector('.prueba');
const writeYou = document.querySelector('.contenedor');
const writeThree = document.querySelector('.contenedorTres');
const fragment = document.createDocumentFragment();
const array = ['pedro','juan','maria','jose','rita','alberto','barbara'];
const arrayDos = ['pera','banana','manzana','mango','uva','anon','guanavana'];
const arrayTres = ['toyota','mercedes-Benz','audi','bmw','honda','volkswagen','ford'];
array.sort();
arrayDos.sort();
arrayTres.sort();
var btn = document.querySelector('.fas');
var Contenedores = document.querySelectorAll('.contenedor-principal');



 Contenedores.forEach(contenedor => {
  contenedor.addEventListener('click', () => {
    
   contenedor.classList.toggle('active'); 
  });
 })
  
 





Array.prototype.parampampu = function(){
  
    for (i = 0; i < this.length; i++) {
      const paragrafo = document.createElement('P');
      paragrafo.innerHTML = `<u><b style = "color:red">${this[i].charAt(0).toUpperCase()}</b>${this[i].slice(1)}</u>`;
      fragment.appendChild(paragrafo);
    } 
}


/* for(elemento of array){
  
  let para = document.createElement('P');
  para.innerHTML =  `El nombre del sujeto es <u><b style = "color:red">${elemento.charAt(0).toUpperCase()}</b>${elemento.slice(1)}</u>`;
  fragment.appendChild(para);
  writeMe.appendChild(fragment);
 
} */


array.parampampu();
writeMe.appendChild(fragment);
arrayDos.parampampu();
writeYou.appendChild(fragment);
arrayTres.parampampu();
writeThree.appendChild(fragment);


//end

}());