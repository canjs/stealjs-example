import { StacheElement } from "can";
import view from "./main.stache";

import "./hello-world";

class MyApp extends StacheElement {
  static view = view;

  static props = {
    message: {
      default: "Hello World"
    }
  };
}
customElements.define("my-app", MyApp);
