'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * 
    */
    await queryInterface.bulkInsert('users', 
      [
        {
          userName: 'admin1',
          email: 'admin@gmail.com',
          password: '123456'
        },
        {
          userName: 'admin2',
          email: 'admin@gmail.com',
          password: '123456'
        },
        {
          userName: 'admin3',
          email: 'admin@gmail.com',
          password: '123456'
        },
        {
          userName: 'admin4',
          email: 'admin@gmail.com',
          password: '123456'
        },
        {
          userName: 'admin5',
          email: 'admin@gmail.com',
          password: '123456'
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
