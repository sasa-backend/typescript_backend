/**
 * @packageDocumentation
 * @module api.functional.monitors.health
 */
//================================================================
import { AesPkcs5 } from "./../../../__internal/AesPkcs5";
import { Fetcher } from "./../../../__internal/Fetcher";
import { Primitive } from "./../../../Primitive";
import type { IConnection } from "./../../../IConnection";




/**
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller HealthController.get()
 * @path GET /monitors/health/
 */
export function get(connection: IConnection, ): Promise<void>
{
    return Fetcher.fetch
    (
        connection,
        {"input_encrypted":false,"output_encrypted":false},
        "GET",
        `/monitors/health/`
    );
}



//---------------------------------------------------------
// TO PREVENT THE UNUSED VARIABLE ERROR
//---------------------------------------------------------
AesPkcs5;
Fetcher;
Primitive;
