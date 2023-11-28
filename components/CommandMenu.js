import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { ColorSwatchIcon, ExternalLinkIcon, HomeIcon, InboxInIcon, ServerIcon } from '@heroicons/react/outline';
import { Command } from 'cmdk';

import Button from './Button';

// https://github.com/pacocoursey/cmdk/blob/main/website/components/cmdk/vercel.tsx
export default function CommandMenu() {
  const router = useRouter();
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  function bounce() {
    if (ref.current) {
      ref.current.style.transform = 'scale(0.98)';
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.transform = '';
        }
      }, 150);
    }
  }

  // Toggle the menu when ⌘ L || ⌘ l is pressed
  useEffect(() => {
    const down = (e) => {
      if (e.key.toLowerCase() === 'l' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <>
      <Button.secondary onClick={() => setOpen(true)} className='flex items-center gap-4'>
        Command Menu
        <div className='flex items-center gap-1'>
          <kbd className='rounded border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 text-neutral-500 dark:border-neutral-900 dark:bg-neutral-800 dark:text-neutral-400'>
            ⌘
          </kbd>
          <kbd className='rounded border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 text-neutral-500 dark:border-neutral-900 dark:bg-neutral-800 dark:text-neutral-400'>
            L
          </kbd>
        </div>
      </Button.secondary>

      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label='Global Command Menu'
        className='bg-white pt-4 dark:border dark:border-neutral-700 dark:bg-neutral-900 dark:text-white'
        ref={ref}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            bounce();
          }
        }}
      >
        <Command.Input
          placeholder='What do you need?'
          className='border-b-1 mb-3 h-10 w-full border-x-0 border-t-0 border-b-neutral-300 px-4 focus:border-b-neutral-300 focus:outline-none focus:ring-0 dark:border-b-neutral-700 dark:bg-neutral-900 dark:text-white'
        />
        <Command.List className='px-4 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-200 dark:scrollbar-thumb-neutral-700'>
          <Command.Empty>No results found.</Command.Empty>
          <Command.Item onSelect={() => router.push('/')}>
            <div className='flex items-center gap-2.5'>
              <HomeIcon className='h-5 w-5' />
              Home
            </div>
          </Command.Item>
          <Command.Item onSelect={() => openInNewTab('https://github.com/wahidari')}>
            <div className='flex items-center gap-2.5'>
              <ExternalLinkIcon className='h-5 w-5' />
              Github
            </div>
          </Command.Item>

          <Command.Group heading='Fruits'>
            <Command.Item>
              <div className='flex items-center gap-2.5'>
                <ColorSwatchIcon className='h-5 w-5' />
                Orange
              </div>
            </Command.Item>
            <Command.Separator className='my-1 h-[1px] w-full bg-neutral-200 dark:bg-neutral-800' />
            <Command.Item>
              <div className='flex items-center gap-2.5'>
                <InboxInIcon className='h-5 w-5' />
                Grape
              </div>
            </Command.Item>
            <Command.Separator className='my-1 h-[1px] w-full bg-neutral-200 dark:bg-neutral-800' />
            <Command.Item>
              <div className='flex items-center gap-2.5'>
                <ServerIcon className='h-5 w-5' />
                Apple
              </div>
            </Command.Item>
          </Command.Group>

          <Command.Group heading='Colors'>
            <Command.Item>Yellow</Command.Item>
            <Command.Item>Violet</Command.Item>
            <Command.Item>Blue</Command.Item>
          </Command.Group>
        </Command.List>

        <div className='mt-2 flex justify-end border-t p-4 dark:border-t-neutral-700'>
          <div className='flex gap-4'>
            <span className='text-sm dark:text-neutral-300'>
              Open
              <kbd className='ml-2 rounded border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400'>
                ↵
              </kbd>
            </span>
            <span className='text-sm dark:text-neutral-300'>
              Close
              <kbd className='ml-2 rounded border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400'>
                ESC
              </kbd>
            </span>
          </div>
        </div>
      </Command.Dialog>
    </>
  );
}
