import {getAllFilesFrontMatter, getFileBySlug} from "@/lib/mdx";
import {MDXRemote} from "next-mdx-remote/rsc";
import BlogPost from "@/components/BlogPost";

export default async function Page() {
  const {frontMatter, content} = await getFileBySlug('blog')
  const title = frontMatter.title

  const posts = await getAllFilesFrontMatter('blog')

  const filteredBlogPosts =
    posts.sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )


  return (
    <div className='prose max-w-none bg-green-400'>
      <h1>{title}</h1>
      <MDXRemote source={content}/>
      {!filteredBlogPosts.length && (
        <p className='text-gray-500'>
          没有找到文章
        </p>
      )}
      {filteredBlogPosts.map((frontMatter) => (
        <BlogPost key={frontMatter.title} {...frontMatter} />
      ))}
    </div>
  )
}