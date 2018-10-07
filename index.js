const user = {
    username: '',
    password: ''
}


const usernameInput = document.querySelector('.username');
usernameInput.addEventListener('input',  function(e) {
    console.log(e);
    user.username = e.target.value;
});

const passwordInput = document.querySelector('.password');
passwordInput.addEventListener('input', function(e) {
    user.password = e.target.value;
});

//font-family: 'Noto Sans', sans-serif;
