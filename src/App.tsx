import React, { useState, useCallback } from 'react'
import { Select, DefaultXRControllers, ARCanvas } from '@react-three/xr'
import { Text } from '@react-three/drei/Text'

import './App.css'

function Box({ color, size, scale, children, ...rest }: any) {
  return (
    <mesh scale={scale} {...rest}>
      <boxBufferGeometry attach='geometry' args={size} />
      <meshPhongMaterial attach='material' color={color} />
      {children}
    </mesh>
  )
}

function Button(props: any) {
  const [color, setColor] = useState<any>('blue')

  const onSelect = useCallback(() => {
    setColor((Math.random() * 0xffffff) | 0)
  }, [setColor])

  return (
    <Select onSelect={onSelect}>
      <Box
        position={[0, -3, -1]}
        color={color}
        scale={[0.5, 0.5, 0.5]}
        size={[0.4, 0.1, 0.1]}
        {...props}
      >
        <Text
          position={[0, 0, 0.06]}
          fontSize={0.05}
          color='#000'
          anchorX='center'
          anchorY='middle'
        >
          NoobSaiyan
        </Text>
      </Box>
    </Select>
  )
}

const App = () => {
  return (
    <ARCanvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Button position={[0, 0.1, -0.2]} />
      <DefaultXRControllers />
    </ARCanvas>
  )
}
export default App
