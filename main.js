import { Component } from "can";
import view from "./main.stache!";

import "./hello-world";

Component.extend({
  tag: "my-app",
  view,
  ViewModel: {
    message: {
      default: "Hello World"
    }
  }
});