const mybtns=document.querySelectorAll('.btn')
const monitor=document.querySelector('.monitor')

let myvalue='0'



mybtns.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        let substr=e.currentTarget.classList
        if(substr.contains('0')){
            monitor.textContent=0
        }
        else if(substr.contains('1')){
            let one =monitor.textContent
            console.log(one);
        }
        else if(substr.contains('2')){
            let two=monitor.textContent
            console.log(two);
        }
        else if(substr.contains('3')){
            let three=monitor.textContent
            console.log(three);
        }
        else if(substr.contains('4')){
            let four=monitor.textContent
            console.log(four);
        }
        else if(substr.contains('5')){
            let five=monitor.textContent
            console.log(five);
        }
        else if(substr.contains('6')){
            let six=monitor.textContent
            console.log(six);
        }
        else if(substr.contains('7')){
            let seven =monitor.textContent
            console.log(seven);
        }
        else if(substr.contains('8')){
           let eight= monitor.textContent
            console.log(eight);
        }
        else if(substr.contains('9')){
            let nine=monitor.textContent
            console.log(nine);
        }
        else{
            console.log('err');
        }
    })
})