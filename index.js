const { number } = require("yargs");

const hof = {};

hof.identity = function(arg) { 
    return arg;
};

hof.identityf = function(arg) {
    function returnArgument() {
        return arg;
    }
    return returnArgument;
};

hof.add = function(a, b) {
    return a + b;
};

hof.sub = function(a, b) {
    return a-b;
};

hof.mul = function(a, b) {
    return a * b;
};



hof.inc = function (num) {
return hof.add (1, num)
}



 hof.addf = function (value) {
    function add(num) {
        return num + value;
    }
    return add;
}


hof.curry = function(name, num) {
        function insideFunc (value) {
           return name(num,value)
        }
    return insideFunc
};


hof.liftf = function(func) {
     function addFirstNum(a) {
        function addSecondNum(b) {
            return func(a,b);
        }
        return addSecondNum;
     }
     return addFirstNum;
};

// let firstCall = hof.liftf(hof.add);
// console.log(firstCall);
// let secondCall = firstCall(1);
// console.log(secondCall);
// let thirdCall = secondCall(3);
// console.log(thirdCall);

hof.twice = function(func) {
    function addNum(num) {
       
        return func(num, num);
    }
    return addNum;
};

// let firstCall = hof.twice(hof.add); //addNum
// let secondCall = firstCall(3);



hof.composeu = function(func1, func2) {
    function addNum(num) {
        let result1 = func1(num);
        let result2 = func2(result1);
        return result2;
    }
    return addNum;
};

hof.composeb = function(func1, func2) {
    function innerFunc (a, b, c) {
       let func1Result = func1(a,b) 
       let func2Result = func2(func1Result, c)
       return func2Result
    }
    return innerFunc
};

hof.limit = function(func, limitNum) {
    let count = 0
    function innerFunc (a, b) {
        if(count < limitNum) {
            count++
            return func(a,b)
        }
    }
    return innerFunc
};

hof.from = function(num) {
    let count = num
    function innerFunc () {
            count++
            return count-1
        }
    return innerFunc
};

hof.to = function(index, num) {
let maxValue = num
    function innerFunc () {
        let generatedVales = index()
        if (generatedVales < maxValue) {
            return generatedVales
        }
    }
    return innerFunc
};



hof.fromTo = function(a, b) {
    let counter = a
    let maxValue = b
        function innerFunc () {
            if (counter < maxValue) {
            counter++ 
            return counter -1
            }
        }
        return innerFunc
};

hof.element = function(arr, generator = hof.fromTo(0, arr.length)) {
        function innerFunc () {
            let index = generator()
            
        
            return arr[index]
    }
    return innerFunc
};

hof.collect = function() {};

hof.filter = function() {};

hof.concat = function() {};

hof.fibonaccif = function() {};

hof.gensymf = function() {};

hof.gensymff = function() {};

hof.counter = function() {};

hof.revokable = function() {};

module.exports = hof;
