import { useContext, useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { GlobalContext } from '@utils/GlobalContext';
import clsx from 'clsx';
import { motion, useCycle, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';

import BackToTop from '@components/BackToTop';
import Button from '@components/Button';
import Input from '@components/Input';
import Layout from '@components/Layout';
import Navbar from '@components/Navbar';
import Section from '@components/Section';
import TabsAnimate from '@components/TabsAnimate';
import TocLink from '@components/TocLink';

function DarkModeToggle({ variant = 'icon' }) {
  const { darkMode, setDarkMode } = useContext(GlobalContext);
  return (
    <button
      onClick={() => {
        setDarkMode(!darkMode);
      }}
      className={clsx(
        'border:neutral-500 rounded-full border-2 hover:border-neutral-700 focus:border-neutral-700 focus:outline-none dark:border-neutral-700 dark:hover:border-neutral-300 dark:focus:border-neutral-300',
        'inline-flex h-10 items-center justify-center overflow-hidden p-1 transition-all duration-200',
        {
          'w-10': variant === 'icon',
          'px-4': variant === 'labelled',
        },
      )}
    >
      {/* note that the duration is longer then the one on body, controlling the bg-color */}
      <div className='relative h-6 w-6'>
        <span
          className='motion-reduce:duration-[0s] absolute inset-0 rotate-90 transform text-black transition duration-700 dark:rotate-0 dark:text-white'
          style={{ transformOrigin: '50% 100px' }}
        >
          <MoonIcon />
        </span>
        <span
          className='motion-reduce:duration-[0s] absolute inset-0 rotate-0 transform text-black transition duration-700 dark:-rotate-90 dark:text-white'
          style={{ transformOrigin: '50% 100px' }}
        >
          <SunIcon />
        </span>
      </div>
      <span
        className={clsx('ml-3 text-black dark:text-white', {
          'sr-only': variant === 'icon',
        })}
      >
        {darkMode ? 'switch to light mode' : 'switch to dark mode'}
      </span>
    </button>
  );
}

function AnimatedNumber({ value }) {
  let spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 });
  let display = useTransform(spring, (current) => Math.round(current).toLocaleString());
  useEffect(() => {
    spring.set(value);
  }, [spring, value]);
  return <motion.span>{display}</motion.span>;
}

function AppIcon({ mouseX }) {
  let ref = useRef(null);
  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });
  let widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });
  return <motion.div ref={ref} style={{ width }} className='aspect-square w-10 rounded-full bg-gray-400' />;
}

const fontSize = 30;
const padding = 15;
const height = fontSize + padding;

function Counter({ value }) {
  return (
    <div
      style={{ fontSize }}
      className='inline-flex w-auto space-x-3 overflow-hidden rounded border px-2 leading-none dark:border-neutral-700'
    >
      <Digit place={1000} value={value} />
      <Digit place={100} value={value} />
      <Digit place={10} value={value} />
      <Digit place={1} value={value} />
    </div>
  );
}

function Digit({ place, value }) {
  let valueRoundedToPlace = Math.floor(value / place);
  let animatedValue = useSpring(valueRoundedToPlace);
  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);
  return (
    <div style={{ height }} className='relative w-[1ch] tabular-nums'>
      {[...Array(10).keys()].map((i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  );
}

function Number({ mv, number }) {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;
    let memo = offset * height;
    if (offset > 5) {
      memo -= 10 * height;
    }
    return memo;
  });
  return (
    <motion.span style={{ y }} className='absolute inset-0 flex items-center justify-center'>
      {number}
    </motion.span>
  );
}

function Highlight({ trigger, duration, children, ...props }) {
  let [previous, setPrevious] = useState(trigger);
  let [didHighlight, setDidHighlight] = useState(false);
  useEffect(() => {
    const handler = setTimeout(() => {
      if (previous !== trigger) {
        setDidHighlight(true);
      }
      setPrevious(trigger);
    }, duration);
    return () => {
      clearTimeout(handler);
    };
  }, [duration, previous, trigger]);
  return (
    <div data-highlight={previous !== trigger ? 'on' : didHighlight ? 'off' : null} {...props}>
      {children}
    </div>
  );
}

function RenderActiveTab({ tab }) {
  switch (tab) {
    case 'world':
      return <p>World</p>;
    case 'ny':
      return <p>N.Y.</p>;
    case 'business':
      return <p>Business</p>;
    case 'arts':
      return <p>Arts</p>;
    default:
      return <p>Science</p>;
  }
}

