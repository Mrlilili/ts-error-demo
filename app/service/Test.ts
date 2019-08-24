import { Service, Application } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {

    /**
     * sayHi to you
     * @param name - your name
     */
    public async sayHi(name: string) {
        const app: Application = this.app;
        app.io.sockets.emit('test');
        return `hi, ${name}`;
    }
}
