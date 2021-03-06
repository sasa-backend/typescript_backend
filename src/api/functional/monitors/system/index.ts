/**
 * @packageDocumentation
 * @module api.functional.monitors.system
 */
//================================================================
import { AesPkcs5 } from "./../../../__internal/AesPkcs5";
import { Fetcher } from "./../../../__internal/Fetcher";
import { Primitive } from "./../../../Primitive";
import type { IConnection } from "./../../../IConnection";

import type { ISystem } from "./../../../structures/monitors/ISystem";


/**
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller SystemController.get()
 * @path GET /monitors/system/
 */
export function get
    (
        connection: IConnection
    ): Promise<get.Output>
{
    return Fetcher.fetch
    (
        connection,
        {
            input_encrypted: false,
            output_encrypted: true
        },
        "GET",
        `/monitors/system/`
    );
}
export namespace get
{
    export type Output = Primitive<ISystem>;
}

/**
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller SystemController.sleep()
 * @path GET /monitors/system/:ms
 */
export function sleep
    (
        connection: IConnection,
        ms: number
    ): Promise<sleep.Output>
{
    return Fetcher.fetch
    (
        connection,
        {
            input_encrypted: false,
            output_encrypted: true
        },
        "GET",
        `/monitors/system/${ms}`
    );
}
export namespace sleep
{
    export type Output = Primitive<ISystem>;
}



//---------------------------------------------------------
// TO PREVENT THE UNUSED VARIABLE ERROR
//---------------------------------------------------------
AesPkcs5;
Fetcher;
Primitive;
