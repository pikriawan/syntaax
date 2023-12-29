'use client'

import Image from 'next/image'
import { useState } from 'react'

import style from './style.module.css'
import Button from '@/components/button'
import Modal, {
  ModalHeader,
  ModalBody,
  ModalFooter
} from '@/components/modal'
import TextField from '@/components/text-field'
import { createProject } from '@/lib/action'

export default function CreateProject () {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCreating, setIsCreating] = useState(false)
  const [newProjectName, setNewProjectName] = useState('')

  async function handleCreateProject (event) {
    event.preventDefault()
    setIsCreating(true)
    const data = await createProject(newProjectName)

    if (data.success) {
      // success toast
      setNewProjectName('')
      setIsModalOpen(false)
    } else {
      // error toast
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
              onInput={(event) => setNewProjectName(event.target.value)}
              required
              value={newProjectName}
            />
          </form>
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