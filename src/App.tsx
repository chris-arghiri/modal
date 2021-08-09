import { FunctionComponent, useState } from 'react';
import styles from './App.module.css';
import Modal from './Modal';

type AppProps = {};

const App: FunctionComponent<AppProps> = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const toggle = () => setShowModal(!showModal);

  return (
    <div className={styles.App}>
      <button className={styles.Button} onClick={() => toggle()}>
        Modal
      </button>
      <Modal title='This is a modal' show={showModal} close={toggle}>
        <h1 style={{ textAlign: 'center' }}>This is a modal content</h1>
      </Modal>
    </div>
  );
};

export default App;
