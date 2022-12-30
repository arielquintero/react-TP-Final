import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
	return (
		<footer className="footer_footer">
			<h2>All-Mycro</h2>
            <h3>Donde tus ideas cobran vida</h3>
			<div className="social">
				<a
					className="social-github"
					href="https://github.com/arielquintero"
					target="blank"
				>
					<BsGithub
						fontSize="xx-large"
						className="social-icons"
					/>
				</a>
				<a
					className="social-linkedin"
					href="https://www.linkedin.com/in/ariel--quintero"
					target="blank"
				>
					<BsLinkedin
						fontSize="xx-large"
						className="social-icons"
					/>
				</a>
			</div>

			<div className="copyright">
				© 2022 Copyright 
                <span> {" "}Desarrollado en Santa Fe,{" "} Argentina por </span>
				<a href="https://ariel-quintero-porfolio/" target="blank" className="porfolio">
					{" "}
					 Ariel Quintero
				</a>
			</div>
		</footer>
	);
};

export default Footer;
