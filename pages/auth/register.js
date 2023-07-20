import CoolEmoji from '@/components/CoolEmoji'
import api from '@/lib/axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast } from 'react-toastify'

export default function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const onSuccess = (res) => {
        toast.success('Your account has been created! You can login now 👌')
        router.push('/auth/login')
    }

    const onFailed = (err) => {
        toast.error('Something went wrong! Please check the error: ' + String(err))
    }

    return (
        <>
            <section className="h-screen bg-primary-500 dark:bg-gray-900">
                <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
                    <div className="w-full rounded-xl bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
                        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
                            <div className="flex flex-col items-center">
                                <Logo />
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                                    Create new account
                                </h1>
                            </div>
                            <form
                                className="space-y-4 md:space-y-6"
                                href="#"
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    api
                                        .post('/auth/register', {
                                            username,
                                            password,
                                        })
                                        .then((res) => onSuccess(res))
                                        .catch((e) => onFailed(e))
                                }}
                            >
                                <div>
                                    <label
                                        htmlFor="username"
                                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Username
                                    </label>
                                    <input
                                        name="username"
                                        id="username"
                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                                        value={username}
                                        onChange={(e) => setUsername(e.currentTarget.value)}
                                        placeholder="username"
                                        required=""
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.currentTarget.value)}
                                        placeholder="••••••••"
                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                                        required=""
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="text-md w-full rounded-lg bg-primary-600 px-4 py-2.5 text-center font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Register
                                </button>
                            </form>
                            <Link href="/auth/register">
                                <a className="text-md block w-full rounded-lg bg-gray-300 px-4 py-2.5 text-center font-medium text-white hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    Login
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

function Logo() {
    return (
        <Link
            href="/"
            className="mb-6 flex items-center gap-2 text-2xl font-semibold text-gray-900 dark:text-white"
        >
            <CoolEmoji className="cursor-pointer" />
        </Link>
    )
}
