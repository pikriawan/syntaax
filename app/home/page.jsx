import Image from 'next/image'
import CreateProject from '../../component/CreateProject'
import Profile from '../../component/Profile'
import ProjectList from '../../component/ProjectList'
import style from './page.module.css'

export default function HomePage() {
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
      <main className={style.main}>
        <ProjectList />
      </main>
    </>
  )
}