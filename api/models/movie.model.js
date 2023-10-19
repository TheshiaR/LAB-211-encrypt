const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Movie = sequelize.define(
	'movie',
	{
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		year: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        director: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        duration: {
			type: DataTypes.STRING,
            allowNull: false,
        },
        genre: {
            type: DataTypes.STRING,
        },
        rate: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.STRING,
		},
    },
    {timestamps: false}
)

module.exports = Movie