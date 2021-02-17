class UsedClass {}

class UnusedClass {}
UnusedClass.prototype.type = 'UnusedClass'

console.log(new UsedClass())