function fectorial( numbers ) {
    let result = 1;
    for ( let i = numbers; i >= 1; i-- ) {
        result = result * i;
        console.log(i)
    }
    return result;
}

let fact = fectorial(5);
console.log('Fectorial Of : ', fact)