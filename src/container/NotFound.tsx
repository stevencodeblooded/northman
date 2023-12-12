import error from '../assets/errorpage.jpg'

const NotFound = () => {
  return (
    <div>
        <section className=" my-0 mx-auto px-8 py-5">
            <div className='flex flex-col justify-center items-center'>
                <h1 className="text-6xl text-center mb-10">Error Page</h1>
                <img src={error} alt="error" />
            </div>
        </section>
    </div>
  )
}

export default NotFound