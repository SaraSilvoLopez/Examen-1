// Identifica palindromos a pesar de los espacios y las mayusculas.

function palindromo(a){

    if(typeof a!=='string'){
        console.log('Error, debe introducir una palabra o una frase')
    }
    else{
        let sentence = a;
        let sentenceFinal= a.toLowerCase().replace(/ /g,'');
        let reverse = sentenceFinal.split('').reverse().join('')
        if (sentenceFinal===reverse){
        console.log( a + ' es un palíndromo')
        }
        else {
        console.log( a + ' no es un palíndromo')
        }
    }
}
        
palindromo('Dabale arroz a la zorra el Abad')






