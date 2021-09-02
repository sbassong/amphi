const {Item} = require('../models/item')

//createEvent
const addItem = async (req, res) => {
  try {
    const item = await new Item(req.body)
    await item.save()
    return res.status(200).send(item)
  } catch (error) {
    console.log(error)
  }
}

const deleteItem = (req, res) => {
  Item.deleteOne({_id: req.params.id}, (err) => {
    if (err) console.log(err)
    console.log('successfully deleted item from cart!')
  })
}

module.exports = {
  addItem,
  deleteItem
}