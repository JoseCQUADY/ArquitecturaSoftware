
import axios from 'axios'
import UserCard from '@/components/UserCard';
import Link from 'next/link';
import { useRef } from 'react';


async function getUsers() {
  try {
    const { data } = await axios.get('http://localhost:3000/api/users')
    return data;
  } catch (error) {
    return error;
  }
}

export default async function page() {
  const users = await getUsers()
  return (
    <div className='min-h-screen w-full bg-[#bb90c6]'>
      <div className=' flex flex-col items-center justify-center h-full  min-h-full'>
        <div className='w-full content-center flex  justify-end'>
          <div className='mr-36 py-6 '>
            <Link href='/new'>
              <button
                className=" select-none rounded-lg bg-[#5d1372] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#5d1372] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
              >
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div className=" w-10/12 h-full flex flex-row  justify-center flex-wrap py-6 gap-5 gap-y-5">{users.map((user : any) => {
          return (
            <UserCard user={user} key={user.id} />
          )
        })}
        </div>
      </div>
    </div>

  )
}



