const userSignUp = document.querySelector('#sign-up-form');
const emailTitle = document.querySelector('.email');
const warningParagraph = document.createElement('p');
warningParagraph.textContent = 'Email already exists';
warningParagraph.style.color = 'rgb(219, 43, 43)';
warningParagraph.style.fontSize = '17px';

const getSavedUser = () => {
    const userJSON = localStorage.getItem('user');
    return userJSON ? JSON.parse(userJSON) : [];
}



let user = getSavedUser();

userSignUp.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    if (user.find((object) => object.email === email)) {
        emailTitle.appendChild(warningParagraph);
    }
    else {
        console.log(user.includes(email));
        user.push({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        });
        localStorage.setItem('user', JSON.stringify(user));
        location.assign('/html/index.html');
    }

});
