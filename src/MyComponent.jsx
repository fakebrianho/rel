import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
const MyComponent = () => {
	const meshRef = useRef()
	useFrame(() => {
		meshRef.current.rotation.x += 0.1
		meshRef.current.rotation.y += 0.1
	})
	return (
		<mesh ref={meshRef}>
			<boxGeometry args={[1, 1, 1]} />
			<meshBasicMaterial color={'red'} />
		</mesh>
	)
}

export default MyComponent
