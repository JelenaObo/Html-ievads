console.log("*******ADVANCED******");

console.log("1"+"1"+"1");//111
console.log("1"+"1"-"1");//10

var masivs = [1,2,3,4];
console.log(masivs);
console.log(typeof (masivs));

masivs = ["12", "32", true,4];
console.log(masivs);
console.log(masivs[1]);
console.log(masivs[3]);

masivs[2] = null;
console.log(masivs);

console.log(masivs[0]==masivs[3]);//false

var objekts = [{
    name:"Rolands",
    age: 22},
]
console.log(objekts);

console.log(objekts[0]);

var objekts = [
    {
    name:"Rolands",
    age: 22}, 
    {
        name:"Peteris",
        age:22},  
]
console.log(objekts);
console.log(objekts[0]);
console.log(objekts[0].name);

console.log(typeof(objekts));
console.log(typeof(objekts[0]));
console.log(typeof(objekts[0].name));
console.log(typeof(objekts[0].age));

// CASE SENSITIVE

var var1 = 2;
var Var1 = 10;
console.log(var1); //2
console.log(Var1); //10

var sisIrMansMainigais = "camelCase";

// Conditions

var condition = false;

if(condition){
    console.log("This is True");
} else{
    console.log("This is False");
}

var time = 12;

if(time>12){
    console.log("Pecpusdiena");
} else if (time==12){
    console.log("Ir 12");
}else{
    console.log("Priekspusdiena");
}
// Conditions SWITCH - atrod vajadzigo case un izpilda no sis vietas visu lidz galam, tapec liek break

switch(time){
    case 10:
        console.log("Ir 10")
        break;
        case 11:
            console.log("Ir 11")
            break;
            case 12:
                console.log("Ir 12")
                break;
                case 13:
                    console.log("Ir 13")
                    break;
                    default:
                        console.log("Tada laika nav")
                        break;
}


// CIKLI
// IF


for(var i=0; i<5; i++){
console.log("i = "+i)
}
for(var i=0; i<5; i=i+2){
    console.log("i = "+i)
    }
for(var i=1; i !=6; i++){
        console.log("i = "+i)
        }
for(var i=0; i<2; i++){
for(var j=0; j<4; j++){
    console.log(i+"*"+j+"="+i*j)
}

console.log(i);
}

var masivs = [4,3,2,1,0];
for(i=0; i<masivs.length; i++){
    console.log(masivs[i]);
}

for(var i =0; i<5; i++){
    if (i==1){
        console.log(i)
    }
    console.log(i);
} // 0, 1, 1, 2, 3, 4

for(var i =0; i<5; i++){
    if (i==1){
        break;
    }
    console.log(i);
} //0

for(var i =0; i<5; i++){
    if (i==1){
        continue;
    }
    console.log(i);
} //0, 2, 3, 4

// WHILE


var i =0;
while(i<5){
    console.log(i);
    i++;
} //0, 1, 2, 3, 4

// var i=0;
// do{
//     console.log(i)
//     i++;
// } while (1<5) //0, 1, 2, 3, 4




// Types and Competences

var a=5;
var b=10;
console.log(a);//5
console.log(b);//10
b=a;
console.log(b);//5
a=12;
console.log(a);//12
console.log(b);//5

// pointers

var masivs = [1,2,3];
console.log(typeof masivs); //object
console.log(masivs);//1,2,3

var masivsB = masivs;
console.log(masivsB); // 1,2,3

masivs.push(4);
console.log(masivs);//1,2,3,4
console.log(masivsB);//1,2,3,4

masivs[0] = 2;
console.log(masivs); //2,2,3,4
console.log(masivsB);//2,2,3,4

masivs = [0,1];
console.log(masivs); //0,1
console.log(masivsB); //2,2,3,4

// Functions

function funkcija(input){
    console.log("Musu funkcija");
    input = input *2;
    return input;
}

funkcija(2);
console.log(funkcija(4));
console.log(funkcija(6));

(function calc(){
    var number = 10;
    console.log("esam funkcija");
    console.log(number);
}) ();

(function calc2(input){
    var number = 10;
    input = input*number;
    console.log(input);
}) (2)

// SCOPES
console.log("SCOPES")

var number = 10;
(function calc(input){
    var number = 20;
    input = input + number;
    console.log(input);
    console.log("Number:" + number)
}) (10)
console.log("Number:" + number)

var number = 10;

(function calc(input){
    var number = 20;
    input = input + this.number;
    console.log(input);
    console.log("Number:" + number);
  //  var that = this   
}) (10)
console.log("Number:" + number)


// arguments

function message(message){
    console.log(message);

    console.log(arguments)
    console.log(arguments[2]);
    for (i=1; i< arguments.length; i++){
        console.log(arguments[i]);
    }
}
message("hi1", "hi2", "hi3");

