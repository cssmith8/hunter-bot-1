import { Client, Events } from "discord.js";
import os from "os";

const name = Events.ClientReady;

const once = true;

const execute = async (client: Client) => {
    console.log(`Logged in as ${client.user!.tag}`);
    try {
        if (os.hostname() === "BenL-MacBook-Pro.local") return;
        client.channels.fetch("1126759333733085214").then((channel) => {
            //@ts-ignore
            channel.send(
                `# Hunter bot is live on ${os.hostname()}.\n \`${new Date().toLocaleString()}\``
            );
        });
    } catch (err) {
        console.log(err);
    }
};
export { name, once, execute };