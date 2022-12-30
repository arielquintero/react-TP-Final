const InThumbnail = ({ imgs, setIndex, index }) => {

	return (
		<div className="inthumbnail_in-thumbnail">
			{imgs?.map((el, i) => (
				<img
					key={i}
					height="50"
                    src={el}
					onClick={() => setIndex(i)}
					className={index === i ? "active" : ""}
				/>
			))}
		</div>
	);
};
export default InThumbnail;
