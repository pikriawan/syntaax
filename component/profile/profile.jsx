'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import style from './style.module.css'
import Loader from '../loader'
import Modal, {
  ModalHeader,
  ModalBody,
  ModalFooter
} from '../modal'
import SignOutButton from '../sign-out-button'

export default function Profile () {
  const [user, setUser] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    async function fetchUser () {
      const response = await fetch('/api/user')
      const data = await response.json()
      setUser(data)
    }

    fetchUser()
  }, [])

  return (
    <>
      <button className={style.profile__button} onClick={() => setIsModalOpen(true)}>
        {user ? (
          <Image
            alt='Profile'
            className={style.profile__icon}
            height={32}
            src={user.image}
            width={32}
          />
        ) : <Loader />}
      </button>
      <Modal onClose={() => setIsModalOpen(false)} open={isModalOpen}>
        <ModalHeader>
          <h3>
            Profile
          </h3>
        </ModalHeader>
        <ModalBody className={style.modal__body}>
          {user ? (
            <>
              <Image
                alt='Profile'
                className={style['profile__icon--open']}
                height={64}
                src={user.image}
                width={64}
              />
              <h4 className={style.user__name}>
                {user.name}
              </h4>
              <p>
                {user.email}
              </p>
            </>
          ) : <Loader />}
        </ModalBody>
        <ModalFooter>
          <SignOutButton className={style['modal__button--sign-out']} color='error' />
        </ModalFooter>
      </Modal>
    </>
  )
}