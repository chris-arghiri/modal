import { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

import modalBg from '../assets/modal-bg.jpg';

type ModalProps = {
  show: boolean;
  close: () => void;
  title: string;
  children: JSX.Element;
};

const Modal: FunctionComponent<ModalProps> = ({
  show,
  title,
  close,
  children
}) => {
  return ReactDOM.createPortal(
    <>
      {show ? (
        <div className={styles.Container} onClick={() => close()}>
          <div className={styles.Modal} onClick={(e) => e.stopPropagation()}>
            <header className={styles.Header}>
              <div className={styles.HeaderTextContainer}>
                <h2 className={styles.HeaderTitle}>{title}</h2>
                <p className={styles.HeaderParagraph}>
                  Write something here you like here!
                </p>
              </div>
              <img src={modalBg} alt='air-jordan-1-sneakers' />
              <button className={styles.ButtonClose} onClick={() => close()}>
                X
              </button>
            </header>
            <main className={styles.Content}>{children}</main>
            <footer className={styles.Footer}>
              <h4 style={{ marginRight: '0.5rem' }}>Not a member?</h4>
              <button className={styles.Submit}>Sign Up</button>
            </footer>
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById('modal') as Element
  );
};
export default Modal;
