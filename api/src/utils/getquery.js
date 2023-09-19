const getQuery = ({ page, limit, query }) => {
  /**
   * This function validates the page and limit
   * query params and sets their default value to 1.
   * The max value for limit is 20
   */
  let p = Number(page) || 1
  let l = Number(limit) || 1
  let q = query || ''
  
  p = p <= 0 ? 1 : p
  l = l <= 0 ? 1 : l > 20 ? 20 : l

  return [p, l, q]
}
export default getQuery
