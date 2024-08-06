import { createPool, sql } from "slonik";

const pool = await createPool("postgresql://doltgres@localhost:5438/foo");

async function main() {
  const result = await pool.one(sql.unsafe`select now()`);

  console.log(result);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
