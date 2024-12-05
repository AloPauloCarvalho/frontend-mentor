import './App.css'

function App() {

  return (
    <>
      <main className="bg-white rounded-xl">
        <div>
          <form className="flex gap-4 p-8">

            <div className='flex flex-col gap-1'>
              <label htmlFor="day">DAY</label>
              <input id="day" type="text" name='day' placeholder="DD"/>
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor="month">MONTH</label>
              <input id="month" type="text" name='month' placeholder="MM"/>
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor="year">YEAR</label>
              <input id="year" type="text" name='year' placeholder="YYYY"/>
            </div>

          </form>
        </div>
      </main>
    </>
  )
}

export default App
