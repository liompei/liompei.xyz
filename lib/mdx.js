import fs from "fs";
import path from "path";
import matter from "gray-matter";

const root = process.cwd()

export async function getFileBySlug(folder, slug) {

  const source = slug
    ? fs.readFileSync(path.join(root, 'data', folder, `${slug}.mdx`), 'utf-8')
    : fs.readFileSync(path.join(root, 'data', `${folder}.md`), 'utf-8')
  const {data, content} = matter(source);

  return {
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      slug: slug || null,
      ...data
    },
    content
  }
}

export async function getAllFilesFrontMatter(folder) {
  const files = fs.readdirSync(path.join(root, 'data', folder))

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, 'data',folder, postSlug), 'utf-8'
    )
    const {data} = matter(source)

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', '')
      },
      ...allPosts
    ]
  }, [])
}