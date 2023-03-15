import { useRef, useState, useEffect, useCallback } from 'react';
import { Command } from 'cmdk'
import Button from './Button';
import { useRouter } from 'next/router';
import { ColorSwatchIcon, ExternalLinkIcon, HomeIcon, InboxInIcon, SearchIcon, ServerIcon, UserGroupIcon } from '@heroicons/react/outline';

// https://github.com/pacocoursey/cmdk/blob/main/website/components/cmdk/vercel.tsx
export default function CommandMenuNested() {
  const router = useRouter()
  const ref = useRef(null)
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [pages, setPages] = useState(['Home'])
  const activePage = pages[pages.length - 1]
  const isHome = activePage === 'Home'

  const popPage = useCallback(() => {
    setPages((pages) => {
      const x = [...pages]
      x.splice(-1, 1)
      return x
    })
  }, [])

  function bounce() {
    if (ref.current) {
      ref.current.style.transform = 'scale(0.98)'
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.transform = ''
        }
      }, 150)

      // setInputValue('')
    }
  }

  // Toggle the menu when ⌘ M || ⌘ m is pressed
  useEffect(() => {
    const down = (e) => {
      if (e.key.toLowerCase() === 'm' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  function onKeyDown(e) {
    if (e.key === 'Enter') {
      bounce()
    }

    if (isHome || search.length) {
      return
    }

    if (e.key === 'Backspace') {
      e.preventDefault()
      popPage()
      bounce()
    }
  }

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <>
      <Button.secondary onClick={() => setOpen(true)} className="flex gap-4 items-center">
        Command Menu Nested
        <div className="flex gap-1 items-center">
          <kbd className="bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-900 rounded px-1.5 py-0.5 text-neutral-500 dark:text-neutral-400">⌘</kbd>
          <kbd className="bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-900 rounded px-1.5 py-0.5 text-neutral-500 dark:text-neutral-400">M</kbd>
        </div>
      </Button.secondary>

      <Command.Dialog open={open} onOpenChange={setOpen}
        label="Global Command Menu"
        className="dark:bg-neutral-900 pt-4 dark:text-white bg-white dark:border dark:border-neutral-700"
        ref={ref}
        onKeyDown={onKeyDown}
      >

        <div className="px-4 flex gap-2 mb-2">
          {/* {activePage === 'Home' && (
            <button onClick={() => setPages(['Home'])}
              className="bg-[#f0f0f0f3] text-neutral-500 dark:bg-neutral-800 text-[13px] px-2 py-0.5 rounded dark:text-neutral-400 focus-visible:outline-none focus-visible:ring-0">
              Home
            </button>
          )}
          {activePage === 'Documentations' && (
            <>
              <button onClick={() => setPages(['Home'])}
                className="bg-[#f0f0f0f3] text-neutral-500 dark:bg-neutral-800 text-[13px] px-2 py-0.5 rounded dark:text-neutral-400 focus-visible:outline-none focus-visible:ring-0">
                Home
              </button>
              <button onClick={() => setPages(['Home', 'Documentations'])}
                className="bg-[#f0f0f0f3] text-neutral-500 dark:bg-neutral-800 text-[13px] px-2 py-0.5 rounded dark:text-neutral-400 focus-visible:outline-none focus-visible:ring-0">
                Documentations
              </button>
            </>
          )}
          {activePage === 'Teams' && (
            <>
              <button onClick={() => setPages(['Home'])}
                className="bg-[#f0f0f0f3] text-neutral-500 dark:bg-neutral-800 text-[13px] px-2 py-0.5 rounded dark:text-neutral-400 focus-visible:outline-none focus-visible:ring-0">
                Home
              </button>
              <button onClick={() => setPages(['Home', 'Teams'])}
                className="bg-[#f0f0f0f3] text-neutral-500 dark:bg-neutral-800 text-[13px] px-2 py-0.5 rounded dark:text-neutral-400 focus-visible:outline-none focus-visible:ring-0">
                Teams
              </button>
            </>
          )} */}
          <button onClick={() => setPages(['Home'])}
            className="bg-[#f0f0f0f3] text-neutral-500 dark:bg-neutral-800 text-[13px] px-2 py-0.5 rounded dark:text-neutral-400 focus-visible:outline-none focus-visible:ring-0">
            Home
          </button>
          {pages.slice(1, pages.length).map((p) => (
            <button onClick={() => setPages(['Home', p])} key={p}
              className="bg-[#f0f0f0f3] text-neutral-500 dark:bg-neutral-800 text-[13px] px-2 py-0.5 rounded dark:text-neutral-400 focus-visible:outline-none focus-visible:ring-0">
              {p}
            </button>
          ))}
        </div>

        <Command.Input
          value={search}
          onValueChange={setSearch}
          placeholder='What do you need?'
          className="px-4 mb-3 dark:text-white w-full dark:bg-neutral-900 border-x-0 border-t-0 border-b-1 border-b-neutral-300 dark:border-b-neutral-700 h-10 focus:outline-none focus:ring-0 focus:border-b-neutral-300"
        />

        <Command.List className="px-4 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-rounded">

          <Command.Empty>No results found.</Command.Empty>

          {activePage === 'Home' && (
            <>
              <Command.Item onSelect={() => router.push('/')}>
                <div className="flex gap-2.5 items-center">
                  <HomeIcon className="h-5 w-5" />
                  Home
                </div>
              </Command.Item>
              <Command.Item onSelect={() => setPages([...pages, 'Documentations'])}>
                <div className="flex gap-2.5 items-center">
                  <SearchIcon className="h-5 w-5" />
                  Documentation
                </div>
              </Command.Item>
              <Command.Item onSelect={() => setPages([...pages, 'Teams'])}>
                <div className="flex gap-2.5 items-center">
                  <UserGroupIcon className="h-5 w-5" />
                  Join a team
                </div>
              </Command.Item>
              <Command.Item onSelect={() => openInNewTab('https://github.com/wahidari')}>
                <div className="flex gap-2.5 items-center">
                  <ExternalLinkIcon className="h-5 w-5" />
                  Github
                </div>
              </Command.Item>

              <Command.Group heading="Fruits">
                <Command.Item shortcut="O R">
                  <div className="flex gap-2.5 items-center">
                    <ColorSwatchIcon className="h-5 w-5" />
                    Orange
                  </div>
                  <div className="flex gap-1">
                    <kbd className="bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded px-1.5 text-neutral-500 dark:text-neutral-400">O</kbd>
                    <kbd className="bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded px-1.5 text-neutral-500 dark:text-neutral-400">R</kbd>
                  </div>
                </Command.Item>
                <Command.Separator className="h-[1px] w-full bg-neutral-200 dark:bg-neutral-800 my-1" />
                <Command.Item shortcut="G P">
                  <div className="flex gap-2.5 items-center">
                    <InboxInIcon className="h-5 w-5" />
                    Grape
                  </div>
                  <div className="flex gap-1">
                    <kbd className="bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded px-1.5 text-neutral-500 dark:text-neutral-400">G</kbd>
                    <kbd className="bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded px-1.5 text-neutral-500 dark:text-neutral-400">P</kbd>
                  </div>
                </Command.Item>
                <Command.Separator className="h-[1px] w-full bg-neutral-200 dark:bg-neutral-800 my-1" />
                <Command.Item><div className="flex gap-2.5 items-center">
                  <ServerIcon className="h-5 w-5" />
                  Apple
                </div></Command.Item>
              </Command.Group>

              <Command.Group heading="Colors">
                <Command.Item shortcut="Y W">
                  Yellow
                  <div className="flex gap-1">
                    <kbd className="bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded px-1.5 text-neutral-500 dark:text-neutral-400">Y</kbd>
                    <kbd className="bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded px-1.5 text-neutral-500 dark:text-neutral-400">W</kbd>
                  </div>
                </Command.Item>
                <Command.Item shortcut="V L">Violet
                  <div className="flex gap-1">
                    <kbd className="bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded px-1.5 text-neutral-500 dark:text-neutral-400">V</kbd>
                    <kbd className="bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded px-1.5 text-neutral-500 dark:text-neutral-400">L</kbd>
                  </div>
                </Command.Item>
                <Command.Item>Blue</Command.Item>
              </Command.Group>
            </>
          )}

          {activePage === 'Documentations' && (
            <>
              <Command.Item>Project A</Command.Item>
              <Command.Item>Project B</Command.Item>
            </>
          )}

          {activePage === 'Teams' && (
            <>
              <Command.Item>Team 1</Command.Item>
              <Command.Item>Team 2</Command.Item>
            </>
          )}

        </Command.List>

        <div className="mt-2 flex justify-end p-4 border-t dark:border-t-neutral-700">
          <div className="flex gap-4">
            <span className="text-sm dark:text-neutral-300">Open
              <kbd className="ml-2 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded px-1.5 py-0.5 text-neutral-500 dark:text-neutral-400">↵</kbd>
            </span>
            <span className="text-sm dark:text-neutral-300">Close
              <kbd className="ml-2 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded px-1.5 py-0.5 text-neutral-500 dark:text-neutral-400">ESC</kbd>
            </span>
          </div>
        </div>
        
      </Command.Dialog>
    </>
  )
}