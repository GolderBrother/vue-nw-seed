// /*
//  * @Author: james.zhang
//  * @Date: 2019-04-29 15:23:00
//  * @Last Modified by: james.zhang
//  * @Last Modified time: 2019-05-15 14:31:21
//  * @Description: log4js是一个管理，记录日志的工具。
//  * 开发过程中，日志记录是必不可少的事情，尤其是生产系统中经常无法调试，因此日志就成了重要的调试信息来源。
//  * NodeJS写日志_Log4js使用详解
//  * https://www.cnblogs.com/duhuo/p/5176154.html
//  */
// import log4js from 'log4js';
// // const log4js = require('log4js');
// import sysCfg from '@/config/system';
// let json = require("@/config/log4js.json");


// // 日志的起始目录
// let logBaseUrl = "";
// if (process.env.NODE_ENV === 'production') {
//   logBaseUrl = "logs"
// } else {
//   logBaseUrl = sysCfg.logBaseUrl;
// }

// ;
// (() => {
//   Object.keys(json.appenders).forEach((value, key) => {
//     switch (value) {
//       case "trace":
//         json.appenders.trace.filename = `${logBaseUrl}/biosecurity-access`;
//         break;
//       case "http":
//         json.appenders.http.filename = `${logBaseUrl}/biosecurity-request`;
//         break;
//       default:
//         json.appenders[value].filename = `${logBaseUrl}/biosecurity-${value}`;
//         break;
//     }
//   })
// })();

// // 定义自己的输出格式，type: 'json'，
// log4js.addLayout('json', function (config) {
//   return function (logEvent) {
//     return JSON.stringify(logEvent) + config.separator
//   }
// });

// log4js.configure({
//   ...json
// });

// const fileLog = log4js.getLogger('logFile')
// export default fileLog

// // 日志收集的三种不同类型方法
// // this.$fileLog.info('this is just a test');
// // this.$fileLog.error('of a custom appender');
// // this.$fileLog.warn('that outputs json');

// // exports.logger = fileLog
// // exports.use = function(app) {
// //   // 页面请求日志
// //   app.use(log4js.connectLogger(fileLog))
// // }

const log4js = require('log4js');
log4js.configure({
  appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});
 
const fileLog = log4js.getLogger('cheese');
export default fileLog

// logger.trace('Entering cheese testing');
// logger.debug('Got cheese.');
// logger.info('Cheese is Comté.');
// logger.warn('Cheese is quite smelly.');
// logger.error('Cheese is too ripe!');
// logger.fatal('Cheese was breeding ground for listeria.');