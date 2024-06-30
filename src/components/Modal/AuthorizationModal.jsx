import React from 'react';
import style from './AuthorizationModal.module.css'

const AuthorizationModal = ({active, setActive}) => {
    return (
        <div
            className={active ? style.modal__active : style.modal}
            onClick={setActive(false)}
        >
            <div
                className={style.modal__content}
                onClick={e => e.stopPropagation()}
            >

            </div>
        </div>
    );
};

export default AuthorizationModal;