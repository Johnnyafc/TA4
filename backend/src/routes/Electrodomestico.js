const {Router}=require('express');
const router = Router();

const {getElectrodomesticos,getElectrodomestico,postElectrodomestico,putElectrodomestico,deleteElectrodomestico} = require ('../controllers/ElectControl.js');;

router.route('/')
    .get(getElectrodomesticos)
    .post(postElectrodomestico);

router.route('/:id')
    .get(getElectrodomestico)
    .put(putElectrodomestico)
    .delete(deleteElectrodomestico);

module.exports = router

