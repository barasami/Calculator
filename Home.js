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
            monitor.textContent=1
        }
        else if(substr.contains('2')){
            monitor.textContent=2
        }
        else if(substr.contains('3')){
            monitor.textContent=3
            
        }
        else if(substr.contains('4')){
            monitor.textContent=4
        
        }
        else if(substr.contains('5')){
            monitor.textContent=5
        
        }
        else if(substr.contains('6')){
            monitor.textContent=6
    
        }
        else if(substr.contains('7')){
            monitor.textContent=7
            
        }
        else if(substr.contains('8')){
           monitor.textContent=8
            
        }
        else if(substr.contains('9')){
            monitor.textContent=9
        
        }
        else{
            console.log('err');
        }
    })
})