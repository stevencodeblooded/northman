import male1 from '../../assets/male-1.jpg'
import male2 from '../../assets/male-2.jpg'
import female1 from '../../assets/female-1.jpg'

const ProfessionalLaywers = () => {
  return (
    <div>
      <section className="max-w-6xl my-0 mx-auto px-8 py-16"> 
        <div className="mb-20">
          <h3 className='text-base font-semibold mb-6'>Lawyer</h3>
          <div className="flex flex-col gap-8 md:flex-row md:justify-between">
            <h1 className=" text-3xl font-bold text-cyan-950 md:w-1/2 md:text-4xl leading-10">Professional Lawyers and Advisors With More Experience</h1>
            <p className="text-sm md:w-1/3">Lorem ipsum dolor sit amet consectetur. Commodo
                pulvinar molestie pellentesque urna libero velit porta.
                Velit pellentesque hac gravida pellentesque est
                semper. Duis lectus gravida ultricies eleifend in.
              </p>
          </div>
        </div>

        <div className='w-full flex flex-col items-center flex-wrap gap-10 sm:flex-row sm:justify-between'>
          <div className='flex flex-col items-center'>
            <img src={male1} alt="Jeniffer Smith" className=' w-60 h-60 rounded-full mb-3' />
            <h2 className='text-lg text-cyan-950 font-semibold mb-2'>Jeniffer Smith</h2>
            <p className=' text-sm'>Senior Business Lawyer</p>
          </div>

          <div className='flex flex-col items-center'>
            <img src={male2} alt="Nada Geomorgant" className=' w-60 h-60 rounded-full  mb-3'  />
            <h2 className='text-lg text-cyan-950 font-semibold  mb-2'>Nada Geomorgant</h2>
            <p className=' text-sm'>Senior Business Lawyer</p>
          </div>

          <div className='flex flex-col items-center'>
            <img src={female1} alt="Jeniffer Smith" className=' w-60 h-60 rounded-full  mb-3' />
            <h2 className='text-lg text-cyan-950 font-semibold  mb-2'>Desy Willy</h2>
            <p className=' text-sm'>Senior Business Lawyer</p>
          </div>

        </div>
      </section>
    </div>
  )
}

export default ProfessionalLaywers