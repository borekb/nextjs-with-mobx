import { observable, action } from 'mobx';

class UIStore {
  @observable searchOverlayOpen = false;

  @action setSearchOverlayOpen(value) {
    this.searchOverlayOpen = value;
  }
}

export default UIStore;
