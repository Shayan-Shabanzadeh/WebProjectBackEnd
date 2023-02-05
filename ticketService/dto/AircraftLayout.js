class AircraftLayout{
	layout_id;
	y_class_capacity;
	j_class_capacity;
	f_class_capacity;

	constructor(data) {
		this.layout_id = data.layout_id;
		this.y_class_capacity = data.y_class_capacity;
		this.f_class_capacity = data.f_class_capacity;
		this.j_class_capacity = data.j_class_capacity
	}
}

module.exports = AircraftLayout;