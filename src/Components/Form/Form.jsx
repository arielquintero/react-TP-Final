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
			<div className="form_register">
				<main className="main-register">
					<form onSubmit={addOrder} autoComplete="off">
						<div className="form-container">
							<div className="group">
								{
									<input
										type="text"
										onChange={handleOnChange}
										id="name"
										name="name"
										value={formData.name}
										placeholder="ingrese su nombre"
										pattern="^[a-zA-Z]+(?:\s?[a-zA-z]+)+"
										minLength="3"
										required
									/>
								}
								<span className="bar" />
								<label htmlFor="name" className="label">
									Nombre
								</label>
								<div className="control">
									<p className="help">
										Su nombre debe contener solo caracteres.
									</p>
								</div>
							</div>
							<div className="group">
								<input
									type="tel"
									onChange={handleOnChange}
									id="phone"
									name="phone"
									value={formData.phone}
									pattern="^\d+\s{1}\d{3}-\d{4}$"
									placeholder="123 456-7890"
									required
								/>
								<span className="bar" />
								<label htmlFor="phone" className="label">
									Telefono
								</label>
								<div className="control">
									<p className="help">
										Código de área de 3 dígitos y número de
										teléfono separados por guión
									</p>
								</div>
							</div>
							<div className="group">
								<input
									type="email"
									onChange={handleOnChange}
									id="email"
									name="email"
									value={formData.email}
									pattern="\^[a-zA-Z0-9.!#$%&'*+\=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$\"
									placeholder="example@email.com"
									required
								/>
								<span className="bar" />
								<label htmlFor="email" className="label">
									Email
								</label>
							</div>
							<div className="group">
								<button type="submit" className="btn-register">
									Terminar Compra
								</button>
							</div>
						</div>
					</form>
				</main>
			</div>
		</>
	);
};
