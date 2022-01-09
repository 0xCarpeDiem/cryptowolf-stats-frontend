import {PieChart} from 'react-minimal-pie-chart'
import {HuntingInfo} from '@/models/HuntingInfo'
import {animalInfos} from '@/config/Game'

interface Props {
  huntingInfo: HuntingInfo
}

export function Hunting(props: Props) {
  const {huntingInfo} = props
  const data = [
    {title: 'Win', value: huntingInfo.win, color: '#52c41a'},
    {title: 'Loss', value: huntingInfo.loss, color: '#ff4d4f'},
    {title: 'Generating', value: huntingInfo.count - huntingInfo.win - huntingInfo.loss, color: '#fadb14'},
  ]
  const animal = animalInfos[huntingInfo.id]
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center">{animal.name}</h1>
      <p className="text-center">WinRate {animal.winRate.toFixed()}%</p>
      <p className="text-center">Total: {huntingInfo.count}</p>
      <p className="text-center">Generating: {huntingInfo.count - huntingInfo.win - huntingInfo.loss}</p>
      <p className="text-center">Win: {huntingInfo.win}</p>
      <p className="text-center">Loss: {huntingInfo.loss} </p>
      <p className="text-center">Current WinRate <b>{(huntingInfo.win / huntingInfo.count * 100).toFixed(2)}%</b></p>
      <PieChart
        data={data}
        lineWidth={24}
        paddingAngle={1}
        label={({dataEntry}) => `${dataEntry.title} ${dataEntry.percentage.toFixed(2)}%`}
        labelStyle={(index) => ({
          fill: data[index].color,
          fontSize: '5px',
          fontFamily: 'sans-serif',
        })}
      />
    </div>
  )
}
