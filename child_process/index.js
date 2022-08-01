const util = require('node:util');
const { spawn, exec, execFile } = require('node:child_process');
const { resolve } = require('node:path');
const controller = new AbortController();
const ls = spawn('ls', ['-lh', '/usr']);
const execPromise = util.promisify(require('node:child_process').exec);

const { signal } = controller;

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

exec(`${__dirname}/test.sh`, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(stdout);
});



async function lsExample() {
  const { stdout, stderr } = await execPromise('ls');
  console.log('stdout:', stdout);
  console.error('stderr:', stderr);
}
lsExample();


const abortTest = async () => {
  return new Promise((resolve) => {
    const child = exec('grep ssh', { signal }, (error) => {
      console.log('error', error); // an AbortError
      resolve('done');
    });

    controller.abort();
  })
}

abortTest();

const child = execFile('ls', [], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});


