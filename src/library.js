class UsedClass {}

class UnusedClass {
  constructor() {
    this.name = 'UnusedClass'
  }
}

const unusedVariable = new UnusedClass();



export { UsedClass };
