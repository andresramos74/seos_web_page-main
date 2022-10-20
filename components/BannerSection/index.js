import Image from 'next/image'

const BannerSection = ({ src, position }) => {

  return (
    <article className='relative w-full h-[85vh]'>
      <Image
        src={src}
        alt="Imagen de pruebita"
        layout='fill'
        objectFit='cover'
        priority={true}
        objectPosition={position}
      />
    </article>
  )

}

export default BannerSection