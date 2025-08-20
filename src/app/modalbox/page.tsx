"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

type modalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: modalProps) => {
  if (!isOpen) return null;
  return (
    <div className={styles.modalContainer}>
      <div className={styles.contentContainer}>
        <button className={styles.cross} onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

const UseModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button className={styles.openBtn} onClick={() => setOpen(true)}>
        Open Modal
      </button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2>Custom Modal</h2>
        <p>This is modal content </p>
        <button onClick={() => setOpen(false)} className={styles.closeBtn}>
          Close
        </button>
      </Modal>
      <div>
        <Link href={"/"}>Back to Home</Link>
      </div>
    </div>
  );
};

export default UseModal;
