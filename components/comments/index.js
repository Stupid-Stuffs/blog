const Comments = () => {
    return (
        <div id="comment" className="prose">
            <div className="prose-headings:h2 my-3 font-semibold">💬 Post Comment</div>
            <textarea
                className="w-full rounded-md border border-gray-300 shadow-lg"
                rows={4}
                placeholder="✍️ Write your comment"
            />
            <button className="rounded-md bg-primary-200 w-full font-semibold text-gray-600 my-2 px-4 py-2">Post</button>
        </div>
    )
}

export default Comments
