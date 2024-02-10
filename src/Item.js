class Meal {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2) // 16 will make it hexadecimal and takes out "0."
    this.name = name
    this.calories = calories
  }
}

class Workout {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2)
    this.name = name
    this.calories = calories
  }
}

export { Meal, Workout }
