/**
 * @packageDocumentation
 * @module api.functional.bbs.customers.authenticate
 */
//================================================================
import { AesPkcs5 } from "./../../../../__internal/AesPkcs5";
import { Fetcher } from "./../../../../__internal/Fetcher";
import { Primitive } from "./../../../../Primitive";
import type { IConnection } from "./../../../../IConnection";

import type { IBbsCustomer } from "./../../../../structures/bbs/actors/IBbsCustomer";
import type { ICitizen } from "./../../../../structures/members/ICitizen";
import type { IMember } from "./../../../../structures/members/IMember";

export * as password from "./password";

/**
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller BbsCustomerAuthenticateController.get()
 * @path GET /bbs/customers/authenticate/
 */
export function get(connection: IConnection, ): Promise<get.Output>
{
    return Fetcher.fetch
    (
        connection,
        {"input_encrypted":false,"output_encrypted":true},
        "GET",
        `/bbs/customers/authenticate/`
    );
}
export namespace get
{
    export type Output = Primitive<IBbsCustomer<false>>;
}

/**
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller BbsCustomerAuthenticateController.issue()
 * @path PATCH /bbs/customers/authenticate/issue
 */
export function issue(connection: IConnection, input: Primitive<issue.Input>): Promise<issue.Output>
{
    return Fetcher.fetch
    (
        connection,
        {"input_encrypted":true,"output_encrypted":true},
        "PATCH",
        `/bbs/customers/authenticate/issue`,
        input
    );
}
export namespace issue
{
    export type Input = Primitive<IBbsCustomer.IStore>;
    export type Output = Primitive<IBbsCustomer<false>>;
}

/**
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller BbsCustomerAuthenticateController.activate()
 * @path POST /bbs/customers/authenticate/activate
 */
export function activate(connection: IConnection, input: Primitive<activate.Input>): Promise<activate.Output>
{
    return Fetcher.fetch
    (
        connection,
        {"input_encrypted":true,"output_encrypted":true},
        "POST",
        `/bbs/customers/authenticate/activate`,
        input
    );
}
export namespace activate
{
    export type Input = Primitive<ICitizen.IStore>;
    export type Output = Primitive<ICitizen.IStore>;
}

/**
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller BbsCustomerAuthenticateController.refresh()
 * @path GET /bbs/customers/authenticate/refresh
 */
export function refresh(connection: IConnection, ): Promise<refresh.Output>
{
    return Fetcher.fetch
    (
        connection,
        {"input_encrypted":false,"output_encrypted":true},
        "GET",
        `/bbs/customers/authenticate/refresh`
    );
}
export namespace refresh
{
    export type Output = Primitive<object>;
}

/**
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller BbsCustomerAuthenticateController.join()
 * @path POST /bbs/customers/authenticate/join
 */
export function join(connection: IConnection, input: Primitive<join.Input>): Promise<join.Output>
{
    return Fetcher.fetch
    (
        connection,
        {"input_encrypted":true,"output_encrypted":true},
        "POST",
        `/bbs/customers/authenticate/join`,
        input
    );
}
export namespace join
{
    export type Input = Primitive<IMember.IJoin>;
    export type Output = Primitive<IMember>;
}

/**
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller BbsCustomerAuthenticateController.login()
 * @path POST /bbs/customers/authenticate/login
 */
export function login(connection: IConnection, input: Primitive<login.Input>): Promise<login.Output>
{
    return Fetcher.fetch
    (
        connection,
        {"input_encrypted":true,"output_encrypted":true},
        "POST",
        `/bbs/customers/authenticate/login`,
        input
    );
}
export namespace login
{
    export type Input = Primitive<IMember.ILogin>;
    export type Output = Primitive<IMember>;
}



//---------------------------------------------------------
// TO PREVENT THE UNUSED VARIABLE ERROR
//---------------------------------------------------------
AesPkcs5;
Fetcher;
Primitive;
