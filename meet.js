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
const database = getDatabase(app)
const usersRef = ref(database, "users")
var myRef 

get(usersRef).then((snapshot)=>{
    let vals = snapshot.val()
    let userValues = Object.values(vals)
    let userObj = Object.keys(vals)
    for (let k = 0; k < userObj.length; k++){
        let referencia = ref(database, `users/${userObj[k]}/username`)
        get(referencia).then((snapshot) => {
            let valorP = snapshot.val()
            if (valorP == localStorage.getItem('username')){
                myRef = valorP
            }
        }) 
        if (userValues[k].username == localStorage.getItem('username')){
        }
    }

})
alert(myRef)
