const titles = document.getElementsByTagName('h1');
const forms = document.getElementsByTagName('form');
let usernames = document.getElementsByName('username');
let passwords = document.getElementsByName('password');
let confirmPassword = document.getElementsByName('confirmPassword');
let email = document.getElementsByName('email');
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function switchMode() {
    temp = titles[0].innerHTML;
    titles[0].innerHTML = titles[1].innerHTML;
    titles[1].innerHTML = temp;

    forms[0].classList.toggle('hidden');
    forms[1].classList.toggle('hidden');
}
// sign up
forms[0].addEventListener('submit', (e) => {
    e.preventDefault();

    forms[0].addEventListener('change', () => { // confirmation on changing inputs
        if (usernames[0].value == '') document.getElementById('usernameErr').innerHTML = 'Please fill in Username'
        else document.getElementById('usernameErr').innerHTML = ''

        if (passwords[0].value == '') {
            document.getElementById('passwordErr').innerHTML = 'Please fill in Password'
        } else if (passwords[0].value.length < 8 || passwords[0].value.length > 16) document.getElementById('passwordErr').innerHTML = 'Password should be minimum 8 charcaters and maximum 16 characters'
        else if (passwords[0].value != confirmPassword[0].value) document.getElementById('passwordErr').innerHTML = 'Both Passwords do not match !'
        else document.getElementById('passwordErr').innerHTML = ''

        console.log(email)
        if (email[0].value == '') document.getElementById('emailErr').innerHTML = 'Please fill in Email'
        else if (!emailRegex.test(email[0].value)) document.getElementById('emailErr').innerHTML = 'Please enter a valid Email Address';
        else document.getElementById('emailErr').innerHTML = ''
    })

    //default validation - nochange

    if (usernames[0].value == '') document.getElementById('usernameErr').innerHTML = 'Please fill in Username'
    else document.getElementById('usernameErr').innerHTML = ''

    if (passwords[0].value == '') {
        document.getElementById('passwordErr').innerHTML = 'Please fill in Password'
    } else if (passwords[0].value.length < 8 || passwords[0].value.length > 16) document.getElementById('passwordErr').innerHTML = 'Password should be minimum 8 charcaters and maximum 16 characters'
    else if (passwords[0].value != confirmPassword[0].value) document.getElementById('passwordErr').innerHTML = 'Both Passwords do not match !'
    else document.getElementById('passwordErr').innerHTML = ''

    console.log(email)
    if (email[0].value == '') document.getElementById('emailErr').innerHTML = 'Please fill in Email'
    else if (!emailRegex.test(email[0].value)) document.getElementById('emailErr').innerHTML = 'Please enter a valid Email Address';
    else document.getElementById('emailErr').innerHTML = ''
})

forms[1].addEventListener('submit', (e) => {
    e.preventDefault();
    if (usernames[1].value == '') document.getElementById('usernameLogErr').innerHTML = 'Please fill in Username'
    else document.getElementById('usernameLogErr').innerHTML = ''

    if (passwords[1].value == '') {
        document.getElementById('passwordLogErr').innerHTML = 'Please fill in Password'
    } else document.getElementById('passwordLogErr').innerHTML = ''

})