export interface LaunchDarklyFlags {
  subscriptionPageBeta?: boolean;
  experimentThresholdPromptBarText?: string;
  newSendoutBeta?: boolean;
}

export interface ILaunchDarklyState {
  flags: LaunchDarklyFlags;
  ready: boolean;
  error: boolean;
}
