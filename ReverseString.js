function ReverseString(word){

    //using the string array to split up
    var word = word.split('');
    //using reverse array to chnage order of string
    var word = word.reverse();
    //using join array to reform the string
    var word = word.join('');
    return word;
}

console.log(ReverseString('reverse'));

//an error message will show if a null or undefined value is given. We can use a loop validation method to
//ensure that the value being passed in is not null and is a String.