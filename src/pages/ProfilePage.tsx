import { Link, useParams } from "react-router-dom";

export default function ProfilePage() {
  const { profileId } = useParams<{ profileId: string }>();
  return (
    <div>
      <h1>ProfilePage {profileId}</h1>

      <div style={{ display: "flex", gap: "10px" }}>
        <Link to="/">Back to home</Link>
      </div>
    </div>
  );
}
