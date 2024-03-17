// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import logger from '@/utils/logger';

export default function helloAPI(req, res) {
  // console.log(req)

  logger.info('a INFO message from /api/logger');
  logger.info(
    {
      info: 'Info',
    },
    'a INFO message from /api/logger',
  );

  logger.warn('a WARN message from /api/logger');
  logger.warn(
    {
      warn: 'Warn',
    },
    'a WARN message from /api/logger',
  );

  logger.error('a ERROR message from /api/logger');
  logger.error(
    {
      error: 'Error',
      cookies: req.cookies,
      method: req.method,
      url: req.url,
    },
    'a ERROR message from /api/logger',
  );

  res.status(200).json({ name: 'John Doe' });
}
