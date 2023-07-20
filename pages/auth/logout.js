import { setTokenToLocalStorage } from '@/lib/token'
import { signOut } from 'next-auth/react'
import { useEffect } from 'react'

export default function Logout() {
    useEffect(() => {
        setTokenToLocalStorage('')
        signOut({ callbackUrl: '/home' })
    }, [])
    return <div></div>
}
