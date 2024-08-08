const { EventEmitter } = require("stream");

class Logger extends EventEmitter {

    Logger() {
        this.emit('message logger',{id: 1, url: "https://example.com"});
    }

    log(message)
    {
        console.log(message);
    }
    
}