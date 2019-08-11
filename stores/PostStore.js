import { observable, action } from 'mobx';

import { fetchPost } from '../utils/api';

class PostStore {
  @observable post = '';
  @observable postId = '';

  constructor(initialData = {}) {
    this.post = initialData.post;
    this.postId = initialData.postId;
  }

  async fetch(id) {
    const response = await fetchPost(id);
    this.setPost(response);
    this.setPostId(id);
  }

  @action setPost(post) {
    this.post = post;
  }

  @action setPostId(id) {
    this.postId = id;
  }

  __data() {
    return {
      post: this.post,
      postId: this.postId,
    };
  }
}

export default PostStore;
