'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("accounts",{
      id:{
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey:true,
        allowNull: false
      },
      uuid:{
        type: Sequelize.STRING,
        allowNull:false
      },
      username:{
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
      },
      password:{
        type: Sequelize.STRING,
        allowNull:false
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt:{
        type: Sequelize.STRING
      },
      deletedAt:{
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('accounts');
  }
};
