import Header from './Components/Header';
import Card from './Components/Card';
import Body from './Components/Body';
import Foot from './Components/Foot';
import data from './data'

export default function App() {
  const cardElements = data.map((e)=>{
    return <Card
      key={e.id}
      {...e}
    />
  })
  return (
    <div>
      <Header />
      <Body />
      {cardElements}
      <Foot />
    </div>
  )
}
