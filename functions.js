// Function A
function isArmstrong(n){
"use strict"
n = String(n);
var sum = 0;
for(var i = 0; i < n.length; ++i){
	sum = sum + Math.pow(Number(n[i]), n.length);
}
if(n==sum)
	console.log("true");
else
	console.log("false");
}
isArmstrong(370)




// Function B
function check(n){
"use strict"
n = String(n);
var sum = 0;
for(var i = 0; i < n.length; ++i){
	sum = sum + Math.pow(Number(n[i]), n.length);
}
if(n==sum)
	return true;
else
	return false;
}

function allArmstrongs() {
var result = ""
  for (var a = 0; a < 99999; ++a) {
    if (check(a)) { 
    	result = result + a +" ";
    } 
  }
console.log(result);
}
allArmstrongs()




// Function C 
function allSubstrings1(n){
	var result = ""
	n = String(n);
for (var i = 0; i < n.length; ++i) {
        for (var z = i+1; z <= n.length; ++z) {
            result = result + (n.substring(i,z)) +",";
        }
    }
   console.log(result);
}
allSubstrings1("dog")





// Function D 
function allSubstrings2(n){
    var result = [];
    n = String(n);
for (var i = 0; i < n.length; ++i) {
        for (var z = i+1; z <= n.length; ++z) {
            array = (n.substring(i,z));
            result.push(array);
        }
    }
   console.log(result);
}
allSubstrings2("dog")



// Function E

function maxWord(s){
var n=s.split(" ")

var x= n.sort(function(a,b){return b.length-a.length});

console.log(x[0])
}
maxWord("the longest word is?")
