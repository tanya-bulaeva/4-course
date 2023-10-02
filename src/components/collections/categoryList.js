import * as S from "./style.js";
import { useState, useEffect } from "react";
import { categoryItems } from "./categoryItems.js";
export const CategoryList = ({loading}) => {
  //const [loading, setLoading] = useState(false)
 /* useEffect(() => {
        // Заводим таймер
        const timerId = setInterval(() => setLoading(!loading), 5000);		
        // Данная функция вызывается при удалении компонента из DOM
        return () => {
            // Наводим порядок после удаления компонента
            clearInterval(timerId);
        };
    }, []);*/
    return (
<>
{categoryItems.map((categoryItem) => (
<> {loading ? ( <> <S.SidebarItem key = {categoryItem.id}>
          <S.SidebarLink to = {`/category/${categoryItem.id}`}>
          <S.SidebarImg
            src={categoryItem.image}
            alt={categoryItem.name}
          />
          </S.SidebarLink>
          </S.SidebarItem></>) : (<> <S.Skeleton></S.Skeleton> </>)}  </>
)
)}
</>



) }
