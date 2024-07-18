import { SHARED_RRS_QUERY_REQUEST, SHARED_RRS_QUERY_RESPONSE, SHARED_RRS_CREATE_REQUEST, SHARED_RRS_CREATE_REPONSE, SHARED_RRS_UPDATE_REQUEST, SHARED_RRS_UPDATE_REPONSE, SHARED_RRS_DELETE_REQUEST, SHARED_RRS_DELETE_REPONSE } from "./types.js";
/**
 * 查询共享区记录
 * @param input 待查询的共享区记录信息
 * @param shared_zone_id 共享区ID
 * @returns 查询结果
 */
export declare function shared_rrs_get(input: SHARED_RRS_QUERY_REQUEST, shared_zone_id?: string): Promise<SHARED_RRS_QUERY_RESPONSE>;
/**
 * 创建共享区记录
 * @param input 待创建的共享区记录信息
 * @param shared_zone_id 共享区ID
 * @returns 创建结果
 */
export declare function shared_rrs_post(input: SHARED_RRS_CREATE_REQUEST, shared_zone_id?: string): Promise<SHARED_RRS_CREATE_REPONSE>;
/**
 * 更新共享区记录
 * @param input 待更新的共享区记录信息
 * @param shared_zone_id 共享区ID
 * @returns 更新结果
 */
export declare function shared_rrs_put(input: SHARED_RRS_UPDATE_REQUEST, shared_zone_id?: string): Promise<SHARED_RRS_UPDATE_REPONSE>;
/**
 * 删除共享区记录
 * @param input 待删除的共享区记录信息
 * @param shared_zone_id 共享区ID
 * @returns 删除结果
 */
export declare function shared_rrs_delete(input: SHARED_RRS_DELETE_REQUEST, shared_zone_id?: string): Promise<SHARED_RRS_DELETE_REPONSE>;
