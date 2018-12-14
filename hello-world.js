import { Component, DefineMap } from "can";

const ViewModel = DefineMap.extend({
  visible: {
    default: false
  },
  message: {
    default: "Hello There!"
  }
});

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
  ViewModel
});
