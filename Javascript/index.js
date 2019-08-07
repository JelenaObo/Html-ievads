  // window.alert("Hello from JavaScript!")
  console.log("Hello from JavaScript!")
  // DATU TIPI
  // Integer, Double, String, Character, Booliean
  // number (float), null, undefined, object

  var nosaukums = "mans nosaukums";
  console.log(nosaukums); //mans nosaukums
  console.log(typeof(nosaukums));

  nosaukums = 8;
  console.log(nosaukums); //8
  console.log(typeof(nosaukums));

  const skolasNosaukums = "Riga Coding School";
  console.log(skolasNosaukums);
  // skolasNosaukums = "Rigas Programmesanas skola";

  let nosaukums_jauns = "Jauns nosaukums";
  console.log(nosaukums_jauns);

  var a;
  console.log(a);//undefined
  console.log(b);
  var b;

  a=7;
  console.log(a);//7
  b=a;
  console.log(b);//7
  console.log(a);//7

  console.log(a)
  console.log(b)

  console.log(a); console.log(b)

  var q=1;
  var w=2;
  var e="I'm a string";
  var e="I'm a s\"tring";
  console.log(e);
  q=q+1;
  console.log(q);//2
  w=w+5;
  console.log(w);//7
  e=e+" teksts";
console.log(e);// I'm a s\"tring teksts
  w=w + " teksts";
  console.log(w);//7 teksts

//Mathematics
var summa=10+5;
console.log(summa);//15
var navSumma = "10+5";
console.log(navSumma); //10+5
var minus = 10-5;
console.log(minus);//5
var multiply = 10 * 5;
console.log(multiply);//50
var divide = 66/3;
console.log(divide);//22

var inc = 3;
inc = inc + 1;
inc +=1;
console.log(inc);//5
inc++;
console.log(inc);//6
inc--;
console.log(inc);//5

var decimalNumbers = 5.6;
console.log(typeof(decimalNumbers));//floating number

var multiDecimal = 2.0*2.5;
console.log(multiDecimal);
var divdec = 4.4/2;
console.log(divdec);//2.2

var reminder = 11%3;
console.log(reminder);//2 - atlikums

//short
var r = 5;
r += 6; //11
r -= 3; //8
r *= 2; //16
r /= 4; //4

//operation with strings
var name = "this is string";
var myAge = "44";
var myName = `
red
text
goes
here
`;
console.log(myName);

name = name + " and that's cool!";
console.log(name);//this is string and that's cool!
name += " And this is fun!"
console.log(name);//this is string and that's cool! And this is fun!

var forss = "forss";
name = "Sis " + "teksts " + forss + "!";
console.log(name);//Sis teksts forss!

var qText = "man patik";
var wText = "macities";

qText = qText + " " + wText;
console.log(qText);// man patil macities

qText += wText;
console.log(qText);// man patik macitiesmacities

console.log(qText.length);//26 - simbolu skaits rinda

console.log(qText[0]);//m - pirmais simbols rinda

// qText[0] = "M"; tas nestrada

console.log(qText[qText.length-1]);//s - pedejais simbols rinda
console.log(qText[qText.length-4]);//t - ceturtais simbols no be