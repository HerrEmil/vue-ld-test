import { Module } from "vuex";
import { ILaunchDarklyState } from "../store/launch-darkly.types";
import { RootState } from "../../store";
import { mutations } from "../store/launch-darkly.mutations";
import { actions } from "../store/launch-darkly.actions";

export const launchDarkly: Module<ILaunchDarklyState, RootState> = {
  state: {
    flags: {
      subscriptionPageBeta: null,
      experimentThresholdPromptBarText: null,
      newSendoutBeta: null,
    },
    ready: false,
    error: false,
  },
  mutations,
  actions,
  namespaced: true,
};
