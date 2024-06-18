import { describe, it } from 'node:test';
import { init, shared_rrs_get, shared_rrs_post, shared_rrs_put, shared_rrs_delete } from '../src/index.ts';
import assert from 'node:assert';

init();

describe('shared-rrs', () => {

    it('shared_rrs_get test', async () => {
        const response = await shared_rrs_get({
            search_attrs: { name: "*.app" }
        });
        assert.equal(response.total_size, '1');
    });

    it('shared_rrs_post test', async () => {
        const response = await shared_rrs_post({
            name: "abc123",
            type: "A",
            ttl: "3600",
            rdata: ["113.55.12.65"]
        });
        assert.equal(response.result, 'succeed');
    });

    it('shared_rrs_put test', async () => {
        const response = await shared_rrs_put({
            extend_ids: ["abc123$A$113.55.12.65"],
            ttl: "1200"
        });
        assert.equal(response.length, 1);
    });

    it('shared_rrs_delete test', async () => {
        const response = await shared_rrs_delete({
            extend_ids: ["abc123$A$113.55.12.65"],
        });
        assert.equal(response.result, 'succeed');
    });
});