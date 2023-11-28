import ActiveLink from '@components/ActiveLink';
import ExSidebarNavAccordion from '@components/exdashboard/ExSidebarNavAccordion';
import ExSidebarNavLink from '@components/exdashboard/ExSidebarNavLink';
import { Disclosure, Menu } from '@headlessui/react';
import {
  ArrowCircleRightIcon,
  ArrowSmRightIcon,
  ChevronDoubleRightIcon,
  ChevronRightIcon,
  LibraryIcon,
  TemplateIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';

export default function ExSidebarMenu() {
  return (
    <aside className='fixed inset-y-0 hidden w-60 pt-[3.8rem] lg:block'>
      {/* <aside className="w-60 flex flex-nowrap flex-col fixed top-[3.8rem]"> */}
      <div className='flex max-h-full flex-col gap-y-1 overflow-auto border px-2 py-1 dark:border-neutral-700'>
        <Menu>
          {({ open }) => (
            <>
              <Menu.Button className='w-full rounded px-2 py-1 text-sm font-medium transition-all hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800'>
                <div className='flex items-center justify-between'>
                  <span>Accordion Menu</span>
                  <ChevronRightIcon
                    className={`${
                      open
                        ? 'rotate-90 transform transition-transform duration-200'
                        : 'transition-transform duration-200'
                    } h-4 w-4`}
                  />
                </div>
              </Menu.Button>
              <Menu.Items className='flex flex-col gap-y-1 px-4'>
                <Menu.Item>
                  <ActiveLink activeClassName='bg-gray-100' href='/'>
                    <span className='block cursor-pointer rounded px-2 py-1 text-sm font-medium transition-all hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800'>
                      1
                    </span>
                  </ActiveLink>
                </Menu.Item>
                <Menu.Item>
                  <ExSidebarNavLink href='/'>2</ExSidebarNavLink>
                </Menu.Item>
              </Menu.Items>
            </>
          )}
        </Menu>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex items-center justify-between rounded px-2 py-1 text-sm font-medium transition-all hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800'>
                <span>Accordion Disclosure</span>
                <ChevronRightIcon
                  className={`
                        ${
                          open
                            ? 'rotate-90 transform transition-transform duration-200'
                            : 'transition-transform duration-200'
                        } 
                        h-4 w-4 
                        `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='space-y-1 px-4 text-sm'>
                <ActiveLink activeClassName='bg-gray-100' href='/'>
                  <span className='block cursor-pointer rounded px-2 py-1 text-sm font-medium transition-all hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800'>
                    A
                  </span>
                </ActiveLink>
                <ExSidebarNavLink href='/'>B</ExSidebarNavLink>
                <ExSidebarNavLink href='/'>C</ExSidebarNavLink>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* <SidebarNavAccordion name="Dashboard" routeName="/dashboard">
              <ActiveLink activeClassName="bg-gray-100" href="/dashboard">
                <span className="px-2 block py-1 rounded text-sm font-medium hover:bg-gray-100 cursor-pointer">
                  Dashboard A
                </span>
              </ActiveLink>
              <ExSidebarNavLink href="/dashboard/b">
                Dashboard B
              </ExSidebarNavLink>
              <ExSidebarNavLink href="/dashboard/c">
                Dashboard C
              </ExSidebarNavLink>
            </SidebarNavAccordion> */}

        <ExSidebarNavAccordion name='First' routeName='/dashboard/first'>
          <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/dashboard/first'>
            <span className='mb-1 block cursor-pointer rounded px-2 py-1 text-sm font-medium transition-all hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800'>
              First A
            </span>
          </ActiveLink>
          <ExSidebarNavLink href='/dashboard/first/b' icon={<ArrowSmRightIcon className='h-4 w-4' />} className='mb-1'>
            First B
          </ExSidebarNavLink>
          <ExSidebarNavLink href='/dashboard/first/c'>First C</ExSidebarNavLink>
        </ExSidebarNavAccordion>

        <ExSidebarNavAccordion name='Second' routeName='/dashboard/second'>
          <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/dashboard/second'>
            <span className='mb-1 block cursor-pointer rounded px-2 py-1 text-sm font-medium transition-all hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800'>
              Second A
            </span>
          </ActiveLink>
          <ExSidebarNavLink href='/dashboard/second/b' icon={<ArrowSmRightIcon className='h-4 w-4' />} className='mb-1'>
            Second B
          </ExSidebarNavLink>
          <ExSidebarNavLink href='/dashboard/second/c'>Second C</ExSidebarNavLink>
        </ExSidebarNavAccordion>

        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/dashboard'>
          <span className='flex cursor-pointer items-center justify-start gap-2 rounded px-2 py-1 text-sm font-medium transition-all hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800'>
            <ArrowSmRightIcon className='h-4 w-4' />
            Dashboard
          </span>
        </ActiveLink>
        <ExSidebarNavLink href='/dashboard/first' icon={<LibraryIcon className='h-4 w-4' />}>
          First
        </ExSidebarNavLink>
        <ExSidebarNavLink href='/dashboard/second' icon={<UserGroupIcon className='h-4 w-4' />}>
          Second
        </ExSidebarNavLink>
        <ExSidebarNavLink href='/dashboard/third' icon={<TemplateIcon className='h-4 w-4' />}>
          Third (Layout Dashboard)
        </ExSidebarNavLink>
        <ExSidebarNavLink
          href='/breadcrumb/first/second/detail/1'
          icon={<ChevronDoubleRightIcon className='h-4 w-4' />}
        >
          Breadcrumb
        </ExSidebarNavLink>
        <ExSidebarNavLink href='/dashboardd' icon={<ArrowCircleRightIcon className='h-4 w-4' />}>
          Dashboardd
        </ExSidebarNavLink>

        <ExSidebarNavLink href='/dashboarddd' icon={<ArrowCircleRightIcon className='h-4 w-4' />}>
          Dashboarddd
        </ExSidebarNavLink>

        <ExSidebarNavLink href='/dashboardtwo' icon={<ArrowCircleRightIcon className='h-4 w-4' />}>
          Dashboard Two
        </ExSidebarNavLink>

        <ExSidebarNavLink href='/dashboardthree' icon={<ArrowCircleRightIcon className='h-4 w-4' />}>
          Dashboard Three
        </ExSidebarNavLink>

        <ExSidebarNavLink href='/dashboardicon' icon={<ArrowCircleRightIcon className='h-4 w-4' />}>
          Dashboard Icon
        </ExSidebarNavLink>

        <ExSidebarNavLink href='/sticky' icon={<ArrowCircleRightIcon className='h-4 w-4' />}>
          Sticky
        </ExSidebarNavLink>

        <ExSidebarNavLink href='/supabase' icon={<ArrowCircleRightIcon className='h-4 w-4' />}>
          Supabase
        </ExSidebarNavLink>

        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
          return (
            <ExSidebarNavLink key={item + 1} href='#' icon={<ArrowSmRightIcon className='h-4 w-4' />}>
              Link #{item}
            </ExSidebarNavLink>
          );
        })}
      </div>
    </aside>
  );
}
