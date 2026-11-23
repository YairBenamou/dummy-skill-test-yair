---
name: kubernetes-deploy
description: Deploy and roll back services on Kubernetes clusters safely.
---

# Kubernetes Deploy Skill

Use for deployments, rollouts, and rollbacks.

## Safety rules

- Always `kubectl diff` (or server-side dry-run) before applying.
- Never edit live objects with `kubectl edit` in production.
- Confirm the target context (`kubectl config current-context`) matches the
  intended cluster before any mutating command.

## Standard rollout

```bash
kubectl apply -f manifests/
kubectl rollout status deploy/<name> --timeout=180s
```

## Rollback

```bash
kubectl rollout undo deploy/<name>
kubectl rollout history deploy/<name>   # verify revision
```

## Escalation

If a rollout stalls twice, stop and page the on-call instead of retrying.
