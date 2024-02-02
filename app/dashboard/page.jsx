import Image from 'next/image'
import style from './page.module.css'
import CreateProject from '../../component/create-project'
import Profile from '../../component/profile'
import ProjectList from '../../component/project-list'

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