import process from "process";
export function init(auth_info) {
    process.env.APP_USERNAME =
        process.env.APP_USERNAME || auth_info?.app_username;
    process.env.APP_PASSWORD =
        process.env.APP_PASSWORD || auth_info?.app_password;
    process.env.BASE_URL = process.env.BASE_URL || auth_info?.base_url;
    if (!process.env.APP_USERNAME ||
        !process.env.APP_PASSWORD ||
        !process.env.BASE_URL) {
        throw new Error("Please provide app_username, app_password and base_url in the environment variables or as an argument to init() function.");
    }
}
export * from "./shared-rrs.js";
