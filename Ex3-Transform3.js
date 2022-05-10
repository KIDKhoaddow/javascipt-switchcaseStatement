// let value = prompt('Type a number', 0);
// if (value > 0) {
//     alert(1);
// } else if (value < 0) {
//     alert(-1);
// } else {
//     alert(0);
// }
let value=prompt('Type a number',0);
let greater=value>0;
let smaller=value<0;
let equal=value==0;
let checkNumber=0;
if(greater){
    checkNumber=1;
}
else if(smaller){
    checkNumber=2;
}
else checkNumber=0;
switch (checkNumber){
    case 1 :
        alert(1);
        break;
    case 2:
        alert(-1);
        break;
    default:
        alert(0);
}