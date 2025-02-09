let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");
alert( a + b );
//+ before prompt immediately converts the value to a number


//The precision loss can cause both increase and decrease of a number,
//In this particular case the number becomes a tiny bit less,
//that’s why it rounded down.


function readNumber() {
    let num;
  
    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
}
  
alert(`Read: ${readNumber()}`);


//That’s because i would never equal 10


function random(min, max) {
    return min + Math.random() * (max - min);
}
  
alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );