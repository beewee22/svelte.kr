import * as sh from "shelljs"
import targets from "./targets"
import * as task from "./tasks"

const error = (msg, exit = true) => {
  console.log("ERROR: " + msg)
  if (exit) {
    sh.exit(1)
  }
}

const get_task = () => {
  const name = process.argv[2]

  if (name === undefined) {
    error("task is not provided!")
  }

  for (const item in task) {
    if (name === item.toString()) {
      return task[item]
    }
  }

  error(`Unknown task ${name}`)
}

const get_target = () => {
  const name = process.argv[3]

  if (name === undefined) {
    error("target name is not provided!")
  }

  const result = targets.find(obj => {
    return obj.name === name
  })

  if (result === undefined) {
    error(`Unknown target ${name}`)
  }

  return result
}

export { get_task, get_target, error }
