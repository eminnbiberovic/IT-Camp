///////////// 4.28 zadatak //////////////

// pod a
// let n = parseFloat(prompt("unesi broj redova n:"));
// let m = parseFloat(prompt("unesi broj kolona m:"));

// for(let i=1; i<=n; i++){
//     let rowOutput = ``
//     for(let j=1; j<=m; j++){
//         rowOutput += '* '
//     }
//     console.log(rowOutput);
//     console.log("\n");
// }


// pod b
// let n = parseFloat(prompt("unesi broj redova n:"));
// let m = parseFloat(prompt("unesi broj kolona m:"));

// for(let i=1; i<=n; i++){
//     let rowOutput = ``
//     for(let j=1; j<=m; j++){
//         if(i === 1 || i===n){
//             rowOutput += "*"
//         }
//         else{
//             if(j===1 || j===n){
//                 rowOutput += "*"
//             }
//             else{
//                 rowOutput += " "
//             }
//         }
//     }
//     console.log(rowOutput);
//     console.log("\n");
// }



// pod v
// let n = parseFloat(prompt("unesi broj redova:"));
// let m = parseFloat(prompt("unesi broj kolona:"));

// for(let i=1; i<=n; i++){
//     let rowOutput = ``
//     for(let j=1; j<=m; j++){
//         if(j<=i){
//             rowOutput += "*"
//         }
//     }
//     console.log(rowOutput);
//     console.log("\n");
// }



//  pod g
// let n = parseInt(prompt("Unesite broj redova:"))
// let m = parseInt(prompt("Unesite broj kolona:"))

// for(let i = 1; i <= n; i++){
//     let rowOutput = ''
//     for(let j = 1; j <= m; j++){
//         if(i === n){
//             rowOutput += "*"
//         }
//         else if(j === 1 || j === i){
//             rowOutput += "*"
//         }
//         else{
//             rowOutput += " "
//         }
//     }
//     console.log(rowOutput);
//     console.log("\n");
// }


//pod d
// let n = parseFloat(prompt("unesi broj kolona n:"));
// let m = parseFloat(prompt("unesi broj redova m:"));

// for(let i=1; i<=n; i++){
//     let rowOutput = ``
//     for(let j=1; j<=m; j++){
//        if(j>=i){
//         rowOutput += "* "
//        }
//     }
//     console.log(rowOutput);
//     console.log("\n");
// }


//pod dj
// let n = parseInt(prompt("Unesite broj redova:"))
// let m = parseInt(prompt("Unesite broj kolona:"))

// for(let i = 1; i <= n; i++){
//     let rowOutput = ''
//     for(let j = 1; j <= m; j++){
//         if(j === m){
//             rowOutput += "*"
//         }
//         else if(i === 1 || i === j){
//             rowOutput += "*"
//         }
//         else{
//             rowOutput += " "
//         }
//     }
//     console.log(rowOutput);
//     console.log("\n");
// }


//pod e
    // let n = parseInt(prompt("Unesite broj redova:"))
    // let m = parseInt(prompt("Unesite broj kolona:"))

    // for(let i=0; i<n; i++){
    //     let rowOutput = ``
    //     for(let j=0; j<m; j++){
    //         if(i === n){
    //             rowOutput += "* "
    //         }
    //         if(n>=i){
    //             rowOutput += " "
    //         }        
    //         if(i>=j){
    //             rowOutput += "*"
    //         }
    //     }
    //     console.log(rowOutput);
    //     // console.log("\n");
    // }


// pod z
// let n = parseInt(prompt("Unesite broj redova:"))
// let m = parseInt(prompt("Unesite broj kolona:"))

// for(let i=0; i<n; i++){
//     let rowOutput = ``
//     for(let j=0; j<m; j++){
//         if(j === m){
//             rowOutput += "*"
//         }
//         if(m>j){
//             rowOutput += " "
//         }
//         if(i<=j){
//             rowOutput += "*"
//         }
//     }
//     console.log(rowOutput);
//     // console.log("\n");
// }



///////////// 4.29 zadatak //////////////

// let n = parseInt(prompt("Unesite broj redova:"))
// let m = parseInt(prompt("Unesite broj kolona:"))

// for(let i=0; i<n; i++){
//     let rowOutput = ``
//     for(let j=0; j<m; j++){
//         if(i === n){
//             rowOutput += "* "
//         }
//         if(n>i){
//             rowOutput += " "
//         }        
//         if(i>=j){
//             rowOutput += "*"
//         }
//     }
//     console.log(rowOutput);
//     // console.log("\n");
// }

// for(let i=0; i<n; i++){
//     let rowOutput = ``
//     for(let j=0; j<m-1; j++){
//         if(j === m){
//             rowOutput += "*"
//         }
//         if(m>j){
//             rowOutput += " "
//         }
//         if(i<=j){
//             rowOutput += "*"
//         }
//     }
//     console.log(rowOutput);
//     // console.log("\n");
// }



////////////////////////// 4.30 zadatak //////////////////

// let n = parseInt(prompt("Unesite broj redova:"))
// let m = parseInt(prompt("Unesite broj kolona:"))

// let brojac=n+1;


// for(let i=0; i<n; i++){
//     let rowOutput = ``
//     brojac--;
//     for(let j=0; j<m; j++){
//         if(j === m){
//             rowOutput += brojac
//         }
//         if(m>j){
//             rowOutput += " "
//         }
//         if(i<=j){
//             rowOutput += brojac
//         }
//     }
//     console.log(rowOutput);
//     // console.log("\n");
// }

// for(let i=0; i<n-1; i++){
//     let rowOutput = ``
//     brojac++;
//     for(let j=0; j<m; j++){
//         if(i === n){
//             rowOutput += brojac
//         }
//         if(n>i){
//             rowOutput += " "
//         }        
//         if(i>=j){
//             rowOutput += brojac
//         }
//     }
//     console.log(rowOutput);
//     // console.log("\n");
// }



/////////////////// 4.34 zadatak ////////////

// let n = parseInt(prompt("Unesite broj redova:"))
// let m = parseInt(prompt("Unesite broj kolona:"))

// for(let i=0; i<n; i++){
//     let rowOutput = ``
//     for(let j=0; j<m; j++){
//         if(i === 0 || i===n-1 || i===2*(n-1)){
//         rowOutput += "+"
//         }
//          else{
//             rowOutput += "-"
//         }

//         if(j===0 || j===n-1 || j===2*(n-1)){
//             rowOutput += "|"
//         }
//         else{
//             rowOutput += " "
//         }
//     }
//     console.log(rowOutput);
//     // console.log("\n");
// }