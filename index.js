function validateEmail(email) {
    let re = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
    return re.test(email);
}
      
console.log(validateEmail('muhammad@anystring.any')); // true
      
console.log(validateEmail('my email is anystring@anystring .any'));

const emailInp = document.querySelector('#email');
const passwordInp = document.querySelector('#password');
const date = document.querySelector('#date');
const options = document.querySelector('#options');
const result = document.querySelector('.result');
const form = document.querySelector('#form');
const errMsg = document.querySelector('.err-msg')
let res = []
function submit() {
    res = [];
    let emailPattern = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
    if (!emailPattern.test(emailInp.value)){
        errMsg.innerHTML = 'input correct email';
        errMsg.style.color = 'red';
        errMsg.style.marginTop = '-14px'
    } else {
        if(emailInp.value){
            res.push(`"email": "${emailInp.value}"`)
            errMsg.innerHTML = '';
            errMsg.style.color = ''
            errMsg.style.marginTop = ''
        } 
        if(passwordInp.value){
            res.push(`"password": "${passwordInp.value}"`) 
        }
        if(date.value){
            res.push(`"date": "${date.value}"`) 
        };
        if(options.value){
            res.push(`"password": ["${options.value}"]`) 
        }
    }
    result.innerHTML = `{${res}}`
}

function reset(){
    emailInp.value = '';
    passwordInp.value = '';
    date.value = '';
    options.value = ''   
};
 
