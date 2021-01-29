/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key) {
    const newArr = arr.reduce(function(acc, curval, i, arr) {
        //return the value of the current key from the accumulator
        return acc.concat(curval[key]);
    }, []); //set initial value to an empty array
    return newArr;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
//not working
function vowelCount(str) {
    const newStr = str.toLowerCase().split('');
    const vowels = 'aeiou';
    let counter = 0;
    const newObj = newStr.reduce(function(acc, curval, i, arr) {
        //confirm the current value exists in vowels
        if (vowels.indexOf(curval) !== -1) {
            //check if current value already exists in our accumulator
            if (acc[curval]) {
                //if the value already exists, increment the count in that value
                acc[curval]++;
             } else {
                 acc[curval] = 1;
             }
        }
        return acc;
    }, {});
    return newObj;
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/
function addKeyAndValue(arr, key, value) {
    const newArr = arr.reduce(function(acc, curval, i, arr) {
        //assign the new key/value object to our current object iteration [i]
        //this object will be one of the values of our initial array
        acc[i][key] = value;
        //return the accumulator with new value appended
        return acc;
    }, arr); //set the initial accumulator value to the array
    return newArr;
}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {
    const newArr = arr.reduce(function(acc, curval, i, arr) {
        if (callback(curval)) {
            //if the callback is true, push the current value to our first array.
            acc[0].push(curval);
        } else {
            //if the callback is false, push the current value to our second array.
            acc[1].push(curval);
        }
        return acc;
    }, [[],[]]); //initialize our accumulator to an empty array that contains two empty arrays. One array for true values and the other for false values.
    console.log(newArr);
    return newArr;
}