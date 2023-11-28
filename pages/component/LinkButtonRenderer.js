import LinkButton from '@components/LinkButton';
import { DownloadIcon } from '@heroicons/react/outline';

export default function LinkButtonRenderer() {
  return (
    <div className='flex flex-wrap items-center gap-2'>
      <LinkButton href='#' className='flex items-center gap-1'>
        <DownloadIcon className='h-5 w-5' />
        Default
      </LinkButton>
      <LinkButton.secondary href='#'>Secondary</LinkButton.secondary>
      <LinkButton.green href='#'>Green</LinkButton.green>
      <LinkButton.yellow href='#'>Yellow</LinkButton.yellow>
      <LinkButton.orange href='#'>Orange</LinkButton.orange>
      <LinkButton.red href='#' pills>
        Red
      </LinkButton.red>
      <LinkButton.purple href='#' pills>
        Purple
      </LinkButton.purple>
      <LinkButton.dark href='#' pills>
        Dark
      </LinkButton.dark>
    </div>
  );
}
