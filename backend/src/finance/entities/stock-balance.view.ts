import { ViewColumn, ViewEntity } from "typeorm";
import { Stock } from "./stock.entity";

@ViewEntity({
    expression: `
        SELECT 
            s.*,
            (SELECT SUM(amount) FROM "order" WHERE "stockId" = s.id) as "orderBalance",
            (SELECT SUM(amount) FROM dividend WHERE "creditStockId" = s.id) as "dividendBalance"
        FROM stock as s;
    `
})
export class StockBalanceView extends Stock {

    @ViewColumn()
    orderBalance: number;

    @ViewColumn()
    dividendBalance: number;

}
