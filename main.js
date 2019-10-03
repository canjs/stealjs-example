import { StacheElement } from "can";
import view from "./main.stache!";

import "./hello-world";
import DeepObservable from "can-deep-observable";

class MyApp extends StacheElement {
  static get view() {
    return view;
  }

  static get props() {
    return {
      message: {
        default: "Hello World"
      }
    };
  }

  static get propertyDefaults() {
    return DeepObservable;
  }

  static get seal() {
    return true;
  }
}
customElements.define("my-app", MyApp);