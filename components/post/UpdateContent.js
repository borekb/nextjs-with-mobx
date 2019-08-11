import { useMobxStores } from '../../stores/stores';

const UpdateContent = () => {
  const { postStore } = useMobxStores();
  return (
    <div>
      <button onClick={() => postStore.setPost('Updated!!')}>Update content</button>
    </div>
  );
};

export default UpdateContent;
