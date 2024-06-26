import { useState, useEffect } from 'react';

const cache = {};

const useFetchUser = (userId, refresh) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      setError(null);

      if (!refresh && cache[userId]) {
        setUser(cache[userId]);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
          throw new Error('User not found');
        }
        const data = await response.json();
        cache[userId] = data; // Cache the fetched data
        setUser(data);
      } catch (error) {
        setError(error.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId, refresh]);

  return { user, loading, error };
};

export default useFetchUser;
