// LogInButton.js
import Link from "next/link";

export const LogInButton = () => {
  return (
    <Link href="/home/loginpage">
      <button className="rounded-md px-2 py-1 text-sm font-medium text-gray-500 hover:bg-gray-100 focus-visible:bg-gray-100">
        Log In
      </button>
    </Link>
  );
};