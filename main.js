let name1 = document.getElementById('username');
let pwd = document.getElementById('pwd');
let phone = document.getElementById('phon');

let loginBtn = document.getElementById('logIntoAccount'); // Login button

// Finding our account saved
if (localStorage.getItem('account') != null) {
    var account = JSON.parse(localStorage.getItem('account'));
} else {
    var account = [];
}


let createAccount = () => {
    if (name1.value == '' || pwd.value == '' || phone.value == '') {
        console.log("please fill");
    } else {
        // Saving data into localStorage
        account.push({
            username: name1.value,
            pass: pwd.value,
            phoneNbr: phone.value
        });
        localStorage.setItem('account', JSON.stringify(account));
    }
}

// Adding event on login button
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    login();
});

// Login function
// admin username: master ..password: master
let login = ()=> {
    if (name1.value == '' || pwd.value == '') {
        console.log("please fill");
    } else {
        // Loging master as the admin
        if (name1.value == 'master' && pwd.value == 'master') {
            document.cookie = `admin=master; exprires=Dec 25 2030 00:00:00; path='/'`;
            window.location.href = 'dashboard.html';
        } else { // If user is not admin, search into our database
            for (let person of account) {
                if (person.username == name1.value && person.pass == pwd.value) {
                    document.cookie = `user= ${person.username}; expires= Dec 20 2022 00:00:00`;
                    window.location.href = 'user.html';
                    break;
                } else {
                    console.log('not found');
                }
            }
        }
    }
}

