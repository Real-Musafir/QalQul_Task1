import React from 'react';
import useFetchUser from '../customHooks/useFetchUser';

const UserDetails = ({ userId, refresh }) => {
  const { user, loading, error } = useFetchUser(userId, refresh);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>No user data found.</div>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <button onClick={refresh}>Refresh</button>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <h2>Address</h2>
      <p><strong>Street:</strong> {user.address.street}</p>
      <p><strong>Suite:</strong> {user.address.suite}</p>
      <p><strong>City:</strong> {user.address.city}</p>
      <p><strong>Zipcode:</strong> {user.address.zipcode}</p>
      <h2>Company</h2>
      <p><strong>Name:</strong> {user.company.name}</p>
      <p><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
      <p><strong>BS:</strong> {user.company.bs}</p>
    </div>
  );
};

export default UserDetails;
