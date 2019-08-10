import { useStaticRendering } from 'mobx-react';
import { isServer } from '../utils/isServer';
import PostStore from './PostStore';
import UIStore from './UIStore';

useStaticRendering(isServer);

let store = null;

export default function initializeStore(initialData = { postStore: {} }) {
  if (isServer) {
    return {
      postStore: new PostStore(initialData.postStore),
      uiStore: new UIStore(),
    };
  }
  if (store === null) {
    store = {
      postStore: new PostStore(initialData.postStore),
      uiStore: new UIStore(),
    };
  }

  return store;
}
