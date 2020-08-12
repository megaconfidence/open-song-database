const excludeFields = '-createdAt -__v -playId -url'
const pupData = { path: 'genre', select: 'name' }

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
    async search(query, limit = 1) {
      return await model
        .find(
          { $text: { $search: query } },
          {
            score: { $meta: 'textScore' }
          }
        )
        .limit(limit)
        .select(excludeFields)
        .sort({ score: { $meta: 'textScore' } })
    },
    async findOne(id) {
      return await model
        .findById(id, excludeFields)
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
