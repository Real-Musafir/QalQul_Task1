import { useState, useEffect } from 'react';
import { userData } from '../userData';

const useFetchUser = (userId) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = () => {
      setLoading(true);
      setError(null);
      
      const user = userData.find(user => user.id === userId);
      
      if (!user) {
        setError('User not found');
        setUser(null);
      } else {
        setUser(user);
      }
      
      setLoading(false);
    };

    fetchUser();
  }, [userId]);

  return { user, loading, error };
};

export default useFetchUser;
