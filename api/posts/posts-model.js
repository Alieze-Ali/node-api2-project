// The model file will grab stuff from the db & bring it back to the server

const db = require('../../data/db-config');

module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
  findPostComments,
  findCommentById,
  insertComment,
};

// router.get
function find() {
  return db('posts');
}

// router.get
// router.put
function findById(id) {
  return db('posts').where({ id: Number(id) }).first()
}

// router.post
function insert(post) {
  return db('posts')
    .insert(post)
    .then(ids => ({ id: ids[0] }));
}

function update(id, post) {
  return db('posts')
    .where('id', Number(id))
    .update(post);
}

// router.delete
function remove(id) {
  return db('posts')
    .where('id', Number(id))
    .del();
}

function findPostComments(postId) {
  return db('comments')
    .join('posts', 'posts.id', 'post_id')
    .select('comments.*', 'title as post')
    .where('post_id', postId);
}

function findCommentById(id) {
  return db('comments')
    .join('posts', 'posts.id', 'post_id')
    .select('comments.*', 'title as post')
    .where('comments.id', id).first();
}

function insertComment(comment) {
  return db('comments')
    .insert(comment)
    .then(ids => ({ id: ids[0] }));
}
