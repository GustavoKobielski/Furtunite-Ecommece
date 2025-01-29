

import Background_main from '../../assets/Shop/background_mains.svg'

// Icons
import IconSearch from '../../assets/Icons/Shop/system-uicons_filtering.svg'
import SelectIcon from '../../assets/Icons/Shop/ci_grid-big-round.svg'
import IconList from '../../assets/Icons/Shop/bi_view-list.svg'

const Shop = () => {
  return (
    <main>
      <div className='h-auto'>
        <section className="w-full">
          <img className='w-full object-cover h-full' src={Background_main} alt="" />

          <div className='bg-[#F9F1E7] w-full h-32'>
            <div className='flex justify-between py-9 px-32 items-center'>
              <div className='flex items-center gap-6'>
                <img src={IconSearch}/>
                <p>Filter</p>


                <img src={SelectIcon} alt="" />
                <img src={IconList} alt="" />

                {/* search results */}
              </div>

              <div className='flex items-center gap-6'>
                <p>Show</p>
                <span>16</span>

                <p>Short by</p>
                <span>Default</span>
              </div>

            </div>
          </div>
        </section>
      </div>
    </main>

  )
}

export default Shop;
