import React from 'react'
import { BrightTot } from '../../../components/List/BrightTot'
import Studentlist2 from '../../../components/List/Studentlist2'
import { WeakTot } from '../../../components/List/WeakTot'


function Classlist() {
  return (
    <div>
    <Studentlist2/>
    <BrightTot/>
    <WeakTot/>
    </div>
  )
}

export default Classlist