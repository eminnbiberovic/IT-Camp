// function logika(semafor1, semafor2, broj1, broj2) {
    // if(semafor === 1){
    //     if(semafor2 === 1){
    //         console.log(broj1 + broj2);
    //     }
    // }
 //   if (semafor1 === 1 || semafor2 >= 1) {
   //   console.log(broj1 + broj2);
   // } else if (semafor1 === 2) {
    //  console.log(broj1 * broj2);
  //  } else if (semafor1 === 3) {
    //  console.log(broj1 / broj2);
   // } else {
    //  console.log(broj1 - broj2);
   // }
 // }
  
 // logika(15, 1, 5, 10);

//  function paperwork(h, m, s) {
//     if(h<=23 && h>=0 && m>=0 && m<=59 && s>=0 && s<=59){
//         return s*1000 + m * 60 *1000 + h * 60 *60 *1000  
//     } 
//   }


// let cars = ["bmw","audi","merdeces","fiat","porse","ferarri","golf","jugo"];

// for(let i=0; i<cars.length; i++){
//   console.log(cars[i]);
// }

// for(let i=cars.length - 1; i>=0; i--){
//   console.log(cars[i]);
// }

// let n;

// let zbir;


// for(let i=0; i<=n; i++){
//   zbir += i;
// }

// let a = parseFloat(prompt("Unesi neki broj"))

// if(a>0){
//   console.log("broj je pozitivan");
// }

// else if(a<0){
//   console.log("broj je negativan");
// }

// else{
//   console.log("Uneli ste nulu");
// }


// let broj1 = parseFloat(prompt("Unesi broj 1"))
// let broj2 = parseFloat(prompt("Unesi broj 2"))


// if(broj1 === broj2){
//   console.log("brojevi su jednaki");
// }

// else if (broj1 > broj2) {
//   console.log("broj 1 je veci");
// }

// else{
//   console.log("broj 2 je veci");
// }


// let a = parseFloat(prompt("unesi broj a"))
// let b = parseFloat(prompt("unesi broj b"))

// let x = parseFloat(prompt("unesi x koji se kvadrira"))

// if(Math.pow(x,2)>a && Math.pow(x,2)<b){
//   console.log("kvadrirani broj x je izmedju dva broja(a i b)");
// }

// else(
//   console.log("kvadrirani broj x nije izmedju dva broja(a i b)")
// )

// let brojpoena = parseFloat(prompt("unesi broj poena"));


// if(brojpoena <= 50) {
//   console.log("dobili ste peticu")
// }

// else if(brojpoena >= 51 && brojpoena <=60) console.log("dobili ste sesticu")

// else if(brojpoena >= 61 && brojpoena <=70) console.log("dobili ste sedmicu")

// else if(brojpoena >= 71 && brojpoena <=80) console.log("dobili ste osmicu")

// else if(brojpoena >= 81 && brojpoena <=90) console.log("dobili ste devetku")

// else{
//   console.log("dobili ste destku")
// }

// let a = parseFloat(prompt("unesi broj a"))
// let b = parseFloat(prompt("unesi broj b"))

// let rezultat;

// if(a > b){
//   rezultat = a - b;
//   console.log("razlika je" ,rezultat)
// }

// else{
//   rezultat = b - a;
//   console.log("razlika je" ,rezultat)
// }

// let a = parseFloat(prompt("unesi broj a"))
// let b = parseFloat(prompt("unesi broj b"))
// let c = parseFloat(prompt("unesi broj c"))


// let S;
// let P;

// if(a+b > c && a+c >b && b+c> a){
//   S=(a+b+c)/2;
//   P = Math.sqrt(S*(S-a)*(S-b)*(S-c));
// }


// else{
//   console.log("nije moguce napraviti trougao");
// }

// console.log("rezultat je",P);

// for(let i=1; i<=10; i++){
//   console.log(i);
// }

// for(let i=1; i<=10; i++){
//   if(i % 2 !=0){
//     console.log(i);
//   }
// }

// for(i=10; i>=1; i--){
//   console.log(i);
// }

// zadatak

// let s,d,j,broj;

