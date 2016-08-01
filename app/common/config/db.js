'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  log_sql: true,
  log_connect: true,
  adapter: {
    mysql: {
      host: '127.0.0.1',
      port: '3306',
      database: 'db_webapp',
      user: 'root',
      password: '123456',
      prefix: '',
      encoding: 'utf8'
    },
    mongo: {

    }
  }
};