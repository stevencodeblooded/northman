import { Accordion } from "@ark-ui/react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import professional from '../../assets/Professional services.jpg'

const ProfessionalServices = () => {
  return (
    <div className="bg-green-400 py-10">
      <section className="max-w-6xl my-0 mx-auto px-8 py-5">
        <div className='flex flex-col gap-20 sm:flex-row sm:items-center'>
          <div className={`w-full`}>
              <img src={professional} alt="professional Service" />
              <h1 className=" text-3xl font-bold text-cyan-950">Professional services Prepared to be your lawyer Firm</h1>
          </div>

          <div className="w-full">
            <Accordion.Root defaultValue={['Education Lawyer']} collapsible>
              {['Education Lawyer', 'Business Law', 'Consultation', 'Law & Order'].map((item, id) => (
                <Accordion.Item key={id} value={item}>
                  <Accordion.ItemTrigger className="flex gap-3 justify-between items-center w-full">
                    <h2 className="text-lg text-cyan-950 font-semibold ">{item}</h2>
                    <Accordion.ItemIndicator>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </Accordion.ItemIndicator>
                  </Accordion.ItemTrigger>
                  <Accordion.ItemContent>
                    <div>{item} Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci numquam ab provident delectus consectetur culpa veritatis nostrum veniam minus nam?</div>
                  </Accordion.ItemContent>
                  <hr className="my-5 block border-r-2 border-green-950"/>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProfessionalServices