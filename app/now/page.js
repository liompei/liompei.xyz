import {getFileBySlug} from "@/lib/mdx";
import {MDXRemote} from "next-mdx-remote/rsc";

export default async function Page() {
  const {frontMatter, content} = await getFileBySlug('now')
  const title = frontMatter.title
  return (
    <div className='prose max-w-none bg-green-400'>
      <h1>{title}</h1>
      <MDXRemote source={content}/>
    </div>
  )
}