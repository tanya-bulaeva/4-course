export default function Collections({loading}){
  return (
      <div className="sidebar__block">
      <div className="sidebar__list">
        {loading ? (
          <> <div className="sidebar__item">
          <a className="sidebar__link" href="#">
            <img
              className="sidebar__img"
              src="img/playlist01.png"
              alt="day's playlist"
            />
          </a>
        </div>
          </>
        ) : (<><div className="sidebar__item skeleton">
        </div>
        </>)}
        {loading ? (
          <>         <div className="sidebar__item">
          <a className="sidebar__link" href="#">
            <img
              className="sidebar__img"
              src="img/playlist02.png"
              alt="day's playlist"
            />
          </a>
        </div>
          </>
        ) : (<><div className="sidebar__item skeleton">
        </div>
        </>)}
        {loading ? (
          <>                 <div className="sidebar__item">
          <a className="sidebar__link" href="#">
            <img
              className="sidebar__img"
              src="img/playlist03.png"
              alt="day's playlist"
            />
          </a>
        </div>
          </>
        ) : (<><div className="sidebar__item skeleton">
        </div>
        </>)}

      </div>
      </div>
  )
}
/*export default function Collections({loading}){
    return (
        <div className="sidebar__block">
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