function forLoop(array){
  for (let i = 0; i < 25; i++)
  {
    if (i === 1) {
    array.push( `I am 1 strange loop.`);
    }
    else {
    array.push( `I am ${i} strange loops.`);
    }
  }
  return array;
}

function whileLoop(n){
  var countdown = n;
  while (countdown > 0) {
  console.log(--countdown);
}
return 'done';
}
<<<<<<< HEAD

function incrementVariable(i) {
  i = i + 1;
  return i;
}
do {
    console.log("I run once regardless");
} while (incrementVariable() < 5);
=======
>>>>>>> fb43cf13709224cd171a85c62d244f03048b3bd0
