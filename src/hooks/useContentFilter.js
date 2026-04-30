import { useState, useMemo } from 'react';

function useContentFilter(data) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [data, activeCategory, searchQuery]);

  return {
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    filteredData,
  };
}

export default useContentFilter;
