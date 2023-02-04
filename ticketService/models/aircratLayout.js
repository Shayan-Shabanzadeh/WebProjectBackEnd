// layout_id        SERIAL PRIMARY KEY,
//     type_id          VARCHAR NOT NULL REFERENCES aircraft_type ON DELETE CASCADE ON UPDATE CASCADE,
//     y_class_capacity INTEGER NOT NULL,
//     j_class_capacity INTEGER NOT NULL,
//     f_class_capacity INTEGER NOT NULL,

const { AircraftType } = require("../models");

module.exports = (sequelize, DataTypes) => {
  const AircraftLayout = sequelize.define("aircraft_layout", {
    y_class_capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    j_class_capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    f_class_capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });
  AircraftLayout.hasOne(AircraftType, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  });
  return AircraftType;
};
