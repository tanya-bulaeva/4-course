import { useState } from "react";
import {AppRoutes} from "./routes"


function App() {
/*  return (
      <AppRoutes />
  )
  */
  const [user, setUser] = useState(false);
  const handleLogin = () =>   {
    localStorage.setItem('user', true)// setItem(key, value) – сохранить пару ключ/значение.
    setUser(localStorage.getItem('user'));} //getItem(key) – получить данные по ключу key.
    
  console.log(localStorage);
   console.log (user);


  const handleLogout = () => setUser(localStorage.clear());//clear() – удалить всё.

  return (
        <AppRoutes user={user} onAuthButtonClick={ user ? handleLogout : handleLogin } />

  );

}

export default App;

/*
  return (
        <>
        <S.GlobalStyle />
    <S.WrapperStyle>
      <S.ContainerStyle>
        <S.MainStyle>
        <NavMenu />
          <S.MainCenterblock>
        <Search />
            <S.CenterclockH2>Треки</S.CenterclockH2>
          <Filter />
          <Playlist loading = {loading} />      
          </S.MainCenterblock>
          <S.MainSidebar>
        <UserAccount />
        <Collections loading = {loading}/>
          </S.MainSidebar>
        </S.MainStyle>
        <MediaPlayer loading = {loading}/>
        <footer className="footer"></footer>
      </S.ContainerStyle>
    </S.WrapperStyle>
</>
  );*/