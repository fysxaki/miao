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

  function findIndex(array, predicate, fromIndex = 0) {
    predicate = iteratee(predicate)

    for (var i = fromIndex; i < array.length; i++) {
      if (predicate(array[i])) {
        return i
      }
    }
    return -1
  }

  function iteratee(predicate) {
    if (typeof predicate == 'function') {
      return predicate
    }
    if (typeof predicate == 'string') {
      return  property(predicate)
    }
    if (Array.isArray(predicate)) { //['user', 'fred']
      return  matchesProperty(predicate)
    }
    if (typeof predicate == 'object') {
      return  matches(predicate)
    }
  }

  function isMatch(obj, target) {
    for (var key in target) {
      if (key in obj) {
        if (obj[key] !== target[key]) {
          return false
        }
      } else {
        return false
      }
    }
    return true
  }

  function filter(array, predicate) {
    predicate = iteratee(predicate)

    var result = []
    for (var i = 0; i < array.length; i++) {
      if (predicate(array[i], i, array)) {
        result.push(array[i])
      }
    }
    return result
  }

  //返回一个获取某对象proName属性的函数
  function property(propName) {
    return function (obj) {
      return obj[propName]
    }
  }

  // 返回一个判断对象[是否匹配pair名值对]的函数
  function matchesProperty(pair) {
    var [key, val] = pair
    return function (obj) {
      return obj[key] === val
    }
  }

  function matches(target) {
    return function (obj) {
      return isMatch(obj, target)
    }
  }

  function isNaN(value) {
    if (typeof value === "number") {
        return (value !== value)
    } else if ((typeof value === "object") && (value)) {
        return ((Object.getPrototypeOf(value) === Number.prototype) && (value.toString() === "NaN"))
    } else {
        return false
    }
}

  function findLastIndex() { }

  function flatten() { }

  function flattenDeep() { }

  function flattenDepth() { }

  return {
    add,
    compact,//紧凑的
    chunk,//块
    fill,//替换其中的元素
    drop,//是slice的子集
    findIndex,
    filter,
    iteratee,
    matches,
    property,
    matchesProperty,
    isNaN,//只接受数据类型的NaN,其他均为false.
    findLastIndex,//等会写
    flatten,//等会写
    flattenDeep,//等会写
    flattenDepth,//等会写
}

}()
