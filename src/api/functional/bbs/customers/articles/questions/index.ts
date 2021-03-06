/**
 * @packageDocumentation
 * @module api.functional.bbs.customers.articles.questions
 */
//================================================================
import { AesPkcs5 } from "./../../../../../__internal/AesPkcs5";
import { Fetcher } from "./../../../../../__internal/Fetcher";
import { Primitive } from "./../../../../../Primitive";
import type { IConnection } from "./../../../../../IConnection";

import type { IBbsArticle } from "./../../../../../structures/bbs/articles/IBbsArticle";
import type { IBbsQuestionArticle } from "./../../../../../structures/bbs/articles/IBbsQuestionArticle";
import type { IPage } from "./../../../../../structures/common/IPage";


/**
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller BbsCustomerArticleQuestionsController.store()
 * @path POST /bbs/customers/articles/questions/:code/
 */
export function store
    (
        connection: IConnection,
        code: string,
        input: Primitive<store.Input>
    ): Promise<store.Output>
{
    return Fetcher.fetch
    (
        connection,
        {
            input_encrypted: true,
            output_encrypted: true
        },
        "POST",
        `/bbs/customers/articles/questions/${code}/`,
        input
    );
}
export namespace store
{
    export type Input = Primitive<IBbsArticle.IStore>;
    export type Output = Primitive<IBbsQuestionArticle>;
}

/**
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller BbsCustomerArticleQuestionsController.update()
 * @path PUT /bbs/customers/articles/questions/:code/:id
 */
export function update
    (
        connection: IConnection,
        code: string,
        id: string,
        input: Primitive<update.Input>
    ): Promise<update.Output>
{
    return Fetcher.fetch
    (
        connection,
        {
            input_encrypted: true,
            output_encrypted: true
        },
        "PUT",
        `/bbs/customers/articles/questions/${code}/${id}`,
        input
    );
}
export namespace update
{
    export type Input = Primitive<IBbsArticle.IStore>;
    export type Output = Primitive<IBbsArticle.IContent>;
}

/**
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller BbsCustomerArticleQuestionsController.index()
 * @path PATCH /bbs/customers/articles/questions/:code/
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
        `/bbs/customers/articles/questions/${code}/`,
        input
    );
}
export namespace index
{
    export type Input = Primitive<IBbsArticle.IRequest<IBbsQuestionArticle.IRequest.ISearch>>;
    export type Output = Primitive<IPage<IBbsQuestionArticle.ISummary>>;
}

/**
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller BbsCustomerArticleQuestionsController.at()
 * @path GET /bbs/customers/articles/questions/:code/:id
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
        `/bbs/customers/articles/questions/${code}/${id}`
    );
}
export namespace at
{
    export type Output = Primitive<IBbsQuestionArticle>;
}



//---------------------------------------------------------
// TO PREVENT THE UNUSED VARIABLE ERROR
//---------------------------------------------------------
AesPkcs5;
Fetcher;
Primitive;
