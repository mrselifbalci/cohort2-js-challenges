const movies = [
    { title: 'Batman', rating: 9.1 },
    { title: 'Dune', rating: 8.1 },
    { title: 'Avengers', rating: 8.4 },
    { title: 'Interstellar', rating: 8.7 }
  ];
  
  const minRating = 8.5
   
  function filterMovies(movies, minRating) {
    // TODO
    // Return the movies with the rating of at least 8.5
    return movies.filter(movie=> movie.rating > minRating )
  }
  
   
  console.log(filterMovies(movies, minRating))