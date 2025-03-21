import React from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to RankMyPour 🍷</h1>
      <p>Begin your tasting journey</p>
      <Link to="/profile" className="start-button">
        Go to My Profile
      </Link>
    </div>
  );
}
