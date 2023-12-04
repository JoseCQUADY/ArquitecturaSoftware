/**
 * Renders a component that displays a sign-in or sign-out button based on the user's session status.
 */
import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Toaster, toast } from 'sonner';

const SesionUser: React.FC = () => {
  const { data: session } = useSession();

  return (
    <div>
      <Toaster />
      {session?.user ? (
        <div>
          <div className="flex gap-x-2 items-center">
           
            {/* <p>Bienvenido de nuevo {session.user.name}</p>
            <img
              src={session?.user?.image || ""}
              alt=""
              className="w-10 h-10 rounded-full cursor-pointer"
            /> */}
            <button
              className="bg-[#681c7c] hover:bg-[#5d1372] text-white font-bold py-3 px-5 rounded-full shadow-indigo-500/40"
              onClick={async () => {
                await signOut({
                  callbackUrl: "/",
                });
              }}
            >
              SIGN OUT
            </button>

          </div>
        </div>
      ) : (

        <button
          onClick={() => {
            signIn("google",{
              callbackUrl: "/",
            });

          }}
          className="bg-[#681c7c] hover:bg-[#5d1372] text-white font-bold py-3 px-5 rounded-full shadow-indigo-500/40"
        >
          SIGN IN
        </button>

      )
      }
    </div >
  );
}

export default SesionUser;