import {Composition, staticFile} from 'remotion';
import Devin from './Devin';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	return (
		<Composition
			id="CaptionedVideo"
			component={Devin}
			durationInFrames={1745}
			width={1080}
			fps={30}
			height={1920}
			defaultProps={{
				src: staticFile('sample-video.mp4'),
			}}
		/>
	);
};
