// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE0CH0fBSj09WSH7_t6KZ5BLDZwMqbwt8",
  authDomain: "netflix-clone-6874e.firebaseapp.com",
  projectId: "netflix-clone-6874e",
  storageBucket: "netflix-clone-6874e.firebasestorage.app",
  messagingSenderId: "158593725246",
  appId: "1:158593725246:web:372f649f94577a08c2326f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const signup = async(name, email, password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user;
    
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    }
    catch(error){
        console.log(error)
       toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}

const login = async (email, password) => {  // Added email and password parameters here
    try {
        await signInWithEmailAndPassword(auth, email, password) 
    } catch(error) {
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}

const logout = () => {
    signOut(auth)
}

export { auth, db, login, signup, logout }