import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import {signIn, signOut, useSession} from 'next-auth/client'

function SignInButton() {

  const [session] = useSession();

  return session ? (

    /* Logged */
    <button type="button" className={styles.signInButton} onClick={() => signOut()}>
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>

  ):(
    
    /* Not Logged */

    <button type="button" className={styles.signInButton} onClick={() => signIn('github')}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>

  )
};

export default SignInButton;