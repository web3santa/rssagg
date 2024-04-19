import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <div>
      <div className="navbar bg-neutral-100">
        <div className="container">
          <div className="flex-1">
            <Link href="/">Hello</Link>
          </div>
          <div className="flex-none">
            <Link href="/create" className="btn btn-ghost">
              Create Post
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
