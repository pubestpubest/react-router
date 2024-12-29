import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg text-gray-500">Page not found</p>
      <Link to="/">Go to home</Link>
    </div>
  );
}
