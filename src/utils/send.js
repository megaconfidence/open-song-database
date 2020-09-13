import omit from 'omit-deep-lodash'

const send = async (res, data) => {
  return res.json({ data: omit(data, '_id') })
}

export default send
