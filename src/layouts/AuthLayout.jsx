import {Outlet} from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className='bg-[#262837] w-full min-h-screen py-0 my-0'>
    <main className='bg-[#262837] max-w-4xl m-auto flex flex-col md:flex-row items-center'>
      <img 
        src='../img/logo.svg'
        alt='imagen logotipo'
        className='max-w-xs'
      />
      <div className='p-10 w-full'>
        <Outlet/>
      </div>
    </main>
    </div>
  )
}
