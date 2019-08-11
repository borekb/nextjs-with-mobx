import { useMobxStores } from '../../stores/stores';
import { observer } from 'mobx-react';

const DisplayContent = () => {
  const { postStore } = useMobxStores();
  return <p>{postStore.post}</p>;
};

export default observer(DisplayContent);
