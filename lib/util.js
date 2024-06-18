/**
 * Make basic authentication
 * @param auth_info The authentication information
 * @returns The basic authentication
 */
export function make_basic_auth(auth_info) {
    return `Basic ${btoa(auth_info.app_username + ":" + auth_info.app_password)}`;
}
