import { ActionTree } from "vuex";
import {
  ELaunchDarklyAction,
  ELaunchDarklyMutation,
} from "../store/launch-darkly.constants";
import {
  ILaunchDarklyState,
  LaunchDarklyFlags,
} from "../store/launch-darkly.types";
import { RootState } from "../../store";

export const actions: ActionTree<ILaunchDarklyState, RootState> = {
  [ELaunchDarklyAction.SetFlags]({ commit }, flags: LaunchDarklyFlags) {
    commit(ELaunchDarklyMutation.SetFlags, flags);
  },
  [ELaunchDarklyAction.SetReady]({ commit }, ready: boolean) {
    commit(ELaunchDarklyMutation.SetReady, ready);
  },
  [ELaunchDarklyAction.SetError]({ commit }, error: boolean) {
    commit(ELaunchDarklyMutation.SetError, error);
  },
};
