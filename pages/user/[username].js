import Image from '@/components/Image';
import { PageSEO } from '@/components/SEO';
import SocialIcon from '@/components/social-icons';

export async function getServerSideProps(context) {
  const { username } = context.params;
  console.log(username)
  return {
    props: {
      
    }
  }
}

export default function Profile({ authorDetails }) {
  const frontMatter = {
    fullname: "Le Viet Hoang",
    username: "hashdotlee",
    occupation: "Bán vé số",
    company: "Công ty TNHH Gầu Cầm",
    avatar: "/static/images/avatar.png",
    email: "aaa@gmail.com",
    github: "aaa",
    twitter: "bbb",
    linkedin: "cc",
    github: "dd",
    joinedDate: "Nov, 2022",
    location: "Vietnam",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }

  const { fullname, username, avatar, occupation, company, email, twitter, linkedin, github, bio } = frontMatter

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
            <div>Member since {frontMatter.joinedDate}</div>
            <div>Location: {frontMatter.location}</div>
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

        <div className="divide-y mt-8 divide-gray-200 dark:divide-gray-700"></div>

        abc
      </div>
    </>
  )
}