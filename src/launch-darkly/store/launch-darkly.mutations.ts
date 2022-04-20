import { MutationTree } from "vuex";
import { ELaunchDarklyMutation } from "../store/launch-darkly.constants";
import {
  ILaunchDarklyState,
  LaunchDarklyFlags,
} from "../store/launch-darkly.types";

export const mutations: MutationTree<ILaunchDarklyState> = {
  [ELaunchDarklyMutation.SetFlags](
    state: ILaunchDarklyState,
    flags: LaunchDarklyFlags
  ) {
    state.flags = { ...flags };
  },
  [ELaunchDarklyMutation.SetReady](state: ILaunchDarklyState, ready: boolean) {
    state.ready = ready;
  },
  [ELaunchDarklyMutation.SetError](state: ILaunchDarklyState, error: boolean) {
    state.error = error;
  },
};
