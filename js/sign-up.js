const userSignUp = document.querySelector('#sign-up-form');
const emailTitle = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const secondPassword = document.querySelector('.confirmed-password');
const firstNameInput = document.querySelector('.first-name');
const lastNameInput = document.querySelector('.last-name');
const nameErrorMessage = document.createElement('p');
nameErrorMessage.textContent = 'Only letters allowed';
nameErrorMessage.style.fontSize = '14px';


const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
li1.setAttribute('class', 'password-error');
li2.setAttribute('class', 'password-error');
li3.setAttribute('class', 'password-error');


const warningEmailParagraph = document.createElement('p');
warningEmailParagraph.style.color = 'rgb(219, 43, 43)';
warningEmailParagraph.style.fontSize = '14px';

const unmatchPassword = document.createElement('p');
unmatchPassword.style.color = 'rgb(219, 43, 43)';
unmatchPassword.style.fontSize = '14px';

const errMessageArr = ['at least 8 characters long', 'include both lower and uppercase letters', 'include at least one number and symbol'];






