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

  function compact(array) {
    var ary = []
    for (let lll of array) {
      if (lll === false | lll === null | lll === 0 | lll === "" | lll === undefined) { continue }
      if (!!lll !== lll) {
        ary.push(lll)//必须放在后面
      }
    }
    return ary
  }

  function fill(array, value, start = 0, end = array.length) {

    var ary = []

    if (start == 0 && end == array.length)
      for (let i = 0; i < array.length; i++) {
        ary.push(value)
      }
    else {
      for (let i = 0; i < start; i++) {
        ary.push(array[i])
      }
      for (let i = start; i < end; i++) {
        ary.push(value)
      }
      for (let i = end; i < array.length; i++) {
        ary.push(array[i])
      }
    }
    return ary
  }

  function drop(array, n = 1) {
    var ary = []

    if (n == 1)
      for (let i = 1; i < array.length; i++) {
        ary.push(array[i])
      }
    else
      for (let i = n; i < array.length; i++) {
        ary.push(array[i])
      }
    return ary
  }

  function findIndex(xx) { }

  function findLastIndex(xx) { }

  function flatten(xx) { }

  function flattenDeep(xx) { }

  function flattenDepth(xx) { }




  return {
    add,
    compact,//紧凑的
    chunk,//块
    fill,//替换其中的元素
    drop,//是slice的子集
    findIndex,//等会写
    findLastIndex,//等会写
    flatten,//等会写
    flattenDeep,//等会写
    flattenDepth,//等会写
  }
}()
