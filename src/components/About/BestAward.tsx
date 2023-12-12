import femaleLawyer from '../../assets/male-1.jpg'

const BestAward = () => {
  return (
    <div className="bg-green-400">
      <section className='max-w-7xl my-0 mx-auto px-8 py-20'>
        <div className='mb-8 bg-court bg-cover bg-center px-3 py-6'>
          <h4 className='text-base font-semibold mb-5 text-gray-100'>Success Story</h4>
          <h1 className=' capitalize text-3xl font-bold text-white md:text-4xl md:leading-relaxed  md:max-w-md'>
            The Best Award Has Been given to Northman Legal Lawyer International
          </h1>
        </div>
        
        <div>
          <div className='flex flex-col items-start gap-10 lg:flex-row justify-between lg:items-end'>
            <div className="flex flex-col gap-3 max-w-3xl ">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie pellentesque urna libero velit porta.
                Velit pellentesque hac gravida pellentesque est semper. Duis lectus gravida ultricies eleifend in pharetra
                faucibus orci sem. Proin ac a cursus praesent. Malesuada risus amet nunc posuere rhoncus accumsan
                congue id dolor. Convallis maecenas sed in pellentesque. Diam tristique semper mauris dolor amet. Dolor 
              </p>

              <p className="text-sm">
                Augue tristique quis fringilla nisl quam nisi. Erat pellentesque elementum consequat quis volutpat diam
                praesent molestie. Molestie scelerisque eleifend eu amet quam vitae fusce aliquam ornare. Accumsan est
                ut at tristique arcu. Semper lectus vulputate volutpat consectetur gravida ac gravida. Sem placerat
                pellentesque turpis tellus etiam porttitor sed. Scelerisque condimentum volutpat tempus lobortis. 
              </p>
              <h2 className="text-lg font-semibold">Denny S - Lead International Legal</h2>
            </div>
            <img src={femaleLawyer} alt="Female lawyer" className='mx-auto w-80 h-80 rounded lg:mx-0'/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BestAward