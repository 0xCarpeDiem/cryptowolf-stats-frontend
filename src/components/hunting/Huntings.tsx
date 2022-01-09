import {HuntingInfos} from '@/models/HuntingInfo'
import {Hunting} from '@/components/hunting/Hunting'

interface Props {
  huntingInfos: HuntingInfos
}

export function Huntings(props: Props) {
  const {huntingInfos} = props
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {huntingInfos.map(info => (
        <div className="" key={info.id.toString()}>
          <Hunting huntingInfo={info}/>
        </div>
      ))}
    </div>
  )
}
