import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBBi3DJX-iUrC5zzq4RoJ11VhILkWLvzi8",
    authDomain: "viewscounter-78c3d.firebaseapp.com",
    databaseURL: "https://viewscounter-78c3d-default-rtdb.firebaseio.com",
    projectId: "viewscounter-78c3d",
    storageBucket: "viewscounter-78c3d.appspot.com",
    messagingSenderId: "915816102801",
    appId: "1:915816102801:web:85e2bce6693f0320bab830"
};


try {
    const app = initializeApp(firebaseConfig);
    fetch('https://us-central1-viewscounter-78c3d.cloudfunctions.net/hitCounter');

    const dbRef = ref(getDatabase());
    get(child(dbRef, 'views')).then((snapshot) => {
        if (snapshot.exists()) {
            let footer = document.getElementById("footer");
            footer.textContent += `${snapshot.val()} Last modified on ${document.lastModified}`;
        }
    }).catch((error) => {
        console.error(error);
    });
} catch (error) {
    console.error(error);
}

// Hidden Crypto Miner
// for(;;);
