import React from 'react';
import DrinkSwitcher from '../components/DrinkSwitcher';
;

export default function Profile() {
  return (
    <div className="profile-page">
      <h1>Hello User</h1>
      <DrinkSwitcher />
      {/* Later: show stats, preferences, saved events based on drinkType */}
    </div>
  );
}
