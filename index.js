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
    console.log('INSIDE TWICE', func);
    function addNum(num) {
        console.log('INSIDE ADDNUM', num);
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

hof.composeb = function() {};

hof.limit = function() {};

hof.from = function() {};

hof.to = function() {};

hof.fromTo = function() {};

hof.element = function() {};

hof.collect = function() {};

hof.filter = function() {};

hof.concat = function() {};

hof.fibonaccif = function() {};

hof.gensymf = function() {};

hof.gensymff = function() {};

hof.counter = function() {};

hof.revokable = function() {};

module.exports = hof;
