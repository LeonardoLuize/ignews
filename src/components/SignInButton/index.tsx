import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

function SignInButton() {

  const isUserLoggedIn = true

  return isUserLoggedIn ? (

    /* Logged */
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#04d361" />
      Leonardo Luize
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>

  ):(
    
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>

  )
};

export default SignInButton;
