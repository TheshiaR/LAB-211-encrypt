const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const User = sequelize.define(
	'user',
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                is: {
                    args: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    msg: "Error: Wrong email format."
                }
            }
        },
        phone: {
			type: DataTypes.INTEGER,
        },
        role: {
            type: DataTypes.INTEGER,
            
        }
    },
        {
        timestamps: false,
		},
    
)

module.exports = User
