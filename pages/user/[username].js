import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import SocialIcon from '@/components/SocialIcon'
import MainLayout from '@/layouts/MainLayout'

export default function Profile({ frontMatter }) {
    const {
        fullname,
        username,
        avatar,
        occupation,
        company,
        email,
        twitter,
        linkedin,
        github,
        bio,
        joinedDate,
        location,
    } = frontMatter

    return (
        <>
            <PageSEO title={`${fullname} - Blog`} description={`About ${fullname}`} />
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        Profile
                    </h1>
                </div>
                <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
                    <div className="flex flex-col items-center pt-8">
                        <Image
                            src={avatar}
                            alt="avatar"
                            width="192px"
                            height="192px"
                            className="h-48 w-48 rounded-full"
                        />
                        <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{fullname}</h3>
                        <p>@{username}</p>
                        <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
                        <div className="text-gray-500 dark:text-gray-400">{company}</div>
                        <div>Member since {joinedDate}</div>
                        <div>Location: {location}</div>
                        <div className="flex space-x-3 pt-6">
                            <SocialIcon kind="mail" href={`mailto:${email}`} />
                            <SocialIcon kind="github" href={github} />
                            <SocialIcon kind="linkedin" href={linkedin} />
                            <SocialIcon kind="twitter" href={twitter} />
                        </div>
                    </div>
                    <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
                        <h1>Bio</h1>
                        {bio}
                    </div>
                </div>

                <div className="mt-8 divide-y divide-gray-200 dark:divide-gray-700"></div>
            </div>
        </>
    )
}

Profile.Layout = MainLayout
