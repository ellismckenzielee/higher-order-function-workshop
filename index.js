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

function addOne () {
    let incrementor = 1;
    function add(num) {
        return num + incrementor;
    }
    return add;
}
let incrementor = addOne(); 

hof.inc = incrementor;

hof.addf = function() {};

hof.curry = function() {};

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
