var fysxaki = function () {

  function chunk(array, size = 1) {
    let resultAry = []
    let itemAry = []
    let count = 0

    for (let i = 0; i < array.length; i++) {
        count++
        if (count <= size) {
            itemAry.push(array[i])
        } else if (count > size) {
            count = 0
            resultAry.push(itemAry.slice())
            itemAry = []
            itemAry.push(array[i])
        }
    }

    if (itemAry.length) {
        resultAry.push(itemAry.slice())
    }

    return resultAry
  }

  function add(a, b) {
    return a + b
  }
  return {
    chunk,
    add,
  }
}()
