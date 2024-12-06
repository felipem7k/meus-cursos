import './utils/array-helper.js';
import { notaService as service } from "./nota/service.js";
import { debounceTime, partialize, pipe, takeUntil } from './utils/operators.js';
import { delay, retry, timeoutPromise } from './utils/promise-helpers.js';

const operations = pipe(
    partialize(takeUntil, 3),
    partialize(debounceTime, 500)
);

const action = operations(() => 
    retry(3, 3000, () => timeoutPromise(200, service.sumItems("2143")))
    .then(console.log)
    .catch(console.error)
);

document
.querySelector("#myButton")
.onclick = action;
