import { route, StacheElement } from "can";

class HelloWorld extends StacheElement {
  static view = `
    <div on:click="this.visible = not(this.visible)">
      {{# if(visible) }}
        {{message}}
      {{ else }}
        Click me
      {{/ if }}
    </div>
  `;

  static props = {
    visible: {
      default: false
    },
    message: {
      default: "Hello There!"
    }
  };
}
customElements.define("hello-world", HelloWorld);

route.start();
