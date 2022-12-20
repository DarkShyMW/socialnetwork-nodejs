'use strict';

module.exports = {
    fileSize: 1000000,
    mongodb: {
        url: 'mongodb://10.10.10.20:27017/db'
        },
    session: {
        name: '',
        keys: ['', '']
    },
    mail: {
      from: 'admin@bronyfurry.com',  
      settings: {  
            host: 'mail.bronyfurry.com',
            port: 25,
            auth: {
              user: 'admin@bronyfurry.com',
              pass: 'DarkShy123Shy!'
            }
      }      
    }
};