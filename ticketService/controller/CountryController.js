const express = require('express');
const CountryService = require('../service/countryService');

const CountryRouter = express.Router();

CountryRouter.get('/',async (req,res,next)=>{
	try {
		const result = await CountryService.getCountries();
		res.status(200).json({
			msg: 'success',
			data: result
		})
	}catch (e) {
		next(e)
	}
})

module.exports = CountryRouter;