console.time();
let test = '123';
console.log(test);
console.info("as tu capter le message");
console.warn("Mais le voici, il faut attendre mon vieux !");
console.trace("ordre d'appel des fonctions");
console.timeEnd();
console.table(["cat","dog","bear","bird"]);

for(let i = 1; i <10;i++){
    console.count();
}

//chapter 3(cours)

//Déclaration

var firstName;

//initialisation

firstName = 1;

console.log(firstName);

var myVar, myVar2, myVar3;

myVar = 1;
myVar2 = 2;
myVar3 = 3;

console.log(myVar, myVar2, myVar3);

var name = "jean";

var name = "eric";

console.log(name);

let name1 = "jean";

console.log(name1);

//objet user en javascript

const user = {
    name : 'jean'
};
console.log(user);

//on ne peut pas réassigner un objet mais simplement en modifier sa valeur
user.name = "eric";

console.log(user);

//string
const name2 = "jean";
console.log(typeof name2);

//number
const age = 18;//on pourrai également mettre un nombre à virgule,cela ne changerai rien
console.log(typeof age);

//Null
const hobbies = null;
console.log(typeof hobbies);

//undefined
let action;
console.log(typeof action);

//symbole
let sym = Symbol();
console.log(typeof sym);

//boolean
let actif = true;
console.log(typeof actif);

//objet littéral
const cities = {
    name: "Paris",
    state: "France",
};
console.log(typeof cities);

//function
const greetings = function() {
    console.log("Hello");
};
console.log(typeof greetings);

//date
const today = new Date();
console.log(typeof today);

//array
const arr = [1,2,3];
console.log(typeof arr);


//les opérateurs 

let a = 2+2;
console.log(a);

let b = "Je suis " + "un test";
console.log(b);

let c = "Je suis " - "un test";
console.log(c);

let d = 2 + 2 * 5;
console.log(d);

let e = 1;
e++;
console.log(e);

let f = 1;
f--;
console.log(f);

let g = 18 % 5;

console.log(g);

//Convertion implicite : la coercion

let h = 1 + "Hello";
console.log(h);

let i = 1;
let j = true;
console.log(i+j);

let k = 1 ;
let m = 1;
console.log("true" == true);

console.log(!m);// en sortie => false

console.log(!!m);// en sortie => true, le double // est égale à l'inverse de /

let o = 1;
let p = o ;
console.log({ o, p });

p += 3;

console.log({o,p});

// const q = a;
// const r = p;

// console.log(o,p,q,r);


//if, else if , else

const nom = "";

if(nom === "jean") {
    console.log('salut '+ nom);
}else if(nom === "paul"){
    console.log('salut '+ nom);
}else {
    console.log("salut mecton !!!");
}

const age1 = 25;



const isMajor = age1 > 18 ? console.log("Je suis majeur car mon age est de " + age1 + " ans !") : console.log("je ne suis pas majeur car mon age est de "+ age1 + "ans !");


const roues = 8;

let vehiculeType = "";

switch(roues) {
    case 2 : 
        vehiculeType =  "moto";
        break;
    case 4 : 
        vehiculeType = "voiture";
        break;
    default: 
        vehiculeType = "camion";
        break;
}

console.log(vehiculeType);

for(let i = 0; i <= 5;i++) {
    console.log(i);
    if(i == 2){
        break;
    }
}
console.log("out");

console.log(Number("44"));

console.log(+"43");

const u = 1.55555;

const v = new Number(1);

console.log(u);

console.log(v);

console.log(u.toFixed(2));

const w = Number("123");

console.log(Number.isNaN(w));

const y = Math.pow(2, 3);
console.log(y);

const t = Math.PI;
console.log(t);

const s = Math.ceil(1.01);
console.log(s);

const tag = "je suis ";
const tag1 = "un homme de 45 ans";

console.log(tag + tag1);
const num = 55;
const jag = '';

const so = "soleil";

const lu = String(55);

const terre = new String('terre');
console.log(num);
console.log(so);
console.log(lu);//Le 55 n'est pas un nombre mais une chaine de caractère.
// On peut s'en apercevoir car la chaine de car 55 est grisé et non pas bleu dans la console
console.log(terre);

let rep = 42;
console.log(`La réponse est ${rep}`); // Gabarit simple avec la concaténation par défaut

function concatenationAdHoc(chaines, reponse) {
  let parite;
  if (reponse % 2 === 0) {
    parite = "paire";
  } else {
    parite = "impaire";
  }
  return `${chaines[0]}${parite}.`;
}
// concaténation spécifique où on modifie la sortie
console.log(concatenationAdHoc`La réponse est ${rep}.`);

const ab = "Terre";

console.log(ab[0]);
console.log(ab[1]);
console.log(ab[2]);
console.log(ab[3]);
console.log(ab[4]);

console.log(ab.length);
console.log(ab[ab.length -1]);

const sol = "je suis le soleil";
const sol1 = sol.endsWith("eil");
console.log(sol1);

const sol2 = sol.replace("suis","ne suis pas");
console.log(sol2);
console.log(sol);

const sol3 = sol.slice(0, sol.length);
console.log(sol3);
const sol4 = sol.toUpperCase("je suis le soleil");
console.log(sol4);
const sol5 = sol.includes("soleil");//return true car la chaine de car sol est 
// présente dans la primitive sol
console.log(sol5);
const sol6 = sol.charAt(2);
console.log(sol6);
const sol7 = sol.lastIndexOf('suis');
console.log(sol7);
const sol8 = sol.repeat(15);
console.log(sol8);
const sol9 = sol.trim();
console.log(sol9);

const numeroCarte = "1234567890112277";
const quatreDerniersChiffres = numeroCarte.slice(-4);
const numeroObfusque = quatreDerniersChiffres.padStart(numeroCarte.length, "*");
console.log(numeroObfusque);
console.log(quatreDerniersChiffres);

const quatrePremiersChiffres = numeroCarte.slice(12);
const res = quatrePremiersChiffres.padEnd(numeroCarte.length, "*");
console.log(res);

const chartCode = sol.charCodeAt(0);
console.log(chartCode);

// regExp
const regexp1 = "je suis le soleil";
const evaluate = /suis/.test(regexp1);
console.log(evaluate);

const regexp2 = RegExp('test.','g');
const chaine = 'Une chaîne pour tester et effectuer des tests';
const matches = chaine.matchAll(regexp2);

for (const match of matches) {
  console.log(match);
}





















