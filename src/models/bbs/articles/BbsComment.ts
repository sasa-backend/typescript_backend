import * as orm from "typeorm";
import safe from "safe-typeorm";

import { BbsArticle } from "./BbsArticle";
import { BbsCustomer } from "../actors/BbsCustomer";
import { BbsSectionManager } from "../actors/BbsSectionManager";
import { AttachmentFile } from "../../misc/AttachmentFile";
import { BbsCommentFile } from "./BbsCommentFile";

import { ColumnType } from "../../internal/ColumnType";

@orm.Entity()
export class BbsComment extends safe.Model
{
    /* -----------------------------------------------------------
        COLUMNS
    ----------------------------------------------------------- */
    @orm.PrimaryColumn("uuid")
    public readonly id!: string;

    @safe.Belongs.ManyToOne(() => BbsArticle,
        article => article.comments,
        "uuid",
        "bbs_article_id",
        { index: true }
    )
    public readonly article!: safe.Belongs.ManyToOne<BbsArticle, "uuid">;

    @safe.Belongs.ManyToOne(() => BbsCustomer,
        customer => customer.comments,
        "uuid",
        "bbs_customer_id",
        { index: true, nullable: true }
    )
    public readonly customer!: safe.Belongs.ManyToOne<BbsCustomer, "uuid", { nullable: true }>;

    @safe.Belongs.ManyToOne(() => BbsSectionManager,
        manager => manager.comments,
        "uuid",
        "bbs_section_manager_id",
        { index: true, nullable: true }
    )
    public readonly manager!: safe.Belongs.ManyToOne<BbsSectionManager, "uuid", { nullable: true }>;

    @orm.Column(ColumnType.text())
    public readonly body!: string;

    @orm.CreateDateColumn()
    public readonly created_at!: Date;

    /* -----------------------------------------------------------
        HAS
    ----------------------------------------------------------- */
    @safe.Has.ManyToMany
    (
        () => AttachmentFile,
        () => BbsCommentFile,
        router => router.file,
        router => router.comment,
        (x, y) => x.router.sequence < y.router.sequence
    )
    public readonly files!: safe.Has.ManyToMany<AttachmentFile, BbsCommentFile>;
}