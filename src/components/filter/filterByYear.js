import * as S from "./style.js"

export default function FilterByYear (){
    return (<S.DropStyle >
<S.DropdownContent>
<S.FilterLink>1991</S.FilterLink>
<S.FilterLink>1992</S.FilterLink>
<S.FilterLink> 1993</S.FilterLink>
</S.DropdownContent>
</S.DropStyle>
    )
}