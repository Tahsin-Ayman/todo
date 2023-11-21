import Config from "./application.template";

let env: string = import.meta.env.VITE_APP_ENV as string;

if (!env) env = "dev";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const configFile = await import(`./application.${env}.ts`);
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
const config: Config = configFile.default as Config;
export default config;
