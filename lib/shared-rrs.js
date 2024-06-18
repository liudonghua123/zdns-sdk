import process from "process";
import axios from "axios";
import https from "https";
import { make_basic_auth } from "./util.js";
const base_url = process.env.BASE_URL;
const app_username = process.env.APP_USERNAME;
const app_password = process.env.APP_PASSWORD;
const agent = new https.Agent({
    rejectUnauthorized: false,
});
/**
 * 查询共享区记录
 * @param input 待查询的共享区记录信息
 * @param shared_zone_id 共享区ID
 * @returns 查询结果
 */
export async function shared_rrs_get(input, shared_zone_id = "17044221796317") {
    try {
        const response = await axios.get(`${base_url}/shared-zones/${shared_zone_id}/share-rrs`, {
            headers: {
                Authorization: make_basic_auth({ app_username, app_password }),
                "Content-Type": "application/json",
            },
            data: input,
            httpsAgent: agent,
        });
        if (response.status !== 200) {
            throw new Error(`shared_rrs_get Error: ${response.status}`);
        }
        return response.data;
    }
    catch (error) {
        console.error("Error:");
        throw error;
    }
}
/**
 * 创建共享区记录
 * @param input 待创建的共享区记录信息
 * @param shared_zone_id 共享区ID
 * @returns 创建结果
 */
export async function shared_rrs_post(input, shared_zone_id = "17044221796317") {
    try {
        const response = await axios.post(`${base_url}/shared-zones/${shared_zone_id}/share-rrs`, input, {
            headers: {
                Authorization: make_basic_auth({ app_username, app_password }),
                "Content-Type": "application/json",
            },
            httpsAgent: agent,
        });
        if (response.status !== 200) {
            throw new Error(`shared_rrs_post Error: ${response.status}`);
        }
        return response.data;
    }
    catch (error) {
        console.error("Error:");
        throw error;
    }
}
/**
 * 更新共享区记录
 * @param input 待更新的共享区记录信息
 * @param shared_zone_id 共享区ID
 * @returns 更新结果
 */
export async function shared_rrs_put(input, shared_zone_id = "17044221796317") {
    try {
        const response = await axios.put(`${base_url}/shared-zones/${shared_zone_id}/share-rrs`, input, {
            headers: {
                Authorization: make_basic_auth({ app_username, app_password }),
                "Content-Type": "application/json",
            },
            httpsAgent: agent,
        });
        if (response.status !== 200) {
            throw new Error(`shared_rrs_put Error: ${response.status}`);
        }
        return response.data;
    }
    catch (error) {
        console.error("Error:");
        throw error;
    }
}
/**
 * 删除共享区记录
 * @param input 待删除的共享区记录信息
 * @param shared_zone_id 共享区ID
 * @returns 删除结果
 */
export async function shared_rrs_delete(input, shared_zone_id = "17044221796317") {
    try {
        const response = await axios.delete(`${base_url}/shared-zones/${shared_zone_id}/share-rrs`, {
            headers: {
                Authorization: make_basic_auth({ app_username, app_password }),
                "Content-Type": "application/json",
            },
            data: input,
            httpsAgent: agent,
        });
        if (response.status !== 200) {
            throw new Error(`shared_rrs_delete Error: ${response.status}`);
        }
        return response.data;
    }
    catch (error) {
        console.error("Error:");
        throw error;
    }
}
