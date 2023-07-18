import siteMetadata from '@/data/siteMetadata'
import dynamic from 'next/dynamic'

// const DisqusComponent = dynamic(
//   () => {
//     return import('@/components/comments/Disqus')
//   },
//   { ssr: false }
// )

const Comments = ({ frontMatter }) => {
  const comment = siteMetadata?.comment
  if (!comment || Object.keys(comment).length === 0) return <></>
  return (
    <div id="comment">
      none
    </div>
  )
}

export default Comments
