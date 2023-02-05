const Sequelize = require("sequelize");
const logger = require("../utils/Logger");
const {DataTypes} = Sequelize;
const dotenv = require("dotenv");

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASS;
const url = process.env.DB_URL;
const port = process.env.DB_PORT;
const name = process.env.DB_NAME;
const db =
    "postgres://" +
    username +
    ":" +
    password +
    "@" +
    url +
    ":" +
    port +
    "/" +
    name;
const sequelize = new Sequelize(db, {
    logging: false,
});

const AircraftType = sequelize.define(
    "aircraft_type",
    {
        type_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
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
    },
    {
        timestamps: false,
        freezeTableName: true,
    }
);

const AircraftLayout = sequelize.define(
    "aircraft_layout",
    {
        layout_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        y_class_capacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                allowNull: false,
                unique: true,
                notEmpty: true,
            },
        },
        j_class_capacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                allowNull: false,
                unique: true,
                notEmpty: true,
            },
        },
        f_class_capacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                allowNull: false,
                unique: true,
                notEmpty: true,
            },
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
    }
);

const AirCraft = sequelize.define(
    "aircraft",
    {
        registration: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
    }
);

const Airport = sequelize.define(
    "airport",
    {
        iata_code: {
            type: DataTypes.STRING,
            primaryKey: true,
        },

        airport_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
    }
);

const Country = sequelize.define(
    "country",
    {
        country_name: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
    }
);

const City = sequelize.define(
    "city",
    {
        city_name: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        timezone_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
    }
);

const Flight = sequelize.define(
    "flight",
    {
        flight_serial: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        flight_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        departure_utc: {
            type: "TIMESTAMP",
            allowNull: false,
        },
        duration: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        y_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        j_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        f_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
    }
);

const Purchase = sequelize.define(
    "purchase",
    {
        corresponding_user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        title: {
            type: DataTypes.STRING,
        },
        first_name: {
            type: DataTypes.STRING,
        },
        last_name: {
            type: DataTypes.STRING,
        },
        flight_serial: {
            type: DataTypes.INTEGER,
        },
        offer_price: {
            type: DataTypes.INTEGER,
        },
        offer_class: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
    }
);

//https://sebhastian.com/sequelize-foreign-key/
// todo check it
Airport.hasOne(Country, {
    foreignKey: {name: "country_name", allowNull: false},
});

Airport.hasOne(City, {
    foreignKey: {name: "city_name", allowNull: false},
});

Flight.hasOne(City);

Flight.hasOne(City);

Flight.hasOne(AirCraft);

City.hasOne(Country, {
    foreignKey: {name: "country_name", allowNull: false, unique: true},
});

AircraftLayout.hasOne(AircraftType, {
    foreignKey: {name: "type_id", allowNull: false},
});

AirCraft.hasOne(AircraftLayout, {
    foreignKey: {name: "layout_id", allowNull: false},
});

// Country.hasMany(Airport, {
//     foreignKey: {name: "country_name", allowNull: false},
// });
//
// City.hasMany(Airport, {
//     foreignKey: {name: "city_name", allowNull: false},
// });
//
// City.hasMany(Flight, {
//     foreignKey: {name: "origin", allowNull: false},
// });
//
// City.hasMany(Flight, {
//     foreignKey: {name: "destination", allowNull: false},
// });
//
// Country.hasMany(City, {
//     foreignKey: {name: "country_name", allowNull: false, unique: true},
// });
//
// AircraftType.hasMany(AircraftLayout, {
//     foreignKey: {name: "type_id", allowNull: false},
// });
//
// AirCraft.hasMany(AircraftLayout, {
//     foreignKey: {name: "layout_id", allowNull: false},
// });

const init_db = async () => {
    try {
        await sequelize.authenticate();
        logger.info("Connection has been established successfully.");
    } catch (error) {
        logger.error("Unable to connect to the database:", error);
    }
    // sequelize.drop();
    sequelize
        .sync({
            alert: true,
        })
        .then(() => {
            logger.info("All tables has been created successfully.");
        })
        .catch((err) => {
            console.log(err);
            logger.error("Unable to create tables", err);
        });
};

module.exports = {init_db, sequelize, AircraftLayout, AircraftType, AirCraft, Airport, Country, City, Flight, Purchase};
