import { CountUp } from 'countup.js';

const options = {
  duration: 0.5,
  useEasing: false,
  useGrouping: false,
  separator: '',
  decimal: '',
  enableScrollSpy: true,
  scrollSpyOnce: true,
  scrollSpyDelay: 0
};

let umk = new CountUp('umk', 10, options);
if (!umk.error) {
  umk.start();
} else {
  console.error(umk.error);
}

let school = new CountUp('school', 20, options);
if (!school.error) {
  school.start();
} else {
  console.error(school.error);
}

let teacher = new CountUp('teacher', 100, options);
if (!teacher.error) {
  teacher.start();
} else {
  console.error(teacher.error);
}

let children = new CountUp('children', 10000, options);
if (!children.error) {
  children.start();
} else {
  console.error(children.error);
}

