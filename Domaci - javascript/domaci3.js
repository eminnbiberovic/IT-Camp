//////////////////////// 4.14 zadatak //////////////////

// let broj = 0;
// let s=0;
// let d=0;
// let j=0;

// for(let i=100; i<=999; i++){

//      s = Math.floor(i / 100);
//      d = Math.floor((i%100)/10);
//      j = Math.floor(i%10);
    
//     if(s+2 === d && d+1 ===j){
//         broj = s*100+d*10+j;
//         console.log(broj);
//     }

// }



//////////////////////// 4.15 zadatak ///////////

// let broj=0;
// let st=0;
// let de=0;
// let je=0;

// for(let i=100; i<=999; i++){
    
//      st = Math.floor(i / 100);
//      de = Math.floor((i%100)/10);
//      je = Math.floor(i%10);
    
//     if(i === Math.pow(st,3)+Math.pow(de,3)+Math.pow(je,3)){
//         broj = i;
//         console.log("amstrongovi brojevi:", broj);
//     }
// }


//////////////////////// 4.16 zadatak //////////////

// let broj=0;
// let st=0;
// let de=0;
// let je=0;

// for(let i=100; i<=999; i++){
    
//      st = Math.floor(i / 100);
//      de = Math.floor((i%100)/10);
//      je = Math.floor(i%10);
    
//     if(i === Math.pow(st*10+de,2)-Math.pow(je,2)){
//         broj = i;
//         console.log("brojevi:", broj);
//     }
// }


////////////////////// 4.17 zadatak ///////////////

// let broj=0;
// let st=0;
// let de=0;
// let je=0;

// for(let i=100; i<=999; i++){
    
//      st = Math.floor(i / 100);
//      de = Math.floor((i%100)/10);
//      je = Math.floor(i%10);

//      broj = st*10+je;
    
//     if(i % broj === 0){
//         console.log("brojevi:", i);
//     }
// }


///////////////////////// 4.18 zadatak //////////////

// let brojevi=0;
// let st=0;
// let de=0;
// let je=0;
// let suma=0;

// for(let i=100; i<=999; i++){
    
//      st = Math.floor(i / 100);
//      de = Math.floor((i%100)/10);
//      je = Math.floor(i%10);

//     if(st+de+je === 5){
//         brojevi++;
//         suma += i;
//     }
// }
// console.log("suma je:", suma);
// console.log("takvih brojeva ima:", brojevi);