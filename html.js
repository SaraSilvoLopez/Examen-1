//1.crea un div

var div1 = document.createElement('div');


//2.crea un svg

document.createElementNS('http://www.w3.org/2000/svg','svg')


//3.agrega una clase al div creado en el punto 1

div1.classList.add('pink')  


//4.agrega un estilo que cambie la propiedad color al punto 1

div1.style.setProperty('color','green') 


//5. agrega un atributo id al punto 1

div1.setAttribute('id','sara') 

//6. crea un pagina en blanco y agrega al body el div con "hello world"

var text = document.createTextNode('hello World')
div1.appendChild(text)
document.body.appendChild(div1)


//7. crea un nuevo div y agregalo como hijo al punto 1 antes de "hello world"

var div2 = document.createElement('div')
div1.insertBefore(div2,text)

//8. dime los nodos que tiene el primer div

div1.childNodes


//9. dime los elementos que tiene el primer div

div1.children


//10. busca todos los div de la página

document.querySelectorAll('div')


//11. busca los div que contienen la clase agregada al punto 3

document.getElementsByClassName('red') 


//12. busca los div que tienen el id agregado en punto 5

document.getElementById('sara')

