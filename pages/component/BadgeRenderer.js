import { DownloadIcon } from '@heroicons/react/outline';

import Badge from '@components/Badge';

export default function BadgeRenderer() {
  return (
    <div className='flex flex-wrap items-center gap-2'>
      <Badge className='flex items-center gap-1'>
        <DownloadIcon className='h-4 w-4' />
        Default
      </Badge>
      <Badge.green>Green</Badge.green>
      <Badge.red large>Red</Badge.red>
      <Badge.yellow large pills>
        Yellow
      </Badge.yellow>
      <Badge.orange pills>Orange</Badge.orange>
      <Badge.purple pills>Purple</Badge.purple>
      <Badge.dark pills>Dark</Badge.dark>
    </div>
  );
}
