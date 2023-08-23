import { useState } from 'react'
import Form from './form.js'

const Claim = ({ itemNo, field1, field2, field3, onChange1, onChange2, onChange3 }) => {

  return (
    <div className='text-gray mx-3 py-4 flex flex-col items-start w-1/4'>
      <p className='text-sm pb-2'>{`Item ${itemNo} Description`}</p>
      <Form styling="w-full h-24 p-1 pl-3 rounded-lg" field={field1} onChangeFunc={onChange1} placeholder={""} />
      <p className='text-sm py-2'>Amount to Beneficiary</p>
      <Form styling="w-full h-8 pb-1 p-1 pl-3 rounded-lg" field={field2} onChangeFunc={onChange2} placeholder={""} />
      <p className='text-sm py-2'>Beneficiary Wallet</p>
      <Form styling="w-full h-8 p-1 pl-3 rounded-lg" field={field3} onChangeFunc={onChange3} placeholder={""} />
    </div>
  )
}

export default Claim;
