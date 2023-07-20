import api from '@/lib/axios'
import { getTokenFromLocalStorage } from '@/lib/token'
import jwtDecode from 'jwt-decode'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Comments = ({ slug, author }) => {
    const [comment, setComment] = useState('')

    const [comments, setComments] = useState([])
    const [triggerComment, setTriggerComment] = useState(false)

    const token = getTokenFromLocalStorage()

    const decoded = token ? jwtDecode(token) : { username: '', email: '' }

    useEffect(() => {
        const fetchComment = () => {
            api.get(`/api/blog/${slug}/comment`).then((res) => setComments(res.data))
        }
        fetchComment()
    }, [triggerComment])

    const commentBlog = (content) => {
        api
            .post(`/api/blog/${slug}/comment`, {
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
            .catch((e) => toast.error(String(e)))
    }

    const unlikeComment = (id) => {
        api
            .delete(`/api/blog/comment/${id}/like`)
            .then((res) => {
                setTriggerComment(!triggerComment)
            })
            .catch((e) => toast.error(String(e)))
    }

    const deleteComment = (id) => {
        api
            .delete(`/api/blog/comment/${id}`)
            .then(() => {
                toast.success('Deleted!')
                setTriggerComment(!triggerComment)
            })
            .catch((e) => toast.error(String(e)))
    }

    return (
        <div id="comment" className="prose">
            <div className="prose-headings:h2 my-3 font-semibold">💬 Post Comment</div>
            {token ? (
                <>
                    <textarea
                        className="w-full rounded-md border border-gray-300 shadow-lg"
                        rows={4}
                        placeholder="✍️ Write your comment"
                        value={comment}
                        onChange={(e) => setComment(e.currentTarget.value)}
                    />
                    <button
                        onClick={() => commentBlog(comment)}
                        className="my-2 w-full rounded-md bg-primary-200 px-4 py-2 font-semibold text-gray-600"
                    >
                        Post
                    </button>
                </>
            ) : (
                <span>😕 You have to login to use this feature</span>
            )}
            <div>
                <div className="my-3 text-lg font-semibold">Comments</div>
                {comments.map((item) => {
                    const { num_likes, liked, comment_id } = item
                    return (
                        <div>
                            <div className="rounded-sm border border-gray-100 px-4 py-2 shadow-sm">
                                {item.content}
                            </div>
                            {token ? (
                                <div className="flex justify-between">
                                    <button
                                        onClick={() => {
                                            if (liked) unlikeComment(comment_id)
                                            else likeComment(comment_id)
                                        }}
                                        className="my-2 rounded-md py-1 px-2 text-lg"
                                    >
                                        {liked ? '👍' : '👍🏻'}
                                        <span className="text-sm">
                                            {liked ? 'You and' : ''}{' '}
                                            {num_likes > 0 ? `${num_likes - (liked ? 1 : 0)} people` : ''} like this{' '}
                                        </span>
                                    </button>
                                    {decoded &&
                                        (decoded.user === author.username || decoded.email === author.email) && (
                                            <button onClick={() => deleteComment(comment_id)} className="text-sm text-rose-500">Delete</button>
                                        )}
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
