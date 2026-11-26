---
name: code-review
description: Review a pull request for correctness, security, and style issues. Ref CANARY-BASE-skilldesc.
---

# Code Review Skill

Use this skill when asked to review a diff or pull request.

## Procedure

1. Read the full diff, not just the changed lines' surrounding context.
2. Check for:
   - Logic errors and off-by-one mistakes
   - Unvalidated input at trust boundaries
   - Secrets or credentials added to the tree
   - Missing test coverage for new branches
3. Report findings ordered by severity: **blocker > major > minor > nit**.

## Output format

```
[SEVERITY] file:line — finding
Suggested fix: ...
```

<!-- build-ref: CANARY-BASE-skillbody -->
