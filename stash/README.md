# `git stash`

 * `push` or `git stash` - Save your local modifications to a new stash entry and roll them back to HEAD (in the working tree and in the index). The `<message>` part is optional and gives the description along with the stashed state.
 * `list` -  List the stash entries that you currently have
 * `show` - Show the changes recorded in the stash entry as a diff between the stashed contents and the commit back when the stash entry was first created.
 * `drop` - Remove a single stash entry from the list of stash entries.
 * `pop` - Remove a single stashed state from the stash list and apply it on top of the current working tree state.
 * `apply` - Like `pop`, but do not remove the state from the stash list.
 * `branch` Creates and checks out a new branch named `<branchname>` starting from the commit at which the `<stash>` was originally created, applies the changes recorded in `<stash>` to the new working tree and index.
 * `clear` - Remove all the stash entries.
 * `create` - Create a stash entry (which is a regular commit object) and return its object name, without storing it anywhere in the ref namespace. This is intended to be useful for scripts. `It is probably not the command you want to use`. see "push" above.
 * `store` - Store a given stash created via `git stash create` (which is a dangling merge commit) in the stash ref, updating the stash reflog.

 # Useful options
 * `-a --all` - This option is only valid for push and save commands. All ignored and untracked files are also stashed and then cleaned up with `git clean`.
 * `-u --include-untracked` - When used with the `push` and `save` commands, all untracked files are also stashed and then cleaned up with `git clean`.
 * `--only-untracked` - This option is only valid for the `show` command.
