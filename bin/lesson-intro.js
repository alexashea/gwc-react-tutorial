#!/usr/bin/env node
import os from 'os';
import readline from 'node:readline';
import { argv, stdin, stdout } from 'node:process';
import lessonText from '../lessonText.json' with { type: 'json' };

const EOL = os.EOL;

const lessonNumber = argv[2];

const isValidLesson =
  lessonNumber &&
  !isNaN(lessonNumber) &&
  Number.isInteger(Number(lessonNumber)) &&
  lessonNumber > 0 &&
  lessonNumber <= Object.keys(lessonText).length;

if (!isValidLesson) {
  console.log('Invalid lesson number: ' + lessonNumber);
} else {
  console.log(lessonText[lessonNumber].join(EOL));

  const rl = readline.createInterface({
    input: stdin,
    output: stdout
  });

  rl.question('Press Enter or Return to continue to the tests.' + EOL, () => {
    rl.close();
  });
}
