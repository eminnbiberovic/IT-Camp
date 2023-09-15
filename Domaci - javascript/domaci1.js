let a = parseFloat(prompt("unesi broj a"));

let b = parseFloat(prompt("unesi broj b"));

let c = parseFloat(prompt("unesi broj c"));

if(a > b && a>c){
    console.log("broj a je najveci", a);
}

else if(b > a && b>c){
    console.log("broj b je najveci", b);
}

else if(c > a && c>b){
    console.log("broj c je najveci", c);
}

else if( a === b && a > c && b > c){
    console.log("brojevi a i b su veci od c");
}

else if(a === c && a > b && c>b){
    console.log("brojevi a i c su veci od b");
}

else if(c === b && c > a && b>a){
    console.log("brojevi c i b su veci od a");
}

else{
    console.log("brojevi su jednaki");
}