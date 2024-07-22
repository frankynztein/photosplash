'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const SearchBar = ({inputStyles, buttonStyles, displayStyle, initialQuery = ''}) => {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();
  
  const handleSearch = () => {
    if (query.trim() === '') return;
    setQuery('');
    router.push(`/results?query=${query}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  return (
    <div className={`search-bar px-4 ${displayStyle}`}>
      <input 
        className={`appearance-none border py-2 px-3 text-gray-800 bg-white text-sm font-light leading-tight focus:outline-none focus:shadow-outline h-8 ${inputStyles}`} 
        type="text" 
        placeholder="Start searching"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button 
        className={`font-medium py-1 px-4 my-2 h-[32px] ${buttonStyles}`}
        onClick={handleSearch}
      >Search</button>
    </div>
  )
}

export { SearchBar };