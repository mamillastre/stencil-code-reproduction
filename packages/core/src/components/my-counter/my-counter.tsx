import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'my-counter',
  styleUrl: 'my-counter.css',
  shadow: true,
})
export class MyCounter {
  /**
   * What the counter should start at
   */
  @Prop() startCount = 0;

  /**
   * The current count
   */
  @State() count = this.startCount;

  render() {
    return (
      <div>
        <button onClick={() => this.count++}>
          count <span>{this.count}</span>
        </button>
      </div>
    );
  }
}
