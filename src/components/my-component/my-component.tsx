import { Component, Prop, h } from "@stencil/core";
import { IMyComponentProps } from "./my-component.types";

@Component({
    tag: "my-component",
    styleUrl: "my-component.scss",
    shadow: true
})
export class MyComponent implements IMyComponentProps {
    @Prop() first: string;
    @Prop() middle: string;
    @Prop() last: string;

    private getText(): string {
        return (
            (this.first || "") +
            (this.middle ? ` ${this.middle}` : "") +
            (this.last ? ` ${this.last}` : "")
        );
    }

    render() {
        return <div>Hello, World! I'm {this.getText()}</div>;
    }
}
