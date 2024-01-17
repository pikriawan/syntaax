'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import style from './style.module.css'
import Button from '@/components/button'
import Loader from '@/components/loader'

export default function Project ({ name }) {
  const router = useRouter()
  const [project, setProject] = useState()
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    async function fetchProject () {
      const response = await fetch(`/api/project/${name}`)
      const data = await response.json()
      setProject(data)
      setIsFetching(false)
    }

    fetchProject()
  }, [])

  return isFetching ? (
    <div className={style['loader-wrapper']}>
      <Loader height={32} width={32} />
    </div>
  ) : (
    project ? (
      <>
        <header className={style.header}>
          <button
            className={style.header__back}
            href='/'
            onClick={() => router.back()}
          >
            <Image
              alt='Back'
              height={24}
              src='/img/arrow-left.svg'
              width={24}
            />
          </button>
          <h3 className={style.header__title}>
            {project.name}
          </h3>
          <Button className={style.header__edit}>
            Edit
          </Button>
          <Button className={style.header__save}>
            Save
          </Button>
        </header>
      </>
    ) : (
      <p>
        Project not found
      </p>
    )
  )
}