import React, { useContext } from 'react';

import { HiMenuAlt4 } from 'react-icons/hi';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { TransactionContext } from '../context/TransactionContext';

import { shortAddress } from '../utils/shortenAddress';

import logo from '../../images/logo.png'

const NavbarItem = ({ title, classProps }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}

const Navbar = () => {

    const { connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading } = useContext(TransactionContext);

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <img src={logo} alt="logo" className='w-32 cursor-pointer'></img>
            </div>
            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
                <div className='flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full'>
                    <a className='text-white text-base text-center mx-3 cursor-pointer' href='/mint/'>Mint</a>
                    <p className='text-white text-base text-center mx-3 cursor-pointer'>Exchange</p>
                    <p className='text-white text-base text-center mx-3 cursor-pointer'>Tutorials</p>
                    <a className='text-white text-base text-center mx-3 cursor-pointer' href='/about/'>About</a>
                </div>
                {!currentAccount && (
                    <button type='button' onClick={connectWallet}
                    className='flex flex-row justify-center items-center bg-[#2952e3] p-1 pr-5 pl-5 rounded-full cursor-pointer hover:bg-[#2546bd]'>
                        <p className='text-white text-base font-semibold'>Connect</p>
                    </button>
                )}
                {currentAccount && (
                    <p className='flex flex-row justify-center items-center bg-[#2952e3] p-1 pr-5 pl-5 rounded-full cursor-pointer hover:bg-[#2546bd]'>
                        {shortAddress(currentAccount)}
                    </p>
                )}
            </ul>
            <div className='flex relative'>
                {toggleMenu
                 ? <AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(false)} />
                 : <HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(true)} /> }
                {toggleMenu && (
                    <ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2x1 md:hidden list-none
                    flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in
                    '>
                        <li className='text-xl w-full my-2'>
                            <AiOutlineClose onClick={() => setToggleMenu(false)} />
                        </li>
                        {["Mint", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                        <NavbarItem key={item + index} title={item} classProps='my-2 text-lg'/>
                         ))}
                    </ul>
                )}
            </div>
        </nav>
    );
}
export default Navbar;