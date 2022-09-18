import React from "react";

function Footer() {
  return (
    <footer className="border-t py-5 bg-gray-100 fixed bottom-0 w-full">
      <div className="px-6 md:container md:mx-auto flex justify-between items-center">
        <span className="text-sm text-gray-400">
          &copy; Classic, 2022. All rights reserved.
        </span>
        <span className="text-sm text-gray-400">
          Developed by:{" "}
          <a href="https://amkam.vercel.app" target="_blank" rel="noreferrer">
            Amkam WebAvenger
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
