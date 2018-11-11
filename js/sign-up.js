const userSignUp = document.querySelector('#sign-up-form');
const emailTitle = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const secondPassword = document.querySelector('.confirmed-password');

const warningEmailParagraph = document.createElement('p');
warningEmailParagraph.style.color = 'rgb(219, 43, 43)';
warningEmailParagraph.style.fontSize = '14px';

const unmatchPassword = document.createElement('p');
unmatchPassword.style.color = 'rgb(219, 43, 43)';
unmatchPassword.style.fontSize = '14px';

const errMessageArr = ['at least 8 characters long', 'include both lower and uppercase letters', 'include at least one number and symbol'];

for(let i = 0; i < errMessageArr.length; i++) {
    let li = document.createElement('li');
    li.textContent = errMessageArr[i];
    li.style.fontSize = '13px';
    passwordInput.appendChild(li);
    console.log(errMessageArr[i]);
}





