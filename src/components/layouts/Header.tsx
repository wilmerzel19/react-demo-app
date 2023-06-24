import React from 'react'
import Logo from './Logo'
import Enlace from './Enlace'


type Props = {}

export default function Header({}: Props) {
  return (
    <div className='flex justify-between px-4 py-5 text-white border bg-slate-950'>
        <Logo />  
        
        <ul className='flex gap-2'>
            <li><Enlace text='Inicio' route='/'  /></li>
            <li><Enlace text='Galeria' route='/galeria'  /></li>
            <li><Enlace text='Servicios' route='/servicios' /></li>
            <li><Enlace text='Contacto' route='/contacto' /></li>
        </ul>
           
    </div>
  )
}