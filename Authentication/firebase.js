   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
   import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

   
   const firebaseConfig = {
     apiKey: "AIzaSyCUSY6r9HYZPAElimjdRGMaVb9qywDymnQ",
     authDomain: "smit-batch-11-ee9d7.firebaseapp.com",
     projectId: "smit-batch-11-ee9d7",
     storageBucket: "smit-batch-11-ee9d7.appspot.com",
     messagingSenderId: "129261970362",
     appId: "1:129261970362:web:0b06da60de76ac42dc7383",
     measurementId: "G-72MS07RBFC"
   };
 
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);

   const Auth = getAuth(app)


   export {Auth}