import style from './page.module.css'
import SignInButton from '@/components/sign-in-button'

export default function LandingPage () {
  return (
    <div style={{
      padding: '1rem'
    }}>
      <SignInButton />
    </div>
  )
}