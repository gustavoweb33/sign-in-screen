const userSignUp = document.querySelector('#sign-up-form');

const getSavedUser = () => {
    const userJSON = localStorage.getItem('user');

    return userJSON ? JSON.parse(userJSON) : [];
}

let user = getSavedUser();

userSignUp.addEventListener('submit', (e) => {
    e.preventDefault();

    user.push({
        firstName: e.target.elements.firstName.value,
        lastName: e.target.elements.lastName.value,
        email: e.target.elements.email.value,
        password: e.target.elements.password.value
    });

    localStorage.setItem('user', JSON.stringify(user));
    location.assign('/html/index.html');
});
