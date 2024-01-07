'use client'

import Image from 'next/image'
import { useState } from 'react'

import style from './style.module.css'
import Button from '@/components/button'
import Dropdown, {
  DropdownMenu,
  DropdownItem,
  DropdownDivider
} from '@/components/dropdown'

export default function ProjectCard ({ name }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <div className={style['project-card']}>
      <h3 className={style['project-card__title']}>
        {name}
      </h3>
      <Dropdown>
        <Button className={style['project-card__button--option']} onClick={() => setIsDropdownOpen(true)}>
          <Image
            alt='Three dots vertical'
            height={16}
            src='/img/three-dots-vertical.svg'
            width={16}
          />
        </Button>
        <DropdownMenu
          onClose={() => setIsDropdownOpen(false)}
          open={isDropdownOpen}
          stick='right'
        >
          <DropdownItem>
            Edit
          </DropdownItem>
          <DropdownItem>
            Delete
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}