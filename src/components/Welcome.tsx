/**
 * Renders a welcome component based on the user's session.
 * If the user is authenticated, it displays a personalized greeting and a link to the CRUD page.
 * If the user is not authenticated, it displays a generic greeting and a link to sign in.
 */
"use client";
import { useSession } from 'next-auth/react';
import { useTypewriter } from 'react-simple-typewriter';
import { Typewriter } from 'react-simple-typewriter'
import Link from 'next/link';

export default function Welcome() {
    const { data: session } = useSession();
   
    return (
        <div className='shadow-lg h-[calc(100vh-5rem)]'>
            {session?.user ? (
                <div className='h-full'>
                    <div className="bg-gradient-to-b from-[#bb90c6] to-[#ffffff] h-full flex justify-center items-center gap-10 w-full flex-col">

                        <p className='text-[#520968] text-7xl font-bold'> 
                        <Typewriter
                            words={[`HI ${session.user.name?.toUpperCase()}👋 :)`]}
                            loop={1}
                            typeSpeed = {100}
                            deleteSpeed = {100}
                            cursor
                            cursorStyle=''
                            cursorBlinking = {false}
                        />
                        </p>
                        <Link href= "/crud">
                        <p className = "bg-[#681c7c] text-xl hover:bg-[#5d1372] text-white font-bold py-3 px-5 rounded-full shadow-indigo-500/40" >VISIT OUR CRUD</p>
                        </Link>
                            
                        {/* <img
                            src={session?.user?.image || ""}
                            alt=""
                            className=" rounded-full cursor-pointer w-96 h-72"
                        />  */}
                    </div>
                </div>
            ) : (

                <div className=" bg-gradient-to-b from-[#bb90c6] to-[#ffffff] flex justify-center items-center w-full h-full gap-10 flex-col">
                    <p className='text-[#520968] text-7xl font-bold'>HI <Typewriter
                            words={['WORLD !','GUEST ! :)']}
                            typeSpeed = {100}
                            deleteSpeed = {100}
                            loop={1}
                            cursor
                            cursorStyle=''
                            cursorBlinking = {false}
                        /></p>
                        <Link href= "#team">
                        <p className = "bg-[#681c7c] text-xl hover:bg-[#5d1372] text-white font-bold py-3 px-5 rounded-full shadow-indigo-500/40'" >SIGN IN TO VISIT OUR CRUD</p>
                        </Link>
                        
                </div>
            )
            }
        </div>
    )
}
