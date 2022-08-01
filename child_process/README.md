# child_process

## Asynchronous process creation
  * `exec`(command[, options][, callback])
  * `execFile`(file[, args][, options][, callback])
  * `fork`(modulePath[, args][, options])
  * `spawn`(command[, args][, options])


## Synchronous process creation
  * `execFileSync`(file[, args][, options])
  * `execSync`(command[, options])
  * `spawnSync`(command[, args][, options])

## Notes

- The `spawn()` method spawns the child process asynchronously, without blocking the Node.js event loop. The `spawnSync()` function provides equivalent functionality in a synchronous manner that blocks the event loop until the spawned process either exits or is terminated.

- The `execFile()` function is similar to `exec()` except that it does not spawn a shell by default. Rather, the specified executable file is spawned directly as a new process making it slightly more efficient than `exec()`.

 - The same options as `exec()` are supported. Since a shell is not spawned, behaviors such as I/O redirection and file globbing are not supported.

 - The `fork()` method is a special case of `spawn()` used specifically to spawn new Node.js processes. Like `spawn()`, a ChildProcess object is returned. The returned ChildProcess will have an additional communication channel built-in that **allows messages to be passed back and forth between the parent and child**.

 - The `maxBuffer` option specifies the largest number of bytes allowed on stdout or stderr. If this value is exceeded, then the child process is `terminated`.
