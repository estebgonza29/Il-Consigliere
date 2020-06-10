const { Router } = require('express');
const EmailController = require('../controllers/EmailController');

const router = Router();

router.get('/:cedula', EmailController.getEmails);
router.post('/:cedula', EmailController.store);
router.delete('/', EmailController.remove);

module.exports = router;