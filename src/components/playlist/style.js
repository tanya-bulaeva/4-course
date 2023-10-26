import styled from "styled-components";
import { keyframes } from "styled-components";

export const CenterblockContent = styled.div`  
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;`

export const ContentTitle = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
margin-bottom: 24px;`

export const PlaylistTitleCol = styled.div`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: 2px;
color: #696969;
text-transform: uppercase;
}`

export const PlaylistTitleSvg = styled.svg`
width: 12px;
height: 12px;
fill: transparent;
stroke: #696969;`

export const ContentPlaylist = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
overflow-y: auto;
font-family: inherit;
`

export const PlaylistItem = styled.div`
width: 100%;
display: block;
margin-bottom: 12px;`

export const PlaylistTrack  = styled.div`  display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;`

export const TrackTitle = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
width: 447px;`

export const TrackTitleImage = styled.div` 
 width: 51px;
height: 51px;
padding: 16px;
background: #313131;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
margin-right: 17px;`

export const TrackTitleImageSkeleton = styled(TrackTitleImage)`
background-color: #4e4e4e;
color: #4e4e4e;`

export const TrackTitleText = styled.div`
display: block;
`

export const TrackTitleTextSkeleton = styled(TrackTitleText)`
background-color: #4e4e4e;
color: #4e4e4e;
width: 447px;
`
export const TrackTitleSvg = styled.svg`
width: 18px;
height: 17px;
fill: transparent;
stroke: #4e4e4e;
`
export const TrackTitleSvgSkeleton = styled(TrackTitleSvg)`
background-color: #4e4e4e;
color: #4e4e4e;
`
export const TrackTitleLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #ffffff;
`

export const TrackTitleLinkSkeleton = styled(TrackTitleLink)`
background-color: #4e4e4e;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #4e4e4e;
`

export const TrackTitleSpan = styled.span` 
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #4e4e4e;
`

export const TrackAuthor = styled.div`
 width: 321px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;
`
export const TrackAuthorSkeleton = styled(TrackAuthor)`
background-color: #4e4e4e;
color: #4e4e4e;
width: 321px;
`

export const TrackAuthorLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #ffffff;
text-align: left;
`

export const TrackAuthorLinkSkeleton = styled(TrackAuthorLink)`
background-color: #4e4e4e;
color: #4e4e4e;
width: 321px;
`
export const TrackAlbum  = styled.div`
width: 245px;
`
export const TrackAlbumSkeleton = styled(TrackAlbum )`
background-color: #4e4e4e;
color: #4e4e4e;
`

export const TrackAlbumLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #696969;
`
export const TrackAlbumLinkSkeleton = styled(TrackAlbumLink)`
background-color: #4e4e4e;
color: #4e4e4e;
`
export const TrackTimeSvg = styled.svg`
width: 14px;
height: 12px;
margin-right: 17px;
fill: transparent;
stroke: #696969;
`
export const TrackTimeSvgSkeleton = styled(TrackTimeSvg)` 
background-color: #4e4e4e;
color: #4e4e4e;
` 
export const TrackTime = styled.div`
display: block
`
export const TrackTimeSkeleton = styled(TrackTime)`
background-color: #4e4e4e;
color: #4e4e4e;
`
export const TrackTimeText  = styled.span`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-align: right;
color: #696969;
`
export const TrackTimeTextSkeleton  = styled(TrackTimeText)`
background-color: #4e4e4e;
color: #4e4e4e;
`
export const PlaylistTitleCol01 = styled(PlaylistTitleCol)`
width: 447px;
`
export const PlaylistTitleCol02 = styled(PlaylistTitleCol)`
width: 321px;
`

export const PlaylistTitleCol03 = styled(PlaylistTitleCol)`
width: 245px;
`
export const PlaylistTitleCol04 = styled(PlaylistTitleCol)`
width: 60px;
text-align: end;
`
export const Skeleton = styled.div`
background-color: #4e4e4e;
color: #4e4e4e;

`

const blinkAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
export const BlinkingDotActive = styled.div`
  width: 150px;
  height: 15px; 
  background-color: #b672ff;
  border-radius: 50%;
  animation: ${blinkAnimation} 1s infinite;
`;
export const BlinkingDot = styled.div`
  width: 150px;
  height: 15px; 
  background-color: #b672ff;
  border-radius: 50%;
`;
export const CenterclockH2 = styled.h2`
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 72px;
letter-spacing: -0.8px;
margin-bottom: 45px;
`