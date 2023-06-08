import Image from 'next/image'
import Container from "@/components/Container";
import PageTitle from "@/components/PageTitle";
import {MDXRemote} from "next-mdx-remote/rsc";
import Link from "next/link";
import {getAllFilesFrontMatter} from "@/lib/mdx";
import BlogPost from "@/components/BlogPost";

export default async function Home() {

  const posts = await getAllFilesFrontMatter("blog")
  const filteredBlogPosts = posts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  )

  const projects = await getAllFilesFrontMatter("projects")
  const filteredProjectPosts = projects

  return (
    <div className='flex flex-col items-start min-w-full bg-green-400'>
      <div className='space-y-4 mb-16'>
        <h1 className='font-bold text-2xl md:text-3xl leading-9'>
          你好，我是贝黎明
        </h1>
        <p className="leading-9">
          我是一名&nbsp;
          <Link
            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 border-pink-500 border-b border-dotted no-underline hover:opacity-70"
            href="/projects">
            研发工程师
          </Link>
          &nbsp;、&nbsp;
          <Link
            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 border-b border-dotted no-underline border-cyan-500 hover:opacity-70"
            href="https://github.com/zuozizhen">
            独立开发者
          </Link>
          ，曾在字节跳动负责&nbsp;
          <Link className="font-bold border-b border-dotted no-underline border-gray-500 hover:opacity-70 text-gray-500"
                href="https://www.smartisan.com/jianguopro3/os">
            Giant OS
          </Link>
          &nbsp;系统应用开发。也曾参与创业公司负责&nbsp;
          <Link className="font-bold border-b border-dotted no-underline border-gray-500 hover:opacity-70 text-gray-500"
                href="https://mastergo.com">
            Alice
          </Link>
          &nbsp; 0-1 的产品和开发工作。&nbsp;你可以在&nbsp;
          <Link
            className="font-bold border-b border-dotted no-underline text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500 border-rose-500 hover:opacity-70"
            href="https://github.com/liompei">
            Github
          </Link>
          &nbsp;了解我，或者了解我现在&nbsp;
          <Link
            className="font-bold border-b border-dotted no-underline text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500 border-indigo-500 hover:opacity-70"
            href="/now">
            正在做的事情
          </Link>
          &nbsp;和更多&nbsp;
          <Link
            className='font-bold border-b border-dotted no-underline text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 border-yellow-500 hover:opacity-70'
            href="/about">
            关于我
          </Link>
          &nbsp;的信息。
        </p>
      </div>
      <h3 className="font-bold text-lg sm:text-xl mb-8 text-gray-900 dark:text-gray-100">
        写作
      </h3>
      <div className="mb-20">
        <div className="mb-4 mt-4">
          {!filteredBlogPosts.length && (
            <p className="text-gray-500 dark:text-gray-500 mb-4">
              没有找到文章
            </p>
          )}
          {filteredBlogPosts.slice(0, 3).map((frontMatter) => (
            <BlogPost key={frontMatter.title} {...frontMatter} />
          ))}
        </div>
        <Link className='flex gap-1 items-center w-fit font-bold no-underline hover:opacity-70 text-gray-500'
              href="/blog">
          查看全部
          <i className="ri-arrow-right-line"></i>
        </Link>
      </div>
      <h3 className="font-bold text-lg sm:text-xl mb-8 text-gray-900 dark:text-gray-100">
        项目
      </h3>
      <div className="mb-20">
        <div className="mb-8 mt-4 gap-8 grid grid-cols-1 sm:grid-cols-2">
          {!filteredProjectPosts.length && (
            <p className="text-gray-500 dark:text-gray-500 mb-4">
              没有找到项目
            </p>
          )}
          {/*{filteredProjectPosts.slice(0, 2).map((frontMatter) => (*/}
          {/*  <DesignCard key={frontMatter.title} {...frontMatter} />*/}
          {/*))}*/}
        </div>
        <Link className='flex gap-1 items-center w-fit font-bold no-underline hover:opacity-70 text-gray-500'
              href="/projects">
          查看全部
          <i className="ri-arrow-right-line"></i>
        </Link>
      </div>
    </div>
  )
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p
          className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.js</code>
        </p>
        <div
          className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div
        className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
