const excludeFields = '-createdAt -__v'

const createModel = model => {
  return {
    async page(page, limit) {
      return await model
        .find()
        .skip(page * limit - limit)
        .limit(limit)
    },
    async findMany(filter, pupData='') {
      return await model
        .find(filter, excludeFields)
        .populate(pupData)
        .lean()
    },
    async search(query, limit) {
      return await model
        .find(
          { $text: { $search: query } },
          {
            score: { $meta: 'textScore' }
          }
        )
        .limit(limit)
        .sort({ score: { $meta: 'textScore' } })
    },
    async findOne(id, pupData='') {
      return await model
        .findById(id, excludeFields)
        .populate(pupData)
        .lean()
    }
  }
}

export default createModel
