import styled from '@emotion/styled'

const Contenedor = styled.div`
color: #FFF;
font-family: 'Lato', sans-serif;
display: flex;
align-items: center;
margin-top: 80px;
width: 100%;
justify-content: space-around;
border: 5px solid white;
border-radius: 10px;

@media (max-width: 992px){
    margin: 50px;
  }
`

const Imagen = styled.img`
display: block;
width: 150px;

@media (max-width: 992px){
    display: none;
`

const Texto = styled.p`
font-size: 24px;

span{
    font-weight: 700;
    padding-left: 5px;
}
`

const Precio = styled.p`
font-size: 25px;
color: #B8B9F4;

span{
    color: #FFF;
    font-weight: 700;
    padding-left: 5px;
}
`


const Resultado = ({resultado}) => {

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado

  return (
    <Contenedor>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
        <div>
        <Precio>El precio es de: <span>{PRICE}</span></Precio>
        <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
        <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
        <Texto>Variación ultimas 24 hs: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Última actualización <span>{LASTUPDATE}</span></Texto>
        </div>
    </Contenedor>
  )
}

export default Resultado