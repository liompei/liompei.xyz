import {getFileBySlug} from "@/lib/mdx";
import {MDXRemote} from "next-mdx-remote/rsc";

export default async function Page() {
  const {frontMatter, content} = await getFileBySlug('about')
  const title = frontMatter.title
  return (
    <div className='prose max-w-none'>
      <h1>{title}</h1>
      <MDXRemote source={content}/>
    </div>
  )
}