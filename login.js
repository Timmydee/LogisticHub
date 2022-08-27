//Firebase Login
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAloXyfRITR3zHmW2CTYLCABdVGl2-KkE8",
    authDomain: "logihub-93690.firebaseapp.com",
    projectId: "logihub-93690",
    storageBucket: "logihub-93690.appspot.com",
    messagingSenderId: "141487837276",
    appId: "1:141487837276:web:fcc6e1e3e2372949581699"
};

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
            <a href='order.html'>Click to go to your profile here</a>` 
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