import Avatar from '@/components/Avatar'
import DropdownMenu from '@/components/DropdownMenu'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { IoLogOutOutline } from 'react-icons/io5'

export default function UserDropdownMenu({ session }) {
  const { user } = session
  const { id, email, image: avatarUrl, name: fullname } = user
  const username = email.split('@')[0]

  console.log(session)

  return (
    <DropdownMenu button={<Avatar imageSrc={avatarUrl} title={email} />}>
      <div className="divide-y overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800">
        <div className="flex flex-col">
          <Link href={'/me'} passHref>
            <div className="flex-start mt-2 mb-2 flex cursor-pointer flex-row gap-3 rounded-sm pt-2 pb-2 pl-4 pr-4 hover:bg-gray-100">
              <div>
                <Avatar imageSrc={avatarUrl} title={email} width={48} height={48} />
              </div>
              <div className="flex flex-1 flex-col items-start justify-center">
                <p className="text-md font-bold leading-5">{fullname}</p>
                <p className="text-sm leading-5 text-gray-500">@{username}</p>
              </div>
            </div>
          </Link>
        </div>

        <div>
          <div
            className="text-md -ml-[6px] mt-2 mb-2 flex cursor-pointer flex-row items-center justify-center gap-2 pl-4 pr-4 pt-2 pb-2 font-medium text-red-500 hover:bg-gray-100"
            onClick={() => signOut({ callbackUrl: '/home' })}
          >
            <IoLogOutOutline fontSize={22} />
            <span>Log out</span>
          </div>
        </div>
      </div>
    </DropdownMenu>
  )
}
