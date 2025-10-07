#!/usr/bin/env node
import os from 'os';
import readline, { Interface } from 'node:readline';
import { argv, stdin, stdout } from 'node:process';
import untypedLessonText from '../lessonText.json' with { type: 'json' };

const lessonText: { [key: string]: string[] } = untypedLessonText;
const EOL: string = os.EOL;

const lessonNumber: string = argv[2];

const isValidLessonNumber: boolean =
  Boolean(lessonNumber) &&
  !isNaN(Number(lessonNumber)) &&
  Number.isInteger(Number(lessonNumber)) &&
  Number(lessonNumber) > 0 &&
  Number(lessonNumber) <= Object.keys(lessonText).length;

if (isValidLessonNumber) {
  const currentLessonText: string[] = lessonText[lessonNumber];
  console.log(currentLessonText.join(EOL));

  const rl: Interface = readline.createInterface({
    input: stdin,
    output: stdout
  });

  rl.question('Press Enter or Return to continue to the tests.' + EOL, () => {
    rl.close();
  });
} else {
  console.log('Invalid lesson number: ' + lessonNumber);
}