export default function Animate() {
  const { darkMode, setDarkMode } = useContext(GlobalContext);
  const [current, cycle] = useCycle('off', 'on');

  let tabs = [
    { id: 'world', label: 'World' },
    { id: 'ny', label: 'N.Y.' },
    { id: 'business', label: 'Business' },
    { id: 'arts', label: 'Arts' },
    { id: 'science', label: 'Science' },
  ];
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  let [value, setValue] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setValue(1000);
    }, 1000);
  }, []);

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  let mouseXDock = useMotionValue(Infinity);

  let [count, setCount] = useState(0);

  let [visitors, setVisitors] = useState(1000);
  let [customers, setCustomers] = useState(2000);
  let [orders, setOrders] = useState(3000);

  return (
    <>
      <Head>
        <title>Animate</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <Layout className='relative'>
        <main className='mx-auto max-w-7xl px-4 py-8 sm:px-6 md:px-8'>
          <Section id='toc' name='Other Components TOC'>
            <div className='grid sm:grid-cols-2 md:grid-cols-3'>
              <div>
                <TocLink href='#tabs-animate' text='Tabs Animate' />
                <TocLink href='#animate-number' text='Animate Number' />
                <TocLink href='#animated-counter' text='Animated Counter' />
              </div>
              <div>
                <TocLink href='#highlight' text='Highlight' />
                <TocLink href='#switch' text='Switch' />
                <TocLink href='#spotlight' text='Spotlight' />
              </div>
              <div>
                <TocLink href='#magnified-dock' text='Magnified Dock' />
                <TocLink href='#dark-mode-toggle' text='Dark Mode Toggle' />
              </div>
            </div>
          </Section>

          {/* https://buildui.com/recipes/highlight */}
          {/* https://github.com/builduilabs/2023-08-24-highlight-recipe/blob/main/app/page.tsx */}
          <Section id='highlight' name='Highlight'>
            <div className='grid gap-10 sm:grid-cols-3 sm:gap-4'>
              <div className='space-y-4'>
                <Highlight trigger={visitors} duration={450} className='group'>
                  <div className='group-data-[highlight=on]:duration-[200ms] overflow-hidden rounded-lg border border-white/[0.15] bg-neutral-800 px-3 py-5 text-sky-500 shadow transition duration-1000 group-data-[highlight=on]:bg-sky-500 group-data-[highlight=on]:text-white md:px-4'>
                    <dt className='truncate text-sm font-medium text-white/50'>Visitors</dt>
                    <dd className='relative mt-1 origin-center truncate text-3xl font-semibold tabular-nums md:tracking-tight'>
                      <AnimatedNumber value={visitors} />
                    </dd>
                  </div>
                </Highlight>
                <Button onClick={() => setVisitors((prev) => prev + Math.floor(Math.random() * (100 - 10) + 10))}>
                  Refresh
                </Button>
              </div>
              <div className='space-y-4'>
                <Highlight trigger={customers} duration={450} className='group'>
                  <div className='group-data-[highlight=on]:duration-[200ms] overflow-hidden rounded-lg border border-white/[0.15] bg-neutral-800 px-3 py-5 text-red-500 shadow transition duration-1000 group-data-[highlight=on]:bg-red-500 group-data-[highlight=on]:text-white md:px-4'>
                    <dt className='truncate text-sm font-medium text-white/50'>Customers</dt>
                    <dd className='relative mt-1 origin-center truncate text-3xl font-semibold tabular-nums md:tracking-tight'>
                      <AnimatedNumber value={customers} />
                    </dd>
                  </div>
                </Highlight>
                <Button.red onClick={() => setCustomers((prev) => prev + Math.floor(Math.random() * (100 - 10) + 10))}>
                  Refresh
                </Button.red>
              </div>
              <div className='space-y-4'>
                <Highlight trigger={orders} duration={450} className='group'>
                  <div className='group-data-[highlight=on]:duration-[200ms] overflow-hidden rounded-lg border border-white/[0.15] bg-neutral-800 px-3 py-5 text-emerald-500 shadow transition duration-1000 group-data-[highlight=on]:bg-emerald-500 group-data-[highlight=on]:text-white md:px-4'>
                    <dt className='truncate text-sm font-medium text-white/50'>Orders</dt>
                    <dd className='relative mt-1 origin-center truncate text-3xl font-semibold tabular-nums md:tracking-tight'>
                      <AnimatedNumber value={orders} />
                    </dd>
                  </div>
                </Highlight>
                <Button.green onClick={() => setOrders((prev) => prev + Math.floor(Math.random() * (100 - 10) + 10))}>
                  Refresh
                </Button.green>
              </div>
            </div>
          </Section>

          {/* https://buildui.com/recipes/animated-counter */}
          <Section id='animated-counter' name='Animated Counter'>
            <div>
              <p>Choose a number:</p>
              <Input type='number' value={count} min={0} onChange={(e) => setCount(+e.target.value)} />
              <Counter value={count} />
            </div>
          </Section>

          {/* https://buildui.com/recipes/magnified-dock */}
          <Section id='magnified-dock' name='Magnified Dock'>
            <motion.div
              onMouseMove={(e) => mouseXDock.set(e.pageX)}
              onMouseLeave={() => mouseXDock.set(Infinity)}
              className='flex h-16 items-end justify-center gap-4 rounded-2xl bg-neutral-800 px-4 pb-3'
            >
              {[...Array(8).keys()].map((i) => (
                <AppIcon mouseX={mouseXDock} key={i} />
              ))}
            </motion.div>
          </Section>

          {/* https://buildui.com/recipes/spotlight */}
          <Section id='spotlight' name='Spotlight'>
            <div
              className='group relative max-w-md rounded-xl border border-white/10 bg-gray-900 p-8 shadow-2xl'
              onMouseMove={handleMouseMove}
            >
              <motion.div
                className='pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100'
                style={{
                  background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
                }}
              />
              <div>
                <div className='mt-2 flex items-center gap-x-2'>
                  <span className='text-5xl font-bold tracking-tight text-white'>Hero</span>
                </div>
                <p className='mt-6 text-base leading-7 text-gray-300'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit, facilis illum eum ullam nostrum atque quam.
                </p>
              </div>
            </div>
          </Section>

          {/* https://buildui.com/recipes/animated-number */}
          <Section id='animate-number' name='Animate Number'>
            <div className='flex items-center gap-4'>
              <button onClick={() => setValue(value - 100)} className='rounded bg-blue-500 px-2 py-0.5 text-white'>
                -100
              </button>
              <div className='text-2xl font-semibold tabular-nums'>
                <AnimatedNumber value={value} />
              </div>
              <button onClick={() => setValue(value + 100)} className='rounded bg-blue-500 px-2 py-0.5 text-white'>
                +100
              </button>
            </div>
          </Section>

          <Section id='tabs-animate' name='Tabs Animate'>
            <TabsAnimate items={['First', 'Second']}>
              <TabsAnimate.Item className='py-4 dark:text-white'>First</TabsAnimate.Item>
              <TabsAnimate.Item className='py-4 dark:text-white'>Second</TabsAnimate.Item>
            </TabsAnimate>
          </Section>

          {/* https://buildui.com/recipes/animated-tabs */}
          <div className='flex space-x-1'>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id ? 'text-white' : 'hover:text-neutral-900 dark:hover:text-white/60'
                } relative rounded-full px-3 py-1 text-sm font-medium text-neutral-600 outline-sky-400 transition focus-visible:outline-2 dark:text-white`}
                style={{
                  WebkitTapHighlightColor: 'transparent',
                }}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId='bubble'
                    className='absolute inset-0 z-10 bg-neutral-900 mix-blend-difference dark:bg-white'
                    style={{ borderRadius: 9999 }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
          <div className='my-4'>
            <RenderActiveTab tab={activeTab} />
          </div>

          {/* https://buildui.com/recipes/ios-animated-switch */}
          <Section id='switch' name='Switch'>
            <motion.div
              style={{
                width: 45,
                height: 25,
                borderRadius: 16,
                backgroundColor: 'rgba(120,120,128,.2)',
                position: 'relative',
                cursor: 'pointer',
              }}
              animate={current}
              initial={false}
              onTapStart={cycle}
            >
              <motion.div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 16,
                  backgroundColor: '#34C759',
                }}
                variants={{ off: { scale: 0 }, on: { scale: 1 } }}
                transition={{ ease: 'easeInOut' }}
              />
              <motion.div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 16,
                  backgroundColor: 'white',
                  boxShadow: `0 0 0 0.5px rgba(0,0,0,.04), 
                0 3px 8px 0 rgba(0,0,0,.15), 
                0 3px 1px 0 rgba(0,0,0,.06)`,
                  position: 'absolute',
                  top: 2,
                  left: 2,
                }}
                variants={{ off: { x: 0 }, on: { x: 20 } }}
                transition={{
                  ease: 'easeInOut',
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
              />
            </motion.div>
          </Section>

          <Section id='dark-mode-toggle' name='Dark Mode Toggle'>
            <div className='flex flex-wrap gap-4'>
              <DarkModeToggle />
              <DarkModeToggle variant='labelled' />
            </div>
          </Section>

          <div className='fixed bottom-20 right-3 z-10 mx-4 rounded bg-gray-100 bg-opacity-20 !py-2 px-2 backdrop-blur backdrop-filter dark:bg-neutral-800 dark:bg-opacity-40 md:right-10'>
            {darkMode ? (
              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label='Change Theme'
                className='h-8 w-8 rounded-full bg-neutral-800 p-1 text-white transition-all duration-300 ease-in hover:bg-neutral-700'
              >
                <SunIcon />
              </button>
            ) : (
              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label='Change Theme'
                className='h-8 w-8 rounded-full bg-gray-100 p-1 transition-all duration-300 ease-in hover:bg-gray-200'
              >
                <MoonIcon />
              </button>
            )}
          </div>

          <BackToTop />
        </main>
      </Layout>
    </>
  );
}
