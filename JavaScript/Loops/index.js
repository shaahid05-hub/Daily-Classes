let units=Number(prompt('Enter the no. of units used'))
let i;
if(0<units<100){
    if(units>0 && units<=25){
        i=units*10
        console.log(i);
    }
    if(units>26 && units<=50){
        i=units*15
        console.log(i);
    }
    if(units>50 && units<=75){
        i=units*20
        console.log(i);
    }
    if(units>75 && units<=100){
        i=units*25
        console.log(i);
    }
}