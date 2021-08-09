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
        <>
          <div className={styles.Username}>
            <h3>Username</h3>
            <input type='email' placeholder='Username'></input>
          </div>
          <div className={styles.Password}>
            <h3>Password</h3>
            <input type='password' placeholder='Password'></input>
          </div>
        </>
      </Modal>
    </div>
  );
};

export default App;
