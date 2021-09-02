const {Item} = require('../models/item')

//addItem
const addItem = async (req, res) => {
  try {
    const item = await new Item(req.body)
    await item.save()
    return res.status(200).send(item)
  } catch (error) {
    console.log(error)
  }
}

//deleteItem
const deleteItem = (req, res) => {
  Item.deleteOne({_id: req.params.id}, (err) => {
    if (err) console.log(err)
    console.log('successfully deleted item from cart!')
  })
}

//getItems
const getItems = async (req, res) => {
  try {
    const items = await Item.find()
    res.send(items)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  addItem,
  deleteItem,
  getItems
}