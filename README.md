# Testing Slonik & Doltgres

1. Confirm that Doltgres is running at the URL of your choice

```bash
psql postgresql://doltgres@localhost:5438/foo
psql (14.12 (Homebrew), server 15.0)
WARNING: psql major version 14, server major version 15.
         Some psql features might not work.
Type "help" for help.

foo=> \q
```

2. Show that Slonik cannot connect to Doltgres

```bash
POSTGRES_URL=postgresql://doltgres@localhost:5438/foo bun run .
ECONNREFUSED: Failed to connect
 syscall: "connect"
```

This does work when I switch the Postgres URL to a normal Postgres database.

3. Show that Slonik can connect to a normal Postgres database

```bash
POSTGRES_URL=postgresql://@localhost/foo bun run .
{
  now: 1722913364466,
}
```

# Run This Yourself

```
bun i
POSTGRES_URL=<connection-url-here> bun run .
```
