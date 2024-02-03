'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import style from './style.module.css'
import Button from '../Button'
import Modal, {
  ModalHeader,
  ModalBody,
  ModalFooter
} from '../Modal'
import TextField from '../TextField'
import { createProject } from '../../app/action'

export default function CreateProject () {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCreating, setIsCreating] = useState(false)
  const [newProjectName, setNewProjectName] = useState('')
  const [message, setMessage] = useState('')

  async function handleSetNewProjectName (event) {
    setNewProjectName(event.target.value)

    if (message) {
      setMessage('')
    }
  }

  async function handleCreateProject (event) {
    event.preventDefault()

    if (message) {
      setMessage('')
    }

    setIsCreating(true)
    const data = await createProject(newProjectName)

    if (data.success) {
      setNewProjectName('')
      setIsModalOpen(false)
    } else {
      setMessage(data.message)
    }

    setIsCreating(false)
  }

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
      <Modal
        disableClose={isCreating}
        onClose={() => setIsModalOpen(false)}
        open={isModalOpen}
      >
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
              onInput={handleSetNewProjectName}
              required
              value={newProjectName}
            />
          </form>
          <p className={clsx(style.message, {
            [style['message--hidden']]: message === ''
          })}>
            {message}
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
            form='create-project-form'
            loading={isCreating}
            type='submit'
          >
            Create project
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}