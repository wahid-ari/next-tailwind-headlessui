import { useRef, useState, useEffect } from 'react';
import { Command } from 'cmdk'
import Button from './Button';
import { useRouter } from 'next/router';
import { ColorSwatchIcon, ExternalLinkIcon, HomeIcon, InboxInIcon, ServerIcon } from '@heroicons/react/outline';

// https://github.com/pacocoursey/cmdk/blob/main/website/components/cmdk/vercel.tsx
export default function CommandMenu() {
  const router = useRouter()
  const ref = useRef(null)
  const [open, setOpen] = useState(false)
  
  function bounce() {
    if (ref.current) {
      ref.current.style.transform = 'scale(0.98)'
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.transform = ''
        }
      }, 150)
    }
  }

  // Toggle the menu when ⌘ L || ⌘ l is pressed
  useEffect(() => {
    const down = (e) => {
      if (e.key.toLowerCase() === 'l' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <>
      <Button.secondary onClick={() => setOpen(true)} className="flex gap-4 items-center">
        Command Menu
        <div className="flex gap-1 items-center">
          <kbd className="bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-900 rounded px-1.5 py-0.5 text-neutral-500 dark:text-neutral-400">⌘</kbd>
          <kbd className="bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-900 rounded px-1.5 py-0.5 text-neutral-500 dark:text-neutral-400">L</kbd>
        </div>
      </Button.secondary>
      
      <Command.Dialog open={open} onOpenChange={setOpen}
        label="Global Command Menu"
        className="dark:bg-neutral-900 pt-4 dark:text-white bg-white dark:border dark:border-neutral-700"
        ref={ref}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            bounce()
          }
        }}
      >
        <Command.Input placeholder='What do you need?' className="px-4 mb-3 dark:text-white w-full dark:bg-neutral-900 border-x-0 border-t-0 border-b-1 border-b-neutral-300 dark:border-b-neutral-700 h-10 focus:outline-none focus:ring-0 focus:border-b-neutral-300" />
        <Command.List className="px-4 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-rounded">
          <Command.Empty>No results found.</Command.Empty>
          <Command.Item onSelect={() => router.push('/')}>
            <div className="flex gap-2.5 items-center">
              <HomeIcon className="h-5 w-5" />
              Home
            </div>
          </Command.Item>
          <Command.Item onSelect={() => openInNewTab('https://github.com/wahidari')}>
            <div className="flex gap-2.5 items-center">
              <ExternalLinkIcon className="h-5 w-5" />
              Github
            </div>
          </Command.Item>

          <Command.Group heading="Fruits">
            <Command.Item>
              <div className="flex gap-2.5 items-center">
                <ColorSwatchIcon className="h-5 w-5" />
                Orange
              </div>
            </Command.Item>
            <Command.Separator className="h-[1px] w-full bg-neutral-200 dark:bg-neutral-800 my-1" />
            <Command.Item>
              <div className="flex gap-2.5 items-center">
                <InboxInIcon className="h-5 w-5" />
                Grape
              </div>
            </Command.Item>
            <Command.Separator className="h-[1px] w-full bg-neutral-200 dark:bg-neutral-800 my-1" />
            <Command.Item><div className="flex gap-2.5 items-center">
              <ServerIcon className="h-5 w-5" />
              Apple
            </div></Command.Item>
          </Command.Group>

          <Command.Group heading="Colors">
            <Command.Item>
              Yellow
            </Command.Item>
            <Command.Item>Violet
            </Command.Item>
            <Command.Item>Blue</Command.Item>
          </Command.Group>

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