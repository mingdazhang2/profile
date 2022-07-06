import  { useState, useEffect } from 'react';
function useSearchDebounce(delay = 1000) {
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const delayFn = setTimeout(() => {
      setSearch(searchQuery)
      console.log('typing')
    }, delay);
    return () => clearTimeout(delayFn);
  }, [searchQuery, delay]);

  return [search, setSearchQuery];
}
export default useSearchDebounce;