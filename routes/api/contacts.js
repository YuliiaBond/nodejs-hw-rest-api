const express = require('express')

const { controllerWrapper, validation } = require('../../middlewares')
const { contactSchema } = require('../../schemas')
const { contacts: ctrl } = require('../../controllers')
const { validate } = require('../../schemas/contact')

const router = express.Router()

router.get('/', controllerWrapper(ctrl.listContacts))

router.get('/:id', controllerWrapper(ctrl.getContactById))

router.post('/', validation(contactSchema), controllerWrapper(ctrl.addContact))

router.put('/:id', validation(contactSchema), controllerWrapper(ctrl.updateById))

router.delete('/:id', controllerWrapper(ctrl.removeContact))

module.exports = router
