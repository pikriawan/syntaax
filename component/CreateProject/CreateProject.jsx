'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { createProject } from '../../app/action'
import Button from '../Button'
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader
} from '../Modal'
import TextField from '../TextField'
import style from './style.module.css'

export default function CreateProject() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newProjectName, setNewProjectName] = useState('')
  const [isCreating, setIsCreating] = useState(false)
  const [error, setError] = useState('')

  async function handleCreateProject(event) {
    event.preventDefault()
    setIsCreating(true)
    const data = await createProject(newProjectName)
    setIsCreating(false)

    if (data.success) {
      setNewProjectName('')
      setIsModalOpen(false)
    } else {
      setError(data.error)
    }
  }

  useEffect(() => {
    setError('')
  }, [
    isModalOpen,
    setIsModalOpen,
    newProjectName,
    setNewProjectName,
    isCreating,
    setIsCreating
  ])

  return (
    <>
      <Button className={style['create-project__button--plus']} onClick={() => setIsModalOpen(true)}>
        <Image
          alt='Plus'
          height={24}
          src='/img/plus.svg'
          width={24}
        />
      </Button>
      <Modal onClose={() => setIsModalOpen(false)} open={isModalOpen}>
        <ModalHeader>
          <h3>
            New project
          </h3>
        </ModalHeader>
        <ModalBody>
          <form id='create-project-form' onSubmit={handleCreateProject}>
            <TextField
              className={style['modal__text-field']}
              disabled={isCreating}
              onInput={(event) => setNewProjectName(event.target.value)}
              required
              value={newProjectName}
            />
          </form>
          <p className={clsx(style.message, {
            [style['message--hidden']]: error === ''
          })}>
            {error}
          </p>
        </ModalBody>
        <ModalFooter className={style.modal__footer}>
          <Button
            className={style['modal__button--cancel']}
            color='error'
            disabled={isCreating}
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </Button>
          <Button
            className={style['modal__button--submit']}
            disabled={isCreating}
            loading={isCreating}
            form='create-project-form'
            type='submit'
          >
            Create project
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}