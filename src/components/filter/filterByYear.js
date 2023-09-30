import * as S from "./style.js"

export default function FilterByYear (){
    return (<S.DropStyle >
<S.DropdownContent>
<S.FilterLink>По умолчанию</S.FilterLink>
<S.FilterLink>Сначала новые</S.FilterLink>
<S.FilterLink>Сначала старые</S.FilterLink>
</S.DropdownContent>
</S.DropStyle>
    )
}