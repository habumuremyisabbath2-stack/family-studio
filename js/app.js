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
const trending = [
{
title:"Avatar",
image:"https://via.placeholder.com/300x450?text=Avatar"
},
{
title:"John Wick",
image:"https://via.placeholder.com/300x450?text=John+Wick"
},
{
title:"Fast X",
image:"https://via.placeholder.com/300x450?text=Fast+X"
},
{
title:"Black Panther",
image:"https://via.placeholder.com/300x450?text=Black+Panther"
}
];

const trendingContainer = document.getElementById("trendingMovies");

trending.forEach(movie=>{
trendingContainer.innerHTML += `
<div class="trending-card">
<img src="${movie.image}" alt="${movie.title}">
<h3>${movie.title}</h3>
<button onclick="location.href='watch.html'">Watch</button>
</div>
`;
});
