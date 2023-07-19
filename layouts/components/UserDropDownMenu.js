import Avatar from '@/components/Avatar'
import AvatarIcon from '@/components/AvatarIcon'
import DropdownMenu from '@/components/DropdownMenu'
import { signOut } from 'next-auth/react'
import Link from '@/components/Link'
import { IoLogOutOutline } from 'react-icons/io5'

export default function UserDropdownMenu({ session }) {
  if (!(session && session?.user)) return <GuestMenuView />
  return <MemberMenuView session={session} />
}

function GuestMenuView() {
  return (
    <DropdownMenu button={<AvatarIcon className="fill-gray-500 dark:fill-gray-400" />}>
      <div className="overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800">
        <div className="p-4">
          <span className="flex items-center justify-center">
            <span className="text-xl font-bold text-gray-900 dark:text-primary-200">
              Join with us!
            </span>
          </span>
          <span className="block text-center text-sm text-gray-500 dark:text-gray-300">
            Take only a few seconds
          </span>
        </div>

        <div className="relative flex flex-col gap-8 p-7">
          <Link key={'sign-up'} href={'#'}>
            <a className="text-md -m-3 flex items-center justify-center rounded-full bg-amber-500 p-2 text-center font-semibold text-white transition duration-150 ease-in-out hover:bg-amber-400 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 dark:bg-amber-600 dark:hover:bg-amber-500">
              Sign up
            </a>
          </Link>
        </div>

        <div className="relative -mt-4 flex flex-col gap-8 p-7">
          <Link key={'login'} href={'/auth/login'}>
            <a className="text-md -m-3 flex items-center justify-center rounded-full bg-primary-500 p-2 text-center font-semibold text-primary-50 transition duration-150 ease-in-out hover:bg-primary-400 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 dark:bg-primary-700 dark:hover:bg-primary-600">
              Log in
            </a>
          </Link>
        </div>
      </div>
    </DropdownMenu>
  )
}

function MemberMenuView({ session }) {
  const { user } = session
  const { id, email, image: avatarUrl, name: fullname } = user
  const username = email.split('@')[0]
  console.log(session)

  return (
    <DropdownMenu button={<Avatar imageSrc={avatarUrl} title={email} />}>
      <div className="divide-y overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800">
        <div className="flex flex-col">
          <Link href={'/me'} passHref>
            <div className="flex-start mt-2 mb-2 flex cursor-pointer flex-row gap-3 rounded-sm pt-2 pb-2 pl-4 pr-4 hover:bg-gray-100 dark:hover:bg-yellow-900">
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
            className="text-md -ml-[6px] mt-2 mb-2 flex cursor-pointer flex-row items-center justify-center gap-2 pl-4 pr-4 pt-2 pb-2 font-medium text-red-500 hover:bg-gray-100 dark:hover:bg-red-800"
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
