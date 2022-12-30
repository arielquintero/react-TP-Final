import { useCartContext } from "../../context/CartContext";

export const Form = ({ addOrder }) => {
	const { formData, setFormData } = useCartContext();

	const handleOnChange = (e) => {
		e.preventDefault();

		const { target } = e;
		const { name, value } = target;

		setFormData({
			...formData,
			[name]: value,
		});
	};

	return (
		<>
			<form onSubmit={addOrder} autoComplete="off" className="form_form">
				<div className="field">
					<label htmlFor="name" className="label">
						Nombre
					</label>
					<div className="control">
						<input
							onChange={handleOnChange}
							type="text"
							id="name"
							name="name"
							value={formData.name}
							placeholder="ingrese su nombre"
							pattern="^[a-zA-Z]+(?:\s?[a-zA-z]+)+"
							minLength="3"
							required
						/>
						<p>Su nombre debe contener solo caracteres.</p>
					</div>
				</div>
				<div className="field">
					<label htmlFor="phone" className="label">
						Telephone
					</label>
					<div className="control">
						<input
							type="tel"
							onChange={handleOnChange}
							name="phone"
							id="phone"
							value={formData.phone}
							pattern="^\d+\s{1}\d{3}-\d{4}$"
							placeholder="123 456-7890"
							required
						/>
						<p>
							Código de área de 3 dígitos y número de teléfono
							separados por guión
						</p>
					</div>
				</div>
				<div className="field">
					<label htmlFor="email" className="label">
						Email
					</label>
					<div className="control">
						<input
							type="email"
							onChange={handleOnChange}
							id="email"
							name="email"
							value={formData.email}
							placeholder="example@email.com"
							required
						/>
					</div>
				</div>
				<div className="field">
					<div className="control">
						<button type="submit" className="">
							Terminar Compra
						</button>
					</div>
				</div>
			</form>
		</>
	);
};
