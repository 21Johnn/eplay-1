import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'

import {
  useGetActionQuery,
  useGetRpgQuery,
  useGetSportsQuery,
  useGetSimulationQuery,
  useGetFightQuery
} from '../../services/api'

import { Game } from '../Home'

const Categories = () => {
  const { data: acao } = useGetActionQuery()
  const { data: rpg } = useGetRpgQuery()
  const { data: esportes } = useGetSportsQuery()
  const { data: simulacao } = useGetSimulationQuery()
  const { data: luta } = useGetFightQuery()

  if (acao && rpg && esportes && simulacao && luta) {
    return (
      <>
        <ProductsList games={acao} title="Ação" background="black" />
        <ProductsList games={esportes} title="Esportes" background="gray" />
        <ProductsList games={simulacao} title="Simulacao" background="black" />
        <ProductsList games={luta} title="Luta" background="gray" />
        <ProductsList games={rpg} title="Rpg" background="black" />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
