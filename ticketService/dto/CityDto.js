class CityDto {
	city_name;
	timezone_name;
	country_name;
	constructor(data) {
		this.city_name = data.city_name;
		this.country_name = data.country_name;
		this.timezone_name = data.timezone_name
	}
}

module.exports = CityDto