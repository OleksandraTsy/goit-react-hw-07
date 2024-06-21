
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import css from "./App.module.css";


function App() {

  const dispatch = useDispatch()

  useEffect(() => { dispatch(fetchContacts()) }, [dispatch]);
  const isLoading = useSelector(state => state.contacts.loading);
  const isError = useSelector(state => state.contacts.error);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader isLoading={isLoading} />}
      {isError && <ErrorMessage/>}
      <ContactList />
</div>
)
}

export default App;