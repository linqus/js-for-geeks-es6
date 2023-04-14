let printThreeThings = function(thing1, thing2, thing3) {
    console.log(thing1,thing2, thing3);

}

let yummyThings = ['pizza', 'burrito', 'bigos', 'cheesburger'];
let greatThings = ['swimming', 'sunsets', ...yummyThings, 'New Orleans'];

let copyOfGreatThings = [...greatThings]; //true copy
copyOfGreatThings.push('summer');
//printThreeThings(3,'a',[4,3]);
console.log(greatThings, copyOfGreatThings);

//printThreeThings('lody',...yummyThings);