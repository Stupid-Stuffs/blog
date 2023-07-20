import api from '@/lib/axios'
import { getTokenFromLocalStorage } from '@/lib/token'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Comments = ({ slug }) => {
    const [comment, setComment] = useState('')

    const [comments, setComments] = useState([])
    const [triggerComment, setTriggerComment] = useState(false)

    const token = getTokenFromLocalStorage()

    useEffect(() => {
        const fetchComment = () => {
            api.get(`/api/blog/${slug}/comment`).then((res) => setComments(res.data))
        }
        fetchComment()
    }, [triggerComment])

    const commentBlog = (content) => {
        api
            .post(`/api/${slug}/comment`, {
                content,
            })
            .then(() => setTriggerComment(!triggerComment))
            .catch((e) => toast.error(e))
    }

    const likeComment = (id) => {
        api
            .post(`/api/blog/comment/${id}/like`)
            .then((res) => {
                setTriggerComment(!triggerComment)
            })
            .catch((e) => toast.error(e))
    }

    const unlikeComment = (id) => {
        api
            .delete(`/api/blog/comment/${id}/like`)
            .then((res) => {
                setTriggerComment(!triggerComment)
            })
            .catch((e) => toast.error(e))
    }
    console.log(triggerComment);

    return (
        <div id="comment" className="prose">
            <div className="prose-headings:h2 my-3 font-semibold">💬 Post Comment</div>
            <textarea
                className="w-full rounded-md border border-gray-300 shadow-lg"
                rows={4}
                placeholder="✍️ Write your comment"
                value={comment}
                onChange={(e) => setComment(e.currentTarget.value)}
            />
            <button
                onClick={commentBlog(comment)}
                className="my-2 w-full rounded-md bg-primary-200 px-4 py-2 font-semibold text-gray-600"
            >
                Post
            </button>
            <div>
                {comments.map((item) => {
                    const { num_likes, liked, comment_id } = item
                    return (
                        <div>
                            <div className="rounded-sm border border-gray-100 px-4 py-2 shadow-sm">
                                {item.content}
                            </div>
                            {token ? (
                                <div>
                                    <button
                                        onClick={() => {
                                            if (liked) unlikeComment(comment_id)
                                            else likeComment(comment_id)
                                        }}
                                        className="my-2 rounded-md py-1 px-2 text-lg"
                                    >
                                        {liked ? '👍' : '👍🏻'}
                                        <span className="text-sm">
                                            {liked ? 'You and' : ''} {num_likes > 0 ? `${num_likes} people` : ''} like
                                            this{' '}
                                        </span>
                                    </button>
                                </div>
                            ) : (
                                <span className="inline-block w-full py-1 text-sm">
                                    {num_likes} people liked this
                                </span>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Comments
