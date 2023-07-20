/* eslint-disable react/display-name */
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'
import { BlogNewsletterForm } from './NewsletterForm'
import dynamic from 'next/dynamic'

const PostLayout = dynamic(() => import('@/layouts/PostLayout'), { ssr: false })

export const MDXComponents = {
    Image,
    TOCInline,
    a: CustomLink,
    pre: Pre,
    BlogNewsletterForm: BlogNewsletterForm,
    wrapper: ({ components, layout, ...rest }) => {
        const Layout = require(`../layouts/${layout}`).default
        if (layout === 'PostLayout') Layout = PostLayout;
        return <Layout {...rest} />
    },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
