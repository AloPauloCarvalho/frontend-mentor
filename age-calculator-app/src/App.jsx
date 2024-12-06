import { useState } from 'react';
import './App.css';

function App() {
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('');
  
  const [resultado, setResultado] = useState({
    anos: '--',
    meses: '--',
    dias: '--',
  });

  const handleDia = (e) => {
    setDia(e.target.value);
  };

  const handleMes = (e) => {
    setMes(e.target.value);
  };

  const handleAno = (e) => {
    setAno(e.target.value);
  };

  const diferencaDatas = (e) => {
    e.preventDefault(); 

    if (dia && mes && ano) {
      const dataHoje = new Date();
      const dataFim = new Date(ano, mes - 1, dia); //A porra do mês janeiro é zero...

      let difAnos = dataHoje.getFullYear() - dataFim.getFullYear();
      let difMeses = dataHoje.getMonth() - dataFim.getMonth();
      let difDias = dataHoje.getDate() - dataFim.getDate();

      if (difDias < 0) {
        difMeses -= 1;
        const ultimoDiaMes = new Date(dataFim.getFullYear(), dataFim.getMonth(), 0).getDate(); // zero indica o último dia do mês. vai entender.
        difDias += ultimoDiaMes;
      }

      if (difMeses < 0) {
        difAnos -= 1;
        difMeses += 12;
      }

      setResultado({
        anos: difAnos,
        meses: difMeses,
        dias: difDias,
      });
    }
  };

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center font-poppins">
        <div className="rounded-xl bg-white p-8 w-96">
          <form>
            <div className="flex gap-4 pb-4">
              <div className="flex flex-col gap-1 ">
                <label className="text-xs" htmlFor="day">DIA</label>
                <input
                  className="w-16 px-3 py-2 border border-gray-1 rounded-lg"
                  id="day"
                  type="text"
                  name="day"
                  placeholder="DD"
                  onChange={handleDia}
                  value={dia}
                />
              </div>

              <div className="flex flex-col gap-1 ">
                <label className="text-xs" htmlFor="month">MÊS</label>
                <input
                  className="w-16 px-3 py-2 border border-gray-1 rounded-lg"
                  id="month"
                  type="text"
                  name="month"
                  placeholder="MM"
                  onChange={handleMes}
                  value={mes}
                />
              </div>

              <div className="flex flex-col gap-1 ">
                <label className="text-xs" htmlFor="year">ANO</label>
                <input
                  className="w-16 px-3 py-2 border border-gray-1 rounded-lg"
                  id="year"
                  type="text"
                  name="year"
                  placeholder="YYYY"
                  onChange={handleAno}
                  value={ano}
                />
              </div>
            </div>

            <div className="relative">
              <hr className="my-4 mt-4 border-gray w-full" />
              <button
                className="flex justify-center items-center absolute -top-5 right-0 bg-purple-500 rounded-full w-12 h-12"
                onClick={diferencaDatas}
              >
                <img src="..\public\images\icon-arrow.svg" className="h-8 w-8" />
              </button>
            </div>
          </form>

          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <span className="text-5xl font-bold text-purple-500">{resultado.anos}</span>
              <span className="text-6xl font-extrabold">anos</span>
            </div>

            <div className="flex gap-2 items-center">
              <span className="text-5xl font-bold text-purple-500">{resultado.meses}</span>
              <span className="text-6xl font-extrabold">meses</span>
            </div>

            <div className="flex gap-2 items-center">
              <span className="text-5xl font-bold text-purple-500">{resultado.dias}</span>
              <span className="text-6xl font-extrabold">dias</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
