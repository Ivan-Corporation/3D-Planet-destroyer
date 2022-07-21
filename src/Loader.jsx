import { Html } from '@react-three/drei'
import { SolarSystemLoading } from 'react-loadingg';

export default function Loader() {
  return <Html center style={{zIndex:'500', paddingRight: '54px'}}><SolarSystemLoading color='white' size='large'/></Html>
}