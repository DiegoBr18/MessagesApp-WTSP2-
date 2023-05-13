import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getDatabase, ref, push, get, set, onChildAdded, query, equalTo, onValue} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAV_8-MQJ4YmMyrZiNWtP8KmxWnrLk6RAI",
    authDomain: "wtsp2-ee4e4.firebaseapp.com",
    databaseURL: "https://wtsp2-ee4e4-default-rtdb.firebaseio.com",
    projectId: "wtsp2-ee4e4",
    storageBucket: "wtsp2-ee4e4.appspot.com",
    messagingSenderId: "798048373048",
    appId: "1:798048373048:web:d142ef23022b3a1d8d19cd",
    measurementId: "G-MPLZCHELB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = getDatabase(app)

const usersRef = ref(database, "users")

function register() {
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;

  const usersQuery = query(usersRef);

  get(usersQuery).then((snapshot) => {
    if (localStorage.getItem('login') == "false"){ //Cadastro
    if (snapshot.exists()) {
      const users = snapshot.val();
      const userExists = Object.values(users).some(
        (user) => user.username === username
      );

      if (userExists) {
        alert("O usuário já esta cadastrado");
      } else {
        const newUserRef = push(usersRef);
        set(newUserRef, {
          username: username,
          password: password,
        });
      }
    } else {
      const newUserRef = push(usersRef);
      set(newUserRef, {
        username: username,
        password: password,
      });
    }
  }
  else{ //Login
    if (snapshot.exists()) {
      const users = snapshot.val();
      const userExists = Object.values(users).some(
        (user) => user.username === username);

      if (userExists) {
        alert("Login realizado com sucesso");
      } else {
       alert("Usuário ou senha incorreto(s)")
      }
    } 
    else {
      const newUserRef = push(usersRef);
      set(newUserRef, {
        username: username,
        password: password,
    })
  }
  
  }
  });

}

var titulo = document.querySelector("#text")
const button_login = document.querySelector("#login_button")



button_login.addEventListener("click", register)
function resize() {
    document.body.style.height = window.innerHeight + "px"
    var mainBox = document.querySelector("#mainBox")
    var content = document.querySelector("#content")
    mainBox.style.height = content.offsetHeight * 1.4 + "px"
    let multiplier
    if (localStorage.getItem("login") == "true"){
      multiplier = 1.4
    }
    else{
      multiplier = 1.8
    }
    mainBox.style.width = content.offsetWidth * multiplier + "px"
}
resize()
window.addEventListener("resize", resize)

var cadastrel = document.querySelector("#cadastrel")
var pergunta = document.querySelector("#pergunta")