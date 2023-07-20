import CoolEmoji from '@/components/CoolEmoji'
import Footer from '@/components/Footer'
import Link from '@/components/Link'
import MobileNav from '@/components/MobileNav'
import SectionContainer from '@/components/SectionContainer'
import ThemeSwitch from '@/components/ThemeSwitch'
import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'
import { BsSearch } from 'react-icons/bs'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { PiPencilSimpleLineLight } from 'react-icons/pi'
import UserDropDownMenu from './components/UserDropDownMenu'
import { getTokenFromLocalStorage } from '@/lib/token'

export default function MainLayout({ children }) {
  const token = getTokenFromLocalStorage()
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div className="flex-start flex gap-3">
            <MobileNav />
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="item mr-4 flex">
                  <CoolEmoji />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold md:mt-[-10px] md:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden md:flex md:items-center md:gap-3">
              <div>
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="p-1 font-medium text-gray-900 dark:text-gray-100 md:p-4"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>

              <div className="mr-6 inline-block h-[32px] min-h-[1em] bg-gray-500 pr-[1.2px] dark:bg-gray-300"></div>
            </div>
            <div className="flex gap-4">
              <ThemeSwitch />

              <button>
                <BsSearch fontSize={20} />
              </button>
              {token && (
                <Link
                  href={'/user/write'}
                  className="inline-flex items-center rounded-3xl border-2 border-gray-500 bg-primary-300 py-2 px-4 font-bold text-gray-800 hover:bg-primary-400"
                >
                  <PiPencilSimpleLineLight fontSize={20} style={{ marginRight: '6px' }} />
                  <span>Write</span>
                </Link>
              )}
              <button>
                <IoIosNotificationsOutline fontSize={28} />
              </button>
              <UserDropDownMenu />
            </div>
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}
