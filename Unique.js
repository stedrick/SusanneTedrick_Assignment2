//set up two arrays - one unique, the other has two or more of the same elements
var x = ['a', 'b', 'c', 'a', 'b'];
var y = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

function IsUnique(word)
{
//loop to test if array is unique or not
    for (var i = 0; i < word.length; i++) {

        if (x[word[i]]) {

            return false;

        } else {

            x[word[i]] = true;
        }

        if (y[word[i]]) {

            return false;

        } else {

            y[word[i]] = true;
        }
    }

    return true;

}


//print out result of loop validation
console.log(IsUnique(x));
console.log(IsUnique(y));
