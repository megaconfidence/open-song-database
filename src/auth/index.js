const auth = (req, res, next) => {
  // console.log('auth', req.params)
  req.token = req.params
  next()
}

export default auth
