const { EventEmitter } = require('events');

class MyNetworkConnection extends EventEmitter {
    connect() {
        this.emit('connect');
    }

    receiveData(type) {
        if (type == 1) {
            this.emit('data', { payload: 'Sample payload', timestamp: new Date() });
        } else {
            this.handleError();
        }
    }

    handleError() {
        this.emit('error', new Error('Invalid data type received'));
    }
}

const newConnection = new MyNetworkConnection();

newConnection.on('connect', () => {
    console.log(`A new client has connected`);
});

newConnection.on('data', (info) => {
    console.log(`Data received from client: ${info.payload} at ${info.timestamp.toISOString()}`);
});

newConnection.on('error', (err) => {
    console.log(`Error occurred while processing data: ${err.message}`);
});

newConnection.connect();
newConnection.receiveData(1);
newConnection.receiveData(2);
newConnection.receiveData(3);
newConnection.receiveData(1);
