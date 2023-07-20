import { MDXLayoutRenderer } from '@/components/MDXComponents'
import MainLayout from '@/layouts/MainLayout'
import { bundleMDX } from 'mdx-bundler'

const DEFAULT_LAYOUT = 'PostLayout'

export async function getServerSideProps({ params }) {
  const { slug } = params
  const blog = await fetch(`${process.env.API_URL}/api/blog/${slug}`).then((res) => res.json())
  const blog_content = await bundleMDX({ source: blog.content })
  const frontMatter = { ...blog }
  const authorDetails = [{ name: blog?.user?.username || blog?.user?.email }]
  const post = blog_content.code

  return { props: { post, frontMatter, authorDetails } }
}

export default function Blog({ post, frontMatter, authorDetails }) {
  return (
    <MainLayout>
      <MDXLayoutRenderer
        frontMatter={frontMatter}
        authorDetails={authorDetails}
        layout={DEFAULT_LAYOUT}
        mdxSource={post}
      />
    </MainLayout>
  )
}
