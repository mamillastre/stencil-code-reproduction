import { Component, Host, Prop, h } from '@stencil/core';
// import { format } from '../../utils/utils';

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

  // private getText(): string {
  //   return format(this.first, this.middle, this.last);
  // }

  render() {
    return (
      <Host>
        <span class="salutation">
          <slot name="header"></slot>
        </span>
        <span class="name-container">
          {/* {this.getText()} */}
          <div>
            <slot></slot>
          </div>
        </span>
        <span class="footer">
          <slot name="footer"></slot>
        </span>
      </Host>
    );
  }
}
