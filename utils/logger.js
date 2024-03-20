import pino from 'pino';

const logger = pino({
  browser: {},
  // to console pretty format, comment to show original log
  // stdTimeFunctions,
  // timestamp: () => `,"time":"${new Date(Date.now()).toISOString()}"`,
  // "2024-03-20T15:55:15.691Z"
  timestamp: () => `,"time":"${new Date()}"`,
  // "Wed Mar 20 2024 22:58:18 GMT+0700 (Indochina Time)"
  transport: {
    targets: [
      // {
      //   target: 'pino-pretty',
      //   options: {
      //     colorize: true,
      //     levelFirst: false,
      //     // ignore: 'time,hostname,pid',
      //     ignore: 'hostname',
      //     translateTime: 'SYS:standard',
      //     // translateTime: 'UTC:yyyy-mm-dd HH:MM:ss.l o',
      //   },
      // },
      // if want to also write to log file, use the config below,
      // and create "logger.log" and "logger-pretty.log" file in root dir
      {
        target: 'pino/file',
        options: {
          destination: './logger.log',
          mkdir: true,
          translateTime: 'SYS:standard',
        },
      },
      // {
      //   target: 'pino-pretty',
      //   options: {
      //     destination: './logger-pretty.log',
      //     mkdir: true,
      //     colorize: false,
      //     ignore: 'hostname',
      //     translateTime: 'SYS:standard',
      //   },
      // },
    ],
  },
});

export default logger;
