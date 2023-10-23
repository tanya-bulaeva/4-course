import Collections from "../collections/Collections.jsx"
import UserAccount from "../userAccount/UserAccount.jsx"
import * as S from "./style.js"

export default function Sidebar ({loading}){
    return (
        <>

<S.MainSidebar>
    <UserAccount />
    <Collections loading = {loading}/>
      </S.MainSidebar>
        </>
    )
}