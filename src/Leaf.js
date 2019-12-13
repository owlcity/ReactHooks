import React, { useContext } from 'react';
import { NumContext } from './App'
export default function Leaf () {
  const { num } = useContext(NumContext)
  return (
    <h1>{ num }</h1>
  )
}