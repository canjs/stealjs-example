import DefineMap from "can-define/map/map";
import template from "./main.stache!";

const data = new DefineMap({ message: "Hello World" });

document.body.appendChild(template(data));
