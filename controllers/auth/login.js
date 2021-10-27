const { Unauthorized } = require('http-errors')
const jwt = require('jsonwebtoken')
// const bcrypt = require('bcryptjs')

const { User } = require('../../models')

const { SECRET_KEY } = process.env

const login = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user || !user.comparePassword(password)) {
    throw new Unauthorized('Email or password is wrong')
  }

  //   if (!user) {
  //     throw new Unauthorized('Email is wrong')
  //   }

  //   if (!user.comparePassword(password)) {
  //     throw new Unauthorized('Password is wrong')
  //   }

  //   const isCorrectPassword = bcrypt.compareSync(password, user.password)
  //   if (!isCorrectPassword) {
  //     throw new Unauthorized('Password is wrong')
  //   }

  const payload = {
    id: user._id
  }

  const token = jwt.sign(payload, SECRET_KEY)
  //   console.log(token)
  await User.findByIdAndUpdate(user._id, { token })

  res.json({
    status: 'success',
    code: 200,
    data: {
      token,
      user
    }
  })
}

module.exports = login
