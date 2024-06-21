
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { ImUser, ImPhone } from 'react-icons/im';
import css from './Contact.module.css';

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.listItem}>
          <div className={css.box}>
            <span><ImUser />{name}</span>
            <span><ImPhone />{number}</span>
          </div>
      <button
        type="button"
        className={css.btn}
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}