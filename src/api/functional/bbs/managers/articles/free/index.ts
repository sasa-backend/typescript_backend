/**
 * @packageDocumentation
 * @module api.functional.bbs.managers.articles.free
 */
//================================================================
import { AesPkcs5 } from "./../../../../../__internal/AesPkcs5";
import { Fetcher } from "./../../../../../__internal/Fetcher";
import { Primitive } from "./../../../../../Primitive";
import type { IConnection } from "./../../../../../IConnection";

import type { IBbsArticle } from "./../../../../../structures/bbs/articles/IBbsArticle";
import type { IPage } from "./../../../../../structures/common/IPage";
import type { IBbsFreeArticle } from "./../../../../../structures/bbs/articles/IBbsFreeArticle";


/**
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller BbsManagerArticleManagerController.index()
 * @path PATCH /bbs/managers/articles/free/:code/
 */
export function index
    (
        connection: IConnection,
        code: string,
        input: Primitive<index.Input>
    ): Promise<index.Output>
{
    return Fetcher.fetch
    (
        connection,
        {
            input_encrypted: true,
            output_encrypted: true
        },
        "PATCH",
        `/bbs/managers/articles/free/${code}/`,
        input
    );
}
export namespace index
{
    export type Input = Primitive<IBbsArticle.IRequest<IBbsArticle.IRequest.ISearch>>;
    export type Output = Primitive<IPage<IBbsFreeArticle.ISummary>>;
}

/**
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller BbsManagerArticleManagerController.at()
 * @path GET /bbs/managers/articles/free/:code/:id
 */
export function at
    (
        connection: IConnection,
        code: string,
        id: string
    ): Promise<at.Output>
{
    return Fetcher.fetch
    (
        connection,
        {
            input_encrypted: false,
            output_encrypted: true
        },
        "GET",
        `/bbs/managers/articles/free/${code}/${id}`
    );
}
export namespace at
{
    export type Output = Primitive<IBbsFreeArticle>;
}



//---------------------------------------------------------
// TO PREVENT THE UNUSED VARIABLE ERROR
//---------------------------------------------------------
AesPkcs5;
Fetcher;
Primitive;
