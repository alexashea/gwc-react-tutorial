const intro = () => {
  console.log(
    "Introduction\n\n" +
      "This is an interactive tool to teach React, adapted from the official\n" +
      "React tutorial here:\n" +
      "https://reactjs.org/tutorial/tutorial.html\n\n" +
      'Type "npm run lesson1" into your console to start!\n\n' +
      'To see this introduction again, type "npm run intro" into your console.\n\n'
  );
};

const lesson1 = () => {
  console.log(
    "Lesson 1: What is React?\n\n" +
      "blahblahblah\n" +
      'You\'ll see a lot of "skipped" tests. Those will be important in later\n' +
      "lessons. For now, focus on the tests that are passing or failing.\n\n" +
      "When all your (non-skipped) tests are passing, start lesson 2 with\n" +
      '"npm run lesson2"!\n\n' +
      'To see these instructions again, run "npm run lesson1:instr".\n' +
      'To see run just the tests, run "npm run lesson1:test" instead.\n' +
      'To do both, use "npm run lesson1".\n\n\n\n' +
      "(All this extra space is here because the test runner wipes it in VS Code.)\n"
  );
};

const lesson2 = () => {
  console.log(
    "Lesson 2: What is React?\n\n" +
      "blahblahblah\n" +
      'When you\'re ready to move on, run "npm run lesson3".\n\n' +
      "To run this again, use see these instructions again, use\n" +
      '"npm run lesson2", "npm run lesson2:instr", or "npm run lesson2:test".\n\n\n\n\n'
  );
};

module.exports = {
  intro,
  lesson1,
  lesson2,
};
