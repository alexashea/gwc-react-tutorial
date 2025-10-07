#!/usr/bin/env node
import { argv } from 'node:process';

const lessonNumber = argv[2];

const isValidLesson =
  lessonNumber &&
  !isNaN(lessonNumber) &&
  Number.isInteger(Number(lessonNumber)) &&
  lessonNumber > 0;

if (!isValidLesson) {
  console.log('Invalid lesson number: ' + lessonNumber);
} else {
  console.log('test ' + lessonNumber + ' text');
}
