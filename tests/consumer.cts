import * as api from '@lp-labs/ansi-stripper';
import { stripAnsi } from '@lp-labs/ansi-stripper';
console.log(stripAnsi('\u001b[31mred\u001b[0m'));
// @ts-expect-error invalid argument must be rejected by declarations
api.stripAnsi(5);
