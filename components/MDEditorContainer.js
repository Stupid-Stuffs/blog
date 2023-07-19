import '@uiw/react-markdown-preview/markdown.css'
import '@uiw/react-md-editor/markdown-editor.css'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false })

export default function MDEditorContainer() {
  const [value, setValue] = useState('**Hello world!!!**')
  return (
    <div data-color-mode="dark">
      <div>title</div>
      <MDEditor value={value} onChange={setValue} fullscreen={false} />
    </div>
  )
}
