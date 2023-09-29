import { CategoryList } from "./categoryList.js";
import * as S from "./style.js";
//import { NavLink } from "react-router-dom";
export default function Collections(){

return (
  <S.SidebarBlock>
<S.SidebarList>
<CategoryList />
  </S.SidebarList>
  </S.SidebarBlock>


)
/*
  return (
      <S.SidebarBlock>
      <S.SidebarList>
        {loading ? (
          <> <S.SidebarItem>
            <NavLink to = "/category/1">
          <S.SidebarLink>
            <S.SidebarImg
              src="/img/playlist01.png"
              alt="day's playlist"
            />
          </S.SidebarLink>
            </NavLink>
        </S.SidebarItem>
          </>
        ) : (<><S.Skeleton>
        </S.Skeleton>
        </>)}
        {loading ? (
          <>         <S.SidebarItem>
            <NavLink to = "/category/2">
          <S.SidebarLink>
            <S.SidebarImg
              src="/img/playlist02.png"
              alt="dance hit"
            />
          </S.SidebarLink></NavLink>
        </S.SidebarItem>
          </>
        ) : (<><S.Skeleton>
        </S.Skeleton>
        </>)}
        {loading ? (
          <><S.SidebarItem><NavLink to = "/category/3">
          <S.SidebarLink>
            <S.SidebarImg
              src="/img/playlist03.png"
              alt="indie"
            />
          </S.SidebarLink></NavLink>
        </S.SidebarItem>
          </>
        ) : (<><S.Skeleton>
        </S.Skeleton>
        </>)}

      </S.SidebarList>
      </S.SidebarBlock>
  )*/
}
/*export default function Collections({loading}){
    return (
        <div className="SidebarBlock">
{loading ? (        <div className="sidebar__list">
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src="img/playlist01.png"
                alt="day's playlist"
              />
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src="img/playlist02.png"
                alt="day's playlist"
              />
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src="img/playlist03.png"
                alt="day's playlist"
              />
            </a>
          </div>
        </div>) : 
        (       <div className="sidebar__list">
          <div className="sidebar__item skeleton">
          </div>
          <div className="sidebar__item skeleton">
          </div>
          <div className="sidebar__item skeleton">
          </div>
        </div>)}
      </div>
    )
}
*/