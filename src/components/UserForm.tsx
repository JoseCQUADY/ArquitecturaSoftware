/**
 * A form component for creating or updating user information.
 * 
 * @returns The UserForm component.
 */

"use client"
import React, { use, useRef } from 'react'
import { useState, useEffect } from "react"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';

export default function UserForm() {
    const [user, setUser] = useState({
        username: '',
        email: '',
        weight: ''
    });

    const form = useRef<HTMLFormElement>(null);
    const router = useRouter();
    const params = useParams();

    const handlechange = (e: { target: { name: any; value: any; }; }) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };

    useEffect(() => {
        if (params.id) {
            const getuser = async () => {
                const res = await axios.get(`/api/users/${params.id}`)
                setUser({
                    username: res.data.username,
                    email: res.data.email,
                    weight: res.data.weight
                })
            }
            getuser()
        }
    }, [params.id])

    const handlesubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (params.id) {
            await axios.put(`/api/users/${params.id}`, user)
            router.push('/crud');
            router.refresh();
            return;
        }
        const result = await axios.post('/api/users', user)
        form.current?.reset();
        router.push('/crud');
        router.refresh();
    }
    return (
        <div className='h-screen w-full flex justify-center items-center py-28 bg-[#bb90c6]'>
            <div className="w-full max-w-xs">
                <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-[#f1e0ed]" onSubmit={handlesubmit} ref={form}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            name="username"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Username"
                            onChange={handlechange}
                            autoFocus
                            value={user.username}
                        />
                    </div>
                    <div className="mb-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            value={user.email}
                            name="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="email.com"
                            onChange={handlechange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">
                            Weight
                        </label>
                        <input
                            value={user.weight}
                            name="weight"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="00.00"
                            onChange={handlechange}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-[#5d1372] hover:bg-[#77338a] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit" // Cambiado a type="submit" para permitir el envío del formulario
                        >
                            Accept
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}
