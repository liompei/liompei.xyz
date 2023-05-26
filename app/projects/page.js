import {getFileBySlug} from "@/lib/mdx";
import {MDXRemote} from "next-mdx-remote/rsc";
import PageTitle from "@/components/PageTitle";
import companyProjects from "@/data/companyProjects";
import openSource from "@/data/openSource";
import Card from "@/components/Card";

export default async function Page() {
  const {frontMatter, content} = await getFileBySlug('projects')
  const title = frontMatter.title
  return (
    <div className='flex flex-col items-start'>
      <PageTitle title='我的项目' titleCls='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500'>
        这里主要展示了我工作和业余的一些项目
      </PageTitle>
      <div className='container'>
        <h3 className="font-bold text-lg sm:text-xl mb-8 text-gray-900 dark:text-gray-100">
          工作项目
        </h3>
        <div className="space-y-8 mb-16">
          {companyProjects.map((d) => (
            <Card key={d.title} title={d.title} description={d.description} href={d.href} coverSrc={d.coverSrc}/>))}
        </div>
        <h3 className="font-bold text-lg sm:text-xl mb-8 text-gray-900 dark:text-gray-100">
          开源项目
        </h3>
        <div className="space-y-8 mb-16">
          {openSource.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              description={d.description}
              href={d.href}/>
          ))}
        </div>
      </div>
    </div>
  )
}