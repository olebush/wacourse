
//В первых трех задачах добавить пользователю возможность ввести значения переменных.
//1. Вывести в консоль числа от 1 до n, где n - это произвольное целое число большее 1.
let n = prompt ('Введите значение переменной', 0);
consoleNumbers (n);
function consoleNumbers(n) {
   
    for (let i=1; i <= n; i++) {
        console.log(i);
    }
}

//2. Вывести в консоль простые числа от 1 до n.

let n = prompt ('Введите значение переменной', 0);
function isSimple(n) {
    for (let d = 2; d < n; d++) {
        if (n % d === 0) {
            return false;
        }
    }

    return true;
}

console.log (isSimple (n));


// 3.Вывести в консоль числа кратные k, в диапазоне от 1 до n. => in home (for)

let n = prompt ('Введите значение переменной', 0);
function multipleToK (n) {
   
let k=3;

    for (let i=1; i<n; i++) {
       if (n % k ==0) {
       return n;
       }
      else  return 'ошибочка вышла';

        }
    }
console.log (multipleToK (7));
console.log (multipleToK (3));
console.log (multipleToK (100));



//Задачи из Сodewars. https://www.codewars.com/users/olebush/completed_solutions

// Return the Missing Element

function getMissingElement(superImportantArray){

     let sum=0;
     for (let element of superImportantArray) {
     sum += element;
}
        return (45-sum);
 }

 //Add property to every object in array
 
 for (let i=0; i < questions.length; i++) {
 
     questions[i] = {
         ...questions[i],
         usersAnswer:null,
     }
 }

 // Find Your Villain Name

 function getVillainName(birthday){
   const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
   const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
 
  return "The " + m [birthday.getMonth()] + ' ' + d [(birthday.getDate()+'').substr(-1)];
 }


 //Take a Ten Minute Walk

 function isValidWalk(walk) {
   function count(let) {
     return walk.filter(function(i){return i==let;}).length;
   }
   return walk.length==10 && count('n')==count('s') && count('w')==count('e');
 }