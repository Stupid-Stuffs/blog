import AvatarIcon from '@/components/AvatarIcon'
import DropdownMenu from '@/components/DropdownMenu'

export default function UserDropDownMenu() {
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
          <a
            key={'login'}
            href={'#'}
            className="text-md -m-3 flex items-center justify-center rounded-full bg-amber-500 p-2 text-center font-semibold text-white transition duration-150 ease-in-out hover:bg-amber-400 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 dark:bg-amber-600 dark:hover:bg-amber-500"
          >
            Sign up
          </a>
        </div>

        <div className="relative -mt-4 flex flex-col gap-8 p-7">
          <a
            key={'login'}
            href={'/auth/login'}
            className="text-md -m-3 flex items-center justify-center rounded-full bg-primary-500 p-2 text-center font-semibold text-primary-50 transition duration-150 ease-in-out hover:bg-primary-400 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 dark:bg-primary-700 dark:hover:bg-primary-600"
          >
            Log in
          </a>
        </div>
      </div>
    </DropdownMenu>
  )
}
