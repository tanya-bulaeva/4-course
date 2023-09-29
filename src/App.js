import NavMenu from "./components/navMenu/navMenu";
import { useState } from "react";
import {AppRoutes} from "./routes"

function App() {
/*  return (
      <AppRoutes />
  )
  */
  const [user, setUser] = useState(null);

  const handleLogin = () =>   setUser(localStorage.setItem('user', 'user'));
  
  console.log(localStorage)
  const handleLogout = () => setUser(localStorage.clear());
  return (
        <AppRoutes user={user} onAuthButtonClick={user ? handleLogout : handleLogin} />

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