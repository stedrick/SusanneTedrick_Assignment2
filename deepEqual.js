function DeepEqual(x, y) {
//tests if both variables are equal(strict)
    if (x === y) {
        return true;
    }
//tests both variables are null and are "object" and returns false if they are
    if (x == null || typeof x != "object" ||
        y == null || typeof y != "object") {
        return false;
    }
//to hold the attributes of both variables (a "counter")
    var atrx = 0, atry = 0;
//loop to test and compare attributes of both variables
    for (var atr in x) {
        atrx += 1;
    }
    for (var atr in y) {
        atry += 1;
        if (!(atr in x) || !DeepEqual(x[atr], y[atr])) {
            return false;//mismatch is present
        }
    }
    return atrx == atry
}
//code supplied by Eloquent JS, to test overall code
var obj = {here: {is: "an"}, object: 2};
console.log(DeepEqual(obj, obj));
//true - both instances are exactly the same
console.log(DeepEqual(obj, {here: 1, object: 2}));
//false - the second argument is different than the first
console.log(DeepEqual(obj, {here: {is: "an"}, object: 2}));
//true - both instances are exactly the same