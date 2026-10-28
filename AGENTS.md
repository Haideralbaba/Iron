<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Use separate TanStack content routes with a shared Arabic application shell and route-specific metadata.
- Keep training data in a versioned, Zod-validated device store hydrated in an effect; this product is explicitly offline and account-free.
- Keep volume, progression and coverage as pure functions with concrete unit tests; use the same functions in all screens.
- Exercise image rendering must use only verified source IDs with a source/license fallback.
