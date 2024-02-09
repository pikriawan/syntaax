'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import style from './style.module.css'
import Button from '../Button'
import Dropdown, {
  DropdownMenu,
  DropdownItem,
  DropdownDivider
} from '../Dropdown'
import Link from '../Link'
import Modal, { ModalHeader, ModalBody, ModalFooter } from '../Modal'
import TextField from '../TextField'
import { updateProject, deleteProject } from '../../app/action'

export default function ProjectCard({ name }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [updatedProjectName, setUpdatedProjectName] = useState(name)
  const [isUpdating, setIsUpdating] = useState(false)
  const [error, setError] = useState('')
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  async function handleUpdateProject(event) {
    event.preventDefault()
    setError('')
    setIsUpdating(true)
    const data = await updateProject(name, {
      name: updatedProjectName
    })
    setIsUpdating(false)

    if (data.success) {
      setIsEditModalOpen(false)
    } else {
      setError(data.error)
    }
  }

  async function handleDeleteProject(event) {
    event.preventDefault()
    setIsDeleting(true)
    await deleteProject(name)
    setIsDeleting(false)
    setIsDeleteModalOpen(false)
  }

  useEffect(() => {
    setError('')
  }, [isEditModalOpen, updatedProjectName])

  return (
    <>
      <div className={style['project-card']}>
        <h3 className={style['project-card__title']}>
          <Link
            className={style['project-card__link']}
            href={`/project/${name}`}
          >
            {name}
          </Link>
        </h3>
        <Dropdown>
          <button
            className={style['project-card__button--option']}
            onClick={() => setIsDropdownOpen(true)}
          >
            <Image
              alt="Three dots vertical"
              height={16}
              src="/img/three-dots-vertical.svg"
              width={16}
            />
          </button>
          <DropdownMenu
            onClose={() => setIsDropdownOpen(false)}
            open={isDropdownOpen}
            stick="right"
          >
            <DropdownItem onClick={() => setIsEditModalOpen(true)}>
              Edit
            </DropdownItem>
            <DropdownItem onClick={() => setIsDeleteModalOpen(true)}>
              Delete
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <Modal
        disableClose={isUpdating || isDeleting}
        onClose={() => setIsEditModalOpen(false)}
        open={isEditModalOpen}
      >
        <ModalHeader>
          <h3>Edit project</h3>
        </ModalHeader>
        <ModalBody>
          <form
            id={`update-project-form-${name}`}
            onSubmit={handleUpdateProject}
          >
            <TextField
              className={style['text-field']}
              disabled={isUpdating}
              onInput={(event) => setUpdatedProjectName(event.target.value)}
              required
              value={updatedProjectName}
            />
          </form>
          <p
            className={clsx(style['message'], {
              [style['message--hidden']]: error === ''
            })}
          >
            {error}
          </p>
        </ModalBody>
        <ModalFooter className={style['modal__footer']}>
          <Button
            className={style['modal__cancel-button']}
            color="error"
            disabled={isUpdating}
            onClick={() => setIsEditModalOpen(false)}
          >
            Cancel
          </Button>
          <Button
            className={style['modal__submit-button']}
            disabled={isUpdating}
            form={`update-project-form-${name}`}
            loading={isUpdating}
            type="submit"
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
      <Modal
        onClose={() => setIsDeleteModalOpen(false)}
        open={isDeleteModalOpen}
      >
        <ModalHeader>
          <h3>Delete project</h3>
        </ModalHeader>
        <ModalBody className={style.modal__body}>
          <p>Are you sure?</p>
        </ModalBody>
        <ModalFooter className={style['modal__footer']}>
          <Button
            className={style['modal__cancel-button']}
            disabled={isDeleting}
            onClick={() => setIsDeleteModalOpen(false)}
          >
            Cancel
          </Button>
          <Button
            className={style['modal__submit-button']}
            color="error"
            disabled={isDeleting}
            loading={isDeleting}
            onClick={handleDeleteProject}
            type="submit"
          >
            Yes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}
