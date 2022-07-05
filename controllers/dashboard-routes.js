const router = require("express").Router();
const sequelize = require("../config/connection");

const { Post, User } = require("../models/");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  Post.findAll({
    where: {
      userId: req.session.userId,
    },
    attributes: ["id", "title", "created_at", "post_text"],
    include: [
      {
        model: Comment,
        attributes: ["id", "post_id", "user_id", "comment_text", "created_at"],
        include: {
          model: User,
          attributes: ["username", "twitter"],
        },
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("dashboard", { posts, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("login");
    });
});

router.get("/edit/:id", withAuth, (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "created_at", "post_text"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username", "twitter"],
        },
      },
      {
        model: User,
        attributes: ["username", "twitter"],
      },
    ],
  });
});

router.get("/edit/:id", withAuth, (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "created_at", "post_text"],
    include: [
      {
        model: Comment,
        attributes: ["id", "post_id", "user_id", "comment_text", "created_at"],
        include: {
          model: User,
          attributes: ["username", "twitter"],
        },
      },
      {
        model: User,
        attributes: ["username", "twitter"],
      },
    ],
  })

    .then((dbPostData) => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });

        res.render("edit-post", {
          layout: "dashboard",
          post,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/edit/:id", withAuth, (req, res) => {
  Post.findAll({
    where: {
      user_id: req.session.user_idid,
    },
    attributes: ["id", "title", "created_at", "post_text"],
    include: [
      {
        model: Comment,
        attributes: ["id", "post_id", "user_id", "comment_text", "created_at"],
        include: {
          model: User,
          attributes: ["username", "twitter"],
        },
      },
      {
        model: User,
        attributes: ["username", "twitter"],
      },
    ],
  })

    .then((dbPostData) => {
      if (dbPostData) {
        const post = dbPostData.map((post) => post.get({ plain: true }));

        res.render("create-post", { posts, loggedIn: true });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
