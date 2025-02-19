import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './navbar.css';
import { Input } from '../InputSearch/Input';
import { ModalCart } from '../../Cart/ModalCart';
import { useCart } from '../../../hooks/useCart'
import { IconHeart, IconHome, IconShoppingCart, IconProducts, IconProfileCircled, IconMenu, IconClose, IconSearch, IconTrash } from '../../Icons/Icons';
import { useSearch } from '../../../hooks/useSearch';
export function Navbar() {
  const { cart } = useCart()
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [openMenu, setMenu] = useState(false)
  const [openModalCart, setModalCart] = useState(false)
  const [openInputSearch, setInputSearch] = useState(false);
  const { handleResetSearch } = useSearch();
  const handleMenu = () => {
    if(openModalCart)
      setModalCart(!openModalCart)
    if(openInputSearch)
      setInputSearch(!openInputSearch)
    setMenu(!openMenu)
  }
  const handleInputSearch = () => {
    if(openModalCart)
      setModalCart(!openModalCart)
    if(openMenu)
      setMenu(!openMenu)
    setInputSearch(!openInputSearch)
  }
  const handleModalCart = () => {
    if(openMenu)
      setMenu(!openMenu)
    if(openInputSearch)
      setInputSearch(!openInputSearch)
    setModalCart(!openModalCart)
  }
  // este useEffect lo uso para actualizar el ancho de la página cuando lo abro desde
  // el navegador y pongo inspeccionar para que no se me rompa ahí y siempre este
  // actualizado el valor sin tener que actualizar la página
  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
  }, [window.innerWidth]);
  return (
    <>
    <header className='header-home'>
    {innerWidth < 1024 ?
    <>
    <nav className='navbar'>
      <article className='menu-and-search'>
      {!openMenu ? (
        <>
        <figure onClick={handleMenu} className="icon-menu icons-navbar">
          <IconMenu />
        </figure>
        </>
      )
        : 
        <>
          <figure onClick={handleMenu} className="icon-close-menu icons-navbar">
            <IconClose />
          </figure>
        </>
      }
      {!openInputSearch ?
        <>
        <figure onClick={handleInputSearch} className="icon-search icons-navbar">
          <IconSearch />
        </figure>
        </> :
        <>
        <figure onClick={handleInputSearch} className="icon-close-menu icons-navbar">
          <IconClose />
        </figure>
        </>
      }
      </article>
      <figure className="logo-mobile icons-navbar" title='Logo Supermarket'>
        <Link to={"/"} >
          <img src="/img/gral/logo-mobile.webp" alt="Logo Supermarket Online"/>
        </Link>
      </figure>
      <figure onClick={handleModalCart} className='icons-navbar icon-shopping-cart'>
        <IconShoppingCart />
      </figure>
      <strong className='cart-length'> {cart.length}</strong>
      <ModalCart openModalCart={openModalCart} handleModalCart={handleModalCart} />
    </nav>
    {openInputSearch && 
      <article className='input-search-mobile'>
        <Input type="text" placeholder='¿Qué estás buscando?' /> 
        <figure onClick={handleResetSearch} className="input-search-btn-delete-mobile">
          <IconTrash />
        </figure>
        <figure onClick={handleInputSearch} className='icons-navbar'>
          <IconClose />
        </figure>
      </article>
    }
    {openMenu && (
      <ul className='menu-list'>
      <Link to={"/"}>
        <li className='item-menu-list'>
          <figure className='icons-navbar'>
            <IconHome />
          </figure>
          <span>Inicio</span>
        </li>
      </Link>
      <Link to={"/products"}>
        <li  className='item-menu-list'>
          <figure className='icons-navbar'>
            <IconProducts />
          </figure>
          <span>Productos</span>
        </li>
      </Link>
      <Link to={"/favorites"}>
        <li  className='item-menu-list'>
          <figure className='icons-navbar'>
            <IconHeart />
          </figure>
          <span>Favoritos</span>
        </li>
      </Link>
      <Link to={"/profile"}>
        <li  className='item-menu-list'>
          <figure className='icons-navbar'>
            <IconProfileCircled />
          </figure>
          <span>Mi cuenta</span>
        </li>
      </Link>
      </ul>
    )}
    </>
    :
    <>
    <nav className="navbar">
      <Link to={"/"} className="logo" title='Logo Supermarket'>
          <img src="/img/gral/logo.webp" alt="Logo Supermarket Online"/>
      </Link>
      <article  className="input-search-desktop">
        <Input placeholder='Alimentos, Bebidas, Frutas, Verduras...'/>
      </article>
      <ul>
        <Link to={"/"}>
          <li title='Inicio'>
            <figure className='icons-navbar'>
              <IconHome />
            </figure>
            <span>Inicio</span>
          </li>
        </Link>
        <Link to={"/products"}>
          <li title='Productos'>
            <figure className='icons-navbar'>
              <IconProducts />
            </figure>
            <span>Productos</span>
          </li>
        </Link>
        <Link to={"/favorites"}>
          <li title='Favoritos'>
            <figure className='icons-navbar'>
              <IconHeart />
            </figure>
            <span>Favoritos</span>
          </li>
        </Link>
        <Link to={"/profile"}>
          <li title='Mi cuenta'>
            <figure className='icons-navbar'>
              <IconProfileCircled />
            </figure>
            <span>Mi cuenta</span>
          </li>
        </Link>
        <li title='Carrito' onClick={handleModalCart}>
            <figure className='icons-navbar'>
              <IconShoppingCart />
            </figure>
          <span>Carrito</span>
          <strong className='cart-length'> {cart.length}</strong>
        </li>
      </ul>
    </nav>
    <ModalCart openModalCart={openModalCart} handleModalCart={handleModalCart} />
    </>
    }
    </header>
    </>
  )
}