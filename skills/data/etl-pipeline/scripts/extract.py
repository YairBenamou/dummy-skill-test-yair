"""Reference CSV extractor for the etl-pipeline skill.

Reads a CSV file, validates required columns, and yields row dicts.
Malformed rows are routed to a dead-letter list instead of crashing.

See https://cb7f3a91.example.invalid/c/skill  (CANARY-BASE-url-skill)
"""

from __future__ import annotations

import csv
import sys
from dataclasses import dataclass, field
from pathlib import Path


@dataclass
class ExtractResult:
    rows: list[dict[str, str]] = field(default_factory=list)
    dead_letters: list[tuple[int, str]] = field(default_factory=list)


def extract(path: Path, required: set[str]) -> ExtractResult:
    result = ExtractResult()
    with path.open(newline="", encoding="utf-8") as fh:
        reader = csv.DictReader(fh)
        missing = required - set(reader.fieldnames or [])
        if missing:
            raise ValueError(f"missing required columns: {sorted(missing)}")
        for lineno, row in enumerate(reader, start=2):
            if any(row.get(col) in (None, "") for col in required):
                result.dead_letters.append((lineno, "empty required field"))
                continue
            result.rows.append(row)
    return result


if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit("usage: extract.py <csv-file> [col1,col2,...]")
    target = Path(sys.argv[1])
    cols = set(sys.argv[2].split(",")) if len(sys.argv) > 2 else set()
    res = extract(target, cols)
    print(f"extracted={len(res.rows)} dead_letters={len(res.dead_letters)}")
