export class Greeter {
    constructor(private name: string) {}

    getMessage(optionMessage: string) {
        // 変数を埋め込む書き方をテンプレートリテラルという（バッククオートで囲む）
        return `Hello ${this.name} ${optionMessage}`;
    }
}
