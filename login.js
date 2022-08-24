//Firebase Login
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
import { firebaseConfig } from "./firebase-config";
  // Your web app's Firebase configuration

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('login-btn').addEventListener('click',function(){
    console.log('clicked')
    const loginEmail = document.getElementById('login-email').value
    const loginpassword = document.getElementById('login-password').value

    signInWithEmailAndPassword(auth, loginEmail, loginpassword)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        document.getElementById('result-box').style.display='block'
        document.getElementById('login-page').style.display='none'
        document.getElementById('result-box').innerHTML=`
            Welcome Back <br>  ${loginEmail} was Logn sucessfully <br>
            <a href='index.html'>Click to go to your profile here</a>` 
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