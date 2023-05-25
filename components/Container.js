'use client'
import {usePathname} from "next/navigation";
import Link from "next/link";
import clsx from 'clsx'
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Container(props) {

  const {children, ...customData} = props
  const pathname = usePathname()

  const meta = {
    title: '贝黎明',
    description: 'dev',
    ...customData
  }

  return (
    <div className='flex flex-col h-screen overflow-y-auto mx-auto'>
      <nav className='bg-white sticky-nav py-8 px-8 my-8 border-b border-white bg-opacity-70'>
        <div className='flex items-center justify-between max-w-2xl mx-auto'>
          <div className='flex items-center text-sm text-gray-900 space-x-10'>
            <Link href='/' className='mr-1'>
              <Image src='/logo.png' alt='' width='24' height='24'/>
            </Link>
            <Link href='/blog' className={clsx({'font-bold': pathname === '/blog'})}>写作</Link>
            <Link href='/projects' className={clsx({'font-bold': pathname === '/projects'})}>项目</Link>
            <Link href='/now' className={clsx({'font-bold': pathname === '/now'})}>正在做什么</Link>
            <Link href='/about' className={clsx({'font-bold': pathname === '/about'})}>关于我</Link>
          </div>
        </div>
      </nav>
      <div className='flex flex-col px-6 flex-grow max-w-3xl w-full mx-auto'>
        {children}
        <Footer/>
      </div>
    </div>
  )
}