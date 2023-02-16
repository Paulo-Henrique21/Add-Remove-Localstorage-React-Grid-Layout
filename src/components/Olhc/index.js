
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { MdClose, MdDragIndicator, MdFilterAlt } from 'react-icons/md'
import './style.css'
import CandlestickOneProd from '../ChartsOneProd/CandlestickOneProd';
import VolumeOneProd from '../ChartsOneProd/VolumeOneProd';

export default function Olhc(props) {

  const [submercado, setSubmercado] = useState('')
  //const [submercado2, setSubmercado2] = useState('')

  const [candle, setCandle] = useState([])

  const [fonte, setFonte] = useState('')
  //const [fonte2, setFonte2] = useState('')

  const [agrupador, setAgrupador] = useState('')
  //const [agrupador2, setAgrupador2] = useState('')

  const [AnoProduto, setAnoProduto] = useState([])
  //const [AnoProduto2, setAnoProduto2] = useState([])

  const [UnidadeValor, setUnidadeValor] = useState('')
  //const [UnidadeValor2, setUnidadeValor2] = useState('')

  const [descricao, setDescricao] = useState('')
  //const [descricao2, setDescricao2] = useState('')

  const [apiJson, setApiJson] = useState([])
  //const [apiJson2, setApiJson2] = useState([])

  const [openFilter, setOpenFilter] = useState(false)


  useEffect(() => {
    axios.get('https://backend-paulo-henrique21.vercel.app')
      .then((response) => {
        setApiJson(response.data)
        //console.log(response.data)
      })
  }, [UnidadeValor, agrupador, AnoProduto, fonte, submercado, descricao])


  let filterProd = apiJson.filter((filterProd) => {
    return filterProd.UnidadeValor === UnidadeValor && filterProd.agrupador === agrupador && filterProd.AnoProduto == AnoProduto && filterProd.Fonte === fonte && filterProd.Submercado === submercado && filterProd.descricao === descricao
  })

  let list = filterProd.map((e) => {
    return {
      x: new Date(e.dataDia),
      y: [e.Abertura.toFixed(2), e.Maximo.toFixed(2), e.Minimo.toFixed(2), e.Fechamento.toFixed(2)],
    }
  })

  let listVol = filterProd.map((e) => {
    return {
      name: "Volume",
      x: new Date(e.dataDia),
      y: [e.VolumeMedio.toFixed(2)]
    }
    //onClick={() => deleteElement(dashboardId, elementId)} onClick={() => deleteElement(dashboardId, elementId)}
  })
  /* --------------------------------------------------------------------------------------------------- */

  /*  useEffect(() => {
     axios.get('https://backend-paulo-henrique21.vercel.app')
       .then((response) => {
         setApiJson2(response.data)
         //console.log(response.data)
       })
   }, [UnidadeValor2, agrupador2, AnoProduto2, fonte2, submercado2, descricao2]) */

  /*  let filterProd2 = apiJson2.filter((filterProd2) => {
     return filterProd2.UnidadeValor === UnidadeValor2 && filterProd2.agrupador === agrupador2 && filterProd2.AnoProduto == AnoProduto2 && filterProd2.Fonte === fonte2 && filterProd2.Submercado === submercado2 && filterProd2.descricao === descricao2
   })
 
   let list2 = filterProd2.map((e) => {
     return {
       x: new Date(e.dataDia),
       y: [e.Abertura.toFixed(2), e.Maximo.toFixed(2), e.Minimo.toFixed(2), e.Fechamento.toFixed(2)],
     }
   })
 
   let listVol2 = filterProd2.map((e) => {
     return {
       name: "Volume",
       x: new Date(e.dataDia),
       y: [e.VolumeMedio.toFixed(2)]
     }
     
   }) */


  return (


    <div className='container-full-graficos-1'>
      <div className='top-elements '>

        <MdDragIndicator className='draggable-handle btn-drag-1' />




        <button className='btn-filter'>
          <MdFilterAlt className='btn-filter-1' onClick={() => setOpenFilter((prev) => !prev)} />
          {openFilter &&
            <form className='selects'>
              <div className='selects-position-1'>
                <select onChange={e => setSubmercado(e.target.value)}>
                  <option value="0" disabled selected>Submercado</option>
                  {Array.from(new Set(apiJson && apiJson.map((e) => e.Submercado))).map((e) => (
                    <option>{e}</option>
                  ))}
                </select>
                <select onChange={e => setFonte(e.target.value)}>
                  <option value="0" disabled selected>Fonte</option>
                  {Array.from(new Set(apiJson.filter(e =>
                    e.Submercado === submercado
                  ).map((e) => e.Fonte))).map((e) => (
                    <option>{e}</option>
                  ))}
                </select>
                <select onChange={e => setAgrupador(e.target.value)}>
                  <option value="0" disabled selected>Agrupador</option>
                  {Array.from(new Set(apiJson.filter(e =>
                    e.Submercado === submercado
                    && e.Fonte === fonte
                  ).map((e) => e.agrupador))).map((e) => (
                    <option>{e}</option>
                  ))}
                </select>
                <select onChange={e => setAnoProduto(e.target.value)}>
                  <option value="0" disabled selected>AnoProduto</option>
                  {Array.from(new Set(apiJson.filter(e =>
                    e.Submercado === submercado
                    && e.Fonte === fonte
                    && e.agrupador === agrupador
                  ).map((e) => e.AnoProduto))).map((e) => (
                    <option>{e}</option>
                  ))}
                </select>
                <select onChange={e => setUnidadeValor(e.target.value)}>
                  <option value="0" disabled selected>UnidadeValor</option>
                  {Array.from(new Set(apiJson.filter(e =>
                    e.Submercado === submercado
                    && e.Fonte === fonte
                    && e.agrupador === agrupador
                    && e.AnoProduto == AnoProduto
                  ).map((e) => e.UnidadeValor))).map((e) => (
                    <option>{e}</option>
                  ))}
                </select>
                <select onChange={e => setDescricao(e.target.value)}>
                  <option value="0" disabled selected>Descrição</option>
                  {Array.from(new Set(apiJson.filter(e =>
                    e.Submercado === submercado
                    && e.Fonte === fonte
                    && e.agrupador === agrupador
                    && e.AnoProduto == AnoProduto
                    && e.UnidadeValor === UnidadeValor
                  ).map((e) => e.descricao))).map((e) => (
                    <option>{e}</option>
                  ))}
                </select>
              </div>
            </form>

          }
        </button>

        <p className='text-produto'>{props.type} {/* /PRODUTO 1 {descricao} / PRODUTO 2{descricao2} */}</p>


        {/* <div >
            <MdClose className="btn_trash"><div  onClick={props.teste} id={props.id}></div></MdClose>
          </div> */}




      </div>

      <div className='container-grafico-cand '>
        <CandlestickOneProd nome={descricao} candle={list} />
      </div>

      <div className='container-grafico-vol '><VolumeOneProd nome={descricao} volume={listVol} /></div>


    </div>

  )
}