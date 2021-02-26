import * as winston from 'winston';

const logConfig = {
    'transports': [
        new winston.transports.Console()
    ]
};

const logger: winston.Logger = winston.createLogger(logConfig);

export { logger };