import easenBurdenImage from '../../assets/playing-chess.jpg'

const EasenBurden = () => {
  return (
    <div className="">
      <section className="max-w-7xl my-0 mx-auto px-8 py-16">
        <div className='flex flex-col md:flex-row md:gap-10 md:items-center md:h-96 '>
          <div className='order-2 md:order-1 md:w-1/2'>
            <img src={easenBurdenImage} alt="easenBurdenImage" className='rounded' />
          </div>

          <div className='hidden md:order-1 md:block border-r-2 h-full mx-10 border-green-950'></div>

          <div className='order-1 md:order-3 md:w-1/2'>
            <h2 className='text-base font-semibold mb-4'>About Us</h2>
            <p className='text-3xl font-bold mb-6 md:text-4xl text-cyan-950'>Helping To Overcome And Ease The Legal Burden</p>
          </div>

        </div>
      </section>
    </div>
  )
}

export default EasenBurden