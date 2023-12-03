import {useContext} from 'react'
import BoletasContext from '../context/BoletasProvider'

const useBoletas = () => {
  return useContext(BoletasContext)
}

export default useBoletas
