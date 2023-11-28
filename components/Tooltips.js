export default function Tooltips({ text, children, left, right }) {
  return (
    <div className='flex'>
      <div className={`group relative flex justify-center ${left && '!justify-start'} ${right && '!justify-end'}`}>
        {children}
        <div className='absolute bottom-0 mb-8 items-center opacity-0 transition duration-500 ease-in-out group-hover:opacity-100'>
          <div className='whitespace-no-wrap relative z-10 w-40 rounded-md bg-neutral-800 p-2 text-xs text-white shadow-lg'>
            {text}
          </div>
          {left ? (
            <div className='absolute -bottom-0.5 left-1 mt-6 h-3 w-3 rotate-45 bg-neutral-800'></div>
          ) : right ? (
            <div className='absolute -bottom-0.5 right-1 mt-6 h-3 w-3 rotate-45 bg-neutral-800'></div>
          ) : (
            <div className='absolute -bottom-0.5 left-1/2 mx-auto mt-6 h-3 w-3 -translate-x-1/2 rotate-45 transform bg-neutral-800'></div>
          )}
        </div>
      </div>
    </div>
  );
}
