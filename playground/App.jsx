import {
	FaEnvelope,
	FaCloudArrowUp,
	FaFileArrowUp,
	FaCircleExclamation,
	FaPen,
	FaUser,
	FaCheck,
	FaSpinner,
} from "react-icons/fa6";
import { InputField } from "../src/components/InputField";
import { TxtArea } from "../src/components/TxtArea";
import { DropZone } from "../src/components/DropZone";
import { Loader } from "../src/components/Loader";
import { Select } from "../src/components/Select";
import { RadioInput } from "../src/components/RadioInput";
import { Modal } from "../src/components/Modal";
import { Button } from "../src/components/Button";
import { Checkbox } from "../src/components/Checkbox";
import { Switch } from "../src/components/Switch";
import { SearchableSelect } from "../src/components/SearchableSelect";
import { useState } from "react";
import { FaMagic } from "react-icons/fa";
import { CiSun } from "react-icons/ci";
import { GoMoon } from "react-icons/go";

export function App() {
	const [txtArea, setTxtArea] = useState("");
	const [name, setName] = useState("");
	const [show, setShow] = useState(false);
	const [isDragging, setIsDragging] = useState(false);
	const [droppedFiles, setDroppedFiles] = useState([]);
	const [hasDropError, setHasDropError] = useState(false);
	const [selectedOption, setSelectedOption] = useState("");
	const [genero, setGenero] = useState("");
	const [plan, setPlan] = useState("");
	const [acceptTerms, setAcceptTerms] = useState("");
	const [newsletter, setNewsletter] = useState("");
	const [singleValue, setSingleValue] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [isChecked, setIsChecked] = useState(false);
	const [isIndeterminate, setIsIndeterminate] = useState(true);
	const [hasError, setHasError] = useState(false);
	const [switchValue, setSwitchValue] = useState(false);
	const [notifications, setNotifications] = useState(false);
	const [darkMode, setDarkMode] = useState(false);
	const [dangerMode, setDangerMode] = useState(false);
	const [loadingSwitch, setLoadingSwitch] = useState(false);

	// NUEVO: estado y opciones para SearchableSelect
	const [searchValue, setSearchValue] = useState("");
	const [country, setCountry] = useState("");
	const [fruit, setFruit] = useState("");

	const searchableOptions = [
		{ value: "apple", label: "Apple", icon: <span>🍎</span> },
		{ value: "banana", label: "Banana", icon: <span>🍌</span> },
		{ value: "orange", label: "Orange", icon: <span>🍊</span> },
		{ value: "grape", label: "Grape", icon: <span>🍇</span> },
		{ value: "watermelon", label: "Watermelon", icon: <span>🍉</span> },
		{ value: "strawberry", label: "Strawberry", icon: <span>🍓</span> },
		{ value: "pineapple", label: "Pineapple", icon: <span>🍍</span> },
	];

	const countryOptions = [
		{ value: "us", label: "United States" },
		{ value: "uk", label: "United Kingdom" },
		{ value: "ca", label: "Canada" },
		{ value: "au", label: "Australia" },
		{ value: "de", label: "Germany" },
		{ value: "fr", label: "France" },
		{ value: "es", label: "Spain" },
		{ value: "it", label: "Italy" },
		{ value: "jp", label: "Japan", disabled: true },
	];

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
								input: "w-full p-2! rounded-full! peer focus:outline-none transition-all duration-300 ease-in-out border-2 border-purple-500! focus:border-purple-700! focus:ring-purple-700! focus:ring-2!", // Solo cambia border
								label: "peer-focus:text-purple-700! peer-focus:text-base! absolute -top-0.5! left-2! bg-white", // Solo cambia color label
								icon: "absolute top-[45%]! right-5! text-purple-500!",
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
					// loader={<FaSpinner className="text-2xl" color="#085691" />}
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
					variant="minimal"
					maxLength={1000}
				/>
				<TxtArea
					label="Epic Gaming TextArea"
					variant="gaming"
					extendDefault={false}
					variants={{
						gaming: {
							normal: {
								container: `
                    relative p-6 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 
                    rounded-2xl border-2 border-cyan-500/30 shadow-2xl overflow-hidden
                    before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent 
                    before:via-cyan-400/10 before:to-transparent before:translate-x-[-200%] 
                    hover:before:translate-x-[200%] before:transition-transform before:duration-1500
                    hover:border-cyan-400/60 transition-all duration-300
                    shadow-cyan-500/20 hover:shadow-cyan-500/40
                `,
								textarea: `
                    w-full h-32 bg-gray-800/50 backdrop-blur-sm border-2 border-cyan-500/40 
                    rounded-xl p-4 text-cyan-100 placeholder-cyan-300/60 resize-none
                    focus:outline-none focus:border-cyan-300 focus:ring-4 focus:ring-cyan-500/30
                    transition-all duration-300 ease-out font-mono text-sm leading-relaxed
                    shadow-inner shadow-gray-900/50 hover:shadow-lg hover:shadow-cyan-500/20
                    peer backdrop-saturate-150
                `,
								label: `
                    absolute top-2 left-6 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 
                    text-white font-bold text-sm rounded-full shadow-lg z-10
                    transition-all duration-300 ease-out
                    peer-focus:scale-110 peer-focus:shadow-xl peer-focus:shadow-cyan-500/50
                    drop-shadow-lg border border-cyan-300/30
                `,
								charCount: `
                    absolute bottom-2 right-4 text-cyan-300/80 text-xs font-mono
                    bg-gray-800/80 px-2 py-1 rounded-md backdrop-blur-sm
                    border border-cyan-500/20
                `,
								icon: `
                    absolute top-4 right-4 text-cyan-400 text-xl z-10
                    hover:text-cyan-300 transition-colors duration-300 drop-shadow-lg
                `,
								error: `
                    flex items-center gap-2 mt-3 text-red-400 text-sm font-medium
                    bg-red-900/20 p-2 rounded-lg border border-red-500/30
                    backdrop-blur-sm
                `,
							},
							focus: {
								container: `
                    border-cyan-300/80 shadow-2xl shadow-cyan-500/50
                    before:animate-pulse
                `,
								textarea: `
                    border-cyan-300 bg-gray-800/70 text-cyan-50
                    shadow-xl shadow-cyan-500/30
                `,
								label: `
                    scale-110 shadow-2xl shadow-cyan-500/60
                    bg-gradient-to-r from-cyan-400 to-blue-400
                `,
							},
							error: {
								container: `
                    border-red-500/50 shadow-red-500/30
                `,
								textarea: `
                    border-red-500/60 focus:border-red-400 focus:ring-red-500/30
                `,
								label: `
                    bg-gradient-to-r from-red-500 to-pink-500
                `,
							},
						},
					}}
					hasCharCount
					charCountType="bottom"
					maxLength={500}
					placeholder="Enter your epic gaming message here..."
					icon={<FaMagic />}
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
					icon={<FaCloudArrowUp />}
					// hasErrors
					// errorMessage="Solo se permiten imágenes"
					// errorIcon={<FaCircleExclamation />}
				/>
				<div className="bg-gray-800 rounded-md p-2">
					<DropZone
						isDragging={false}
						onDragOver={(e) => e.preventDefault()}
						onDragLeave={() => {}}
						onDrop={() => {}}
						onClick={() => {}}
						// description="JPG, PNG, WEBP. Máximo 5MB por imagen"
						icon={<FaFileArrowUp />}
						hasErrors
						errorMessage="Solo se permiten imágenes"
						errorIcon={<FaCircleExclamation />}
						variant="dark"
					/>
				</div>
				<DropZone
					isDragging={isDragging}
					onDragOver={(e) => {
						e.preventDefault();
						console.log("🎯 Dragging over the zone!");
						setIsDragging(true);
					}}
					onDragLeave={(e) => {
						console.log("👋 Left the drop zone");
						setIsDragging(false);
					}}
					onDrop={(e) => {
						e.preventDefault();
						setIsDragging(false);
						const files = Array.from(e.dataTransfer.files);
						console.log("📂 Files dropped:", files);

						// Simular validación de archivos
						const validFiles = files.filter(
							(file) =>
								file.type.startsWith("image/") &&
								file.size <= 5 * 1024 * 1024
						);

						if (validFiles.length !== files.length) {
							console.log("❌ Some files were invalid");
							setHasDropError(true);
						} else {
							console.log("✅ All files are valid!");
							setHasDropError(false);
							// Aquí procesarías los archivos
						}

						setDroppedFiles(validFiles);
					}}
					onClick={() => {
						console.log("📁 Opening file picker...");
						// Simular apertura de file picker
						const input = document.createElement("input");
						input.type = "file";
						input.multiple = true;
						input.accept = "image/*";
						input.onchange = (e) => {
							const files = Array.from(e.target.files || []);
							console.log("📁 Files selected:", files);
							setDroppedFiles(files);
						};
						input.click();
					}}
					variant="cyberpunk"
					extendDefault={false}
					hasErrors={hasDropError}
					errorMessage={
						hasDropError
							? "Solo se permiten imágenes menores a 5MB"
							: ""
					}
					errorIcon={<FaCircleExclamation />}
					variants={{
						cyberpunk: {
							normal: {
								container: `
                    relative group bg-gradient-to-br from-gray-900 via-purple-900 to-black
                    rounded-2xl border-2 border-cyan-400/30 p-8 overflow-hidden
                    before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent 
                    before:via-cyan-400/20 before:to-transparent before:translate-x-[-100%]
                    hover:before:translate-x-[100%] before:transition-transform before:duration-1000
                    hover:border-cyan-400/60 transition-all duration-300 shadow-lg shadow-cyan-500/20
                    cursor-pointer min-h-48 flex flex-col items-center justify-center
                    font-mono text-center
                `,
								icon: `
                    text-6xl mb-4 text-cyan-400 transition-all duration-300
                    group-hover:text-cyan-300 group-hover:scale-110 drop-shadow-lg
                    animate-pulse flex items-center justify-center
                `,
								title: `
                    text-cyan-100 font-bold text-xl mb-2 group-hover:text-white 
                    transition-colors duration-300 drop-shadow-lg
                    bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent
                `,
								description: `
                    text-cyan-300/80 text-sm group-hover:text-cyan-200 
                    transition-colors duration-300 font-mono tracking-wide
                `,
								error: `
                    flex items-center gap-2 mt-4 text-red-400 text-sm font-medium
                    bg-red-900/20 p-3 rounded-lg border border-red-500/30
                    backdrop-blur-sm font-mono
                `,
							},
							dragging: {
								container: `
                    border-cyan-300/80 shadow-2xl shadow-cyan-500/50
                    bg-gradient-to-br from-cyan-900/20 via-purple-900/30 to-black/80
                    scale-105 before:animate-pulse
                `,
								icon: `
                    text-cyan-300 scale-125 animate-bounce drop-shadow-xl
                `,
								title: `
                    text-white scale-110 animate-pulse
                `,
								description: `
                    text-cyan-200 animate-pulse
                `,
							},
							error: {
								container: `
                    border-red-500/50 shadow-red-500/30
                `,
								icon: `
                    text-red-400
                `,
								title: `
                    bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent
                `,
								description: `
                    text-red-300/80
                `,
							},
						},
					}}
					icon={<FaCloudArrowUp />}
					title={
						<>
							🚀{" "}
							<span className="font-mono">CYBER_UPLOAD.exe</span>
							<br />
							<span className="text-base">
								Drag files into the matrix
							</span>
						</>
					}
					description="Supported formats: JPG, PNG, WEBP • Max size: 5MB per file"
				>
					{/* Contenido personalizado cuando hay archivos */}
					{droppedFiles.length > 0 && (
						<div className="mt-6 w-full">
							<div className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-4 backdrop-blur-sm">
								<h4 className="text-cyan-300 font-bold mb-3 font-mono">
									📁 UPLOADED FILES [{droppedFiles.length}]
								</h4>
								<div className="space-y-2 max-h-32 overflow-y-auto">
									{droppedFiles.map((file, index) => (
										<div
											key={index}
											className="flex items-center gap-3 text-sm bg-gray-800/50 p-2 rounded border border-cyan-500/20"
										>
											<span className="text-cyan-400">
												📄
											</span>
											<span className="text-cyan-100 font-mono flex-1 truncate">
												{file.name}
											</span>
											<span className="text-cyan-400/80 font-mono text-xs">
												{(file.size / 1024).toFixed(1)}
												KB
											</span>
										</div>
									))}
								</div>
								<button
									onClick={(e) => {
										e.stopPropagation();
										setDroppedFiles([]);
										setHasDropError(false);
										console.log("🗑️ Files cleared");
									}}
									className="mt-3 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 
                             border border-red-500/50 rounded text-red-300 text-sm 
                             transition-colors duration-200 font-mono"
								>
									🗑️ CLEAR_FILES
								</button>
							</div>
						</div>
					)}
				</DropZone>
			</div>
			{/* Loader */}
			<div className="">
				<Loader />
				{/* // Loader con tamaño */}
				<Loader size="lg" disabled />
				{/* the max value is 18 and min 5 */}
				<Loader direction="counterclockwise" speed="slow" />
				{/* // Loader con texto */}
				<Loader text="Cargando..." showText />
				{/* // Loader con estados */}
				<Loader hasErrors text="Error de carga" />
				<Loader success text="¡Completado!" />
				{/* // Loader con variantes */}
				<Loader variant="dark" size="xl" />
				<Loader variant="pulse" size="sm" />
				<Loader variant="dots" />
				<Loader variant="minimal" size="sm" />
				{/* // Loader personalizado */}
				<Loader
					variant="custom"
					extendDefault={false}
					size={5}
					direction="counterclockwise"
					speed="slow"
					variants={{
						custom: {
							normal: {
								container: "flex flex-col items-center gap-2",
								outerRing:
									"w-8 h-8 border-4 border-purple-200 border-t-purple-600! rounded-full animate-spin",
								innerRing: "hidden!",
								content: "text-purple-600! font-bold text-lg",
							},
						},
					}}
					text="Custom Purple"
					showText
				/>
				{/* // Loader con children personalizado
				<Loader size="lg">
					<span className="ml-2">Subiendo archivos...</span>
				</Loader> */}
			</div>
			{/* Select */}
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
					isLoading
					loadingIcon={<FaSpinner className="text-2xl" />}
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
			{/* RadioInput */}
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
				<div className="space-y-3 bg-gray-800 p-4 rounded-md">
					<RadioInput
						name="single"
						value={singleValue}
						onChange={setSingleValue}
						label="Acepto los términos"
						variant="dark"
						description="Al marcar esta casilla aceptas nuestros términos"
					/>
				</div>
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
				animation="slide-up"
			>
				<div className="space-y-4 mt-5">
					<div className="flex items-start space-x-3">
						<div className="flex-shrink-0">
							<div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
								<FaCircleExclamation
									className="text-red-600"
									size={20}
								/>
							</div>
						</div>
						<div className="flex-1">
							<p className="text-gray-900 font-medium">
								Esta acción no se puede deshacer
							</p>
							<p className="text-gray-600 text-sm mt-1">
								Se eliminará permanentemente el usuario
								"Diego17" y todos sus datos asociados.
							</p>
						</div>
					</div>

					<div className="bg-gray-50 p-3 rounded-lg">
						<h4 className="font-medium text-gray-900 mb-2">
							Se eliminarán:
						</h4>
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
				extendDefault={false}
				size="lg"
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
                                border-2 border-pink-200
                                rounded-2xl shadow-2xl
                                transition-all duration-500 ease-out
                            `,
							header: `
                                flex items-center justify-between p-6 pb-4
                                border-b-2 border-pink-200
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
						lg: {
							container: "max-w-3xl!",
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
								Has desbloqueado todos los componentes de
								nuestra librería UI
							</p>
						</div>
					</div>

					{/* Features */}
					<div className="grid grid-cols-2 gap-4">
						<div className="bg-white/50 p-4 rounded-xl border border-purple-200">
							<div className="text-2xl mb-2">⚡</div>
							<h4 className="font-semibold text-gray-800 text-sm">
								Rápido
							</h4>
							<p className="text-xs text-gray-600">
								Optimizado para performance
							</p>
						</div>
						<div className="bg-white/50 p-4 rounded-xl border border-pink-200">
							<div className="text-2xl mb-2">🎨</div>
							<h4 className="font-semibold text-gray-800 text-sm">
								Personalizable
							</h4>
							<p className="text-xs text-gray-600">
								Variantes infinitas
							</p>
						</div>
						<div className="bg-white/50 p-4 rounded-xl border border-purple-200">
							<div className="text-2xl mb-2">📱</div>
							<h4 className="font-semibold text-gray-800 text-sm">
								Responsive
							</h4>
							<p className="text-xs text-gray-600">
								Funciona en todo dispositivo
							</p>
						</div>
						<div className="bg-white/50 p-4 rounded-xl border border-pink-200">
							<div className="text-2xl mb-2">♿</div>
							<h4 className="font-semibold text-gray-800 text-sm">
								Accesible
							</h4>
							<p className="text-xs text-gray-600">
								WCAG 2.1 compliant
							</p>
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
						<kbd className="bg-gray-100 px-2 py-1 rounded">Esc</kbd>{" "}
						para cerrar modales
					</div>
				</div>
			</Modal>

			{/* Buttons */}
			<div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4">
				<h3 className="text-lg font-semibold text-gray-900 mb-4">
					Buttons
				</h3>

				{/* Botones básicos */}
				<div className="space-y-3">
					<Button
						// loading
						onClick={() => console.log("Default clicked")}
					>
						Default Button
					</Button>

					<Button
						variant="secondary"
						icon={<FaUser />}
						onClick={() => console.log("Secondary clicked")}
					>
						Secondary with Icon
					</Button>

					<Button
						variant="danger"
						size="lg"
						onClick={() => console.log("Danger clicked")}
					>
						Large Danger Button
					</Button>

					<Button
						variant="success"
						icon={<FaCheck />}
						iconPosition="right"
						onClick={() => console.log("Success clicked")}
					>
						Success Button
					</Button>
				</div>

				{/* Botones con estados */}
				<div className="space-y-3">
					<Button
						variant="outline"
						loading={loading}
						loadingText="Processing..."
						loadingIcon={<Loader size="sm" />}
						onClick={() => {
							setLoading(true);
							setTimeout(() => setLoading(false), 2000);
						}}
					>
						{loading ? "Processing..." : "Click to Load"}
					</Button>

					<Button disabled variant="default">
						Disabled Button
					</Button>

					<Button
						variant="ghost"
						size="sm"
						icon={<FaPen />}
						onClick={() => console.log("Edit clicked")}
					>
						Edit
					</Button>

					<Button
						variant="minimal"
						onClick={() => console.log("Link clicked")}
					>
						Link Button
					</Button>
				</div>

				{/* Botón completamente personalizado */}
				<Button
					variant="neon"
					extendDefault={false}
					variants={{
						neon: {
							normal: {
								container: `
									cursor-pointer font-bold transition-all duration-300 ease-in-out
									flex items-center justify-center gap-3 px-8 py-4 rounded-xl
									bg-gradient-to-r from-purple-600 to-pink-600 text-white
									shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40
									hover:scale-105 active:scale-95 border-2 border-transparent
									hover:border-white/20 disabled:opacity-50 disabled:cursor-not-allowed
									disabled:hover:scale-100 disabled:hover:shadow-purple-500/25
								`,
								content: "text-white font-bold",
								icon: "text-white drop-shadow-sm",
							},
							loading: {
								container: "animate-pulse cursor-wait",
							},
						},
					}}
					icon={<FaMagic />}
					onClick={() => console.log("Neon clicked")}
				>
					Neon Button
				</Button>
			</div>

			{/* Checkboxes */}
			<div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4">
				<h3 className="text-lg font-semibold text-gray-900 mb-4">
					Checkboxes
				</h3>

				{/* Checkbox básico */}
				<Checkbox checked={isChecked} onCheckedChange={setIsChecked} />

				{/* Checkbox indeterminado */}
				<Checkbox
					className="ml-3"
					checked={isIndeterminate}
					indeterminate={true}
					onCheckedChange={setIsIndeterminate}
					label="Select all items"
					description="Some items are selected"
					size="lg"
				/>

				{/* Checkbox con error */}
				<Checkbox
					checked={hasError}
					onCheckedChange={setHasError}
					hasErrors={true}
					errorMessage="This field is required"
					label="Required field"
				/>

				{/* Checkbox deshabilitado */}
				<Checkbox
					checked={true}
					disabled={true}
					label="Disabled checkbox"
					description="This option is not available"
				/>

				{/* Variante minimal */}
				<Checkbox
					checked={isChecked}
					onChange={setIsChecked}
					variant="minimal"
					label="Minimal style"
				/>

				{/* Variante card */}
				<Checkbox
					checked={isChecked}
					onCheckedChange={setIsChecked}
					variant="card"
					label="Premium Plan"
					description="$19.99/month - All features included"
				/>

				{/* Variante switch */}
				<Checkbox
					checked={switchValue}
					onCheckedChange={setSwitchValue}
					variant="switch"
					label="Enable notifications"
					description="Get updates about your account"
				/>

				{/* Checkbox completamente personalizado */}
				<Checkbox
					checked={isChecked}
					onCheckedChange={setIsChecked}
					variant="gaming"
					extendDefault={false}
					variants={{
						gaming: {
							normal: {
								container: `
                                    relative flex gap-4 p-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 
                                    rounded-xl border border-blue-500/30 cursor-pointer group overflow-hidden
                                    hover:border-blue-400/50 transition-all duration-300
                                    before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent 
                                    before:via-blue-500/10 before:to-transparent before:translate-x-[-100%] 
                                    hover:before:translate-x-[100%] before:transition-transform before:duration-1000
                                `,
								wrapper: "relative z-10",
								checkbox: `
                                    relative w-8 h-8 rounded-lg transition-all duration-300 ease-out
                                    group-hover:scale-110 group-hover:rotate-3 group-active:scale-95
                                `,
								background: `
                                    absolute inset-0 rounded-lg border-2 transition-all duration-300
                                    bg-gradient-to-br from-gray-800 to-gray-700 border-blue-400/50
                                    shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40
                                    group-hover:shadow-xl
                                `,
								icon: `
                                    absolute inset-0 m-auto w-5 h-5 text-blue-300 transition-all duration-500 ease-out
                                    scale-0 opacity-0
                                `,
								label: `
                                    text-blue-100 font-bold text-lg group-hover:text-white transition-colors duration-300
                                    drop-shadow-lg
                                `,
								description: `
                                    text-blue-300/80 text-sm mt-1 group-hover:text-blue-200 transition-colors duration-300
                                `,
							},
							checked: {
								background: `
                                    bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 
                                    border-blue-300 shadow-2xl shadow-blue-500/60
                                    animate-pulse
                                `,
								icon: `
                                    scale-100 rotate-0 opacity-100 text-white drop-shadow-xl
                                    animate-bounce
                                `,
								container: `
                                    border-blue-400/80 shadow-lg shadow-blue-500/30
                                `,
							},
							hover: {
								checkbox: "scale-110 rotate-3",
								background: "shadow-2xl shadow-blue-500/50",
							},
						},
					}}
					label="🎮 Gaming Mode"
					description="Enable epic gaming features with RGB lighting"
				/>
			</div>
			{/* Switches */}
			<div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4">
				<h3 className="text-lg font-semibold text-gray-900 mb-4">
					Switches
				</h3>

				{/* Switch básico */}
				<Switch
					enabled={notifications}
					onToggle={setNotifications}
					label="Enable Notifications"
					description="Get updates about your account activity"
				/>

				{/* Switch con confirmación */}
				<Switch
					enabled={dangerMode}
					onToggle={setDangerMode}
					label="🚨 Danger Mode"
					description="Enable destructive actions"
					variant="default"
					hasErrors={dangerMode}
					errorMessage="Be careful with this setting!"
					confirmationMessage="Are you sure you want to enable danger mode?"
				/>

				{/* Switch variante iOS */}
				<Switch
					enabled={darkMode}
					onToggle={setDarkMode}
					label="Dark Mode"
					description="Switch to dark theme"
					variant="ios"
					size="lg"
				/>

				{/* Switch minimal */}
				<Switch
					enabled={notifications}
					onToggle={setNotifications}
					label="Minimal Switch"
					variant="minimal"
					size="sm"
				/>

				{/* Switch con iconos */}
				<Switch
					enabled={notifications}
					onToggle={setNotifications}
					label="📱 Push Notifications"
					enabledIcon={<FaCheck />}
					disabledIcon={<span className="text-gray-400">✗</span>}
					variant="large"
				/>

				{/* Switch cargando */}
				<Switch
					enabled={loadingSwitch}
					onToggle={setLoadingSwitch}
					label="Processing..."
					loading={true}
					disabled={true}
				/>

				{/* Switch variante neon */}
				<Switch
					enabled={darkMode}
					onToggle={setDarkMode}
					label="⚡ Neon Mode"
					description="Activate cyberpunk theme"
					variant="larga"
				/>

				{/* Switch variante card */}
				<Switch
					enabled={notifications}
					onToggle={setNotifications}
					label="💎 Premium Features"
					description="$9.99/month - Unlock all features"
					variant="card"
				/>

				{/* Switch variante toggle con texto */}
				<Switch
					enabled={darkMode}
					onToggle={setDarkMode}
					label="Power Toggle"
					variant="toggle"
					size="lg"
				/>

				<Switch
					enabled={darkMode}
					onToggle={setDarkMode}
					variant="darkMode"
					extendDefault={false}
					variants={{
						darkMode: {
							normal: {
								container: "inline-flex",
								wrapper: "relative cursor-pointer",
								track: `
									relative w-16 h-8 rounded-full transition-all duration-500 ease-in-out
									bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400
									shadow-inner shadow-blue-800/20
									cursor-pointer
								`,
								thumb: `
									absolute top-0.5 left-0.5 w-7 h-7 bg-white rounded-full 
									shadow-lg transition-all duration-500 ease-out transform
									flex items-center justify-center bg-gradient-to-br from-yellow-300 via-red-400 to-pink-400
								`,
								trackOverlay: `
									absolute inset-0 rounded-full transition-all duration-500 z-0
								`,
								thumbInner: "hidden",
							},
							enabled: {
								track: `
									border-gray-600/50 shadow-gray-800/30 
								`,
								thumb: `
									translate-x-8 border-gray-300
									bg-gradient-to-tr from-slate-600! via-gray-800! to-gray-900!
									shadow-gray-700/50
								`,
								trackOverlay:
									"opacity-100 bg-gradient-to-r from-gray-600 to-gray-900",
							},
							hover: {
								track: "scale-105 shadow-lg",
							},
						},
					}}
					enabledIcon={<GoMoon className="text-gray-200" />}
					disabledIcon={<CiSun className="text-gray-200" />}
				/>
			</div>
			{/* Searchable Select */}
			<div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4">
				<h3 className="text-lg font-semibold text-gray-900 mb-4">
					Searchable Selects
				</h3>

				{/* SearchableSelect básico */}
				<SearchableSelect
					options={searchableOptions}
					value={searchValue}
					isClearable
					onChange={setSearchValue}
					placeholder="Search fruits..."
					label="Select a Fruit"
					classes={{
						clearButton: "text-[#085691]! text-xl",
					}}
				/>

				{/* SearchableSelect con error */}
				<SearchableSelect
					options={countryOptions}
					value={country}
					onChange={setCountry}
					placeholder="Search country..."
					label="Country"
					hasErrors={true}
					errorMessage="Please select a country"
				/>

				{/* SearchableSelect variante minimal */}
				<SearchableSelect
					options={searchableOptions}
					value={fruit}
					onChange={setFruit}
					placeholder="Type to search..."
					variant="minimal"
					size="sm"
				/>
				<div className="p-4 bg-gray-800 rounded-lg">
					{/* SearchableSelect variante dark */}
					<SearchableSelect
						options={countryOptions}
						value={country}
						onChange={setCountry}
						placeholder="Search country..."
						label="Country"
						variant="dark"
					/>
				</div>

				{/* SearchableSelect deshabilitado */}
				<SearchableSelect
					options={searchableOptions}
					value="apple"
					onChange={() => {}}
					placeholder="Disabled..."
					label="Disabled Select"
					disabled
				/>
				<SearchableSelect
					options={searchableOptions}
					value={searchValue}
					onChange={setSearchValue}
					placeholder="🔍 Search the matrix..."
					label="🌐 Neural Network Selection"
					variant="cyberpunk"
					extendDefault={false}
					variants={{
						cyberpunk: {
							normal: {
								container: `
                    relative group bg-gradient-to-br from-gray-900 via-purple-900 to-black
                    rounded-2xl border-2 border-green-400/30 p-1 overflow-hidden
                    before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent 
                    before:via-green-400/20 before:to-transparent before:translate-x-[-100%]
                    hover:before:translate-x-[100%] before:transition-transform before:duration-1000
                    hover:border-green-400/60 transition-all duration-300 shadow-lg shadow-green-500/20
                    font-mono
                `,
								inputWrapper: `
                    relative bg-gray-800/80 backdrop-blur-sm border-0 rounded-xl overflow-hidden
                    hover:bg-gray-700/80 focus-within:bg-gray-700/80 transition-all duration-300
                `,
								input: `
                    w-full p-4 bg-transparent border-0 text-green-100 font-mono
                    placeholder-green-300/60 outline-none transition-all duration-300
                    focus:text-green-50 hover:text-green-50
                    text-base tracking-wider
                `,
								label: `
                    absolute -top-3 left-6 px-3 py-1 z-20 font-mono font-bold text-sm
                    bg-gradient-to-r from-green-400 to-cyan-400 text-black 
                    rounded-full shadow-lg border border-green-300/30
                    transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl
                    group-hover:shadow-green-500/50 drop-shadow-lg
                    before:absolute before:inset-0 before:bg-black/10 before:rounded-full
                `,
								inputIcon: `
                    absolute right-4 top-1/2 -translate-y-1/2 z-10
                    text-green-400 transition-all duration-300 pointer-events-none
                    group-hover:text-green-300 group-hover:scale-110 drop-shadow-lg
                `,
								clearButton: `
                    absolute right-4 top-1/2 -translate-y-1/2 z-10
                    text-green-400 hover:text-red-400 transition-all duration-300
                    p-1 rounded-full hover:bg-red-400/20 hover:scale-110
                    focus:outline-none focus:ring-2 focus:ring-red-400/50
                `,
								dropdown: `
                    absolute top-full left-0 right-0 mt-2 z-50 font-mono
                    bg-gradient-to-br from-gray-900 via-gray-800 to-black backdrop-blur-sm
                    border-2 border-green-400/40 rounded-xl shadow-2xl shadow-green-500/30
                    max-h-60 overflow-y-auto opacity-0 invisible
                    transition-all duration-300 ease-out transform translate-y-[-10px]
                    scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-green-400/50
                `,
								option: `
                    flex items-center gap-3 p-4 text-green-100 cursor-pointer
                    transition-all duration-200 border-b border-green-500/20 last:border-b-0
                    hover:bg-green-400/20 hover:text-green-50 hover:translate-x-2
                    first:rounded-t-xl last:rounded-b-xl relative overflow-hidden
                    before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent
                    before:via-green-400/10 before:to-transparent before:translate-x-[-100%]
                    hover:before:translate-x-[100%] before:transition-transform before:duration-500
                    font-mono text-sm tracking-wide
                `,
								optionIcon: `
                    text-green-400 text-lg transition-all duration-200
                    group-hover:text-green-300 drop-shadow-sm
                `,
								noResults: `
                    p-6 text-center text-green-300/80 font-mono text-sm
                    bg-gray-800/50 border border-green-500/20 rounded-lg
                    backdrop-blur-sm italic
                `,
							},
							open: {
								container: `
                    border-green-400/80 shadow-xl shadow-green-500/40
                    before:animate-pulse
                `,
								inputWrapper: `
                    bg-gray-700/90 ring-4 ring-green-500/30
                `,
								input: `
                    text-green-50 placeholder-green-200/80
                `,
								label: `
                    scale-110 shadow-2xl shadow-green-500/60
                    bg-gradient-to-r from-green-300 to-cyan-300
                `,
								dropdown: `
                    opacity-100 visible translate-y-0
                `,
								inputIcon: `
                    rotate-180 text-green-300 scale-110
                `,
							},
							focused: {
								inputWrapper: `
                    ring-4 ring-green-500/30 bg-gray-700/90
                `,
								input: `
                    text-green-50
                `,
								label: `
                    scale-105 shadow-lg shadow-green-500/40
                `,
							},
							optionSelected: {
								option: `
                    bg-gradient-to-r from-green-600/50 to-cyan-600/50 text-green-50
                    border-l-4 border-green-400 font-bold
                    shadow-lg shadow-green-500/20
                    before:bg-green-400/20
                `,
								optionIcon: `
                    text-green-300 scale-110
                `,
							},
							optionHighlighted: {
								option: `
                    bg-green-400/30 text-green-50 translate-x-2
                    shadow-lg shadow-green-500/30
                `,
							},
							optionDisabled: {
								option: `
                    opacity-50 cursor-not-allowed text-gray-500
                    hover:bg-transparent hover:translate-x-0
                `,
							},
							error: {
								container: `
                    border-red-500/50 shadow-red-500/30
                `,
								inputWrapper: `
                    border-red-500/60 focus-within:ring-red-500/30
                `,
								label: `
                    bg-gradient-to-r from-red-500 to-pink-500 text-white
                `,
							},
						},
					}}
					isClearable
					classes={{
						clearButton:
							"text-green-400! hover:text-red-400! text-xl",
					}}
				/>
			</div>
		</div>
	);
}
