import { config } from '../interfaces/Document';
import { dburl, dbname } from '../Constants';
import { mongoose } from '@typegoose/typegoose';

var prefix: string;
var start: number;

class ClientCache {
    public prefix: string;
    public start: number;
    public constructor(prefix: string, start: number) {
        this.prefix = prefix;
        this.start = start;
    }

    public toString(): string {
        return `ClientCache {\n\tPrefix: ${prefix},\n\tStart: ${new Date(start).toTimeString()}\n}`;
    }
}

function initCache() {
    mongoose.connect(dburl + "/" + dbname, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false
    });

    config.find( {} ).then(res => {
        if(res.length < 1) {
            config.create( { prefix: '^', start: new Date().getTime() } );
        } else {
            config.findOneAndUpdate( {},
                {
                    $set: {start: new Date().getTime()}
                }
            ).then(res => {
                prefix = res?.prefix || "^";
                start = res?.start || new Date().getTime();
                console.log(`Initialized Bot with Prefix '${prefix}' and Start Time: ${new Date(start).toTimeString()}`);
            });
        }
    });
}

async function updateCache(): Promise<void> {
    var cache: ClientCache;
    await config.find( {} ).then(res => {
        if(res.length < 1) {
            let time: number = new Date().getTime();
            config.create( { prefix: '^', start: time } );
            cache = new ClientCache('^', time);
            console.log(`Created Bot: ${cache.toString()}`);
        } else {
            config.findOne( {} ).then(res => {
                prefix = res?.prefix || "^";
                start = res?.start || new Date().getTime();
                
                cache = new ClientCache(prefix, start);
                console.log(`Updated Bot: ${cache.toString()}`);
            });
        }
    });
}

export { initCache, updateCache };
export { prefix, start };