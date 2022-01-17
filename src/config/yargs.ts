import yargs from 'yargs'


class Yargs {
    constructor() {
        this.setCommands()
    }

    setCommands() {
        return yargs
            .command('create', 'Create an element', {
                description: {
                    demand: true,
                    alias: 'd',
                    desc: ''
                }
            })
            .command('update', 'Update an element', {
                description: {
                    demand: true,
                    alias: 'd',
                    desc: ''
                },
                completed: {
                    default: true,
                    alias: 'c',
                    description: "complete the task"
                }
            })
            .help()
            .argv;
    }
}


const yargsS = new Yargs();
export default yargsS