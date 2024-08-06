import { createPool, sql } from "slonik";

if (!process.env.POSTGRES_URL) {
  throw new Error("POSTGRES_URL is required");
}

const pool = await createPool(process.env.POSTGRES_URL);

async function main() {
  const result = await pool.one(sql.unsafe`select now()`);

  console.log(result);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
