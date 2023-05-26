'use client'
import {usePathname} from "next/navigation";
import Link from "next/link";
import clsx from 'clsx'
import Footer from "@/components/Footer";
import Image from "next/image";
import {motion} from 'framer-motion';
import LogoBlack from '../public/logo.png'

export default function Container(props) {

  const {children, ...customData} = props
  const pathname = usePathname()

  const meta = {
    title: '贝黎明',
    description: 'dev',
    ...customData
  }

  const variants = {
    hidden: {opacity: 0, x: 0, y: -10},
    enter: {opacity: 1, x: 0, y: 0},
    exit: {opacity: 0, x: 0, y: -10}
  };

  return (
    <div className='flex flex-col h-screen overflow-y-auto mx-auto'>
      <nav className='w-full px-8 py-8 my-8 sticky-nav border-b border-white bg-opacity-70 bg-white'>
        <div className='flex items-center justify-between max-w-2xl mx-auto'>
          <div className='flex items-center text-sm text-gray-900 space-x-10'>
            <Link href='/' className='mr-1'>
              <Image src={LogoBlack} alt='' className='mr-1 w-6 h-6 my-3'/>
            </Link>
            <motion.div
              className='font-medium sm:space-x-10 space-x-4 flex items-center text-gray-600'>
              <Link href='/blog' className={clsx({'font-bold text-gray-900': pathname === '/blog'})}>写作</Link>
              <Link href='/projects' className={clsx({'font-bold text-gray-900': pathname === '/projects'})}>项目</Link>
              <Link href='/now' className={clsx({'font-bold text-gray-900': pathname === '/now'})}>正在做什么</Link>
              <Link href='/about' className={clsx({'font-bold text-gray-900': pathname === '/about'})}>关于我</Link>
            </motion.div>
          </div>
        </div>
      </nav>
      <motion.main
        className='flex flex-col px-6 flex-grow max-w-3xl w-full mx-auto'
        initial='hidden'
        animate='enter'
        exit='exit'
        variants={variants}
        transition={{duration: 0.2, type: 'easeOut'}}>
        {children}
        <Footer/>
      </motion.main>
    </div>
  )
}