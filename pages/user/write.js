import dynamic from 'next/dynamic'
import { useState } from 'react'
import MainLayout from '@/layouts/MainLayout'
import api from '@/lib/axios'

const MDEditor = dynamic(() => import('@uiw/react-md-editor').then((mod) => mod.default), {
  ssr: false,
})

export default function WriteBlog() {
  const [value, setValue] = useState('**Hello world!!!**')
  const onPublish = () => {
    api.post('/api/blog', {
      content: value,
    })
  }
  return (
    <MainLayout>
      <div data-color-mode="dark">
        <div className="flex justify-end">
          <button
            onClick={() => onPublish()}
            className="my-3 rounded-md border bg-gray-200 px-4 py-2 text-sm shadow-sm"
          >
            Publish your nice blog 🚀
          </button>
        </div>
        <MDEditor value={value} onChange={setValue} />
      </div>
    </MainLayout>
  )
}
