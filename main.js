import DefineMap from "can-define/map/map";
import template from "./main.stache!";

import "./hello-world";

const data = new DefineMap({ message: "Hello World" });

document.body.appendChild(template(data));
