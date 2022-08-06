'use strict';

const { user } = require('../models');

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("Users", [
      {
        name: 'aliah',
        email: 'aliah@testing.com',
        password: 'Okeoke123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'bot',
        email: 'bot@example.com',
        password: 'bot',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
