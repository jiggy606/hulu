import React from 'react'
import Image from 'next/image'
import huluLogo from '../assets/default_hulu.jpg'
import HeaderItem from './HeaderItem';
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from '@heroicons/react/outline'

const Header = () => {
    return (
        <header>
            <div>
                <HeaderItem title='home' Icon={HomeIcon} />
            </div>
            <Image
                src={huluLogo}
                width={200}
                height={100}
                alt='image'
            />
        </header>
    );
}

export default Header