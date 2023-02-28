let numbers = [1,2,3,4,5];

//myMap
Array.prototype.myMap = function (func){
    const arr = this;
    const result = new Array;
    for(let i = 0; i < arr.length; i++){
        const temp = func(arr[i]);
        result.push(temp);
    }
    return result;
}
const myMapRes = numbers.myMap((number) => { return number * 10});
console.log("myMap result: " + myMapRes);
//map
const mapRes = numbers.map((number) => (number * 10));
console.log("map result: " + mapRes);




//myReduce
Array.prototype.myReduce = function(func,initialValue){
    const arr = this;
    let res = initialValue;
    for(let i = 0; i < arr.length; i++){
        res = func(res,arr[i]);
    }
    return res;
}
initialValue = 0;
//myReduce
const myReduceRes = numbers.myReduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
console.log("reduce result: " + myReduceRes);

//reduce
const reduceRes = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
console.log("reduce result: " + reduceRes);
