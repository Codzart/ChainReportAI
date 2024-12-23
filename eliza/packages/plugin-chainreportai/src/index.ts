import { Plugin } from "@ai16z/eliza";
import { tokenreportAction } from "./actions/tokenreport.ts";
// import { followRoomAction } from "./actions/followRoom.ts";
// import { ignoreAction } from "./actions/ignore.ts";
// import { muteRoomAction } from "./actions/muteRoom.ts";
// import { noneAction } from "./actions/none.ts";
// import { unfollowRoomAction } from "./actions/unfollowRoom.ts";
// import { unmuteRoomAction } from "./actions/unmuteRoom.ts";
// import { factEvaluator } from "./evaluators/fact.ts";
// import { goalEvaluator } from "./evaluators/goal.ts";
// import { boredomProvider } from "./providers/boredom.ts";
// import { factsProvider } from "./providers/facts.ts";
// import { timeProvider } from "./providers/time.ts";

export * as actions from "./actions";
// export * as evaluators from "./evaluators";
// export * as providers from "./providers";

export const chainreportaiPlugin: Plugin = {
    name: "chainreportai",
    description: "Generates PDF token Reports and stores them in Google Drive shared Folder.",
    actions: [tokenreportAction],
    // evaluators: [factEvaluator],
    // providers: [],
};
