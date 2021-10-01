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


hof.liftf = function() {};

hof.twice = function() {};

hof.composeu = function() {};

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
