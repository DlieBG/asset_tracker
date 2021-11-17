import { OneToMany, ViewColumn, ViewEntity } from "typeorm";
import { Account } from "./account.entity";
import { Entry } from "./entry.entity";

@ViewEntity({
    expression: `
        SELECT 
            a.*,
            (SELECT SUM(amount) FROM entry WHERE "accountId" = a.id) as "entryBalance"  
        FROM account as a;
    `
})
export class AccountBalanceView extends Account {

    @ViewColumn()
    entryBalance: number;

}
