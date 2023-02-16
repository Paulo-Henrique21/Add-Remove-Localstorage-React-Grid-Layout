
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { MdClose, MdDragIndicator, MdFilterAlt } from 'react-icons/md'
import './style.css'
import CandlestickEx from '../ChartsComp/CandlestickEx';
import VolumeEx from '../ChartsComp/VolumeEx';

export default function CompOlhc(  props ) {

  const [submercado, setSubmercado] = useState('')
  const [submercado2, setSubmercado2] = useState('')

  const [fonte, setFonte] = useState('')
  const [fonte2, setFonte2] = useState('')

  const [agrupador, setAgrupador] = useState('')
  const [agrupador2, setAgrupador2] = useState('')

  const [AnoProduto, setAnoProduto] = useState([])
  const [AnoProduto2, setAnoProduto2] = useState([])

  const [UnidadeValor, setUnidadeValor] = useState('')
  const [UnidadeValor2, setUnidadeValor2] = useState('')

  const [descricao, setDescricao] = useState('')
  const [descricao2, setDescricao2] = useState('')

  const [apiJson, setApiJson] = useState([])
  const [apiJson2, setApiJson2] = useState([])

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

  useEffect(() => {
    axios.get('https://backend-paulo-henrique21.vercel.app')
      .then((response) => {
        setApiJson2(response.data)
        //console.log(response.data)
      })
  }, [UnidadeValor2, agrupador2, AnoProduto2, fonte2, submercado2, descricao2])

  let filterProd2 = apiJson2.filter((filterProd2) => {
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
    //onClick={() => deleteElement(dashboardId, elementId)} onClick={() => deleteElement(dashboardId, elementId)}
  })
  

  return (


    <div className='compolhc-container-element-dnd'>{/* container-full-graficos-1 */}
      <div className='compar-top-elements '>
        
          <MdDragIndicator className='draggable-handle btn-drag-1' />

        <button className='compar-btn-filter'>
          <MdFilterAlt className='compar-icon-filter' onClick={() => setOpenFilter((prev) => !prev)} />
          {openFilter &&
            <form className='selects-1'>
              
              <div className='selects-position-2'>
              <p className='title-prod'>Produto 1</p>
                <select onChange={e => setSubmercado(e.target.value)}>
                  <option value="0"disabled selected>Submercado</option>
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

              
                    

              <div className='selects-position-2'>
              <p className='title-prod-2' disabled selected>Produto 2</p>
                <select onChange={e => setSubmercado2(e.target.value)}>
                  <option value="0" disabled selected>Submercado</option>
                  {Array.from(new Set(apiJson2 && apiJson2.map((e) => e.Submercado))).map((e) => (
                    <option>{e}</option>
                  ))}
                </select>
                <select onChange={e => setFonte2(e.target.value)}>
                  <option value="0" disabled selected>Fonte</option>
                  {Array.from(new Set(apiJson2.filter(e =>
                    e.Submercado === submercado2
                  ).map((e) => e.Fonte))).map((e) => (
                    <option>{e}</option>
                  ))}
                </select>
                <select onChange={e => setAgrupador2(e.target.value)}>
                  <option value="0" disabled selected>Agrupador</option>
                  {Array.from(new Set(apiJson2.filter(e =>
                    e.Submercado === submercado2
                    && e.Fonte === fonte2
                  ).map((e) => e.agrupador))).map((e) => (
                    <option>{e}</option>
                  ))}
                </select>
                <select onChange={e => setAnoProduto2(e.target.value)}>
                  <option value="0" disabled selected>AnoProduto</option>
                  {Array.from(new Set(apiJson2.filter(e =>
                    e.Submercado === submercado2
                    && e.Fonte === fonte2
                    && e.agrupador === agrupador2
                  ).map((e) => e.AnoProduto))).map((e) => (
                    <option>{e}</option>
                  ))}
                </select>
                <select onChange={e => setUnidadeValor2(e.target.value)}>
                  <option value="0" disabled selected>UnidadeValor</option>
                  {Array.from(new Set(apiJson2.filter(e =>
                    e.Submercado === submercado2
                    && e.Fonte === fonte2
                    && e.agrupador === agrupador2
                    && e.AnoProduto == AnoProduto2
                  ).map((e) => e.UnidadeValor))).map((e) => (
                    <option>{e}</option>
                  ))}
                </select>
                <select onChange={e => setDescricao2(e.target.value)}>
                  <option value="0" disabled selected>Descrição</option>
                  {Array.from(new Set(apiJson2.filter(e =>
                    e.Submercado === submercado2
                    && e.Fonte === fonte2
                    && e.agrupador === agrupador2
                    && e.AnoProduto == AnoProduto2
                    && e.UnidadeValor === UnidadeValor2
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
      <CandlestickEx nome={descricao} nome2={descricao2} candle={list} candle2={list2} volume={listVol} volume2={listVol2}/>
      
      </div>

      <div className='container-grafico-vol '><VolumeEx nome={descricao} volume={listVol} volume2={listVol2}/></div>
      

    </div>

  )
}