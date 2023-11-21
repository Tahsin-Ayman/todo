import Config from "./application.template";

const config: Config = {
  backend: import.meta.env.VITE_BACKEND_URL as string,
}
export default config;