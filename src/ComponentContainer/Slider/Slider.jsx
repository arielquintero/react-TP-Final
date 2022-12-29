import SlideShow from "../../Components/SlideShow/SlideShow";
import { images } from "../../helpers/getImages";
// import { Div } from "../../helpers/getImages/"

const Slider = () => {
	return (
		<div className="slider_slider">
			<SlideShow imgs={images} condition={false} />
		</div>
	);
};

export default Slider;
