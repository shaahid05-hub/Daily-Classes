// for (let i=1;i<=5;i++){
//     console.log('*'.repeat(i));
    
// }

// Right Angled pattern
// arr=''
// for (let i=1; i<=5; i++){
//     for(let j=1; j<=i; j++){
//         arr+='*'
//     }
//     arr+='\n' 
// }
// console.log(arr); 

// Inverted Right Angled Pattern
// pat=''
// for (let i=5; i>=1; i--){
//     for (let j=1; j<=i; j++){
//         pat+='*'
//     }
//     pat+='\n'
// }
// console.log(pat);

// Pyramid
// let pat=''
// for (let i=0; i<=4; i++){
//     for(let j=4; j>i; j--){
//         pat+=' ';
//     }
//     for (let k=1; k<=2*i+1; k++){
//         pat+='*';
//     }
//     pat+='\n' ;
// }
// console.log(pat);


// let pat=''
// for (let i=1; i<=5; i++){
//     for(let j=1; j<=i; j++){
//         pat+=i
//     }
//     pat+='\n';
// }
// console.log(pat);


// let pat=''
// for (let i=1; i<=5; i++){
//     for(let j=1; j<=i; j++){
//         pat+=j
//     }
//     pat+='\n';
// }
// console.log(pat);


// let pat=''
// for (let i=1; i<=5; i++){
//     for (let j=1; j<=5; j++){
//         if (i==1 || i==5 || j==1 || j==5){
//             pat+='*';
//         }
//         else{
//             pat+=' '
//         }
//     }
//     pat+='\n'
// }
// console.log(pat);


// let pat=''
// for (let i=1; i<=4; i++){
//     for (let j=1; j<=6; j++){
//         if (i==1 || i==4 || j==1 || j==6){
//             pat+='*'
//         }
//         else{
//             pat+=' '
//         }
//     }
//     pat+='\n'
// }
//  console.log(pat);


// let pat=''
// for (let i=1; i<=5; i++){
//     for(let j=1; j<=i; j++){
//         if ((i==3 && j==2)  || (i==4 && j==2) || (i==4 && j==3) ){
//             pat+=' '
//         }
//         else{
//             pat+='*'
//         }
//     }
//     pat+='\n'
// }
// console.log(pat);


let pat=''
for (let i=1; i<=5; i++){
    for (let j=4; j>=i; j--){
        pat+=' '
    }
    for (let k=1; k<=2*i-1; k++){
        if (i==5 || k==1 || k==2*i-1){
            pat+='*'
        }
        else{
            pat+=' '
        }
    }
    pat+='\n'
}
console.log(pat);






