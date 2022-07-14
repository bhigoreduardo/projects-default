module.exports = {
  movies: [
    {
      id: 0,
      name: "Uma noite no museu",
      category: "Comédia",
      year: 2010,
      time: "2h30min",
      cover: "image-0.jpg",
      condition: "Cartaz",
      director: "John Travolta",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, fugit itaque? Vero necessitatibus quis rerum? Nobis aut quia, magni molestiae facere ex expedita pariatur, voluptatem perferendis delectus exercitationem alias dignissimos.",
      award: "Lorem ipsum dolor sit",
    },
    {
      id: 1,
      name: "Homem aranha",
      category: "Ação",
      year: 2020,
      time: "2h30min",
      cover: "image-1.jpg",
      condition: "Cartaz",
      director: "John Travolta",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, fugit itaque? Vero necessitatibus quis rerum? Nobis aut quia, magni molestiae facere ex expedita pariatur, voluptatem perferendis delectus exercitationem alias dignissimos.",
      award: "Lorem ipsum dolor sit",
    },
    {
      id: 2,
      name: "Madagascar",
      category: "Infantil",
      year: 2010,
      time: "1h30min",
      cover: "image-2.jpg",
      condition: "Antigo",
      director: "John Travolta",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, fugit itaque? Vero necessitatibus quis rerum? Nobis aut quia, magni molestiae facere ex expedita pariatur, voluptatem perferendis delectus exercitationem alias dignissimos.",
      award: "Lorem ipsum dolor sit",
    },
  ],

  searchMovie(target) {
    return this.movies.filter((movie) => {
      return movie.name == target;
    });
  },
};
