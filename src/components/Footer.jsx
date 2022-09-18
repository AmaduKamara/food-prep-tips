import React from "react";

function Footer() {
  return (
    <footer className="border-t py-4 bg-gray-100 fixed bottom-0 w-full">
      <div className="px-6 md:container md:mx-auto flex justify-between items-center">
        <span className="text-xs text-gray-400">
          &copy; Classic, 2022. All rights reserved.
        </span>
        <span className="text-xs text-gray-400">
          Developed by:{" "}
          <a className="text-cyan-500" href="https://amkam.vercel.app" target="_blank" rel="noreferrer">
            Amkam WebAvenger
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
