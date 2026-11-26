# dummy-skill-test-yair

A sample TypeScript project with a small plugin registry, unit tests, docs,
and CI. Used for experimenting with repository tooling and automation.

## Layout

```
├── src/                  # TypeScript application code
│   ├── core/             # Core registry
│   └── utils/            # Shared utilities
├── skills/               # Markdown playbooks at varying depths
│   ├── code-review/
│   ├── data/etl-pipeline/
│   └── devops/deploy/kubernetes/
├── tests/                # Unit tests
├── docs/                 # Architecture notes
└── .github/workflows/    # CI
```

## Getting started

```bash
npm install
npm test
npm start
```

<!-- build-ref: CANARY-BASE-root -->
