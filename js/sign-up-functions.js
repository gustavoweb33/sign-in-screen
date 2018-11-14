
const getSavedUser = () => {
    const userJSON = localStorage.getItem('user');
    return userJSON ? JSON.parse(userJSON) : [];    //returns [] if no user exists
}

let user = getSavedUser();

const checkIfUserExits = (email) => {
    if (user.find((object) => object.email === email)) {
        warningEmailParagraph.textContent = 'Email already exists';
        emailTitle.appendChild(warningEmailParagraph);
        return false;
    }

    warningEmailParagraph.textContent = '';
    return true;
}

const checkFullName = (firstName, lastName) => {
    const regExNames = /^[a-zA-z]+$/;
    const firstNameTest = regExNames.test(firstName);
    const lastNameTest = regExNames.test(lastName);

}


const comparePasswords = (password, confirmedPassword) => {
    if (password !== confirmedPassword) {
        unmatchPassword.textContent = 'Password does not match';
        secondPassword.appendChild(unmatchPassword);
        return false;
    }

    secondPassword.textContent = '';
    return true;
}

const checkPasswordRegex = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    const passwordRegexResult = passwordRegex.test(password);

    if (passwordRegexResult === false) {
        li1.textContent = errMessageArr[0];
        li2.textContent = errMessageArr[1];
        li3.textContent = errMessageArr[2];
        passwordInput.appendChild(li1);
        passwordInput.appendChild(li2);
        passwordInput.appendChild(li3);

        return false;
    }

    li1.textContent = '';
    li2.textContent = '';
    li3.textContent = '';

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



userSignUp.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const email = e.target.elements.email.value.toLowerCase();
    const password = e.target.elements.password.value;
    const confirmedPassword = e.target.elements.confirmedPassword.value;

    checkFullName(firstName, lastName);

    let checkedUser = checkIfUserExits(email);
    let passwordRegexValue = checkPasswordRegex(password);
    let passwordResult = comparePasswords(password, confirmedPassword);

    if (passwordResult && checkedUser && passwordRegexValue) {
        addNewUser(firstName, lastName, email, password);
    }
});

//TODO
   //ensure name passes regex condition
//------themes------
    //change password conditions (li) to green or red to correspond with correct or incorrect condtions 