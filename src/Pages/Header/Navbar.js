import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    const menuItems = 
        <>
        <li className='mx-auto text-white font-bold lg:mr-4' ><Link to='/' >Home</Link></li>
        <li className='mx-auto text-white font-bold lg:mr-4' ><Link to='completedTask' >Completed Task</Link></li>
        <li className='mx-auto text-white font-bold lg:mr-4' ><Link to='todoList' >To-Do</Link></li>
        <li className='mx-auto text-white font-bold lg:mr-4' ><Link to='calender' >Calender</Link></li>
        </>
    
    return (
        <div>
           <div class="navbar bg-[#112B3C]">
  <div class="navbar-start">
    <div class="dropdown ">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 text-white w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 py-5 shadow bg-[#112B3C] rounded-box w-96">
        {menuItems}
      </ul>
    </div>
    <a class="btn btn-ghost px-24 text-white font-bold normal-case text-2xl">TO-DO List</a>
  </div>
  <div class="navbar-end hidden lg:flex">
    <ul class="menu menu-horizontal text-xl px-24">
      {menuItems}
    </ul>
  </div>
  
</div>
        </div>
    );
};

export default Navbar;