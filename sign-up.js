
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

    push(firstName, lastName, email, password);
});

function push(firstName, lastName, email, password) {
    user.push({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    });
}





