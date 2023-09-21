import * as S from "./style.js"
export default function Collections({loading}){
  return (
      <S.SidebarBlock>
      <S.SidebarList>
        {loading ? (
          <> <S.SidebarItem>
          <S.SidebarLink href="#">
            <S.SidebarImg
              src="img/playlist01.png"
              alt="day's playlist"
            />
          </S.SidebarLink>
        </S.SidebarItem>
          </>
        ) : (<><S.Skeleton>
        </S.Skeleton>
        </>)}
        {loading ? (
          <>         <S.SidebarItem>
          <S.SidebarLink  href="#">
            <S.SidebarImg
              src="img/playlist02.png"
              alt="day's playlist"
            />
          </S.SidebarLink>
        </S.SidebarItem>
          </>
        ) : (<><S.Skeleton>
        </S.Skeleton>
        </>)}
        {loading ? (
          <><S.SidebarItem>
          <S.SidebarLink  href="#">
            <S.SidebarImg
              src="img/playlist03.png"
              alt="day's playlist"
            />
          </S.SidebarLink>
        </S.SidebarItem>
          </>
        ) : (<><S.Skeleton>
        </S.Skeleton>
        </>)}

      </S.SidebarList>
      </S.SidebarBlock>
  )
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