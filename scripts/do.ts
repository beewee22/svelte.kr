import { get_task,get_target } from './helpers';

const task = get_task();
const target = get_target();

task(target);