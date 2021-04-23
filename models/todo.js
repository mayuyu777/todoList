const {DataTypes} = require("sequelize");
const instance = require("../connection");

const todo = instance.sequelize.define("todos",{
    todo_id:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      uuid:{
        type: DataTypes.STRING,
        allowNull:false
      },
      content:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      status:{
        type: DataTypes.ENUM,
        values:['pending','accomplished'],
        defaultValue:'pending'
      }
    },{
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        tableName:"todos"
    }
)


exports.model = todo;