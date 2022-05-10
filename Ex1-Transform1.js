// let browser=prompt("Hãy nhập tên trình duyệt bạn muốn kiểm tra");
// if(browser=="Edge"){
//     alert("You've got the Edge!");
// }
// else if(browser=='Chrome'||browser=='Firefox'||browser=='Safari'||browser=='Opera'){
//     alert('Okay we support these browsers too');
// }
// else {
//     alert('We hope that thí page looks ok!');

let browser = prompt('Hãy nhập tên trình duyệt mà bạn muốn kiểm tra vào :');

switch (browser){
    case 'Edge':
        alert("You've got the Edge!");
        break;
    case 'Chrome':
    case 'Firefox':
    case'Safari':
    case'Opera':
        alert('okay we support these browser too');
        break;
    default:
        alert('We hope that this page looks ok!')
}