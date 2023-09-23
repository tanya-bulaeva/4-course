import styled from "styled-components";

export const Dropdown = styled.div`
display: flex;
flex-direction: row;
align-items: center;`


export const CenterblockFilter = styled.div`
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
margin-bottom: 51px;
ul li {
margin: 10px 10px;}
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
background-color: transparent;
color: white;
:not(:last-child) {
    margin-right: 10px;
  }
`
export const ButtonActive = styled.button`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border: 2px solid  #d9b6ff;
border-radius: 60px;
padding: 6px 20px;
background-color: transparent;
color: #d9b6ff;
:not(:last-child) {
    margin-right: 10px;
  }`

export const DropdownContent= styled.ul`    
overflow: auto;
height: 200px; 
width:  auto;
background-color: #313131;
border-radius: 20px;
position: absolute;`

export const FilterLink= styled.li`
:hover{
    border-color: #d9b6ff;
    color: #d9b6ff;
}
`
export const DropStyle = styled.div`
display: inline
`