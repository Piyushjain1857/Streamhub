import { useState, useEffect, useRef } from 'react';
import data from './data';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryTabs from './components/CategoryTabs';
import ContentGrid from './components/ContentGrid';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [myList, setMyList] = useState(() => {
    const saved = localStorage.getItem('streamhub_mylist');
    return saved ? JSON.parse(saved) : [];
  });
  const contentRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('streamhub_mylist', JSON.stringify(myList));
  }, [myList]);

  const categories = ['All', 'Movie', 'Web Series'];

  const filteredData = activeCategory === 'My List' 
    ? myList.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : data.filter((item) => {
        const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });

  const featuredContent = data.find(item => item.rating >= 9.0) || data[0];

  const handleNavClick = (category) => {
    setActiveCategory(category);
    setSearchQuery('');
    // Scroll to content section
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleHomeClick = () => {
    setActiveCategory('All');
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const trendingItems = [...data]
    .filter(item => item.title !== featuredContent.title)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  const toggleMyList = (item) => {
    if (myList.some(listItem => listItem.title === item.title)) {
      setMyList(myList.filter(listItem => listItem.title !== item.title));
    } else {
      setMyList([...myList, item]);
    }
  };

  return (
    <div className="app">
      <Header
        activeCategory={activeCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleNavClick={handleNavClick}
        handleHomeClick={handleHomeClick}
      />
      <Hero 
        items={trendingItems.slice(0, 5)} 
        myList={myList}
        toggleList={toggleMyList}
      />
      <main className="main-content" ref={contentRef}>
        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <ContentGrid
          filteredData={filteredData}
          activeCategory={activeCategory}
          myList={myList}
          toggleMyList={toggleMyList}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
