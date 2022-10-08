import { memoryUsage } from 'node:process';
import { PerformanceObserver, performance } from 'node:perf_hooks';

console.log(memoryUsage());

const obs = new PerformanceObserver((list, observer) => {
  // Called once asynchronously. `list` contains three items.
  console.log(list)
});
obs.observe({ type: 'mark' });

for (let n = 0; n < 3; n++)
  setTimeout(() => {
    performance.mark(`test${n}`)
    performance.measure('tesasdft', `test${n}`)
  }, 1000 * n)
