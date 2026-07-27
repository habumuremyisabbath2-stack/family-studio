const movies = [
{
title:"Rocky Saga",
image:"https://via.placeholder.com/250x350?text=Rocky+Saga"
},
{
title:"Fast X",
image:"https://via.placeholder.com/250x350?text=Fast+X"
},
{
title:"John Wick",
image:"https://via.placeholder.com/250x350?text=John+Wick"
}
];

const container = document.getElementById("movies");

movies.forEach(movie=>{
container.innerHTML += `
<div class="movie-card">
<img src="${movie.image}" alt="${movie.title}">
<h3>${movie.title}</h3>
<a href="watch.html">
<button>Watch Now</button>
</a>
</div>
`;
});
