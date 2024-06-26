// UserDetails.js
import React from 'react';
import useFetchUser from '../customHooks/useFetchUser';

const UserDetails = ({ userId }) => {
  const { user, loading, error } = useFetchUser(userId);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Age:</strong> {user.age}</p>
    </div>
  );
};

export default UserDetails;
