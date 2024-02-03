import Image from 'next/image'
import style from './page.module.css'
import CreateProject from '../../component/CreateProject'
import Profile from '../../component/Profile'
import ProjectList from '../../component/ProjectList'

export default function DashboardPage () {
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