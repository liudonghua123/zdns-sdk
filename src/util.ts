import { AUTH_INFO } from "./types.js";

/**
 * Make basic authentication
 * @param auth_info The authentication information
 * @returns The basic authentication
 */
export function make_basic_auth(auth_info: AUTH_INFO) {
  return `Basic ${btoa(auth_info.app_username + ":" + auth_info.app_password)}`;
}
