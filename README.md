# devops-practice

A tiny Node.js app (`src/index.js` exports `add(a, b)`) used to practice CI with GitHub Actions.

## Run locally

Requires Node.js 18.18+ (CI uses Node 20).

```bash
npm ci          # install exact dependencies from package-lock.json
npm run lint    # ESLint
npm test        # Node's built-in test runner (node --test)
```

## CI

`.github/workflows/ci.yml` runs on every push and pull request to `main`:

1. Checkout
2. Set up Node.js 20 (with npm cache)
3. `npm ci`
4. `npm run lint`
5. `npm test`

The job fails if any step fails. There is no deployment stage.
# testing_repo_for_claude
