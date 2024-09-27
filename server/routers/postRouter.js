const { Router } = require('express');
const Post = require('../models/Post');

const router = Router();

// Получение всех постов
router
  .route('/')
  .get(async (req, res) => {
    try {
      const posts = await Post.findAll({ order: [['updatedAt', 'DESC']] });
      res.json(posts);
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching posts' });
    }
  })
  .post(async (req, res) => {
    try {
      const { title, img, userId } = req.body;

      if (!title || !img || !userId) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      const newPost = await Post.create({ title, img, userId });
      res.json(newPost);
    } catch (error) {
      return res.status(500).json({ message: 'Error creating post' });
    }
  });

// Работа с постами по id
router
  .route('/:id')
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      const userPosts = await Post.findAll({
        where: { userId: id },
        attributes: ['title', 'img'],
      });

      if (!userPosts.length) {
        return res.status(404).json({ message: 'No posts found for this user' });
      }

      res.json(userPosts);
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching user posts' });
    }
  })
  .delete(async (req, res) => {
    try {
      const { id } = req.params;

      // Получаем текущего пользователя и проверяем его роль
      const user = req.user; // Если у вас есть система аутентификации
      const post = await Post.findByPk(id);

      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }

      // Проверяем, является ли пользователь администратором
      if (user.role !== true) {
        return res.status(403).json({ message: 'Access denied. Admins only.' });
      }

      await Post.destroy({ where: { id } });
      res.status(200).json({ message: 'Post deleted' });
    } catch (error) {
      return res.status(500).json({ message: 'Error deleting post' });
    }
  })
  .patch(async (req, res) => {
    try {
      const { id } = req.params;
      const { title, img, userId } = req.body;

      if (!title || !img || !userId) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      const updatedPost = await Post.update(
        { title, img, userId },
        { where: { id } }
      );

      if (!updatedPost) {
        return res.status(404).json({ message: 'Post not found' });
      }

      res.json({ message: 'Post updated', post: updatedPost });
    } catch (error) {
      return res.status(500).json({ message: 'Error updating post' });
    }
  });

module.exports = router;
