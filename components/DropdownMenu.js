import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function DropdownMenu({ children, button }) {
  return (
    <Popover className="relative">
      {() => (
        <>
          <Popover.Button>{button}</Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute right-1/2 z-10 mt-3 w-72 max-w-xs translate-x-1/2 px-4 max-lg:translate-x-1 sm:px-0 lg:max-w-3xl">
              {children}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
