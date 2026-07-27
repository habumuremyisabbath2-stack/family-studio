import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
getFirestore,
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyDrPx2Am0xbAqXbwLFAte5EPUSgldz-Vow",
authDomain: "family-studio-bfafa.firebaseapp.com",
projectId: "family-studio-bfafa",
storageBucket: "family-studio-bfafa.firebasestorage.app",
messagingSenderId: "10850848181",
appId: "1:10850848181:web:73b0f52fe26b6784ec1dfc",
measurementId: "G-XKXBSTME05"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const moviesDiv = document.getElementById("movies");

async function loadMovies(){

const snapshot = await getDocs(collection(db,"movies"));

moviesDiv.innerHTML="";

snapshot.forEach(doc=>{

const movie=doc.data();

moviesDiv.innerHTML += `
<div class="movie-card">

<img src="${movie.image}" alt="${movie.title}">

<h3>${movie.title}</h3>

<p>${movie.description}</p>

<a href="watch.html?video=${encodeURIComponent(movie.video)}">
<button>Watch Movie</button>
</a>

</div>
`;

});

}

loadMovies();
