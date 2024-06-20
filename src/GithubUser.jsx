import React from 'react';

const GithubUser = ({ username }) => {
  return (
    <div className="github-user">
      <h3>{username}</h3>
    </div>
  );
};

export default GithubUser;