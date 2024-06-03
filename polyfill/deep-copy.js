/* deep copy

    rather than copying directly we can spread it this known as shallow copy
    
    In case of nested array shallow copy usign spread operator is not work
*/
let arr = [1, 2, 3, 4];
let arr2 = [1, 2, [3, 4]];

//  shallow copy
let brr = [...arr];

//  deep copy
let brr2 = JSON.parse(JSON.stringify(arr2));
brr.push(8);
brr2[2].push(9);
console.log(arr);
console.log(brr);
console.log(brr2);
