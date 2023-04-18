import { Command, CommandRunner } from 'nest-commander';

@Command({ name: 'basic', description: 'A parameter parse' })
export class BasicCommand extends CommandRunner {
    constructor() {
        super();
    }

    async run(_passedParam: string[]): Promise<void> {
        console.log("hello");
    }
}