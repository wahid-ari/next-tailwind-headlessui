import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import {
  ColorSwatchIcon,
  ExternalLinkIcon,
  HomeIcon,
  InboxInIcon,
  SearchIcon,
  ServerIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import { Command } from 'cmdk';

import Button from './Button';

// https://github.com/pacocoursey/cmdk/blob/main/website/components/cmdk/vercel.tsx
export default function CommandMenuNested() {
  const router = useRouter();
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [pages, setPages] = useState(['Home']);
  const activePage = pages[pages.length - 1];
  const isHome = activePage === 'Home';

  const popPage = useCallback(() => {
    setPages((pages) => {
      const x = [...pages];
      x.splice(-1, 1);
      return x;
    });
  }, []);

  function bounce() {
    if (ref.current) {
      ref.current.style.transform = 'scale(0.98)';
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.transform = '';
        }
      }, 150);
      setSearch('');
    }
  }

  // Toggle the menu when ⌘ M || ⌘ m is pressed
  useEffect(() => {
    const down = (e) => {
      if (e.key.toLowerCase() === 'm' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      if (e.key.toLowerCase() === 'd' && e.shiftKey) {
        e.preventDefault();
        setOpen(true);
        setPages(['Home', 'Documentations']);
      }
      if (e.key.toLowerCase() === 't' && e.shiftKey) {
        e.preventDefault();
        setOpen(true);
        setPages(['Home', 'Teams']);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  function onKeyDown(e) {
    if (e.key === 'Enter') {
      bounce();
    }
    if (isHome || search.length) {
      return;
    }
    if (e.key === 'Backspace') {
      e.preventDefault();
      popPage();
      bounce();
    }
  }

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <>
      <Button.secondary onClick={() => setOpen(true)} className='flex items-center gap-4'>
        Command Menu Nested
        <div className='flex items-center gap-1'>
          <kbd className='rounded border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 text-neutral-500 dark:border-neutral-900 dark:bg-neutral-800 dark:text-neutral-400'>
            ⌘
          </kbd>
          <kbd className='rounded border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 text-neutral-500 dark:border-neutral-900 dark:bg-neutral-800 dark:text-neutral-400'>
            M
          </kbd>
        </div>
      </Button.secondary>

      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label='Global Command Menu'
        className='bg-white pt-4 dark:border dark:border-neutral-700 dark:bg-neutral-900 dark:text-white'
        ref={ref}
        onKeyDown={onKeyDown}
      >
        <div className='mb-2 flex gap-2 px-4'>
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
          <button
            onClick={() => setPages(['Home'])}
            className='rounded bg-[#f0f0f0f3] px-2 py-0.5 text-[13px] text-neutral-500 focus-visible:outline-none focus-visible:ring-0 dark:bg-neutral-800 dark:text-neutral-400'
          >
            Home
          </button>
          {pages.slice(1, pages.length).map((p) => (
            <button
              onClick={() => setPages(['Home', p])}
              key={p}
              className='rounded bg-[#f0f0f0f3] px-2 py-0.5 text-[13px] text-neutral-500 focus-visible:outline-none focus-visible:ring-0 dark:bg-neutral-800 dark:text-neutral-400'
            >
              {p}
            </button>
          ))}
        </div>

        <Command.Input
          value={search}
          onValueChange={setSearch}
          placeholder='What do you need?'
          className='border-b-1 mb-3 h-10 w-full border-x-0 border-t-0 border-b-neutral-300 px-4 focus:border-b-neutral-300 focus:outline-none focus:ring-0 dark:border-b-neutral-700 dark:bg-neutral-900 dark:text-white'
        />

        <Command.List className='px-4 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-200 dark:scrollbar-thumb-neutral-700'>
          <Command.Empty>No results found.</Command.Empty>

          {activePage === 'Home' && (
            <>
              <Command.Group heading='Fruits'>
                <Command.Item onSelect={() => router.push('/')}>
                  <div className='flex items-center gap-2.5'>
                    <HomeIcon className='h-5 w-5' />
                    Home
                  </div>
                </Command.Item>
                <Command.Item onSelect={() => setPages([...pages, 'Documentations'])}>
                  <div className='flex items-center gap-2.5'>
                    <SearchIcon className='h-5 w-5' />
                    Documentation
                  </div>
                  <div className='flex gap-1'>
                    <kbd className='rounded border border-neutral-200 bg-neutral-100 px-1.5 text-xs text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400'>
                      ⇧
                    </kbd>
                    <kbd className='rounded border border-neutral-200 bg-neutral-100 px-1.5 text-xs text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400'>
                      D
                    </kbd>
                  </div>
                </Command.Item>
                <Command.Item onSelect={() => setPages([...pages, 'Teams'])}>
                  <div className='flex items-center gap-2.5'>
                    <UserGroupIcon className='h-5 w-5' />
                    Join a team
                  </div>
                  <div className='flex gap-1'>
                    <kbd className='rounded border border-neutral-200 bg-neutral-100 px-1.5 text-xs text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400'>
                      ⇧
                    </kbd>
                    <kbd className='rounded border border-neutral-200 bg-neutral-100 px-1.5 text-xs text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400'>
                      T
                    </kbd>
                  </div>
                </Command.Item>
              </Command.Group>

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

                <Command.Item>
                  <div className='flex items-center gap-2.5'>
                    <InboxInIcon className='h-5 w-5' />
                    Grape
                  </div>
                </Command.Item>

                <Command.Item>
                  <div className='flex items-center gap-2.5'>
                    <ServerIcon className='h-5 w-5' />
                    Apple
                  </div>
                </Command.Item>
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

        <div className='mt-2 flex justify-end border-t p-4 dark:border-t-neutral-700'>
          <div className='flex flex-wrap justify-end gap-4'>
            <span className='text-sm dark:text-neutral-300'>
              Open
              <kbd className='ml-2 rounded border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 text-xs text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400'>
                ↵
              </kbd>
            </span>
            <span className='text-sm dark:text-neutral-300'>
              Back
              <kbd className='ml-2 rounded border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 text-xs text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400'>
                Backspace
              </kbd>
            </span>
            <span className='text-sm dark:text-neutral-300'>
              Close
              <kbd className='ml-2 rounded border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 text-xs text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400'>
                Esc
              </kbd>
            </span>
          </div>
        </div>
      </Command.Dialog>
    </>
  );
}
