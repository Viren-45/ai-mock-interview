import { getCurrentUser, isAuthenticated } from '@/lib/actions/auth.action'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'
import UserAvatar from '@/components/UserAvatar'

const Rootlayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  const currentUser = await getCurrentUser();

  if(!isUserAuthenticated) redirect('/sign-in');
  return (
    <div className="root-layout">
      <nav className="flex items-center justify-between p-4 border-b">
        <Link href="/" className='flex items-center gap-2' >
          <Image src="/logo.svg" alt='logo' width={38} height={32} />
          <h2 className='text-primary-100'>Skillora</h2>
        </Link>
        
        {currentUser && (
          <UserAvatar user={currentUser} />
        )}
      </nav>

      {children}
    </div>
  )
}

export default Rootlayout