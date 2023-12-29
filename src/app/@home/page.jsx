import style from './page.module.css'
import CreateProject from '@/components/create-project'
import Profile from '@/components/profile'

import Image from 'next/image'

export default function HomePage () {
  return (
    <>
      <header className={style.header}>
        <Image
          alt='Syntaax'
          className={style.brand}
          height={24}
          src='/img/syntaax.svg'
          width={24}
        />
        <CreateProject />
        <Profile />
      </header>
    </>
  )
}