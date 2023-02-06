const express = require('express');
const cityService = require('../service/cityService');
const CityRouter = express.Router();

CityRouter.get('/:country_name',async (req,res,next)=>{
	try {
		const result = await cityService.getCitiesByCountry(
			req.params.country_name
		);
		res.status(200).json({
			msg: 'success',
			data: result
		})
	}catch (e){
		next(e)
	}
})

module.exports = CityRouter;
