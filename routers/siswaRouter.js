const express = require ('express');
const router = express.Router();
const siswaRouterService = require ('../service/siswaRouterService');

router.get ('/api/siswa', async function (req, res, next){
    try{
        res.json(await siswaRouterService.getMultiple(req.query.page));
    } catch (err){
        console.error('Error mengambil data',err.massage);
        next(err)
    }
})
module.exports = router