import { test } from "node:test";
import assert from "node:assert/strict";
import { SkillEngine } from "../src/core/engine.js";

test("registers and summarizes skills", () => {
  const engine = new SkillEngine();
  engine.register({ name: "a", path: "skills/a", depth: 1 });
  engine.register({ name: "b", path: "skills/x/y/b", depth: 3 });

  const summary = engine.summarize();
  assert.equal(summary.total, 2);
  assert.equal(summary.maxDepth, 3);
  assert.equal(summary.skills[0].name, "a");
});

test("rejects duplicate names", () => {
  const engine = new SkillEngine();
  engine.register({ name: "dup", path: "skills/dup", depth: 1 });
  assert.throws(() => engine.register({ name: "dup", path: "other", depth: 1 }));
});

test("find returns undefined for unknown skill", () => {
  const engine = new SkillEngine();
  assert.equal(engine.find("nope"), undefined);
});
