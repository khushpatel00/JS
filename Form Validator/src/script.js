firstname = document.getElementById('firstname');
lastname = document.getElementById('lastname');
username = document.getElementById('username');
email = document.getElementById('email');
Form = document.querySelector('form');


emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log('typeof', emailRegex, ' = ', typeof(emailRegex))
Form.addEventListener('submit', (e)=>{
    e.preventDefault(); // prevents auto reload 
    console.log(firstname.value, lastname.value     , username.value, email.value);
});

