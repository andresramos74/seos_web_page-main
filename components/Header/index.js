import { Cross as Hamburger } from 'hamburger-react'
import { useEffect, useState, startTransition } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logoSeos from 'public/logo_seos_blanco.png'

const Header = () => {

  const [heightHeader, setHeightHeader] = useState('90')
  const [imageWidth, setImageWidth] = useState(240)
  const [opacityHeader, setOpacityHeader] = useState('0')
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  useEffect(() => {

    const w = window

    /* 
      ! This function calculate the new value of the height, the minium 
      ! height of the header is 72 px in the point 400 and lower of the
      ! scroll for this reason I used the next formula 90 - 400/x >= 70, then 
      ! x = 13.3 the value of the scroll/13.3 is now the value to minus 
      ! to the original height of the header that is 100
    */
    const calculateNewHeightHeader = (scrollY) => {

      if (Number.isInteger(scrollY)) {
        return Math.ceil(90 - (w.scrollY / 20)) + 1
      }
      return Math.ceil(90 - (w.scrollY / 20))

    }

    const calculateNewWidthLogo = (scrollY) => {
      return Math.ceil(240 - (scrollY / 5.5666))
    }

    const calculateNewOpacity = (scrollY) => scrollY / 400

    // Function that execute once the event scroll is called.
    function changeHeight() {
      if (w.scrollY < 400) {
        const scrollY = w.scrollY

        //* Calculate the new value of the height header, width logo, opacity color
        const newHeightHeader = (w.scrollY === 0) ? '90' : calculateNewHeightHeader(scrollY).toString()
        const newWidthLogo = (w.scrollY === 0) ? 240 : calculateNewWidthLogo(scrollY)
        const newOpacity = (w.scrollY === 0) ? '0' : calculateNewOpacity(scrollY).toString()

        setHeightHeader(newHeightHeader)
        setImageWidth(newWidthLogo)
        setOpacityHeader(newOpacity)

      } else {
        setHeightHeader('70')
        setImageWidth(168)
        setOpacityHeader('1')
      }

    }

    w.addEventListener('scroll', changeHeight)
    return () => w.removeEventListener('scroll', changeHeight)

  }, [])

  const handleClickMenu = () => {

    if (isOpenMenu) {

      document.documentElement.style.overflow = ''
    } else {
      document.documentElement.style.overflow = 'hidden'

    }

    startTransition(() => {
      if (isOpenMenu) {
        setIsOpenMenu(false)
        return

      }
      setIsOpenMenu(true)

    })

  }

  return (
    <section className="fixed transition-all duration-75 top-0 w-full z-40 font-['Poppins']" style={{ height: heightHeader + 'px' }}>

      <div
        className="relative flex justify-between w-full h-full px-12"
        style={{ backgroundColor: `rgb(0,49,77,${opacityHeader} ` }}
      >
        <div className='relative my-auto' style={{
          width: imageWidth,
          height: imageWidth / 4
        }}>
          <Image
            src={logoSeos}
            alt={"Logo seos"}
            unoptimized={true}
            layout='fill'
            objectFit='contain'
          />
        </div>
        {
          !isOpenMenu && 
          <div 
            className="button-hamburguer ml-auto my-auto h-12 lg:hidden" onClick={handleClickMenu}
            data-cy-button-hamburger="open"
          >
            <Hamburger toggled={isOpenMenu} size={19} color={"#ffffff"} />
          </div>
        }
        <nav 
          className="hidden lg:block grow h-full"
          data-cy-menu-pc="nav-pc"
        >
          <div className='flex pl-20 pr-0 justify-between h-full'>
            <Link href="https://www.seosenergy.co" className=''>
              <a className='h-6 my-auto text-base font-semibold text-white'>Inicio</a>
            </Link>
            <Link href="https://www.seosenergy.co/nosotros" className=''>
              <a className='h-6 my-auto text-base font-semibold text-white'>Nosotros</a>
            </Link>
            <Link href="https://www.seosenergy.co/soluciones" className=''>
              <a className='h-6 my-auto text-base font-semibold text-white'>Soluciones</a>
            </Link>
            <Link href="https://www.seosenergy.co/blog" className=''>
              <a className='h-6 my-auto text-base font-semibold text-white'>Blog</a>
            </Link>
            <div className='w-[30%]'>
              {/* Botones */}
            </div>
          </div>

        </nav>
        <article
          className={`transition duration-700 ${isOpenMenu ? "translate-x-0" : "translate-x-full"} fixed top-0 left-0 w-screen h-screen bg-white bg-opacity-0 `}
          onClick={handleClickMenu}
        >
          <nav 
            className='menu-other_devices flex flex-col justify-start w-full sm:w-80 md:w-80 py-4 px-4 bg-seos-blue-dark h-screen ml-auto border-l border-l-seos-blue-light'
            data-cy-menu-other="nav-other-devices"
            >
            <div 
              className="w-full ml-auto mr-4 pb-2 h-min lg:hidden border-b border-b-seos-blue-light" 
              onClick={handleClickMenu}
              data-cy-button-hamburger="close"  
            >
              <Hamburger toggled={isOpenMenu} size={19} color={"#ffffff"} />
            </div>
            <Link href="/inicio" className=''>
              <a className='h-min w-min mx-6 mt-4 mb-2 text-base font-semibold text-white hover:text-seos-blue-light hover:underline'>Inicio</a>
            </Link>
            <Link href="/nosotros" className='focus:text-seos-green'>
              <a className='h-min w-min mx-6 my-2 text-base font-semibold text-white hover:text-seos-blue-light hover:underline'>Nosotros</a>
            </Link>
            <Link href="/soluciones" className=''>
              <a className='h-min w-min mx-6 my-2 text-base font-semibold text-white hover:text-seos-blue-light hover:underline'>Soluciones</a>
            </Link>
            <Link href="/blog" className=''>
              <a className='h-min w-min mx-6 my-2 text-base font-semibold text-white hover:text-seos-blue-light hover:underline'>Blog</a>
            </Link>
            <div className='w-full py-6 mt-2 border-t border-t-seos-blue-light flex justify-around'>
              <button className='h-10 px-4 bg-seos-blue-light bg-opacity-80  rounded-md'>
                Contactanos
              </button>
              <button className='h-10 px-4 bg-seos-blue-light bg-opacity-80  rounded-md'>
                Financiame
              </button>
            </div>
          </nav>
        </article>

      </div>

    </section>
  )

}

export default Header