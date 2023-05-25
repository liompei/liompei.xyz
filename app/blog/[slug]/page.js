import {MDXRemote} from 'next-mdx-remote/rsc'
import {getFileBySlug} from "@/lib/mdx";

export default async function Page({params}) {
  const slug = params.slug
  const {frontMatter, content} = await getFileBySlug('blog', slug)

  return (
    <div className='prose mx-auto max-w-none'>
      <h1 className=''>{frontMatter.title}</h1>

      <MDXRemote source={content}/>
    </div>
  )
}