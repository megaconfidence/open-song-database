const asyncMap = async (array, callback) => {
  const arr = []
  for (let index = 0; index < array.length; index++) {
    const val = await callback(array[index], index, array)
    arr.push(val)
  }
  return arr
}

export default asyncMap
