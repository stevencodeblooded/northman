import staffMember from '../../assets/male-2.jpg'

const WelcomeMessage = () => {
  return (
    <div>
      <section className='max-w-7xl my-0 mx-auto px-8 py-20'>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-3 md:flex-row md:gap-14 md:items-end'>
            <img src={staffMember} alt="A welcome message  from a staff member" className='h-60 w-60 rounded-full mx-auto md:mx-0' />
            <div className='flex flex-col gap-3'>
              <h4 className=" text-base font-semibold">Welcome Message</h4>
              <h1 className="text-4xl font-bold">
                Hello People, <br />Welcome To <span className='text-green-400'>Northman</span>
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie pellentesque urna libero velit porta. Velit pellentesque hac gravida pellentesque est semper. Duis lectus gravida ultricies
            eleifend in pharetra faucibus orci sem. Proin ac a cursus praesent. Malesuada risus amet nunc posuere rhoncus accumsan congue id dolor. Convallis maecenas sed in pellentesque. Diam
            tristique semper mauris dolor amet. Dolor elit nunc et purus quam amet laoreet eu risus.Cum mattis mollis odio gravida adipiscing. Facilisis scelerisque non lacinia tincidunt faucibus tortor vel.</p>
            
            <p className="text-sm">
              Augue tristique quis fringilla nisl quam nisi. Erat pellentesque elementum consequat quis volutpat diam praesent molestie. Molestie scelerisque eleifend eu amet quam vitae fusce aliquam
              ornare. Accumsan est ut at tristique arcu. Semper lectus vulputate volutpat consectetur gravida ac gravida. Sem placerat pellentesque turpis tellus etiam porttitor sed. Scelerisque
              condimentum volutpat tempus lobortis. Accumsan dui felis turpis elementum. Leo nibh magnis sociis diam purus dui. Amet nulla urna curabitur 
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WelcomeMessage