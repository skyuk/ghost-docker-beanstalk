// # Ghost Configuration
// Setup your Ghost install for various environments
// Documentation can be found at http://support.ghost.org/config/

var path = require('path'),  
    config;

config = {  
    // ### Production
    // When running Ghost in the wild, use the production environment
    // Configure your URL and mail settings here
    production: {
        url: 'xxxx',
        forceAdminSSL: true,
        mail: {},
        database: {                                      
            client: 'mysql',
            connection: {
                host     : process.env.RDS_HOSTNAME,
                user     : process.env.RDS_USERNAME,
                password : process.env.RDS_PASSWORD,
                database : 'ebdb',
                charset  : 'utf8'
            }
        },
        fileStorage: true,
        server: {
            host: '0.0.0.0',
            port: '2368'
        },
        mail: {
            transport: 'SMTP',
            options: {
                host: 'email-smtp.eu-west-1.amazonaws.com',
                port: 465,
                service: 'SES'
            }
        }
        
        
    }
};

// Export config
module.exports = config;