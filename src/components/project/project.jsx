'use client'

import cn from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
  Tab,
  Tabs,
  TabList,
  TabPanel
} from 'react-tabs'

import style from './style.module.css'
import Button from '@/components/button'
import Editor from '@/components/editor'
import Loader from '@/components/loader'
import Modal, {
  ModalHeader,
  ModalBody,
  ModalFooter
} from '@/components/modal'
import TextField from '@/components/text-field'
import { updateProject } from '@/lib/action'

export default function Project ({ name }) {
  const router = useRouter()
  const [project, setProject] = useState()
  const [isFetching, setIsFetching] = useState(true)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [updatedProjectName, setUpdatedProjectName] = useState(name)
  const [isUpdating, setIsUpdating] = useState(false)
  const [editMessage, setEditMessage] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [code, setCode] = useState('')

  function handleSetUpdatedProjectName (event) {
    setUpdatedProjectName(event.target.value)

    if (editMessage) {
      setEditMessage('')
    }
  }

  async function handleUpdateProjectName (event) {
    event.preventDefault()

    if (editMessage) {
      setEditMessage('')
    }

    setIsUpdating(true)
    const data = await updateProject(name, {
      name: updatedProjectName
    })

    if (data.success) {
      setIsEditModalOpen(false)
      router.replace(`/project/${updatedProjectName}`)
    } else {
      setEditMessage(data.message)
    }

    setIsUpdating(false)
  }

  async function save (event) {
    event.preventDefault()
    setIsSaving(true)
    const data = await updateProject(name, {
      data: `<!doctype html><html><head><style>${css}</style></head><body>${html}<script>${js}</script></body></html>`
    })
    setIsSaving(false)
  }

  function run () {
    setCode(`<!doctype html><html><head><style>${css}</style></head><body>${html}<script>${js}</script></body></html>`)
  }

  useEffect(() => {
    async function fetchProject () {
      const response = await fetch(`/api/project/${name}`)
      const data = await response.json()
      setProject(data)
      setIsFetching(false)
      const doc = data.data || ''
      setHtml(doc.split('<body>')[1]?.split('<script>')[0] || '')
      setCss(doc.split('<style>')[1]?.split('</style>')[0] || '')
      setJs(doc.split('<script>')[1]?.split('</script>')[0] || '')
    }

    fetchProject()
  }, [])

  return isFetching ? (
    <div className={style['loader-wrapper']}>
      <Loader height={24} width={24} />
    </div>
  ) : (
    project ? (
      <>
        <header className={style.header}>
          <a className={style.header__back} href='/'>
            <Image
              alt='Back'
              height={24}
              src='/img/arrow-left.svg'
              width={24}
            />
          </a>
          <h3 className={style.header__title}>
            {project.name}
          </h3>
          <Button className={style.header__edit} onClick={() => setIsEditModalOpen(true)}>
            Edit
          </Button>
          <Modal
            disableClose={isUpdating}
            onClose={() => setIsEditModalOpen(false)}
            open={isEditModalOpen}
          >
            <ModalHeader>
              <h3>
                Edit project
              </h3>
            </ModalHeader>
            <ModalBody>
              <form id='update-project-form' onSubmit={handleUpdateProjectName}>
                <TextField
                  className={style['text-field']}
                  disabled={isUpdating}
                  onInput={handleSetUpdatedProjectName}
                  required
                  value={updatedProjectName}
                />
              </form>
              <p className={cn(style['message'], {
                [style['message--hidden']]: editMessage === ''
              })}>
                {editMessage}
              </p>
            </ModalBody>
            <ModalFooter className={style['modal__footer']}>
              <Button
                className={style['modal__cancel-button']}
                color='error'
                disabled={isUpdating}
                onClick={() => setIsEditModalOpen(false)}
              >
                Cancel
              </Button>
              <Button
                className={style['modal__submit-button']}
                disabled={isUpdating}
                form='update-project-form'
                loading={isUpdating}
                type='submit'
              >
                Save
              </Button>
            </ModalFooter>
          </Modal>
          <Button
            className={style.header__save}
            disabled={isSaving}
            loading={isSaving}
            onClick={save}
          >
            Save
          </Button>
          <Button className={style.header__run} onClick={run}>
            Run
          </Button>
        </header>
        <main className={style.main}>
          <Tabs
            className={style.tabs}
            selectedTabClassName={style['tab--active']}
            selectedTabPanelClassName={style['tab__panel--active']}
          >
            <TabList className={style['tab-list']}>
              <Tab className={style.tab}>
                HTML
              </Tab>
              <Tab className={style.tab}>
                CSS
              </Tab>
              <Tab className={style.tab}>
                JS
              </Tab>
              <Tab className={style.tab}>
                Output
              </Tab>
            </TabList>
            <TabPanel className={style['tab-panel']}>
              <Editor
                onInput={(value) => setHtml(value)}
                language='html'
                value={html}
              />
            </TabPanel>
            <TabPanel className={style['tab-panel']}>
              <Editor
                onInput={(value) => setCss(value)}
                language='css'
                value={css}
              />
            </TabPanel>
            <TabPanel className={style['tab-panel']}>
              <Editor
                onInput={(value) => setJs(value)}
                language='javascript'
                value={js}
              />
            </TabPanel>
            <TabPanel className={style['tab-panel']}>
              <iframe className={style.iframe} srcDoc={code}></iframe>
            </TabPanel>
          </Tabs>
        </main>
      </>
    ) : (
      <p>
        Project not found
      </p>
    )
  )
}