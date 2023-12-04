/**
 * Represents the navigation bar component.
 * @returns The JSX element representing the navigation bar.
 */

"use client";

import Link from "next/link";
import { Pacifico } from "next/font/google";
import SesionUser from "./SesionUserButton";


const pacifico = Pacifico({
  subsets: ["latin"],
  weight: '400'
});


function Navbar() {
  

  return (
    <nav style={{ zIndex: 1000 }} className="bg-slate-100 flex items-center py-3 justify-between px-24 text-black shadow-md sticky top-0 z-100" >
      <div>
      <Link href="/">
          <h1 className={`${pacifico.className} text-3xl text-[#5d1372]`}>CRUD</h1>
        </Link>
      </div>
      <div>
        <SesionUser />
      </div>


    </nav>
  );
}

export default Navbar;
