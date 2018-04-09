// what will the console show?

var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};
logIt(); // undefined
