import { NavLink, Outlet } from "react-router-dom";

export default function Profile() {
  const profile = [1, 2, 3, 4, 5];
  return (
    <div>
      {profile.map((profileId) => (
        <div key={profileId} className="flex flex-col gap-2">
          <NavLink
            to={`/profile/${profileId}`}
            style={({ isActive }) => ({
              color: isActive ? "blue" : "white",
            })}
          >
            Profile {profileId}
          </NavLink>
        </div>
      ))}
      <Outlet />
    </div>
  );
}
