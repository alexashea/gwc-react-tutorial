#!/usr/bin/env node
import { argv } from 'node:process';

const lessonNumber: string = argv[2];

const isValidLessonNumber: boolean =
  Boolean(lessonNumber) &&
  !isNaN(Number(lessonNumber)) &&
  Number.isInteger(Number(lessonNumber)) &&
  Number(lessonNumber) > 0;

if (isValidLessonNumber) {
  console.log('test ' + lessonNumber + ' text');
} else {
  console.log('Invalid lesson number: ' + lessonNumber);
}
