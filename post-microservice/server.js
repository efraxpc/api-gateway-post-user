const express = require('express');
const axios = require('axios');

const app = express();
const port = 3005;

app.get('/posts/:id', async (req, res) => {
  const postId = req.params.id;

  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const post = response.data;

    if (post) {
      res.json(post); 
      } else {
      res.status(404).send('Post not found'); 
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error'); 
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});