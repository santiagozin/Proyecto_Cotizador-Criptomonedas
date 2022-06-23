import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import ImagenCrypto from './img/imagen-criptos.png'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;

`

const Imagen = styled.img`
  max-width: 50%;
  width: 40%;
  height: 40%;
  margin-right: auto;
  margin-top: 60px;
  display: block;


@media (max-width: 992px){
  display: none !important;
}
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: white;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 25px;

&::after{
  content: '';
  width: 100px;
  height: 6px;
  background-color: #66A2FE;
  display: block;
  margin: 10px auto 0 auto;
}
`

const Contenido = styled.div`

@media (max-width: 992px){
  width: 100%;
  padding: 50px;
}
`

function App() {
 
  const [ monedas, setMonedas ] = useState({})
  const [ resultado, setResultado ] = useState({})
  const [ cargando, setCargando ] = useState(false)

  useEffect(() => {
  if(Object.keys(monedas).length > 0) {
    
    const cotizarCripto = async () => {
      setCargando(true)
      setResultado({})

      const { moneda, criptomoneda } = monedas
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

      const respuesta = await fetch(url)
      const resultado = await respuesta.json()

      setResultado(resultado.DISPLAY[criptomoneda][moneda])

      setCargando(false)
    }

    cotizarCripto()
  }
  }, [monedas])

  return (
    <Contenedor>
      <Imagen src={ImagenCrypto} alt="imagenes criptomonedas" />

      <Contenido>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Formulario 
        setMonedas={setMonedas}
        />
        
        {cargando && <Spinner />}
       
      </Contenido>
      {resultado && resultado.PRICE && <Resultado resultado={resultado} />}
    </Contenedor>
  )
}

export default App
