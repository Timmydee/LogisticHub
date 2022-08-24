//Firebase Login
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
import { firebaseConfig } from "./firebase-config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//Register
const signup = document.getElementById('signup-btn')
signup.addEventListener('click',function(){
    console.log('clicked')
    const registerEmail = document.getElementById('register-email').value
    const registerPassword = document.getElementById('register-password').value

    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('successful')
        console.log('Welcome Back <br>  loginEmail was Logn sucessfully')

        document.getElementById('result-box').style.display='block'
        document.getElementById('login-page').style.display='none'
        document.getElementById('result-box').innerHTML=`Successfully signed in <br>  ${registerEmail} has signed up sucessfully <br><a href='login.html'>Click here to login </a>` 
        console.log('Welcome Back <br>  loginEmail was Logn sucessfully')

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        document.getElementById('result-box').style.display='block'
        document.getElementById('login-page').style.display='none'
        document.getElementById('result-box').innerHTML='sorry Account not found<br>' + errorMessage 
    });

})
    