const excludeFields = '-createdAt -__v -playId -url'
const pupData = [
  { path: 'genre', select: 'name' },
  { path: 'artist', select: 'name' },
]

const createModel = (model) => {
  return {
    async page(page = 1, limit = 1) {
      return await model
        .find({}, excludeFields)
        .skip(page * limit - limit)
        .limit(limit)
        .populate(pupData)
        .lean()
        .exec()
    },
    async findMany(filter) {
      return await model
        .find(filter, excludeFields)
        .populate(pupData)
        .lean()
        .exec()
    },
    async join(data) {
      const user = await this.findOne({ email: data.email }).lean().exec()
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
            score: { $meta: 'textScore' },
          }
        )
        .limit(limit)
        .populate(pupData)
        .select(excludeFields)
        .sort({ score: { $meta: 'textScore' } })
        .lean()
        .exec()
    },
    async findOne(id) {
      if (typeof id === 'string') {
        return await model
          .findById(id, excludeFields)
          .populate(pupData)
          .lean()
          .exec()
      }
      return await model
        .findOne(id, excludeFields)
        .populate(pupData)
        .lean()
        .exec()
    },
  }
}

export default createModel
