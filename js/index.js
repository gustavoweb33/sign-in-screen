
const submitForm = document.querySelector('#submit-form');


submitForm.addEventListener('submit', (e) => {
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    checkIfUserExists(email, password);
});

const checkIfUserExists = (email, password) => {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);

    let foundEmail = user.find((object) => object.email === email);
    let foundPassword = user.find((object) => object.password === password);

    if (foundEmail && foundPassword) {
        alert(`Welcome ${foundEmail.firstName}, ${foundEmail.lastName}`)
    }

    else {
       alert('Incorrect email or password');
    }
}
