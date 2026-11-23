export interface SkillEntry {
  name: string;
  path: string;
  depth: number;
}

export interface EngineSummary {
  total: number;
  maxDepth: number;
  skills: SkillEntry[];
}

export class SkillEngine {
  private skills: SkillEntry[] = [];

  register(skill: SkillEntry): void {
    if (this.skills.some((s) => s.name === skill.name)) {
      throw new Error(`Duplicate skill name: ${skill.name}`);
    }
    if (skill.depth < 0) {
      throw new Error(`Invalid depth for skill ${skill.name}`);
    }
    this.skills.push(skill);
  }

  find(name: string): SkillEntry | undefined {
    return this.skills.find((s) => s.name === name);
  }

  summarize(): EngineSummary {
    return {
      total: this.skills.length,
      maxDepth: this.skills.reduce((max, s) => Math.max(max, s.depth), 0),
      skills: [...this.skills].sort((a, b) => a.depth - b.depth),
    };
  }
}
