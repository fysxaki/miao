var fysxaki = function() {

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

    for (let item of array) {
        if (item === false | item === null | item === 0 | item === "" | item === undefined)
        { continue }

        if (!isNaN(item)) { // 这个用!!item == item 判断是否NaN,===与==的结果不同,===的结果均为false.
          ary.push(item)//必须放在后面
        }
    }
    return ary
  }

  function fill(array, value, start = 0, end = array.length) {

    var ary = []

    if (start == 0 && end == array.length) {
      for (let i = 0; i < array.length; i++) {
        ary.push(value)
      }
    } else {
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

    if (n == 1) {

          for (let i = 1; i < array.length; i++) {
            ary.push(array[i])
              }

      } else {

          for (let i = n; i < array.length; i++) {
            ary.push(array[i])
          }
      }
    return ary
  }


  function findIndex(array, finder, fromindex = 0) {

    if (typeof finder == 'string') {
      var originFinder = finder
      finder = it => it[originFinder]
    }
    if (Array.isArray(finder)) { //['user','fred']
      var originFinder = finder
      finder = it => it[originFinder[0] === finder[1]]
    }
    if (typeof finder == 'object') {
      var originFinder = finder
      finder = it => isMatch[it, originFinder]
    }
    for (var i = fromindex; i < array.length; i++) {
      if (finder(array[i])) {
        return i
      }
    }
      return -1
  }

  function filter(array, test) {
    if (typeof finder == 'string') {
      var originFinder = finder
      finder = it => it[originFinder]
    }
    if (Array.isArray(finder)) { //['user','fred']
      var originFinder = finder
      finder = it => it[originFinder[0] === finder[1]]
    }
    if (typeof finder == 'object') {
      var originFinder = finder
      finder = it => isMatch[it, originFinder]
    }
  }

  function isMatch(obj, target) {
    for (var key in target) {
      if (key in obj) {
        if (obj[key] !== target[key]) {
          return false
        } else {
          return false
        }
      }
    }
    return true
  }


  function findLastIndex() { }

  function flatten() { }

  function flattenDeep() { }

  function flattenDepth() { }

  //辅助函数

  function isNaN(value) {
    if (typeof value === "number") {
        return (value !== value)
    } else if ((typeof value === "object") && (value)) {
        return ((Object.getPrototypeOf(value) === Number.prototype) && (value.toString() === "NaN"))
    } else {
        return false
    }
}

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
    isNaN,//只接受数据类型的NaN,其他均为false.
}


}()
