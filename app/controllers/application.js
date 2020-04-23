import Controller from "@ember/controller";
import { runInDebug } from "@ember/debug";

export default class ApplicationController extends Controller {
  get output() {
    let value = "XXX runInDebug not run";

    runInDebug(() => (value = "!!! runInDebug was run!"));

    return value;
  }
}
