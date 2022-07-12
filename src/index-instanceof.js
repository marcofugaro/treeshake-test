import * as THREE from 'three'

// desired output: SplineCurve shouldn't be included in the bundle

class TestWebGLRenderer {
  constructor(argument) {
    // ❌ fails
    // if (argument instanceof THREE.SplineCurve) {
    //   console.log('something')
    // }

    // ✅ passes
    if (argument.isSplineCurve) {
      console.log('something')
    }
  }
}

const test = new THREE.Vector3()
console.log(new TestWebGLRenderer(test))