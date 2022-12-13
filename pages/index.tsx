import Link from 'next/link'
import {MainLayout} from '../components/MainLayout'

export default function Index() {
  return (
    <MainLayout title={'Home Page'}>
      <h1>Welcome back!</h1>
      <p><Link href={'/about'}><a>About</a></Link></p>
      <p><Link href="/posts"><a>Posts</a></Link></p>
      <p>Zaklinanie.</p>
    </MainLayout>
  )
}
