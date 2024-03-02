import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { addContact } from '../../../redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';
import img from '../../image/phonebook.png';

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = nanoid();
  const numberId = nanoid();

  const onAddContact = data => {
    dispatch(addContact(data));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    const newContact = { name: name.value, number: number.value };
    onAddContact(newContact);
    console.log(newContact);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} action="" className={css.form_blok}>
      <div className={css.contact_form}>
        <label htmlFor={nameId} className={css.for_label}>
          Name
        </label>
        <input
          id={nameId}
          className={css.for_input}
          type="text"
          name="name"
          required
        />
        <label htmlFor={numberId} className={css.for_label}>
          Number
        </label>
        <input
          id={numberId}
          className={css.for_input}
          type="tel"
          name="number"
          required
        />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </div>
      <div className={css.img_block}>
        <img src={img} alt="React icon" className={css.img}></img>
      </div>
    </form>
  );
};

export default ContactForm;
