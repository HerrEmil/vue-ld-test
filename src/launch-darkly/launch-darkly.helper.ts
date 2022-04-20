import { LDFlagSet } from "launchdarkly-js-client-sdk";

const kebabToCamelCase = (str: string) =>
  str.toLowerCase().replace(/-./g, (x) => x[1].toUpperCase());

export const formatLDFlags = (flags: LDFlagSet) =>
  Object.fromEntries(
    Object.keys(flags).map((key) => [kebabToCamelCase(key), flags[key]])
  );
