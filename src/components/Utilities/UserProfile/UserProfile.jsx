import React from "react";
import "./UserProfile.css"

const UserProfile = () => {
  return (
    <div className="user-profile">
      <button style={{color:'black'}}>
        <span className="material-symbols-outlined">person</span>
        My Profile
      </button>
    </div>
  );
};

export default UserProfile;
