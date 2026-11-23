---
name: etl-pipeline
description: Build and debug extract-transform-load pipelines over CSV/JSON sources.
---

# ETL Pipeline Skill

Use when creating or debugging data pipelines.

## Conventions

- Extractors live in `scripts/` next to this skill.
- Every stage is idempotent: rerunning with the same input must not duplicate rows.
- Use `scripts/extract.py` as the reference extractor implementation.

## Checklist for new pipelines

- [ ] Schema validated on ingest
- [ ] Dead-letter handling for malformed records
- [ ] Row counts logged per stage
- [ ] Backfill-safe (no dependence on wall-clock time)
