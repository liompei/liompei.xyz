export default function PageTitle({title, titleCls, children}) {

  return (
    <div className='space-y-4 mb-12'>
      <h1 className='font-bold text-2xl md:text-3xl'>
        <span className={titleCls}>{title}</span>
      </h1>
      <p className='prose'>{children}</p>
    </div>
  )
}