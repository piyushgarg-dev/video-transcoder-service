'use client';
import Link from 'next/link';
import React from 'react'
import { AiOutlineCloudUpload, AiOutlineUser } from 'react-icons/ai'
import { BiSolidVideos } from 'react-icons/bi'
import { usePathname } from 'next/navigation';

interface SideBarItem {
    id: string;
    name: string;
    link: string;
    icon: React.ReactNode
}
const sideBarMenu: SideBarItem[] = [
    {
        id: '1',
        name: 'Upload',
        link: '/dashboard',
        icon: <AiOutlineCloudUpload />
    },
    {
        id: '2',
        name: 'assets',
        link: '/dashboard/assets',
        icon: <BiSolidVideos />
    },
    {
        id: '3',
        name: 'user',
        link: '/dashboard/user',
        icon: <AiOutlineUser />
    },
]
const UserDashBoard = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const pathname = usePathname();

    return (
        <div className='bg-[#f3f4f6]'>
            <div className='flex h-screen'>
                <div className='w-[20%] bg-white border-r border-[#e8e8e8] p-5'>
                    <h1 className='text-[#5381e6] mb-5'>Transcoder</h1>
                    <nav>
                        <ul>
                            {sideBarMenu.map(menu => {
                                const isActive = pathname === menu.link
                                return <Link href={menu.link} key={menu.id} className={`hover:bg-[#e8e8e8] ${isActive ? 'bg-[#d2d4d9] text-[#5381e6]' : 'text-[#79808a]'} transition-all cursor-pointer px-4 py-2 rounded-lg  hover:text-[#5381e6] flex items-center mb-5 gap-3`}>
                                    <div className='text-xl'>

                                        {menu.icon}
                                    </div>
                                    <p>{menu.name}</p>

                                </Link>
                            })}

                        </ul>
                    </nav>
                </div>
                <div className='w-[80%] p-5 '>

                    {children}
                </div>
            </div>
        </div>
    )
}

export default UserDashBoard
