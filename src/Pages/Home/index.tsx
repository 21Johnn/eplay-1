import Game from '../../Models/Game'
import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import sw from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Win',
    image: resident,
    infos: ['10%', 'R$250,00']
  },
  {
    id: 2,
    category: 'ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Diablo',
    system: 'Win',
    image: diablo,
    infos: ['10%', 'R$190,00']
  },
  {
    id: 3,
    category: 'ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Zelda',
    system: 'Win',
    image: zelda,
    infos: ['10%', 'R$299,00']
  },
  {
    id: 4,
    category: 'ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Star Wars',
    system: 'Win',
    image: sw,
    infos: ['10%', 'R$250,00']
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Win',
    image: resident,
    infos: ['10%', 'R$250,00']
  },
  {
    id: 6,
    category: 'ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Diablo',
    system: 'Win',
    image: diablo,
    infos: ['10%', 'R$190,00']
  },
  {
    id: 7,
    category: 'ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Zelda',
    system: 'Win',
    image: zelda,
    infos: ['10%', 'R$299,00']
  },
  {
    id: 8,
    category: 'ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Star Wars',
    system: 'Win',
    image: sw,
    infos: ['10%', 'R$250,00']
  }
]

const Home = () => (
  <>
    <Banner></Banner>
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
