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

  return isFetching ? <Loader /> : (
    project ? (
      <>
        <header className={style.header}>
          <Button
            className={style['header__back']}
            href='/'
            onClick={() => router.back()}
          >
            <Image
              alt='Back'
              height={24}
              src='/img/arrow-left.svg'
              width={24}
            />
          </Button>
          <h3>
            {project.name}
          </h3>
          <Button>
          </Button>
          <Button>
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