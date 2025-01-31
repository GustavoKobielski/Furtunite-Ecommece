
import Background_main from '../../assets/Contact/Group 78.svg'

// icons
import AddressIcon from '../../assets/Icons/Contact/Vector.svg'


const Contact = () => {
  return (
    <main className='my-28'>
      <div className="h-auto">
        <section className="w-full">
          <img className='w-full object-cover h-full' src={Background_main} alt="" />
        </section>

        <section className='flex flex-col items-center justify-center my-24 gap-2'>
          <h1 className='text-black text-4xl font-semibold'>Get In Touch With Us</h1>
          <p className='text-[#9F9F9F] text-xl w-2/5 text-center'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>


        <div className="my-28 grid grid-cols-[auto,1fr,1fr] gap-4">
          <div className='flex flex-col items-center gap-28'>
            <div className='p-4'>
              <img src={AddressIcon} alt="" />
            </div>
            <div className='p-4'>
              <img src={AddressIcon} alt="" />
            </div>
            <div className='p-4'>
              <img src={AddressIcon} alt="" />
            </div>
          </div>

          {/* Coluna 2 (com 3 itens) */}
          <div className="space-y-4 w-56">
            <div className=" p-4">
              <h2 className='text-3xl	font-medium'>Address</h2>
              <p className='text-xl'>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
            <div className=" p-4">
              <h2 className='text-3xl	font-medium'>Phone</h2>
              <p className='text-xl'>Mobile: +(84) 546-6789</p>
              <p className='text-xl'>Hotline: +(84) 456-6789</p>
            </div>
            <div className=" p-4">
              <h2 className='text-3xl	font-medium'>Working Time</h2>
              <p className='text-xl'>Monday-Friday: 9:00 - 22:00</p>
              <p className='text-xl'>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>

          {/* Coluna 3 (com 5 itens) */}
          <div className="space-y-4 w-96">
            <form className='flex flex-col justify-start gap-8'>
              <label htmlFor="name" className='text-xl'>Your Name</label>
              <input className='border border-solid rounded-lg py-6 px-8 text-[#9F9F9F]' type="text" name="name" id="name" placeholder='Abc'/>

              <label htmlFor="email" className='text-xl'>Email address</label>
              <input className='border border-solid rounded-lg py-6 px-8 text-[#9F9F9F]' type="email" name="email" id="email" placeholder='Abc@def.com'/>

              <label htmlFor="subject" className='text-xl'>Subject</label>
              <input className='border border-solid rounded-lg py-6 px-8 text-[#9F9F9F]' type="text" name="subject" id="subject" placeholder='This is an optional'/>

              <label htmlFor="messagge" className='text-xl'>Message</label>
              <input className='border border-solid rounded-lg py-6 px-8 text-[#9F9F9F] h-36' type="text" name="messagge" id="messagge" placeholder='Hi! I´d like ask about'/>

              <button className="text-xl self-start px-20 py-4 bg-brown text-white rounded-md">
                Enviar
              </button>

            </form>
          </div>
        </div>

        </section>

      </div>

    </main>

  )
}

export default Contact;


