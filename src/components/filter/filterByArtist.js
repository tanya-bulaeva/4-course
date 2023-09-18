import './style.css';
import { tracks } from "../playlist/tracks"
export default function FilterByArtist (){
    return (<div className='drop'>
<ul className = "dropdown-content">
{tracks.map((track) => (<li key = {track.id}>
    <a className = "filter-link">{track.author}</a>
</li>

))}
</ul></div>
)
}