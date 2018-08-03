
/**
 * @interface
 */
interface TodoOptions {
    task: string;
    isCompleted: boolean;
}

/**
 * @class
 */
export class Todo {
    public task: string;
    public isCompleted: boolean;

    constructor(options: TodoOptions) {
        this.task = options.task || '';
        this.isCompleted = options.isCompleted || false;
    }
}