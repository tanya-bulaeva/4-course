import * as S from "./style.js";
import { useState, useEffect } from "react";
import { CategoryItems } from "./CategoryItems.jsx";
export const CategoryList = ({loading}) => {
    return (
<>
{CategoryItems.map((categoryItem) => (
<S.SidebarItem key = {categoryItem.id}> {loading ? ( <> 
          <S.SidebarLink to = {`/category/${categoryItem.id}`}>
          <S.SidebarImg
            src={categoryItem.image}
            alt={categoryItem.name}
          />
          </S.SidebarLink>
          </>) : (<> <S.Skeleton></S.Skeleton> </>)}  </S.SidebarItem>
)
)}
</>



) }
