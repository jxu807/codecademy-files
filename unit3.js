function unit3() {
	/*jshint multistr:true */

var text = "Hello, my name is Jess. I currently have a headache. Dogs, dogs, dogs. I know another girl called Jess.";
var myName = "Jess";

var hits = [];

for(var i = 0; i < text.length; i ++) {
    if (text[i] === "J") {
        for(var j = i; j < (i + myName.length); j ++) {
           hits.push(text[j]);
        }
    }
}

if (hits === 0) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
};
};