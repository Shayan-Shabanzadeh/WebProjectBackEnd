// const { AircraftLayout } = require("../models");

module.exports = (sequelize, DataTypes) => {
  const AircraftType = sequelize.define("aircraft_type", {
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    series: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    {
        // additional options, like classMethods in which you could create the association
        classMethods: {
            associate: function(models) {
                this.belongsTo(models.Model);
                this.hasMany(models.Model);
            }
        }
    },
  });

  return AircraftType;
};
