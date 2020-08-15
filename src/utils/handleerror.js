const handleError = func => (req, res, next) => {
  return func(req, res, next).catch(error => next(error))
}

export default handleError
