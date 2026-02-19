import Header from '../../components/ui/Header/Header'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import styles from './LoginPage.module.css'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {

  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className={styles.title}>Welcome back</h1>
          <p className={styles.subtitle}>Sign in to your account</p>
          <div className={styles.form}>
            <Input aria-label="Email" type="email" />
            <Input aria-label="Password" type="password" />
            <Button onClick={() => navigate('/dashboard')} className="w-full">Sign in</Button>
          </div>
        </div>
      </main>
    </div>
  )
}
