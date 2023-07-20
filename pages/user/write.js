import dynamic from 'next/dynamic'
import { useState } from 'react'
import MainLayout from '@/layouts/MainLayout'
import api from '@/lib/axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

const MDEditor = dynamic(() => import('@uiw/react-md-editor').then((mod) => mod.default), {
  ssr: false,
})

export default function WriteBlog() {
  const [value, setValue] = useState('**Hello world!!!**')
  const [slug, setSlug] = useState('')
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [tags, setTags] = useState('')

  const router = useRouter()

  const onPublish = () => {
    api
      .post('/api/blog', {
        slug,
        title,
        summary,
        tags: tags.split(',').map((item) => ({ name: item })),
        content: value,
      })
      .then(() => {
        toast.success('Success! You can view your blog now')
        router.push('/')
      })
      .catch((e) => toast.error(String(e)))
  }
  return (
    <MainLayout>
      <div data-color-mode="dark">
        <div className="flex justify-between border-t pt-6">
          <div className="text-xl font-semibold">✍️ Write new blog</div>
          <button
            onClick={() => onPublish()}
            className="rounded-md border bg-primary-200 px-4 py-2 text-sm shadow-sm"
          >
            Publish your nice blog 🚀
          </button>
        </div>
        <div>
          <div className="my-2 flex w-full flex-col gap-2">
            <label htmlFor="title">Title*</label>
            <input
              id={'title'}
              className="rounded-md border border-gray-300 p-2"
              value={title}
              onChange={(e) => {
                setTitle(e.currentTarget.value)
              }}
            />
          </div>
          <div className="my-2 flex w-full flex-col gap-2">
            <label htmlFor="slug">Slug*</label>
            <input
              id={'slug'}
              className="rounded-md border border-gray-300 p-2"
              value={slug}
              onChange={(e) => {
                setSlug(e.currentTarget.value)
              }}
            />
          </div>
          <div className="my-2 flex w-full flex-col gap-2">
            <label htmlFor="summary">Summary*</label>
            <textarea
              id="summay"
              value={summary}
              className="rounded-md border border-gray-300 p-2"
              onChange={(e) => {
                setSummary(e.currentTarget.value)
              }}
            />
          </div>
          <div className="my-2 flex w-full flex-col gap-2">
            <label htmlFor="tags">Tags* (separate by comma ,)</label>
            <input
              id="tags"
              value={tags}
              className="rounded-md border border-gray-300 p-2"
              onChange={(e) => {
                setTags(e.currentTarget.value)
              }}
            />
          </div>
        </div>
        <div>
          <label>Content*</label>
          <MDEditor className="mt-3" value={value} onChange={setValue} />
        </div>
      </div>
    </MainLayout>
  )
}
