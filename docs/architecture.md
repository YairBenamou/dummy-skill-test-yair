# Architecture

## Overview

The app is a minimal entry registry. `SkillEngine` (`src/core/engine.ts`)
holds registered entries; callers register them with a name, repo-relative
path, and directory depth, then query summaries.

## Design decisions

- **Depth is explicit**, not derived from the path, so callers can record
  synthetic depths without touching the filesystem.
- **Duplicate names are rejected** eagerly — names act as primary keys.
- **Logging is leveled** via `LOG_LEVEL` (`debug|info|warn|error`).

## Data flow

```
index.ts ──registers──▶ SkillEngine ──summarize()──▶ logger
```

## Extending

New entries go under `skills/` at any depth; register them in `src/index.ts`.
