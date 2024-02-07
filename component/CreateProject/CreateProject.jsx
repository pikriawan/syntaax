'use client'

import clsx from 'clsx'
import Image from 'next/image'
import {
  useEffect,
  useRef,
  useState
} from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { createProject } from '../../app/action'
import Button from '../Button'
import Modal, {
  ModalHeader,
  ModalBody,
  ModalFooter
} from '../Modal'
import SubmitButton from '../SubmitButton'
import TextField from '../TextField'
import style from './style.module.css'

const initialResponse = {
  success: null,
  message: null,
  error: null,
  data: null
}

export default function CreateProject() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [response, createProjectAction] = useFormState(createProject, initialResponse)
  const inputRef = useRef(null)

  async function handleCreateProject(event) {
    await event.currentTarget.form.requestSubmit()
    //inputRef.current.value = ''
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
      <Modal onClose={() => setIsModalOpen(false)} open={isModalOpen}>
        <ModalHeader>
          <h3>
            New project
          </h3>
        </ModalHeader>
        <ModalBody>
          <form action={createProjectAction} id='create-project-form'>
            <TextField
              className={style['modal__text-field']}
              name='name'
              ref={inputRef}
              required
            />
          </form>
          <p className={clsx(style.message, {
            [style['message--hidden']]: response.error === ''
          })}>
            {response.error}
          </p>
        </ModalBody>
        <ModalFooter className={style.modal__footer}>
          <Button
            className={style['modal__button--cancel']}
            color='error'
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </Button>
          <SubmitButton
            className={style['modal__button--submit']}
            form='create-project-form'
            onClick={handleCreateProject}
            type='submit'
          >
            Create project
          </SubmitButton>
        </ModalFooter>
      </Modal>
    </>
  )
}