// pages/index.tsx
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <h1>Welcome to ETA University</h1>
      <p>Start your acquisition entrepreneurship journey here.</p>
      <Link href="/dashboard">Go to Dashboard</Link>
    </Layout>
  )
}
