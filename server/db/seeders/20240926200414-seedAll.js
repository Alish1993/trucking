'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Ibragim',
        email: 'ibr@1',
        password: '123Ibr',
        role: true,
      },
   
   ], {});
   
       await queryInterface.bulkInsert('Posts', [
         {
           title: 'ali',
           img: 'https://i.pinimg.com/originals/c8/4a/d7/c84ad780d93edd2fb8f432c25201549b.jpg',
           userId: 1,
         },
   
       ], {});
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
