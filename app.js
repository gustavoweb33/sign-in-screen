const usernameInput = document.querySelector('.username');
const passwordInput = document.querySelector('.password');
const submitButton = document.querySelector('#button');

const user = [
    {
        username: 'someemail@gmail.com',
        password: 'Password123'
    },
    {
        username: 'myemail@yahoo.com',
        password: 'MyPassword9810'
    },
];

usernameInput.addEventListener('input', function (e) {
    user.username = e.target.value;
});

passwordInput.addEventListener('input', function (e) {
    user.password = e.target.value;
});

submitButton.addEventListener('click', function (e) {
    e.preventDefault();
   
    console.log(user);
})


