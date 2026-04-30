import { useState, useEffect } from 'react';

function useMyList() {
  const [myList, setMyList] = useState(() => {
    try {
      const stored = localStorage.getItem('streamhub_mylist');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('streamhub_mylist', JSON.stringify(myList));
  }, [myList]);

  const addToList = (item) => {
    setMyList((prev) => {
      if (prev.some((i) => i.title === item.title)) return prev;
      return [...prev, item];
    });
  };

  const removeFromList = (item) => {
    setMyList((prev) => prev.filter((i) => i.title !== item.title));
  };

  const isInList = (item) => {
    return myList.some((i) => i.title === item.title);
  };

  const toggleList = (item) => {
    if (isInList(item)) {
      removeFromList(item);
    } else {
      addToList(item);
    }
  };

  return { myList, addToList, removeFromList, isInList, toggleList };
}

export default useMyList;
