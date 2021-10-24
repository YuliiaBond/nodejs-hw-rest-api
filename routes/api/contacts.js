const express = require('express')

const { controllerWrapper, validation } = require('../../middlewares')
const { joiSchema } = require('../../models/contacts')
const { contacts: ctrl } = require('../../controllers')

const router = express.Router()

// router.get('/', controllerWrapper(ctrl.listContacts))

// router.get('/:id', controllerWrapper(ctrl.getContactById))

router.post('/', validation(joiSchema), controllerWrapper(ctrl.addContact))

// router.put('/:id', validation(contactSchema), controllerWrapper(ctrl.updateById))

// router.delete('/:id', controllerWrapper(ctrl.removeContact))

module.exports = router
