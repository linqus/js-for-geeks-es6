let food = {};

food.italian = 'gelato';
food.mexican = 'torta';
food.canadian = 'poutine';

console.log(food.italian);

let foods = new WeakMap();
foods.set(['italian'], 'gelato');
foods.set(['mexican'], 'torta');
foods.set(['canadian'], 'poutine');
foods.set([food],'nic');
console.log(foods);
console.log(foods.has([]), foods.get([food]));
