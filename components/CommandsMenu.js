import { ArrowRightIcon, ClipboardCopyIcon, SearchIcon } from '@heroicons/react/outline';
import {
  CommandMenu,
  CommandWrapper,
  useCommands,
  useKmenu
} from 'kmenu';
import Button from './Button';

export default function CommandsMenu() {
  const { setOpen, toggle } = useKmenu()
  // https://github.com/harshhhdev/kmenu#adding-commands
  const main = [
    {
      category: 'Utility',
      commands: [
        {
          icon: <SearchIcon className="h-5 w-5" />,
          text: 'Search Documentation',
          perform: () => setOpen(2)
        },
        {
          icon: <ClipboardCopyIcon className="h-5 w-5" />,
          text: 'Copy URL'
        }
      ]
    },
    {
      category: 'Socials',
      commands: [
        {
          // icon: <FiGlobe />,
          text: 'Website',
          href: 'https://hxrsh.in',
          newTab: true,
          keywords: 'home'
        },
        {
          // icon: <FiTwitter />,
          text: 'Twitter',
          href: 'https://twitter.com/harshhhdev',
          newTab: true,
          shortcuts: { modifier: 'alt', keys: ['t'] },
          keywords: 'twitter'
        },
        {
          // icon: <FiGithub />,
          text: 'GitHub',
          href: 'https://github.com/harshhhdev',
          newTab: true,
          shortcuts: { keys: ['g', 'h'] }
        },
      ]
    }
  ]
  const nested = [
    {
      category: 'Navigation',
      commands: [
        {
          icon: <ArrowRightIcon className="h-4 w-4" />,
          text: 'Quickstart',
          href: 'https://github.com/harshhhdev/kmenu#-quickstart',
          newTab: true
        },
        {
          icon: <ArrowRightIcon className="h-4 w-4" />,
          text: 'Using the Provider',
          href: 'https://github.com/harshhhdev/kmenu/#using-the-provider',
          newTab: true
        },
      ]
    }
  ]

  const [mainCommands] = useCommands(main)
  const [navigationCommands] = useCommands(nested)
  return (
    <>
      <Button.secondary onClick={toggle} className="flex gap-4 items-center">
        Command Menu
        <div className="flex gap-1 items-center">
          <kbd className="bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-900 rounded px-1.5 py-0.5 text-neutral-500 dark:text-neutral-400">⌘</kbd>
          <kbd className="bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-900 rounded px-1.5 py-0.5 text-neutral-500 dark:text-neutral-400">K</kbd>
        </div>
      </Button.secondary>
      <CommandWrapper>
        <CommandMenu
          commands={mainCommands}
          crumbs={['Home']}
          index={1}
          placeholder='What do you need?'
        />
        <CommandMenu
          commands={navigationCommands}
          crumbs={['Home', 'Search']}
          index={2}
        />
        <div className="mt-4 pt-4 sm:flex justify-end border-t dark:border-t-neutral-700 hidden">
          <div className="flex gap-4">
            <span className="text-sm dark:text-neutral-300">Open
              <kbd className="text-xs ml-2 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded px-1.5 py-0.5 text-neutral-500 dark:text-neutral-400">Enter</kbd>
            </span>
            <span className="text-sm dark:text-neutral-300">Back
              <kbd className="text-xs ml-2 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded px-1.5 py-0.5 text-neutral-500 dark:text-neutral-400">Backspace</kbd>
            </span>
            <span className="text-sm dark:text-neutral-300">Close
              <kbd className="text-xs ml-2 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded px-1.5 py-0.5 text-neutral-500 dark:text-neutral-400">Esc</kbd>
            </span>
          </div>
        </div>
      </CommandWrapper>
    </>
  )
}