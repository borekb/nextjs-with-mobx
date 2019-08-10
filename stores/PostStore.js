import { observable, action } from 'mobx';

import { fetchPost } from '../utils/api';

class PostStore {
  @observable post = '';

  constructor(initialData = {}) {
    this.post = initialData.post;
  }

  async fetch(id) {
    const response = await fetchPost(id);
    this.setPost(response);
  }

  @action setPost(post) {
    this.post = post;
  }
}

export default PostStore;
