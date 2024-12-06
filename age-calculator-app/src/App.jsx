import './App.css'

function App() {

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center font-poppins">
        <div className='rounded-xl bg-white p-8 w-96'>
          <form className="flex gap-4 pb-4">

            <div className='flex flex-col gap-1 '>
              <label className='text-xs' htmlFor="day">DAY</label>
              <input className='w-16 px-3 py-2 border border-gray-1 rounded-lg' id="day" type="text" name='day' placeholder="DD"/>
            </div>

            <div className='flex flex-col gap-1 '>
              <label className='text-xs' htmlFor="month">MONTH</label>
              <input className='w-16 px-3 py-2 border border-gray-1 rounded-lg' id="month" type="text" name='month' placeholder="MM"/>
            </div>

            <div className='flex flex-col gap-1 '>
              <label className='text-xs' htmlFor="year">YEAR</label>
              <input className='w-16 px-3 py-2 border border-gray-1 rounded-lg' id="year" type="text" name='year' placeholder="YYYY"/>
            </div>

          </form>

          <div className="relative">
            <hr className='my-4 mt-4 border-gray w-full'/>
            <button className='flex justify-center items-center absolute -top-5 right-0 bg-purple-500 rounded-full w-12 h-12'>
              <img src="..\public\images\icon-arrow.svg" className='h-8 w-8' />
            </button>
          </div>

          <div>
            <div>-- years</div>
            <div>-- months</div>
            <div>-- days</div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
