import React, { useState, useEffect } from "react";

const User = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      // Body.json() is asynchronous and returns a Promise object
      // that resolves to a JavaScript object.
      // JSON.parse() is synchronous can parse a string and
      // change the resulting returned JavaScript object.
      const data = await res.json();
      setProfile(data);
    }, 3000);
  });

  return (
    <div>
      <h2>User Details</h2>
      {profile && (
        <div className="profile">
          <h3>{profile.username}</h3>
          <p>{profile.email}</p>
          <a href={profile.website}>{profile.website}</a>
        </div>
      )}

      {!profile && <div>loading...</div>}
    </div>
  );
};

export default User;
