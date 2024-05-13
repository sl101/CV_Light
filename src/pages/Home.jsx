import { Canvas } from "@react-three/fiber"
import { Suspense, useState } from "react"
import Loader from "../components/Loader"
import { Bird, Island, Plane, Sky } from "../models";
import { HomeInfo } from "../components";


const Home = () => {

	const [isRotating, setIsRotating] = useState(false);
	const [currentStage, setCurrentStage] = useState(1);

	const adjustBiplaneForScreenSize = () => {
		let screenScale, screenPosition;
		let screenRotation = [0, 20.1, 0];

		// If screen width is less than 768px, adjust the scale and position
		if (window.innerWidth < 768) {
			screenScale = [1.5, 1.5, 1.5];
			screenPosition = [-1, -2, 0.8];
		} else {
			screenScale = [3, 3, 3];
			screenPosition = [-3, -3, -1.5];
		}

		return [screenScale, screenPosition, screenRotation];
	};

	const adjustIslandForScreenSize = () => {
		let screenScale = null;
		const screenPosition = [0, -6.5, -43.4];
		let rotation = [0.1, 4.7077, 0];

		if (window.innerWidth < 768) {
			screenScale = [0.9, 0.9, 0.9];
		} else {
			screenScale = [1, 1, 1];
		}

		return [screenScale, screenPosition, rotation];
	};

	const [biplaneScale, biplanePosition, biplaneRotation] = adjustBiplaneForScreenSize();
	const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

	return (
		<section className="w-full h-screen relative">

			<div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
				{currentStage && <HomeInfo currentStage={currentStage} />}
			</div>
			<Canvas
				className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"
					}`}
				camera={{ near: 0.1, far: 1000 }}
			>
				<Suspense fallback={<Loader />}>
					<directionalLight position={[1, 1, 1]} intensity={2} />
					<ambientLight intensity={0.5} />
					{/*<pointLight position={[10, 5, 10]} intensity={2} />*/}
					{/*<spotLight 
					  position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}/>*/}
					<hemisphereLight
						skyColor='#b1e1ff'
						groundColor='#000000'
						intensity={1}
					/>
					<Bird />
					<Sky isRotating={isRotating} />
					<Island
						isRotating={isRotating}
						setIsRotating={setIsRotating}
						setCurrentStage={setCurrentStage}
						position={islandPosition}
						rotation={islandRotation}
						scale={islandScale}
					/>
					<Plane
						isRotating={isRotating}
						position={biplanePosition}
						rotation={biplaneRotation}
						scale={biplaneScale}
					/>
				</Suspense>
			</Canvas>
		</section>
	)
}

export default Home
