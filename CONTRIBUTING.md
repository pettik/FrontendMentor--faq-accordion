# Contributing

## Commit scope

Keep each commit focused on one outcome that can be reviewed or reverted on its own:

- Group HTML, CSS, and JavaScript changes when they implement the same behavior, such as synchronizing an accordion's visibility and accessibility state.
- Separate unrelated goals, such as a layout adjustment and a documentation update, even when they affect the same file.
- Avoid splitting a working change into repeated single-file commits that leave related behavior incomplete.

Before committing, review `git diff` and run `git diff --check`. For JavaScript changes, run `node --check assets/js/script.js` and check the affected interaction in a browser. For documentation, check heading anchors, local paths, and links.

## Commit messages

Start the subject with an action and describe the resulting behavior or purpose. Add a short body when the reason for a change is not clear from the subject.

Examples:

- `Add responsive FAQ layout`
- `Synchronize accordion visibility and ARIA state`
- `Respect reduced-motion preferences in FAQ transitions`
- `Document FAQ implementation and learning outcomes`

Avoid subjects such as `Update style.css`, `Update script.js`, `css`, or `Add files via upload`, because they name a file or action without explaining the change.
