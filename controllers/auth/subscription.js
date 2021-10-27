const { BadRequest, NotFound } = require('http-errors')

const { User } = require('../../models')

const subscription = async (req, res) => {
  const { _id } = req.user
  const { subscription } = req.body
  if (subscription !== 'starter' && subscription !== 'pro' && subscription !== 'business') {
    throw new BadRequest('Invalid subscription')
  }
  const result = await User.findByIdAndUpdate(_id, { subscription }, { new: true })

  if (!result) {
    throw new NotFound('User not found')
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  })
}

module.exports = subscription