// for(let i=100; i<=999; i++){
//   j=i%10;
//   d=(i%100) / 10;
//   s=i/100;

//   broj = j+s*100+d*10;

  

//   if(broj === s*s*s + d*d*d+ j*j*j){
//     console.log("jeste", broj);
//   }

//  else{
//   console.log("nije")
//  }
// }

// let a,b,c,broj;

// for(a=1; a<=9; a++) 
//  for(b=0; b<=9; b++) 
//  for(c=0; c<=9; c++) 
//  { 
//  broj=100*a+10*b+c; 

//     if(broj == Math.pow(a,3)+ Math.pow(b,3)+ Math.pow(c,3)){
//       console.log("jeste", broj);
//   }
// }

///////////// 4.5 zadatak ///////////////

// let zbir=0,as=0;

// let n = parseFloat(prompt("unesi realan broj n"));

// for(let i=0; i<=n; i++){
//     zbir += i;
// }

// as = zbir/n;

// console.log(`Zbir je: ${zbir}, a aritmeticka sredina je: ${as}`);


//////////////////////// 4.6 zadatak //////////////

// let n = parseFloat(prompt("unesi realan broj n"));

// let fak=1;

// for(let i=1; i<=n; i++){
//     fak *= i;
// }

// console.log("faktorijal je: ",fak);


/////////////////// 4.7 zadatak ////////////////

// let n = parseFloat(prompt("unesi realan broj n"));

// let fak=1;
// let s=0;

// for(let i=1; i<=n; i++){
//     fak *= i;

//     s += fak;
// }

// console.log("faktorijal je: ",s);


///////////////////////// 4.8 zadatak ////////////////////

// let n = parseFloat(prompt("unesi realan broj n"));

// let m = parseFloat(prompt("unesi realan broj m"));

// let s=1;

// for(let i=0; i<=m; i++){
//     s = s * (n+(i*m));
// }

// console.log("stag",s);


///////////////////// 4.12 zadatak ///////////////

// let n = parseFloat(prompt("Unesite n:"))

// let max = 0;

// for(let i = 1; i <= n; i++){
//     let broj = parseFloat(prompt(`Unesite broj ${i}:`))
//     if(max < broj){
//         max = broj
//     }
// }

// console.log(max);


/////////////////////// 4.13 zadatak ////////////////

// let s=0;
// let akd=0;

// for(let i=1; i<=100; i++){
//     akd = i;
//     if(i % 6 === 0){
//         console.log("brojevi deljivi sa 6:",akd);
//         s += akd;
//     }
// }

// console.log("suma brojeva je: ",s);



////////////////////// 4.19 zadatak /////////////////

// let n = parseFloat(prompt("unesi broj n"))

// for(let i=1; i<=n; i++){
//   if(n % i === 0){
//     console.log("delioci:", i);
//   }
// }


//////////////////////// 4.20 zadatak ///////////////////////

// let n = parseFloat(prompt("unesi broj n"))

// let suma = 0;

// for(let i=1; i<n; i++){
//   if(n % i === 0){
//    suma += i; 
//   }
// }
// if(suma === n){
//   console.log("broj je savrsen", n);
// }
// else{
//   console.log("broj nije savrsen", n);
// }


///////////////////// 4.21 zadatak ////////////////////

// let n = parseFloat(prompt("unesi broj ucenika n"))

// let negativne=0;
// let suma=0;
// let prosecna=0;

// for(let i = 1; i<=n; i++){
//    let ocena = parseFloat(prompt("Unesite ocene ucinika do 5|||:", i))
//    suma += ocena;

//    if(ocena === 1){
//     negativne++;
//    }
   
// }
// prosecna = suma/n;

// console.log("prosecna ocena ucenika:", prosecna);
// console.log("negativnih ocena ima:", negativne);


////////////////////////// 4.22 zadatak ///////////////////////

// let n = parseFloat(prompt("unesi broj n"))

// let h;
// let m;
// let s;

// for(h=0; h<=23;h++){
//   for(m=0; m<=59; m++){
//     for(s=0; s<=59; s++){
//       if(n === ()){
//         console.log("sat, minut , sekunda");
//       }
//     }
//   }
// }