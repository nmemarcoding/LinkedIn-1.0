import React from 'react'
import Image from 'next/image'
import { Briefcase, HomeIcon,  MessageSquare,  Search, SearchIcon, User } from 'lucide-react'
import Link from 'next/link'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from "@/components/ui/button"
function Header() {
  return (
    <div className='flex items-center p-2 max-w-6xl mx-auto'>
        <Image
            className= 'rounded-lg'
            src='https://links.papareact.com/b3z'
            width={40}
            height={40}
            alt='logo' 
        />
        <div className="flex-1">
            <form className='flex flex-1 items-center space-x-1 bg-gray-200 p-2 rounded-md  mx-2 max-w-96'>
                <SearchIcon className='h-4 text-gray-600'/>
                <input type='text' placeholder='Search' className='bg-transparent flex-1 outline-none ' />
            </form>        
        </div>

        <div className='flex items-center space-x-4'>
            <Link href="/" className='icon'>
                <HomeIcon className='h-5'/>
                <p>Home</p>
            </Link>
            <Link href="/" className='icon hidden md:flex'>
                <User className='h-5'/>
                <p>My Network</p>
            </Link>
            <Link href="/" className='icon hidden md:flex'>
                <Briefcase className='h-5'/>
                <p>Jobs</p>
            </Link>
            <Link href="/" className='icon'>
                <MessageSquare className='h-5'/>
                <p>Messages</p>
            </Link>
               
            {/* User Button */}
            <SignedIn>
                <UserButton />
            </SignedIn>
            {/* Sign In Button */}
            <SignedOut>
                <Button asChild variant={'secondary' }>
                    <SignInButton />
                </Button>
            </SignedOut>

        </div>
    </div>

  )
}

export default Header