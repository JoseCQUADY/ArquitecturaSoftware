/**
 * Represents a user card component.
 * @param {UserCardProps} props - The props for the UserCard component.
 * @param {User} props.user - The user object containing username, email, weight, and id.
 * @returns {JSX.Element} The rendered UserCard component.
 */

"use client"
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

interface User {
    username: string;
    email: string;
    weight: number;
    id: number
}

interface UserCardProps {
    user: User;
}

export default function UserCard({ user: User }: UserCardProps) {
    const router = useRouter();
    return (
        <div className="relative flex h-44 w-96 flex-col rounded-xl bg-[#f1e0ed] bg-clip-border text-gray-700 shadow-md ">
            <div className="py-4 px-4">
                <h5 className="mb-2 block  font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {User.username}
                </h5>

                <h5 className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    <p>Email : {User.email} </p>
                    <p>Weight : {User.weight}</p>
                </h5>
            </div>
            <div className="p-0 px-4 ">
                <Link href={`/edit/${User.id}`}>
                <button
                    className=" select-none rounded-lg bg-[#23267f] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#23267f] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                >
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1v3m5-3v3m5-3v3M1 7h7m1.506 3.429 2.065 2.065M19 7h-2M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm6 13H6v-2l5.227-5.292a1.46 1.46 0 0 1 2.065 2.065L8 16Z" />
                    </svg>
                </button>
                </Link>
                <button onClick={async () => {
                    if (confirm('Are you sure to delete this user?')) {
                        const res = await axios.delete(`/api/users/${User.id}`)
                        
                        if (res.status === 200) {
                            router.push('/crud')
                            router.refresh()
                        }
                    }
                }}
                    className="select-none mx-2 rounded-lg bg-[#c62e2e] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#c62e2e] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                ><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="M19 0H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM2 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6H2Zm11 3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0h2a1 1 0 0 1 2 0v1Z" />
                    </svg>
                </button>
            </div>
        </div>

    )
}
