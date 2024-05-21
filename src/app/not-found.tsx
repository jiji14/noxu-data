import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Page not found</h2>
      <p>
        <Link href="/main">Click to see Main Page</Link>
      </p>
    </div>
  );
}
