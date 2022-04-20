import * as ld from "launchdarkly-js-client-sdk";
import _Vue from "vue";
import store from "../store";
import {
  ELaunchDarklyAction,
  ldModuleName,
} from "./store/launch-darkly.constants";
import { formatLDFlags } from "./launch-darkly.helper";
import { LaunchDarklyFlags } from "./store/launch-darkly.types";
import { LDUser } from "launchdarkly-js-client-sdk";

export default {
  install(Vue: typeof _Vue) {
    const client: ld.LDClient = ld.initialize(
      process.env.VUE_APP_LAUNCHDARKLY_KEY,
      { key: "" },
      {
        bootstrap: "localStorage",
        logger: ld.basicLogger({ level: "error" }),
        sendEvents: false,
      }
    );
    const $ld = {
      client,
      identify(newUser: LDUser) {
        return new Promise<void>(() => {
          this.ready = false;
          store.dispatch(
            `${ldModuleName}/${ELaunchDarklyAction.SetReady}`,
            false
          );
          client.identify(newUser).then(() => {
            this.ready = true;
            store.dispatch(
              `${ldModuleName}/${ELaunchDarklyAction.SetReady}`,
              true
            );
          });
        });
      },
      flags: {},
      ready: false,
      error: false,
    };

    client.on("ready", () => {
      const flags: LaunchDarklyFlags = formatLDFlags(client.allFlags());
      $ld.flags = flags;
      $ld.ready = true;
      store.dispatch(`${ldModuleName}/${ELaunchDarklyAction.SetFlags}`, flags);
      store.dispatch(`${ldModuleName}/${ELaunchDarklyAction.SetReady}`, true);
    });

    client.on("change", (changes) => {
      const flattenedFlags: { [key: string]: any } = Object.fromEntries(
        Object.keys(changes).map((key) => [key, changes[key].current])
      );
      const flags: LaunchDarklyFlags = formatLDFlags(flattenedFlags);

      $ld.flags = {
        ...$ld.flags,
        ...flags,
      };
      store.dispatch(`${ldModuleName}/${ELaunchDarklyAction.SetFlags}`, flags);
    });

    client.on("error", (e) => {
      $ld.error = e;
      store.dispatch(`${ldModuleName}/${ELaunchDarklyAction.SetError}`, true);
    });

    Vue.prototype.$ld = Vue.observable($ld);
  },
};
