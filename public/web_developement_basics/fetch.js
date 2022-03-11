"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
(0, node_fetch_1.default)("https://swapi.dev/api/people/1")
    .then((res) => {
    //console.log("Data fetched", res);
    res.json().then((data) => {
        console.log(data);
    }).catch((error) => { console.log(error); });
}).catch((e) => {
    console.log("error commed : ", e);
});
