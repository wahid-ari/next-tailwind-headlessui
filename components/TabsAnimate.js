import { Tab } from "@headlessui/react";
import { Tabs } from "@radix-ui/react-tabs";
import clsx from "clsx";
import { AnimateSharedLayout, motion } from "framer-motion";

// https://github.com/mattrothenberg/tailwind-fancy-tab
export default function TabsAnimate({ items, children }) {
  return (
    <Tab.Group as="div" className="my-4">
      <Tab.List className="flex items-center relative overflow-auto" >
        <AnimateSharedLayout>
          {items.map((item, index) => (
            <Tab key={index + 1} as="div" className="group rounded">
              {({ selected }) => (
                <button className={clsx("relative px-4 py-2 text-[13px] font-medium transition-all duration-200",
                  selected ? "text-neutral-800 dark:text-neutral-100" : "text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100",
                )}>
                  {item}
                  {selected && (
                    <motion.div
                      className="absolute left-0 right-0 z-10 rounded-full h-[2px] bottom-0 border-b-2 border-b-sky-500"
                      layoutId="underline"
                      initial={false}
                    />
                  )}
                </button>
              )}
            </Tab>
          ))}
        </AnimateSharedLayout>
      </Tab.List>
      <Tab.Panels className="rounded-b-xl">
        {children}
      </Tab.Panels>
    </Tab.Group>
  )
}

TabsAnimate.Item = ({ children, className }) => {
  return (
    <Tab.Panel className={className}>
      {children}
    </Tab.Panel>
  )
}

TabsAnimate.displayName = 'TabsAnimate'
TabsAnimate.Item.displayName = 'TabsAnimate.Item'