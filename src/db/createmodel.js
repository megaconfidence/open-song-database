const excludeFields = '-createdAt -__v -playId -url'
const pupData = [
  { path: 'genre', select: 'name' },
  { path: 'artist', select: 'name' }
]

const createModel = model => {
  return {
    async page(page = 1, limit = 1) {
      return await model
        .find({}, excludeFields)
        .skip(page * limit - limit)
        .limit(limit)
        .populate(pupData)
        .lean()
    },
    async findMany(filter) {
      return await model
        .find(filter, excludeFields)
        .populate(pupData)
        .lean()
    },
    async join(data) {
      const user = await this.findOne({ email: data.email })
      if (!user) {
        return await model.create(data)
      }
      return user
    },
    async search(query, limit = 1) {
      return await model
        .find(
          { $text: { $search: query } },
          {
            score: { $meta: 'textScore' }
          }
        )
        .limit(limit)
        .populate(pupData)
        .select(excludeFields)
        .sort({ score: { $meta: 'textScore' } })
    },
    async findOne(id) {
      if (typeof id === 'string') {
        return await model
          .findById(id, excludeFields)
          .populate(pupData)
          .lean()
      }
      return await model
        .findOne(id, excludeFields)
        .populate(pupData)
        .lean()
    }
  }
}

export default createModel
// return await model.aggregate([
//   { $match: { $text: { $search: query } } },
//   { $limit: limit },
//   {
//     $sort: {
//       score: { $meta: 'textScore' }
//     }
//   },
//   { $project: { createdAt: 0, __v: 0, playId: 0, url: 0 } }
// ])
