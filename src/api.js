export async function getTrack() {
const response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/',
);
//if (!response.ok){
//    throw new Error('ошибка сервера')
//}
const data = await response.json();
return data;
}