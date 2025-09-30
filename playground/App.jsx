import {
	FaEnvelope,
	FaCloudArrowUp,
	FaFileArrowUp,
	FaCircleExclamation,
} from "react-icons/fa6";
import { InputField } from "../src/components/InputField";
import { TxtArea } from "../src/components/TxtArea";
import { DropZone } from "../src/components/DropZone";
import { Loader } from "../src/components/Loader";
import { Select } from "../src/components/Select";
import { RadioInput } from "../src/components/RadioInput";
import { Modal } from "../src/components/Modal";
import { useState } from "react";

export function App() {
	const [txtArea, setTxtArea] = useState("");
	const [name, setName] = useState("");
	const [selectedOption, setSelectedOption] = useState("");
	const [genero, setGenero] = useState("");
	const [plan, setPlan] = useState("");
	const [acceptTerms, setAcceptTerms] = useState("");
	const [newsletter, setNewsletter] = useState("");
	const [singleValue, setSingleValue] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-800 via-indigo-900 to-slate-700 flex items-center justify-center flex-col p-8 gap-10">
			<div className="text-center">
				<h1 className="text-4xl font-bold text-white mb-8">
					Dialca UI Playground
				</h1>
			</div>
			{/* Input */}
			<div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-6">
				{/* Variante por defecto */}
				<InputField
					label="Default Input"
					required
					value={name}
					onChange={(e) => setName(e.target.value)}
					isPassword
					onToggleVisibility={() => console.log("toggle")}
				/>

				{/* Variante dark built-in */}
				<InputField label="Dark Variant" variant="dark" />

				{/* Custom variant que EXTIENDE default */}
				<InputField
					label="Custom Extended"
					variant="custom"
					extendDefault={true} // 👈 Hace merge con default
					variants={{
						custom: {
							normal: {
								input: "w-full p-2 rounded-full peer focus:outline-none transition-all duration-300 ease-in-out border-2 border-purple-500 focus:border-purple-700 focus:ring-purple-700 focus:ring-2", // Solo cambia border
								label: "peer-focus:text-purple-700 absolute -translate-y-1/2 -top-0.5 left-2 bg-white", // Solo cambia color label
								icon: "absolute -translate-y-1/2 top-[45%] right-5 text-purple-500",
							},
						},
					}}
					icon={<FaEnvelope />}
				/>

				{/* Custom variant COMPLETAMENTE CUSTOM */}
				<InputField
					label="Completely Custom"
					variant="radical"
					extendDefault={false} // 👈 NO hace merge, usa solo lo que defines
					variants={{
						radical: {
							normal: {
								container:
									"relative p-4 bg-gradient-to-r from-pink-500 to-violet-500 rounded-xl",
								input: "w-full p-2 bg-transparent border-0 border-b-2 border-white text-white placeholder-white outline-none",
								label: "block text-white font-bold mb-2", // Label estático, no floating
								button: "absolute right-4 top-16 text-white hover:text-gray-200",
								icon: "absolute right-4 top-16 text-white",
							},
							error: {
								input: "border-red-300",
								error: "text-red-200 text-sm mt-1",
							},
						},
					}}
					isPassword
					onToggleVisibility={() => console.log("toggle")}
				/>
			</div>
			{/* Textarea */}
			<div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-6">
				{/* Variante por defecto */}
				<TxtArea
					label="Default Textarea"
					value={txtArea}
					onChange={(e) => setTxtArea(e.target.value)}
					required
					hasCharCount
					// charCountType="bottom"
					// isLoading
					// loader={<FaSpinner size={17} color="#085691" />}
					icon={<FaEnvelope />}
					hasErrors
					errorMessage="This field is required"
				/>
				<TxtArea
					label="Comentarios"
					variant="dark"
					allowResize={true}
					hasCharCount={true}
					charCountType="bottom"
					value={txtArea}
					onChange={(e) => setTxtArea(e.target.value)}
				/>
				<TxtArea
					label="Texto largo"
					variant="resizable"
					maxLength={1000}
				/>
				<TxtArea
					label="Custom TextArea"
					variant="custom"
					variants={{
						custom: {
							normal: {
								textarea:
									"border-green-500 h-32 p-2 transition-all duration-300 ease-in-out focus:outline-none border-2 w-full peer focus:border-green-700",
								label: "peer-focus:text-green-700 -top-6 absolute left-2",
							},
						},
					}}
					hasCharCount
					charCountType="top"
				/>
			</div>
			{/* DropZone */}
			<div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md flex flex-col gap-3">
				<DropZone
					isDragging={false}
					onDragOver={(e) => e.preventDefault()}
					onDragLeave={() => {}}
					onDrop={() => {}}
					onClick={() => {}}
					// description="JPG, PNG, WEBP. Máximo 5MB por imagen"
					docType="imágenes"
					icon={<FaCloudArrowUp />}
					// hasErrors
					// errorMessage="Solo se permiten imágenes"
					// errorIcon={<FaCircleExclamation />}
				/>
				<DropZone
					isDragging={false}
					onDragOver={(e) => e.preventDefault()}
					onDragLeave={() => {}}
					onDrop={() => {}}
					onClick={() => {}}
					// description="JPG, PNG, WEBP. Máximo 5MB por imagen"
					docType="imágenes"
					icon={<FaFileArrowUp />}
					hasErrors
					errorMessage="Solo se permiten imágenes"
					errorIcon={<FaCircleExclamation />}
					variant="dark"
				/>
			</div>
			<div className="">
				<Loader />
				{/* // Loader con tamaño */}
				<Loader size="lg" />
				{/* the max value is 18 and min 5 */}
				<Loader size={5} direction="counterclockwise" speed="slow" />
				{/* // Loader con texto */}
				<Loader text="Cargando..." showText />
				{/* // Loader con estados */}
				<Loader hasErrors text="Error de carga" />
				<Loader success text="¡Completado!" />
				{/* // Loader con variantes */}
				<Loader variant="dark" size="xl" />
				<Loader variant="pulse" size={6} />
				<Loader variant="dots" />
				<Loader variant="minimal" size="sm" />
				{/* // Loader personalizado */}
				<Loader
					variant="custom"
					variants={{
						custom: {
							normal: {
								outerRing:
									"border-2 border-blue-500 animate-ping",
								content: "text-blue-500",
							},
						},
					}}
					text="Procesando..."
					showText
				/>
				{/* // Loader con children personalizado
				<Loader size="lg">
					<span className="ml-2">Subiendo archivos...</span>
				</Loader> */}
			</div>
			<div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
				<Select
					label="Select an option"
					value={selectedOption}
					options={[
						{
							value: "option1",
							label: "Option 1",
						},
						{
							value: "option2",
							label: "Option 2",
						},
					]}
					onChange={(e) => setSelectedOption(e.target.value)}
					// icon={<FaEnvelope />}
				/>
				<Select
					label="Select an option"
					value={selectedOption}
					options={[
						{
							value: "option1",
							label: "Option 1",
						},
						{
							value: "option2",
							label: "Option 2",
						},
					]}
					onChange={(e) => setSelectedOption(e.target.value)}
					icon={<FaEnvelope />}
					variant="dark"
					classes={{
						container: "mt-5",
					}}
				/>
				<Select
					label="Select an option"
					value={selectedOption}
					options={[
						{
							value: "option1",
							label: "Option 1",
						},
						{
							value: "option2",
							label: "Option 2",
						},
					]}
					onChange={(e) => setSelectedOption(e.target.value)}
					icon={<FaEnvelope />}
					variant="minimal"
					classes={{
						container: "mt-5",
					}}
				/>
			</div>
			<div className="mt-5 bg-white p-6 rounded-lg shadow-md w-full max-w-md">
				<RadioInput
					name="genero"
					value={genero}
					onChange={setGenero}
					options={[
						{ value: "M", label: "Masculino" },
						{ value: "F", label: "Femenino" },
						{
							value: "O",
							label: "Otro",
							description: "Especificar en comentarios",
						},
					]}
				/>
				<RadioInput
					name="plan"
					value={plan}
					onChange={setPlan}
					variant="card"
					options={[
						{
							value: "basic",
							label: "Plan Básico",
							description: "$9.99/mes - Funciones esenciales",
						},
						{
							value: "pro",
							label: "Plan Pro",
							description: "$19.99/mes - Funciones avanzadas",
						},
					]}
				/>
				<RadioInput
					name="terms"
					value={acceptTerms}
					onChange={setAcceptTerms}
					hasErrors={!acceptTerms}
					errorMessage="Debes aceptar los términos y condiciones"
					options={[
						{
							value: "accepted",
							label: "Acepto los términos y condiciones",
						},
					]}
				/>
				<RadioInput
					name="newsletter"
					value={newsletter}
					onChange={setNewsletter}
					variant="minimal"
					disabled
					options={[
						{ value: "yes", label: "Sí" },
						{ value: "no", label: "No" },
					]}
				/>
				<RadioInput
					name="single"
					value={singleValue}
					onChange={setSingleValue}
					label="Acepto los términos"
					description="Al marcar esta casilla aceptas nuestros términos"
				/>
			</div>
			{/* Modal */}
			<div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4">
				<button
					onClick={() => setIsOpen(true)}
					className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full"
				>
					Abrir Modal de Confirmación
				</button>
				<button
					onClick={() => setIsCustomModalOpen(true)}
					className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors w-full"
				>
					Abrir Modal Custom
				</button>
			</div>

			<Modal
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				title="¿Eliminar usuario?"
				size="md"
				animation="slideUp"
			>
				<div className="space-y-4 mt-5">
					<div className="flex items-start space-x-3">
						<div className="flex-shrink-0">
							<div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
								<FaCircleExclamation className="text-red-600" size={20} />
							</div>
						</div>
						<div className="flex-1">
							<p className="text-gray-900 font-medium">
								Esta acción no se puede deshacer
							</p>
							<p className="text-gray-600 text-sm mt-1">
								Se eliminará permanentemente el usuario "Diego17" y todos
								sus datos asociados.
							</p>
						</div>
					</div>

					<div className="bg-gray-50 p-3 rounded-lg">
						<h4 className="font-medium text-gray-900 mb-2">Se eliminarán:</h4>
						<ul className="text-sm text-gray-600 space-y-1">
							<li>• Perfil y configuración personal</li>
							<li>• 12 proyectos activos</li>
							<li>• Historial de actividad (245 entradas)</li>
							<li>• Archivos subidos (2.3 GB)</li>
						</ul>
					</div>

					<div className="flex flex-col sm:flex-row gap-3 pt-4">
						<button
							onClick={() => {
								console.log("Usuario eliminado");
								setIsOpen(false);
							}}
							className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
						>
							Sí, eliminar usuario
						</button>
						<button
							onClick={() => setIsOpen(false)}
							className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors"
						>
							Cancelar
						</button>
					</div>
				</div>
			</Modal>

			{/* Modal Custom */}
			<Modal
				isOpen={isCustomModalOpen}
				onClose={() => setIsCustomModalOpen(false)}
				title="🎉 ¡Bienvenido a Dialca UI!"
				variant="celebration"
				animation="zoom"
				extendDefault={false}
				variants={{
					celebration: {
						normal: {
							overlay: `
                                fixed inset-0 z-50 flex items-center justify-center p-4
                                bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm
                                transition-opacity duration-500 ease-out
                            `,
							container: `
                                relative w-full max-w-xl 
                                bg-gradient-to-br from-purple-50 to-pink-50
                                border-2 border-gradient-to-r from-purple-200 to-pink-200
                                rounded-2xl shadow-2xl
                                transition-all duration-500 ease-out
                            `,
							header: `
                                flex items-center justify-between p-6 pb-4
                                border-b-2 border-gradient-to-r from-purple-200 to-pink-200
                                bg-gradient-to-r from-purple-100/50 to-pink-100/50
                                rounded-t-2xl
                            `,
							title: `
                                text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 
                                bg-clip-text text-transparent
                            `,
							closeButton: `
                                p-2 text-purple-400 hover:text-purple-600 hover:bg-purple-100
                                rounded-full transition-all duration-200 transform hover:scale-110
                            `,
							content: `
                                p-6 bg-gradient-to-br from-white to-purple-50/30
                            `,
						},
						open: {
							overlay: "opacity-100",
							container: "scale-100 opacity-100 rotate-0",
						},
					},
				}}
			>
				<div className="text-center space-y-6">
					{/* Hero Section */}
					<div className="space-y-4">
						<div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
							<span className="text-3xl">🚀</span>
						</div>
						<div>
							<h3 className="text-2xl font-bold text-gray-800 mb-2">
								¡Todo listo para empezar!
							</h3>
							<p className="text-gray-600">
								Has desbloqueado todos los componentes de nuestra librería UI
							</p>
						</div>
					</div>

					{/* Features */}
					<div className="grid grid-cols-2 gap-4">
						<div className="bg-white/50 p-4 rounded-xl border border-purple-200">
							<div className="text-2xl mb-2">⚡</div>
							<h4 className="font-semibold text-gray-800 text-sm">Rápido</h4>
							<p className="text-xs text-gray-600">Optimizado para performance</p>
						</div>
						<div className="bg-white/50 p-4 rounded-xl border border-pink-200">
							<div className="text-2xl mb-2">🎨</div>
							<h4 className="font-semibold text-gray-800 text-sm">Personalizable</h4>
							<p className="text-xs text-gray-600">Variantes infinitas</p>
						</div>
						<div className="bg-white/50 p-4 rounded-xl border border-purple-200">
							<div className="text-2xl mb-2">📱</div>
							<h4 className="font-semibold text-gray-800 text-sm">Responsive</h4>
							<p className="text-xs text-gray-600">Funciona en todo dispositivo</p>
						</div>
						<div className="bg-white/50 p-4 rounded-xl border border-pink-200">
							<div className="text-2xl mb-2">♿</div>
							<h4 className="font-semibold text-gray-800 text-sm">Accesible</h4>
							<p className="text-xs text-gray-600">WCAG 2.1 compliant</p>
						</div>
					</div>

					{/* CTA */}
					<div className="space-y-3">
						<button
							onClick={() => {
								console.log("Empezando tutorial...");
								setIsCustomModalOpen(false);
							}}
							className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
						>
							🎯 Empezar Tutorial
						</button>
						<button
							onClick={() => setIsCustomModalOpen(false)}
							className="w-full text-gray-600 hover:text-gray-800 px-6 py-2 font-medium transition-colors"
						>
							Saltar por ahora
						</button>
					</div>

					{/* Footer */}
					<div className="text-xs text-gray-500 border-t border-purple-200 pt-4">
						💡 Tip: Presiona{" "}
						<kbd className="bg-gray-100 px-2 py-1 rounded">Esc</kbd> para cerrar
						modales
					</div>
				</div>
			</Modal>
		</div>
	);
}
