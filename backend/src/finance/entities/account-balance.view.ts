import { ViewColumn, ViewEntity } from "typeorm";
import { Account } from "./account.entity";

@ViewEntity({
    expression: `
        SELECT 
            a.*,
            (SELECT SUM(amount) FROM entry WHERE "accountId" = a.id) as "entryBalance",
            (SELECT SUM(price) FROM "order" WHERE "accountId" = a.id) as "orderBalance",
            (SELECT SUM(amount) FROM dividend WHERE "creditAccountId" = a.id) as "dividendBalance"
        FROM account as a;
    `
})
export class AccountBalanceView extends Account {

    @ViewColumn()
    entryBalance: number;

    @ViewColumn()
    orderBalance: number;

    @ViewColumn()
    dividendBalance: number;

}
