import { Link } from "react-router";

export function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-base-content text-6xl font-bold">404</h1>
        <p className="text-base-content/70 mt-4 text-xl">Page not found</p>
        <Link to="/" className="btn btn-primary mt-8">
          Go back home
        </Link>
      </div>
    </div>
  );
}
