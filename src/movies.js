const movies = require('../src/data');
//console.log(movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map(movie => movie.director);
  return allDirectors;
}

const allDirectors = getAllDirectors(movies);

function noDuplicates(arr) {
let withoutDuplicates = [];
allDirectors.filter(function (dir) {
  if (withoutDuplicates.indexOf(dir) === -1) {
    withoutDuplicates.push(dir);
  }
})
return withoutDuplicates;
}

//console.log(noDuplicates(movies))

//console.log(getAllDirectors(movies))
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const splielbergMovies = moviesArray.filter(function (obj) {
    return obj.director === "Steven Spielberg" && obj.genre.includes("Drama");
  })
  return splielbergMovies.length;
}
//console.log(howManyMovies(movies))
//Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const totalRates = moviesArray.reduce( (sum, obj) => {
    if (obj.score !== "" && obj.score) { //si "score" es distinto de vacío y existe
      return sum + obj.score;
    }
    }, 0 );
  return (totalRates/Object.keys(moviesArray).length).toFixed(2);
}


//console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramas = moviesArray.filter(movie => movie.genre.includes("Drama") );
  return scoresAverage(dramas);
}

//console.log(dramaMoviesScore (movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const cloneMovies = [...movies];
function orderByYear(moviesArray) {
  return moviesArray.sort((a, b) => a.year - b.year);
}
//console.log(orderByYear(cloneMovies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const cloneMovies2 = [...movies];
function orderAlphabetically(moviesArray) {
  const alphaMovies = moviesArray.sort((a, b) => a.title < b.title ?  -1 : 0); //ternario!
    //if (a.title < b.title) return -1;
    //if (a.title > b.title) return 1;
    //if (a.title === b.title) return 0;
  //})
  const firstMovies = alphaMovies.slice(0,20);
  return firstMovies.map(mov => mov.title);
}
//console.log(orderAlphabetically(cloneMovies2))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes() {
  movies.forEach((movie)=> {
    const hour = movie.duration.split("h")[0];
    const minutes = movie.duration.split("h")[1];
    const mins = minutes.split("min")[0].trim();
    const totalMin = Number(hour)*60 + Number(mins);
    movie.duration = totalMin.toFixed()+" min";
  })
    return movies;
}
//no he conseguido meter el if para el caso de que falten los minutos
//console.log(turnHoursToMinutes())

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
//sin terminar
const cloneMovies3 = [...movies];
function bestYearAvg(moviesArray) {
  const arr = orderByYear(moviesArray);//matriz ordenada por años
  let avg = [];
  for (let i=0; i<arr.length;i++) {
    if (arr[i].year !== arr[i+1].year) {////year da error!!!!
      avg.push(`{arr[i].year} : {arr[i].score}`);
    }
    else {
      avg.push(`{arr[i].year} : {(arr[i].score + arr[i+1].score)/2}`);//no sé cuantos años iguales hay
    }
  }
  return avg;
}

//console.log(bestYearAvg(cloneMovies3))


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
