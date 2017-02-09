/* @flow */

import {getPackageVersion, runInstall} from '../_helpers.js';
import * as fs from '../../../src/util/fs.js';

const assert = require('assert');
const path = require('path');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;

test.concurrent('install hoister should prioritise popular transitive dependencies', (): Promise<void> => {
  return runInstall({}, 'install-should-prioritise-popular-transitive', async (config) => {
    assert.equal(await getPackageVersion(config, 'b'), '0.0.1');
    assert.equal(await getPackageVersion(config, 'a/b'), '0.0.0');
  });
});
