const genres = ['Action', 'Sci-Fi', 'Drama', 'Comedy', 'Thriller', 'Horror', 'Romance', 'Adventure'];
const categories = ['Movie', 'Web Series'];

const movies = [];
for (let i = 1; i <= 100; i++) {
  const category = categories[i % categories.length];
  const genre = genres[i % genres.length];
  const is2026 = i <= 60;
  const year = is2026 ? 2026 : 2024 + (i % 2);
  
  // Use LoremFlickr with seeds for reliable, high-quality images
  const seed = i;
  const keywords = `${genre.toLowerCase()},movie`;
  
  movies.push({
    id: `ai-${i}`,
    title: `${genre} ${is2026 ? 'Legacy' : 'Quest'} ${i}`,
    category: category,
    rating: (Math.random() * 2 + 7.5).toFixed(1),
    description: `A gripping ${category.toLowerCase()} set in ${year}, exploring themes of ${genre.toLowerCase()} and human nature.`,
    image: `https://loremflickr.com/500/750/${keywords}?lock=${seed}`,
    backdrop: `https://loremflickr.com/1920/1080/${keywords}?lock=${seed}`
  });
}

console.log(JSON.stringify(movies, null, 2));
