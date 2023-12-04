
/**
 * Renders the page component that displays a list of users.
 * @returns The JSX element representing the page.
 */
  
import axios from 'axios'
import UserCard from '@/components/UserCard';
import Link from 'next/link';
import { useRef } from 'react';
import NewButton from '@/components/NewButton';

async function getUsers() {
  try {
    const { data } = await axios.get('http://localhost:3000/api/users')
    return data;
  } catch (error) {
    return error;
  }
}

export default async function Page() {
  try {
    const users = await getUsers();

    return (
      <div>
        {users !== null ? (
          <div className="min-h-screen w-full bg-[#bb90c6]">
            <div className="flex flex-col items-center justify-center h-full min-h-full">
              <div className="w-full content-center flex justify-end">
                <div className="mr-36 py-6">
                  <NewButton />
                </div>
              </div>
              <div className="w-10/12 h-full flex flex-row justify-center flex-wrap py-6 gap-5 gap-y-5">
                {users.map((user : any) => (
                  <UserCard user={user} key={user.id} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>Loading</div>
        )}
      </div>
    );
  } catch (error) {
    return <div>Please turn on the database</div>;
  }
}

