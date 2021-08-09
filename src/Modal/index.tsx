import { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

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
              <h2 className={styles.HeaderTitle}>{title}</h2>
              <button className={styles.ButtonClose} onClick={() => close()}>
                X
              </button>
            </header>
            <main className={styles.Content}>{children}</main>
            <footer className={styles.Footer}>
              <button className={styles.ModalClose} onClick={() => close()}>
                Cancel
              </button>
              <button className={styles.Submit}>Submit</button>
            </footer>
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById('modal') as Element
  );
};
export default Modal;
