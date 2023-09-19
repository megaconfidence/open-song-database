import omit from 'omit-deep-lodash'

const send = async (res, data) => {
  const payload = JSON.parse(JSON.stringify(data)) // eliminamtes bson objects
  return res.json({ data: omit(payload, ['_id', 'cover']) })
}

export default send
