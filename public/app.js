const user = {
    username: '',
    password: ''
}

const usernameInput = document.querySelector('.username');
const passwordInput = document.querySelector('.password');


usernameInput.addEventListener('input',  function(e) {
    user.username = e.target.value;
});

passwordInput.addEventListener('input', function(e) {
    user.password = e.target.value;
});



//font-family: 'Noto Sans', sans-serif;

// function toggle(e) {
//     if(e.target.style.backgroundColor === '') {
//         usernameInput.style.backgroundColor = 'rgb(206, 225, 255)';
//     }
//     else {
//         e.target.style.backgroundColor = '';
//     }
// }



// usernameInput.addEventListener('click', function(e) {
//     toggle(e)
// });
