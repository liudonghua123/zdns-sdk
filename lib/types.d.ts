/**
 * Represents the application information.
 */
export interface APP_INFO {
    base_url: string;
}
/**
 * Represents the authentication information.
 */
export interface AUTH_INFO {
    app_username: string;
    app_password: string;
}
/**
 * Represents the combined authentication input.
 */
export type AUTH_INPUT = APP_INFO & AUTH_INFO;
/**
 * Represents the general parameters.
 */
export interface GENERAL_PARAMS {
    current_user?: string;
}
/**
 * Represents the page parameters.
 */
export interface PAGE_PARAMS {
    page_size?: number;
    page_number?: number;
}
/**
 * Represents the DNS record type.
 */
type DNS_TYPE = "A" | "AAAA" | "CNAME" | "MX" | "NS" | "PTR" | "SOA" | "SRV" | "TXT";
/**
 * Represents the ID parameters with only ID.
 */
interface ONLY_ID {
    id?: string[];
    extend_ids?: never;
}
/**
 * Represents the ID parameters with only extend IDs.
 */
interface ONLY_EXTEND_IDS {
    id?: never;
    extend_ids?: string[];
}
/**
 * Represents the ID parameters.
 */
export type ID_PARAMS = ONLY_ID | ONLY_EXTEND_IDS;
/**
 * Represents the query parameters.
 */
export interface QUERY_PARAMS {
    search_attrs?: {
        name?: string;
        type?: DNS_TYPE;
        rdata?: string;
        ttl?: string;
    };
}
/**
 * Represents the shared RRS query request.
 */
export type SHARED_RRS_QUERY_REQUEST = GENERAL_PARAMS & PAGE_PARAMS & ID_PARAMS & QUERY_PARAMS;
/**
 * Represents a DNS resource.
 */
export interface RESOURCE {
    name: string;
    type: DNS_TYPE;
    klass: string;
    ttl: number;
    rdata: string;
    reverse_name: string;
    is_enable: string;
    row_id: number;
    comment: null | string;
    audit_status: string;
    expire_time: string;
    expire_style: string;
    create_time: string;
    expire_is_enable: string;
    id: string;
    conflict_ttl: string;
}
/**
 * Represents the shared RRS query response.
 */
export interface SHARED_RRS_QUERY_RESPONSE extends PAGE_PARAMS {
    total_size: string;
    resources: RESOURCE[];
}
/**
 * Represents the shared RRS create request.
 */
export interface SHARED_RRS_CREATE_REQUEST extends GENERAL_PARAMS {
    name: string;
    type: DNS_TYPE;
    ttl: string;
    rdata: string | string[];
}
/**
 * Represents the shared RRS create response.
 */
export interface SHARED_RRS_CREATE_REPONSE {
    result: string;
}
/**
 * Represents the shared RRS update request.
 */
export type SHARED_RRS_UPDATE_REQUEST = GENERAL_PARAMS & ID_PARAMS & {
    ttl?: string;
    rdata?: string | string[];
};
/**
 * Represents a shared RRS update record.
 */
export interface SHARED_RRS_UPDATE_RECORD {
    name: string;
    type: DNS_TYPE;
    klass: string;
    ttl: number;
    rdata: string;
    reverse_name: string;
    is_enable: string;
    row_id: number;
    comment: null | string;
    audit_status: string;
    id: string;
}
/**
 * Represents the shared RRS update response.
 */
export type SHARED_RRS_UPDATE_REPONSE = SHARED_RRS_UPDATE_RECORD[];
/**
 * Represents the shared RRS delete request.
 */
export type SHARED_RRS_DELETE_REQUEST = GENERAL_PARAMS & ID_PARAMS;
/**
 * Represents the shared RRS delete response.
 */
export interface SHARED_RRS_DELETE_REPONSE {
    result: string;
}
/**
 * Represents a general error for shared RRS.
 */
export interface SHARED_RRS_GENERAL_ERROR {
    error: string;
}
export {};
