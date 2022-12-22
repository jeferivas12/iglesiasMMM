// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getFirestore, collection, getDocs, addDoc } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore-lite.js';

const firebaseConfig = {
  apiKey: "AIzaSyB_lDYORlDxwYNGmlGc9eqObonfeQNJEfY",
  authDomain: "iglesia-f2d34.firebaseapp.com",
  projectId: "iglesia-f2d34",
  storageBucket: "iglesia-f2d34.appspot.com",
  messagingSenderId: "355704246458",
  appId: "1:355704246458:web:695d99af033e8ee4c67283",
  measurementId: "G-S3ME94JT9K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export const getIglesia = () => getDocs(collection(db,'iglesias'))
/*export async function getIglesias() {
    const iglesias = collection(db, 'iglesias');
    const iglesiaSnapshot = await getDocs(iglesias);
    const array = []
    const Datos = iglesiaSnapshot.docs.map(doc => {doc.data()
    //console.log(doc.data())
    array.push(doc.data())
    })
    array.forEach(e=>console.log(e.Barrio))
    //const estosDatos = Datos.fore
    return array
    /*const cityList = citySnapshot.docs.map(doc => doc.data());
    console.log(cityList)
    return cityList;*/
//}
console.log("si funciona")
export const setIglesia = (nombre,pastor,Barrio,Ciudad,Departamento,direccion,Telefono) => {
 //addDoc(collection(db,'iglesias'),{nombre,pastor,Barrio,Ciudad,Departamento,direccion,Telefono,Imagen:"boston.jpg"} )  
 console.log(nombre+pastor+direccion)
}