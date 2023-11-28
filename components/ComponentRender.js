import { ArrowCircleLeftIcon } from '@heroicons/react/outline';
import { Rnd } from 'react-rnd';

export default function ComponentRender({ componentUrl, iframeKey }) {
  // console.log(iframeKey)

  const ResizeHandle = (
    <div className='absolute inset-y-0 right-1 flex w-5 rounded-r bg-gray-200 focus:outline-none dark:bg-neutral-800'>
      <ArrowCircleLeftIcon className='text-gray-700 dark:text-white' />
    </div>
  );

  const componentBlockRefs = {};

  const updateComponentBlockIframeHeight = (iframe) => {
    iframe.style.height = 'auto';
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
  };

  return (
    <div className='mb-8'>
      <div className='relative min-h-[10rem]'>
        <Rnd
          minWidth={350}
          default={{
            width: '100%',
            height: '100%',
          }}
          bounds='parent'
          disableDragging={true}
          enableResizing={{ right: true }}
          resizeHandleComponent={{ right: ResizeHandle }}
          resizeHandleWrapperClass={`resizeHandleWrapper`}
          onResize={() => updateComponentBlockIframeHeight(componentBlockRefs[componentUrl])}
        >
          <iframe
            className='min-h-[10rem] rounded border p-4 pr-8 dark:border-neutral-600'
            src={componentUrl}
            width='100%'
            key={iframeKey}
            ref={(ref) => (componentBlockRefs[componentUrl] = ref)}
            onLoad={(e) => updateComponentBlockIframeHeight(e.target)}
          />
        </Rnd>
      </div>
    </div>
  );
}
