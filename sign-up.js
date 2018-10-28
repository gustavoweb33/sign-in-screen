//when a new object is push into the array it overrides the previous one. need to fix


const userSignUp = document.querySelector('#sign-up-form');

const user = [
    {
        firstName: 'gustavo',
        lastName: 'leal',
        email: 'gustavo@yahoo.com',
        password: 'password1223'

    }
];


userSignUp.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);

    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
 
    saveUserSignUp(firstName, lastName, email, password);

    window.location.href = 'http://127.0.0.1:5500/html/index.html';
});

const saveUserSignUp = (firstName, lastName, email, password) => {
    user.push({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    });
    localStorage.setItem('user', JSON.stringify(user));
}





