const {DataTypes} = require("sequelize");
const instance = require("../connection");

const account = instance.sequelize.define("accounts",{
    id:{
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey:true,
        allowNull: false
      },
      uuid:{
        type: DataTypes.STRING,
        allowNull:false
      },
      username:{
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
      },
      password:{
        type: DataTypes.STRING,
        allowNull:false
      }
      
    },{
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        tableName:"accounts"
    }
)

exports.model = account;