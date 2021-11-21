export class Greeter {
    constructor(private name: string) {}

    getMessage(optionMessage: string) {
        return `Hello ${this.name} ${optionMessage}`;
    }
}
