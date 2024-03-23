import { Video, OffthreadVideo, Audio, staticFile, Series, Sequence, Img, AbsoluteFill } from "remotion";
import { loadFont } from "@remotion/google-fonts/Quintessential";
import { loadFont as loadFont2 } from "@remotion/google-fonts/Montserrat";
const { fontFamily } = loadFont();
const { fontFamily: fontFamily2 } = loadFont2();

const video = staticFile(`/bg-video.mp4`);
const part1 = staticFile(`/part1.m4a`);
const part2 = staticFile(`/part2.m4a`);
const part3 = staticFile(`/part3.m4a`);
const part4 = staticFile(`/part4.m4a`);
const landscape = staticFile(`/landscape.jpg`);
const devin = staticFile(`/devin.jpg`);
const programmer = staticFile(`/programmer.jpg`);
const code = staticFile(`/code.svg`);
const cognition = staticFile(`/cognition.svg`);
const bug = staticFile(`/bug.png`);
const app = staticFile(`/app.png`);
const site = staticFile(`/site.png`);
const neil = staticFile(`/neil.mp4`);
const tippyTop = staticFile(`/tippy-top.jpg`);
const beginning = staticFile(`/beginning.jpg`);
const cognitionJobs = staticFile(`/cognition-jobs.jpg`);
const erJerbs = staticFile(`/er-jerbs.mp4`);
const audio = staticFile(`/bg-music.mp3`)

export const Devin: React.FC = () => {
  return (
    <>
      <Video src={video} muted loop />
      <Audio src={audio} volume={0.015} startFrom={770} />
      <Series>
        <Series.Sequence durationInFrames={433}>
          <Sequence from={100} durationInFrames={20}>
            <AbsoluteFill>
              <Img src={landscape} style={{ position: 'absolute', width: '100%', top: '30%' }} />
            </AbsoluteFill>
          </Sequence>
          <Sequence from={155} durationInFrames={30}>
            <AbsoluteFill>
              <Img src={devin} style={{ position: 'absolute', height: '100%', width: '200%', right: `0%` }} />
            </AbsoluteFill>
          </Sequence>
          <Sequence from={200} durationInFrames={30}>
            <AbsoluteFill>
              <Img src={programmer} style={{ position: 'absolute', width: '100%', top: `22.5%` }} />
            </AbsoluteFill>
          </Sequence>
          <Sequence from={330} durationInFrames={100}>
            <AbsoluteFill>
              <Img src={code} width="auto" height={700} />
            </AbsoluteFill>
            <Sequence from={20}>
              <AbsoluteFill style={{ marginTop: '30rem' }}>
                <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                  <Img src={bug} width="auto" height={700} />
                  <span style={{ position: 'absolute', fontFamily, fontSize: '50rem', color: 'red', bottom: "-150px", right: "4rem" }}>&times;</span>
                </div>
              </AbsoluteFill>
              <Sequence from={40} >
                <Img src={app} style={{ position: 'absolute', bottom: "20rem" }} width="480" height="480"/>
                <Sequence from={20}>
                  <Img src={site} style={{ position: 'absolute', bottom: "20rem", right: 0 }} width="480" height="480" />
                </Sequence>
              </Sequence>
            </Sequence>
          </Sequence>
          <Audio src={part1} startFrom={30} endAt={493} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={400}>
          <Sequence from={20} durationInFrames={20}>
            <AbsoluteFill>
              <Img style={{ position: 'absolute', top: '40%', left: '30%'}} src={cognition} width={400} height={400} />
            </AbsoluteFill>
          </Sequence>
          <Sequence from={163} durationInFrames={100}>
            <OffthreadVideo style={{ width: '100%' }} src={neil} startFrom={510} endAt={610} />
          </Sequence>
          <Sequence from={290} layout="none">
            <div style={{ background: 'rgba(0,0,0,0.4)', width: '80%', height: 'fit-content' }}>
              <h1 style={{ paddingLeft: '3rem', fontFamily: fontFamily2, fontSize: '10rem', color: 'white' }}>- learn</h1>
              <Sequence from={20}>
                <h1 style={{ paddingLeft: '3rem', fontFamily: fontFamily2, fontSize: '10rem', color: 'white', marginTop: '22rem' }}>- adapt</h1>
                <Sequence from={30}>
                  <h1 style={{ paddingLeft: '3rem', fontFamily: fontFamily2, fontSize: '10rem', color: 'white', marginTop: '38rem' }}>- follow instructions</h1>
                  <Sequence from={35}>
                    <h1 style={{ paddingLeft: '3rem', fontFamily: fontFamily2, fontSize: '10rem', color: 'white', marginTop: '64rem' }}>- follows the docs well</h1>
                  </Sequence>
                </Sequence>
              </Sequence>
            </div>
          </Sequence>
          <Audio src={part2} startFrom={20} endAt={430} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={665}>
          <Sequence from={177} name="mainseq" durationInFrames={80}>
            <span style={{ position: 'absolute', fontFamily, fontSize: '80rem', color: 'red', top: '-55rem', lineHeight: '122rem', left: 0 }}>&times;</span>
            <span style={{ position: 'absolute', fontFamily, fontSize: '80rem', color: 'red', top: '-55rem', lineHeight: '122rem', right: 0 }}>&times;</span>
            <Img src={tippyTop} width={1080} height={600} />
            <Sequence from={22}>
              <div>
                <p style={{ bottom: '-45rem', left: '-1.5rem', rotate: "90deg", position: 'absolute',  fontSize: '60rem', color: 'yellow', fontFamily: fontFamily }}>=</p>
                <p style={{ bottom: '-45rem', left: '22.5rem', rotate: "90deg", position: 'absolute',  fontSize: '60rem', color: 'yellow', fontFamily: fontFamily }}>=</p>
                <p style={{ bottom: '-45rem', left: '45rem', rotate: "90deg", position: 'absolute',  fontSize: '60rem', color: 'yellow', fontFamily: fontFamily }}>=</p>
                =
              </div>
            </Sequence>
            <Sequence from={45}>
              <Img src={beginning} width={1080} height={600} style={{ position: 'absolute', bottom: 0 }} />
            </Sequence>
          </Sequence>
          <Sequence from={365} durationInFrames={96}>
            <Img src={cognitionJobs} width="100%" />
          </Sequence>
          <Sequence from={589} durationInFrames={100}>
            <OffthreadVideo src={erJerbs} startFrom={690} endAt={790} />
          </Sequence>
          <Audio src={part3} startFrom={40} endAt={630} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={246}>
          <Audio src={part4} startFrom={35} />
        </Series.Sequence>
      </Series>
    </>
  )
}

export default Devin;