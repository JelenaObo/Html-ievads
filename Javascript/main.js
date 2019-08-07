console.log("test")

var yes = true;
console.log(yes);

console.log(typeof (yes));

var no = "true";
console.log(typeof(no));

var nepaties = false;

var a = 12;
// var b = undefined;
var b;
console.log(a+b);//NaN== Not a number

b = null;
console.log(a+b);//12

a = "seko man";
b = "man";
console.log(a+b); //NaN

a = 12;
b = "2";
console.log(a-b) //10
console.log(a+b) //122
console.log(a*b) //24

a =10;
b=0;
console.log(a/b); //Infinity
console.log(10/Infinity); //0

//Salidzinasanas

console.log(1==1); //true
console.log(1==true); //true (parbauda tikai vertibu)
console.log(1 === true); //false (parbauda gan vertibu, gan tipu)
console.log(1 == "1"); //true
console.log(1 === "1"); //false

console.log(1 != 2); //true
console.log(1 !== 2);//true
console.log(1 !== "2");//true
console.log(1 != 1); //false
console.log(1 != "1"); //false
console.log(1 !== "1"); //true

console.log(1 > 2);//false
console.log(1 > 0);//true
console.log(1 >= 1);//true
console.log(1 <= 1);//true
console.log(1 > "0");//true
console.log(true > false);//true

console.log(NaN == NaN);// false
console.log(NaN != NaN);// true

console.log(0 == null); //false
console.log(null == null); // true

console.log(Infinity == Infinity); //true

console.log(2*null); //0
console.log(undefined == null)//true
console.log(undefined === null)//false

console.log(0 == null); //false
console.log(0 == undefined); //false
console.log(undefined == null); //true
console.log(0 == false); //true
console.log(false == null); //false

console.log(0 == false);
console.log(false == "0");
console.log(0 === 0);


