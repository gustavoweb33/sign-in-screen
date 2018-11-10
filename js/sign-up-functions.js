
const getSavedUser = () => {
    const userJSON = localStorage.getItem('user');
    return userJSON ? JSON.parse(userJSON) : [];
}

let user = getSavedUser();

const comparePasswords = (password, confirmedPassword) => {
    console.log(`password: ${password}, confirmedPass: ${confirmedPassword}`)
    if (password !== confirmedPassword) {
        unmatchPassword.textContent = 'Password does not match';
        secondPassword.appendChild(unmatchPassword);
        return false;
    }

    secondPassword.textContent = '';
    return true;
}

const checkIfUserExits = (email) => {
    console.log(`email: ${email}`);
    if (user.find((object) => object.email === email)) {
        warningParagraph.textContent = 'Email already exists';
        emailTitle.appendChild(warningParagraph);
        return false;
    }

    warningParagraph.textContent = '';
    return true;
}

const addNewUser = (firstName, lastName, email, password) => {
    user.push({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    });

    localStorage.setItem('user', JSON.stringify(user));
    location.assign('/html/index.html');
}

const checkFullName = (firstName, lastName) => {
    const regExUser = /^[a-zA-z]+$/;
    console.log(`first name: ${firstName} ${regExUser.test(firstName)}`);
    console.log(`last name: ${lastName} ${regExUser.test(lastName)}`);
}

userSignUp.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const confirmedPassword = e.target.elements.confirmedPassword.value;

    checkFullName(firstName, lastName);


    let passwordResult = comparePasswords(password, confirmedPassword);
    let checkedUser = checkIfUserExits(email);

    console.log(`password-result: ${passwordResult}, available-user:${checkedUser}`)
    if (passwordResult && checkedUser) {
        addNewUser(firstName, lastName, email, password);
    }
});

