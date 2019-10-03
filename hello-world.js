import { Component, route } from "can";

Component.extend({
  tag: "hello-world",
  view: `
    <div on:click="this.visible = not(this.visible)">
      {{# if(visible) }}
        {{message}}
      {{ else }}
        Click me
      {{/ if }}
    </div>
  `,
  ViewModel: {
    visible: {
      default: false
    },
    message: {
      default: "Hello There!"
    }
  }
});

route.start();
