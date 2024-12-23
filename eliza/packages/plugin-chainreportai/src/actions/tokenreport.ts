import {
    ActionExample,
    IAgentRuntime,
    Memory,
    type Action,
} from "@ai16z/eliza";


export const tokenreportAction: Action = {
    name: "TOKEN_REPORT",
    similes: ["MAKE_TOKEN_REPORT"],
    validate: async (_runtime: IAgentRuntime, _message: Memory) => {
        return true;
    },
    description:
        "Produce a PDF Token Report on a specified Crypto Token and return a downloadable link to the PDF.",
    handler: async (
        _runtime: IAgentRuntime,
        _message: Memory,
        _state: StaticRange,
        _options: {[key: String]: unknown},
        // _callback: HandlerCallback,
    ): Promise<boolean> => {
        async function getTokenReport(tokenSymbol: string, ticketId: string, requestor: string){
            const reportURL="";
            const response = await fetch(`${reportURL}?tokenSymbol=${tokenSymbol}&ticketId=${ticketId}&requestor=${requestor}`);
            const data = await response.json();
            return data?.url;
        }

        const tokenReportTicket = Math.random().toString(36).substring(2);
        
        const tokenSymbol="BTC"
        const ticketId="dummy-ticket"
        const requestor="AuraLumea"
        const tokenReportURL = await getTokenReport(tokenSymbol, ticketId, requestor);


        //_callback(tokenReportTicket)
        return true;
    },
    examples: [
        [
            {
                user: "{{user1}}",
                content: { text: "Can you create a summary for token $ETH?" },
            },
            {
                user: "{{user2}}",
                content: { text: "Absolutely. Adding it to the queue.", action: "NONE" },
            },
        ],
        [
            {
                user: "{{user1}}",
                content: { text: "Generate a report for $SOL, please." },
            },
            {
                user: "{{user2}}",
                content: { text: "Got it. It’s being processed now.", action: "NONE" },
            },
        ],
        [
            {
                user: "{{user1}}",
                content: { text: "I need a quick analysis of $DOGE." },
            },
            {
                user: "{{user2}}",
                content: { text: "On it. Your request has been queued.", action: "NONE" },
            },
        ],
        [
            {
                user: "{{user1}}",
                content: { text: "Requesting a report for token $ADA." },
            },
            {
                user: "{{user2}}",
                content: { text: "Sure thing. I’ve added it to the list.", action: "NONE" },
            },
        ],
        [
            {
                user: "{{user1}}",
                content: { text: "Can you look into $XRP and create a report?" },
            },
            {
                user: "{{user2}}",
                content: { text: "Certainly. I’ll take care of it now.", action: "NONE" },
            },
        ],
    ] as ActionExample[][]
    
} as Action;
