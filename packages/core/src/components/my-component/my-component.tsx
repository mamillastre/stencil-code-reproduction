import { Component, Host, Prop, h, Event, EventEmitter } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event() myInput!: EventEmitter<KeyboardEvent>;

  private onChange(e: KeyboardEvent) {
    console.log(1, this, this.myInput);

    this.myInput.emit(e);
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <Host>
      <span class="salutation">Hello, World! I'm</span>
      <span class="name-container">
        <input class="name" onChange={this.onChange.bind(this)}>{this.getText()}</input>
      </span>
      <span class="footer"></span>
    </Host>;
  }
}
