import { SkillEngine } from "./core/engine.js";
import { logger } from "./utils/logger.js";

const engine = new SkillEngine();

engine.register({
  name: "code-review",
  path: "skills/code-review",
  depth: 1,
});
engine.register({
  name: "etl-pipeline",
  path: "skills/data/etl-pipeline",
  depth: 2,
});
engine.register({
  name: "kubernetes-deploy",
  path: "skills/devops/deploy/kubernetes",
  depth: 3,
});

const summary = engine.summarize();
logger.info(`Loaded ${summary.total} skills (max depth ${summary.maxDepth})`);
for (const s of summary.skills) {
  logger.info(`  - ${s.name} @ ${s.path}`);
}
