// import { GrNext, GrPrevious } from "react-icons/gr";
// import { useState, useEffect } from "react";
// import InThumbnail from "../InThumbnail/InThumbnail";

// const SlideShow = ({ imgs, condition }) => {
// 	const [index, setIndex] = useState(0);
// 	useEffect(() => {
// 		setIndex(0);
// 	}, []);

// 	const next = () =>
// 		index === imgs.length - 1 ? setIndex(0) : setIndex(index + 1);

// 	const prev = () =>
// 		index === 0 ? setIndex(imgs.length - 1) : setIndex(index - 1);

// 	return (
// 		<div className="slideshow_slideshow">
// 			<div className="slide-img">
// 				<img className="indexImg" src={imgs[index]} />
// 			</div>
// 			<div className="actions">
// 				<button onClick={prev}>
// 					<GrPrevious className="grIcon" />
// 				</button>
// 				<button onClick={next}>
// 					<GrNext className="grIcon " />
// 				</button>
// 			</div>
// 			{condition ? (
// 				<InThumbnail images={imgs} setIndex={setIndex} index={index} />
// 			) : (
// 				" "
// 			)}
// 		</div>
// 	);
// };

// export default SlideShow;

import { GrNext, GrPrevious } from "react-icons/gr";
import { useState, useEffect } from "react";
import InThumbnail from "../InThumbnail/InThumbnail";

const SlideShow = ({ imgs, condition }) => {
	const [index, setIndex] = useState(0);
	useEffect(() => {
		setIndex(0);
	}, []);

	const next = () =>
		index === imgs.length - 1 ? setIndex(0) : setIndex(index + 1);

	const prev = () =>
		index === 0 ? setIndex(imgs.length - 1) : setIndex(index - 1);

	return (
		<div className="slideshow_slideshow">
			<div className="slide-img">
				<img className="indexImg" src={imgs[index]} />
			</div>
			<div className="actions">
				<button onClick={prev}>
					<GrPrevious className="grIcon" />
				</button>
				<button onClick={next}>
					<GrNext className="grIcon " />
				</button>
			</div>

			{condition
				? imgs && (
						<InThumbnail
							imgs={imgs}
							setIndex={setIndex}
							index={index}
						/>
				  )
				: " "}
		</div>
	);
};

export default SlideShow;
