export async function getTrack() {
const response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/',
);
if (!response.ok){
    throw new Error('ошибка сервера')
}
const data = await response.json();
return data;
}

export async function registerUser({ email, password, username }) {
    const response = await fetch(`https://skypro-music-api.skyeng.tech/user/signup/`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        username: email,
      }),
      headers: {
        'content-type': 'application/json',
      },
    })
  
    if (!response.ok){
        throw new Error('ошибка сервера')
    }
    const data = await response.json();
    return data;
  }
  
  export async function loginUser({ email, password }) {
    const response = await fetch(`https://skypro-music-api.skyeng.tech/user/login/`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'content-type': 'application/json',
      },
    })
  
    if (!response.ok){
        throw new Error('ошибка сервера')
    }
    const data = await response.json();
    return data;
  }
  
  export async function getToken({ email, password }) {
    const response = await fetch(`https://skypro-music-api.skyeng.tech/user/token/`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'content-type': 'application/json',
      },
    })

    if (!response.ok){
        throw new Error('ошибка сервера')
    }
    const data = await response.json();
    return data;
  } 
  