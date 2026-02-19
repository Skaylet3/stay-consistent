import Header from '../../components/ui/Header/Header'
import Input from '../../components/ui/Input/Input'
import Button from '../../components/ui/Button/Button'
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
            <Input label="Email" type="email" placeholder="you@example.com" />
            <Input label="Password" type="password" placeholder="••••••••" />
            <Button onClick={() => navigate('/dashboard')} style={{ width: '100%' }}>Sign in</Button>
          </div>
        </div>
      </main>
    </div>
  )
}
