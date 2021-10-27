const express = require('express')

const { controllerWrapper, validation, authenticate } = require('../../middlewares')
const { joiSchema } = require('../../models/contacts')
const { contacts: ctrl } = require('../../controllers')

const router = express.Router()

router.get('/', authenticate, controllerWrapper(ctrl.listContacts))

router.get('/:id', authenticate, controllerWrapper(ctrl.getContactById))

router.post('/', authenticate, validation(joiSchema), controllerWrapper(ctrl.addContact))

router.put('/:id', authenticate, validation(joiSchema), controllerWrapper(ctrl.updateById))

router.patch('/:id', authenticate, controllerWrapper(ctrl.updateStatusContact))

router.delete('/:id', authenticate, controllerWrapper(ctrl.removeContact))

module.exports = router
