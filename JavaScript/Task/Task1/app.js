// 1st
// a=Number(prompt("Enter value for a"))
// b=Number(prompt("Enter value for b"))
// op=prompt("Enter the kind of operation you want to perform")
// op=op.toLowerCase()
// let c;
// if(['+','add','a'].includes(op)){
//     c=a+b
// }
// else if(['-','sub','s'].includes(op)){
//     c=a-b
// }
// else if(['*','mul','m'].includes(op)){
//     c=a*b
// }
// else if(['/','div','d'].includes(op)){
//     c=a/b
// }
// console.log(c);


// 1st using functions
// function Calculator(a,b,op) {
//     if(op === '+') return a+b;
//     else if(op === '-') return a-b;
//     else if(op === '*') return a*b;
//     else if(op === '/') return a/b;
// }
// console.log(Calculator(5,5,'+'))


// 2nd
// let c=0
// function fib(a,b){
//     c=a+b
//     if(c > 100) return;
//     console.log(c);
//     fib(b,c)
// }
// console.log(0);
// fib(0,1)


// 3rd
// let b;
// function fac(a){
//     if(a === 1) return 1;
//     return a*fac(a-1)
// }
// console.log(fac(6))


// 4th
// function vowelCounter(a){
//     let count=0
//     b=a.split('')
//     for (let i = 0; i < b.length; i++) {
//       if('aeiou'.includes(b[i])){
//         count++
//         }     
//     }
//    console.log(count); 
// }
// vowelCounter('shaahid is a good boy')


// 5th
// function palindrome(a){
//     a=a.toString()
//     return a === a.split('').reverse().join('')
// }
// console.log(palindrome("121"))


// 6th
// function reverseString(a){
//     a=a.split('')
//     a=a.reverse()
//     a=a.join('')
//     return a;
// }
// console.log(reverseString('shaahid'));


// 7th
// function even(a){
//     if(a%2 === 0) return a + ' is even';
//     else return a +' is odd';
// }
// console.log(even(5));






// 2nd
// function bill(a){
//     if(a <= 50){
//         a=a*1
//         return 'Your electricity bill is '+ a +' rupees';
//     }
//     else if((a>50) && (a<=100)){
//         a=50+(a-50)*2
//         return 'your electricity bill is '+ a +' rupees';
//     }
//     else if((a>100) && (a<=150)){
//         a=150+(a-100)*3
//         return 'your electricity bill is '+ a +' rupees';
//     }
//     else if((a>150) && (a<=200)){
//         a=300+(a-150)*4
//         return 'your electricity bill is '+ a +' rupees';
//     }
//     else if(a>200){
//         a=500+(a-200)*5
//         a=a+(a*0.1)
//         return 'your electricity bill is '+ a +' rupees';
//     }
// }
// console.log(bill(210))


bill(Number(prompt('Enter the no. of units used')))
function bill(a){
    if(a <= 50){
        a=a*1
        console.log('Your electricity bill is '+ a +' rupees');
    }
    else if((a>50) && (a<=100)){
        a=50+(a-50)*2
        console.log('Your electricity bill is '+ a +' rupees');
    }
    else if((a>100) && (a<=150)){
        a=150+(a-100)*3
        console.log('Your electricity bill is '+ a +' rupees');
    }
    else if((a>150) && (a<=200)){
        a=300+(a-150)*4
        console.log('Your electricity bill is '+ a +' rupees');
    }
    else if(a>200){
        a=500+(a-200)*5
        a=a+(a*0.1)
        console.log('Your electricity bill is '+ a +' rupees');
    }
}



// a = [
//     {empName:'Siva', hoursWorked: 30, hourlyRate: 10, bonus: 100},
//     {empName:'Uday', hoursWorked: 20, hourlyRate: 10, bonus: 200},
//     {empName:'Pawan Kalyan', hoursWorked: 40, hourlyRate: 10, bonus: 300},
//     {empName:'Jahnavi', hoursWorked: 50, hourlyRate: 10, bonus: 400},
//     {empName:'Shaahid', hoursWorked: 45, hourlyRate: 10, bonus: 500}
// ]

// function weeklySalary(hoursWorked,hourlyRate){
//     if(hoursWorked <= 40){
//         Salary = hoursWorked*hourlyRate
//         return Salary;
//     }
//     else if(hoursWorked > 40){
//         Salary=40*hourlyRate+(hoursWorked-40)*(1.5*hourlyRate)
//         return Salary;
//     }  
// }

// function applyBonus(Salary, bonus){
//     Salary = Salary+bonus
//     return Salary;
// }

// function displayName(empName,totalSalary){
//     console.log(`Employee Name:${empName}, Weekly Salary:${totalSalary}`)
// }

// for (let i = 0; i < a.length; i++) {
//     let emp = a[i]
//     baseSalary = weeklySalary(emp.hoursWorked,emp.hourlyRate)
//     finalSalary = applyBonus(baseSalary,emp.bonus)
//     displayName(emp.empName,finalSalary)
// }





















