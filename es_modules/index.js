import Name from './module.js';
import { test } from './module.js';
import * as All from './module.js'
import asyncFunc from './async_module.js'


Name();

const text = await asyncFunc();

console.log(text);

test();

All.test();
All.default();
