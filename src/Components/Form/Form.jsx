import { useCartContext } from "../../context/CartContext";

export const Form = ({ addOrder }) => {
	const { formData, setFormData } = useCartContext();

	const handleOnChange = (e) => {
		ev.preventDefault();

		const { target } = e;
		const { name, value } = target;

		setFormData({
			...formData,
			[name]: value,
		});
	};

	return (
		<>
			<form onSubmit={addOrder()}>
				<input
					type="text"
					onChange={handleOnChange}
					name="name"
					value={formData.name}
					placeholder="ingrese su nombre"
				/>
				<input
					type="tel"
					onChange={handleOnChange}
					name="phone"
					value={formData.phone}
					placeholder="ingrese su nro telefono"
				/>
				<input
					type="email"
					onChange={handleOnChange}
					name="email"
					value={formData.email}
					placeholder="ingrese su email"
				/>

				{/* <button type="submit"  className="">Terminar Compra</button> */}
			</form>
		</>
	);
};
