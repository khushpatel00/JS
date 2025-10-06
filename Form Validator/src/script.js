        firstname = document.getElementById("firstname");
    lastname = document.getElementById("lastname");
    username = document.getElementById("username");
    email = document.getElementById("emailInput");
    Form = document.querySelector("form");
    errorContainer = document.querySelectorAll(".errorMessage");

    isValid = [1,1,1,1];
    emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    usernameRegex = /^[0-9A-Za-z]{6,16}$/;
    Form.addEventListener("submit", (e) => {
        e.preventDefault(); // prevents auto reload
        
        if (!(firstname.value)) {
            errorContainer[0].innerHTML = `<span style="color:red">!</span> Firstname cant be empty`; 
            errorContainer[0].classList.add('p-3','px-5')
            isValid[0] = 1
        } else{
            isValid[0] = 0
            errorContainer[0].innerHTML = ``;  
            errorContainer[0].classList.remove('p-3','px-5')
        }
        if (!(lastname.value)) {
            errorContainer[1].innerHTML = `<span style="color:red">!</span> Lastname cant be empty`; 
            errorContainer[1].classList.add('p-3','px-5')
            isValid[1] = 1
        } else{
            isValid[1] = 0
            errorContainer[1].innerHTML = ``;  
            errorContainer[1].classList.remove('p-3','px-5')
        }
        
        if (!emailRegex.test(email.value)) {
            errorContainer[3].innerHTML = `<span style="color:red">!</span> There are errors in Email`; 
            errorContainer[3].classList.add('p-3','px-5')
            isValid[2] = 1
        } else{
            isValid[2] = 0
            errorContainer[3].innerHTML = ``;  
            errorContainer[3].classList.remove('p-3','px-5')
        } 
        
        if (!usernameRegex.test(username.value)) {
            if (username.value.length < 6){
                errorContainer[2].innerHTML = `<span style="color:red">!</span> minimum lenght for username is 6 charachters`;
                errorContainer[2].classList.add('p-3','px-5')
                isValid[3] = 1
            } else if (username.value.length > 16){
                errorContainer[2].innerHTML = `<span style="color:red">!</span> maximum lenght for username is 16 charachters`;
                errorContainer[2].classList.remove('p-3','px-5')
                isValid[3] = 1
            } 
        } else{
            isValid[3] = 0
            errorContainer[2].innerHTML = ``;  
            errorContainer[2].classList.remove('p-3','px-5')
        } 
        if (isValid.every(e => e == 0)) document.querySelector('button').textContent = 'Submitted';
        else document.querySelector('button').textContent = 'Submit';
    });
    