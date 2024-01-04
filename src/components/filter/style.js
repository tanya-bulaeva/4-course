import styled from "styled-components";

export const Dropdown = styled.div`
display: flex;
justify-content: space-between;
`

export const BlockMain = styled.div`
display: flex;
justify-content: space-between;
`

export const CenterblockFilter = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
justify-content: space-between;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
margin-bottom: 51px;
ul li {
margin: 18px 10px;}
`

export const FilterTitle = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
margin-right: 15px;`

export const FilterButton = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border: 1px solid #ffffff;
border-radius: 60px;
padding: 6px 20px;
position: relative;
background-color: transparent;
color: white;
:not(:last-child) {
    margin-right: 10px;
  }
`

export const ButtonActive = styled(FilterButton)`
:hover{
  border-color: #d9b6ff;
  color: #d9b6ff;
}
: active {
  border-color: #d9b6ff;
  color: #d9b6ff;
}
`

export const DropdownContent= styled.ul`    
overflow-y: auto;
box-sizing: border-box;
height: 200px;
width: auto;
background-color: #313131;
border-radius: 20px;
position: absolute;`

export const FilterLink= styled.li`
list-style-type: none;
:hover{
    border-color: #d9b6ff;
    color: #d9b6ff;
}
`
export const DropStyle = styled.div`
display: inline
`

export const Filter = styled.div`
position: relative;
:not(:last-child) {
  margin-right: 10px;
}
`
export const TrackItem  = styled.a`
`
export const ButtonNumber = styled.div`
color: white;
background-color: rgb(173, 97, 255);
width: 26px;
height: 26px;
border-radius: 13px;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
right: -8px;
top: -8px;
font-family: StratosSkyeng;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 13px;
`
export const StyledStrongItem = styled.strong`
   color: #b672ff;
`
export  const StyledNumberCircle = styled.div`
  color: white;
  background-color: #ad61ff;
   width: 26px;
   height: 26px;
   border-radius: 13px;
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   right: -8px;
   top: -8px;
   font-family: StratosSkyeng;
   font-size: 13px;
   font-style: normal;
   font-weight: 400;
   line-height: 13px; /* 100% */
 `