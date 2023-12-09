import { Link } from "react-router-dom"

const Detail = () => {
  return (
    <div className="">
      <section className="max-w-6xl my-0 mx-auto px-8 py-20">
        <div className= "flex flex-col items-center gap-8 md:text-center">
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie pellentesque urna libero velit porta. Velit pellentesque hac gravida pellentesque est semper. Duis
            lectus gravida ultricies eleifend in pharetra faucibus orci sem. Proin ac a cursus praesent. Malesuada risus amet nunc posuere rhoncus accumsan congue id dolor.
            Convallis maecenas sed in pellentesque.</p>

          <p className="text-sm ">
            Cum mattis mollis odio gravida adipiscing. Facilisis scelerisque non lacinia tincidunt faucibus tortor vel. Erat risus etiam quam pretium ornare. Semper orci arcu pulvinar
            adipiscing pretium. Erat facilisis dis arcu senectus sit mi fermentum eu aliquam. Felis neque posuere pharetra porttitor lacinia proin pretium. Et et pharetra tincidunt vel
            egestas risus sed mollis adipiscing. Lobortis risus mauris vitae pellentesque.</p>

          <Link to={'/'} className="px-8 py-2 rounded bg-cyan-950 text-sky-50 w-fit text-base font-medium">See detail</Link>
        </div>
      </section>
    </div>
  )
}

export default Detail