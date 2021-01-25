// Facil

function palindromo(a){


    let sentence = a;
    let reverse = a.split('').reverse().join('')
    if (sentence===reverse){
    console.log( a + ' es un palíndromo')
    }
    else {
    console.log( a + ' no es un palíndromo')
    }
    
}

palindromo('geeksforgeeksr')