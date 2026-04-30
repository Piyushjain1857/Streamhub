const data = [
    {
      "title": "Ramayana",
      "category": "Movie",
      "rating": 8.9,
      "description": "Epic mythological adaptation following the journey of Lord Rama.",
      "image": "https://example.com/images/ramayana.jpg"
    },
    {
      "title": "Toxic",
      "category": "Movie",
      "rating": 8.5,
      "description": "A gripping crime drama set in Goa's drug underworld.",
      "image": "https://example.com/images/toxic.jpg"
    },
    {
      "title": "King",
      "category": "Movie",
      "rating": 8.7,
      "description": "Mentor and disciple survive dangerous missions together.",
      "image": "https://example.com/images/king.jpg"
    },
    {
      "title": "Jana Nayagan",
      "category": "Movie",
      "rating": 8.2,
      "description": "A political drama about leadership and power.",
      "image": "https://example.com/images/jananayagan.jpg"
    },
    {
      "title": "Toy Story 5",
      "category": "Movie",
      "rating": 8.6,
      "description": "Woody and Buzz return for another emotional adventure.",
      "image": "https://example.com/images/toystory5.jpg"
    },
    {
      "title": "Supergirl",
      "category": "Movie",
      "rating": 7.9,
      "description": "DC superhero story focusing on Kara Zor-El.",
      "image": "https://example.com/images/supergirl.jpg"
    },
    {
      "title": "The Odyssey",
      "category": "Movie",
      "rating": 9.0,
      "description": "Christopher Nolan’s epic adaptation of Homer’s Odyssey.",
      "image": "https://example.com/images/odyssey.jpg"
    },
    {
      "title": "Masters of the Universe",
      "category": "Movie",
      "rating": 7.8,
      "description": "Fantasy action based on He-Man universe.",
      "image": "https://example.com/images/heman.jpg"
    },
    {
      "title": "Cocktail 2",
      "category": "Movie",
      "rating": 7.5,
      "description": "Sequel to the romantic drama exploring relationships.",
      "image": "https://example.com/images/cocktail2.jpg"
    },
    {
      "title": "Drishyam 3",
      "category": "Movie",
      "rating": 8.8,
      "description": "Continuation of the intense crime thriller saga.",
      "image": "https://example.com/images/drishyam3.jpg"
    },
  
    {
      "title": "Matka King",
      "category": "Web Series",
      "rating": 8.3,
      "description": "Crime drama exploring gambling networks in India.",
      "image": "https://example.com/images/matkaking.jpg"
    },
    {
      "title": "Euphoria Season 3",
      "category": "Web Series",
      "rating": 8.9,
      "description": "Teen drama dealing with identity, addiction, and relationships.",
      "image": "https://example.com/images/euphoria3.jpg"
    },
    {
      "title": "Beef Season 2",
      "category": "Web Series",
      "rating": 8.4,
      "description": "Dark comedy-drama about rivalry and consequences.",
      "image": "https://example.com/images/beef2.jpg"
    },
    {
      "title": "American Gladiators",
      "category": "Web Series",
      "rating": 7.6,
      "description": "Reality sports competition reboot.",
      "image": "https://example.com/images/gladiators.jpg"
    },
    {
      "title": "Monarch: Legacy of Monsters Season 2",
      "category": "Web Series",
      "rating": 8.1,
      "description": "Monsterverse continues with deeper conspiracies.",
      "image": "https://example.com/images/monarch2.jpg"
    },
    {
      "title": "Maamla Legal Hai Season 2",
      "category": "Web Series",
      "rating": 8.0,
      "description": "Legal comedy drama about courtroom chaos.",
      "image": "https://example.com/images/maamla2.jpg"
    },
    {
      "title": "Jazz City",
      "category": "Web Series",
      "rating": 7.4,
      "description": "Drama set in a vibrant musical city.",
      "image": "https://example.com/images/jazzcity.jpg"
    },
    {
      "title": "Hello Bachhon",
      "category": "Web Series",
      "rating": 7.2,
      "description": "Youth-centric show about school life.",
      "image": "https://example.com/images/hellobachhon.jpg"
    },
    {
      "title": "Glory",
      "category": "Web Series",
      "rating": 8.2,
      "description": "Crime thriller about ambition and betrayal.",
      "image": "https://example.com/images/glory.jpg"
    },
    {
      "title": "The Boroughs",
      "category": "Web Series",
      "rating": 7.9,
      "description": "Mystery drama set in a small town.",
      "image": "https://example.com/images/boroughs.jpg"
    },
  
    // Remaining entries (30 more sample realistic titles)
  
    {
      "title": "Avengers: Doomsday",
      "category": "Movie",
      "rating": 9.1,
      "description": "Marvel’s biggest crossover battle yet.",
      "image": "https://example.com/images/avengers.jpg"
    },
    {
      "title": "Spider-Man: Brand New Day",
      "category": "Movie",
      "rating": 8.7,
      "description": "Peter Parker faces new challenges in NYC.",
      "image": "https://example.com/images/spiderman.jpg"
    },
    {
      "title": "Dune: Part Three",
      "category": "Movie",
      "rating": 9.0,
      "description": "Epic sci-fi continuation of Paul Atreides’ journey.",
      "image": "https://example.com/images/dune3.jpg"
    },
    {
      "title": "Jumanji: Open World",
      "category": "Movie",
      "rating": 7.8,
      "description": "Adventure game world expands globally.",
      "image": "https://example.com/images/jumanji.jpg"
    },
    {
      "title": "The Hunger Games: Sunrise on the Reaping",
      "category": "Movie",
      "rating": 8.6,
      "description": "Prequel to the Hunger Games saga.",
      "image": "https://example.com/images/hungergames.jpg"
    },
  
    {
      "title": "Daredevil: Born Again",
      "category": "Web Series",
      "rating": 8.8,
      "description": "Marvel series about the blind vigilante.",
      "image": "https://example.com/images/daredevil.jpg"
    },
    {
      "title": "Star Wars: Maul – Shadow Lord",
      "category": "Web Series",
      "rating": 8.5,
      "description": "Focuses on Darth Maul’s rise.",
      "image": "https://example.com/images/maul.jpg"
    },
    {
      "title": "The Testaments",
      "category": "Web Series",
      "rating": 8.3,
      "description": "Sequel to The Handmaid’s Tale.",
      "image": "https://example.com/images/testaments.jpg"
    },
    {
      "title": "XO, Kitty Season 2",
      "category": "Web Series",
      "rating": 7.9,
      "description": "Teen romance continues abroad.",
      "image": "https://example.com/images/xokitty.jpg"
    },
    {
      "title": "Bloodhounds Season 2",
      "category": "Web Series",
      "rating": 8.2,
      "description": "Korean action crime series returns.",
      "image": "https://example.com/images/bloodhounds.jpg"
    },
  
    {
      "title": "Untold: Jail Blazers",
      "category": "Web Series",
      "rating": 7.8,
      "description": "True crime sports documentary.",
      "image": "https://example.com/images/untold.jpg"
    },
    {
      "title": "Million Dollar Secret",
      "category": "Web Series",
      "rating": 7.5,
      "description": "Reality show about hidden wealth.",
      "image": "https://example.com/images/million.jpg"
    },
    {
      "title": "Crooks",
      "category": "Web Series",
      "rating": 8.1,
      "description": "European crime thriller.",
      "image": "https://example.com/images/crooks.jpg"
    },
    {
      "title": "Agent From Above",
      "category": "Web Series",
      "rating": 7.6,
      "description": "Sci-fi thriller about alien intervention.",
      "image": "https://example.com/images/agent.jpg"
    },
    {
      "title": "Sins of Kujo",
      "category": "Web Series",
      "rating": 7.7,
      "description": "Psychological crime mystery.",
      "image": "https://example.com/images/kujo.jpg"
    },
  
    {
      "title": "Wedding Impossible",
      "category": "Web Series",
      "rating": 7.4,
      "description": "Romantic drama with unexpected twists.",
      "image": "https://example.com/images/wedding.jpg"
    },
    {
      "title": "Big Mistakes",
      "category": "Web Series",
      "rating": 7.3,
      "description": "Comedy about life’s wrong decisions.",
      "image": "https://example.com/images/bigmistakes.jpg"
    },
    {
      "title": "Temptation Island Season 10",
      "category": "Web Series",
      "rating": 7.2,
      "description": "Reality show testing relationships.",
      "image": "https://example.com/images/temptation.jpg"
    },
    {
      "title": "Made With Love",
      "category": "Web Series",
      "rating": 7.6,
      "description": "Romantic drama about modern love.",
      "image": "https://example.com/images/madewithlove.jpg"
    },
{
      "title": "Alpha Males",
      "category": "Web Series",
      "rating": 7.8,
      "description": "Comedy-drama exploring masculinity.",
      "image": "https://example.com/images/alphamales.jpg"
    }
  ];

  export default data.map(item => ({
    ...item,
    image: `https://picsum.photos/seed/${item.title.replace(/[^a-zA-Z]/g, '')}/500/750`,
    backdrop: `https://picsum.photos/seed/${item.title.replace(/[^a-zA-Z]/g, '')}bg/1920/1080`
  }));
