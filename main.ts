// Validated entry program for make.fun competition w40
import * as fs from 'node:fs';
import * as path from 'node:path';

const ENTRY_TEXT = "Cloudberry Falls: 16°C with soft overcast skies, crisp mint breezes, and a 90% chance your 9 AM status meeting gets canceled by email.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), `${ENTRY_TEXT}\n`, 'utf8');
