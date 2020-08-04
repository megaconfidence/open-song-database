const createModel = model => {
  return {
    async page(page, limit) {
      return await model
        .find()
        .skip(page * limit - limit)
        .limit(limit)
    },
    async findMany(filter) {
      return await model.find(filter)
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
    async findOne(id) {
      return await model.findById(id)
    }
  }
}

export default createModel
