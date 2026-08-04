## Consuming the Package

Add a `.npmrc` to your project:

```ini
@rakutenrewards:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PAT
```

> The PAT needs `read:packages` scope.

Install:

```bash
npm install @rakutenrewards/standdown-poc
```

Use:

```tsx
import { StanddownExample } from "@rakutenrewards/standdown-poc";

<StanddownExample title="Hello" description="World" />
```

---

## Triggering a Release

1. Go to **GitHub → Actions → Release and Publish**
2. Click **Run workflow**
3. Enter a version (e.g. `1.2.3`) and click **Run**

This will bump `package.json`, create a git tag, publish a GitHub Release, and push the package to GitHub Packages.
