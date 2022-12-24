import React from 'react'
import CTA from '../components/sections/Recruitment/CTA'
import Departments from '../components/sections/Recruitment/Departments'
import Landing from '../components/sections/Recruitment/Landing'
import Perks from '../components/sections/Recruitment/Perks'
import Form from '../components/sections/Recruitment/form'
export default function Recruitment() {
  return (
    <div>
        <Landing />
        <Perks />
        <Departments /> 
        <Form />
        {/* <CTA /> */}
    </div>
  )
}
