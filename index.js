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
            res.push(`"password": "${options.value}"`) 
        }
    }
    console.log(result.innerHTML);
    // if(emailInp.value){
    //     res.push(`"email": "${emailInp.value}"`)
    // } 
    // if(passwordInp.value){
    //     res.push(`"password": "${passwordInp.value}"`) 
    // }
    // if(date.value){
    //     res.push(`"date": "${date.value}"`) 
    // };
    // if(options.value){
    //     res.push(`"password": "${options.value}"`) 
    // }
    result.innerHTML = `{${res}}`
    // console.log(emailInp.value);
    // console.log(res);
}
// form.addEventListener('submit', e => {
//     e.preventDefault();

//     validateInputs()
// });

// function validateInputs() {
//     const emailValue = emailInp.value
//     const emailPattern = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
//     if(emailValue == ''){
//         result.innerHTML = 'Email is required';
//         result.style.color = 'red'
//         return false
//     } else if(!emailPattern.test(emailValue)){
//         result.innerHTML = 'input correct email';
//     } else{
//         result = ''
//     }

// }
///^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
///^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
 
