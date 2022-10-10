const dummyFunction = async () => {
  throw new Error('Dummy function error!');
};

const somePromise = async () => {
  return new Promise((resolve, reject) => {
    resolve('First call');
    resolve('Swallowed resolve');
    reject(new Error('Swallowed reject'));
  });
}


process.on('uncaughtException', async (err, origin) => { // this will be triggered in case of uncaught error
  console.log('Event was triggered by:', err);


  try {
    await dummyFunction().catch(er => console.log(er));

    throw new Error('This error occurred inside try catch block!')
  } catch(error) {
    console.log('Try/catch block error: ')
  }
});process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason);
  // Application specific logging, throwing an error, or other logic here
});

somePromise().then((res) => {
  return reportToUser(JSON.pasre(res)); // Note the typo (`pasre`)
}); // No `.catch()` or `.then()`


throw new Error('this is global uncaught error!');


