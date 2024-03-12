export async function getTrack() {
  const response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/',
  );
  if (!response.ok){
      throw new Error('ошибка сервера')
  }
  const data = await response.json();
  return data;
  }
  
  export async function registerUser({ email, password  }) {
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
        const data = await response.json();
      if (!response.ok){
        const error = data.email?.[0] ?? data.username?.[0] ?? data.password?.[0];
        throw new Error(error)
    
      }
  
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
        const data = await response.json();
      if (!response.ok){
        const error = data.email ?? data.password ?? data.detail;
        throw new Error(error)
    
      }
  
      return data;
    }
 

    function saveToken(token) {
      localStorage.setItem('token', token.access)
      localStorage.setItem('refreshToken', token.refresh)
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
      const data = await response.json();
      if (!response.ok){
        const error = data.email?.[0] ?? data.username?.[0] ?? data.password?.[0];
        throw new Error(error)
    
      }
      return saveToken(data);
    } 

    export async function refreshToken(refresh) {
      const res = await fetch(`https://skypro-music-api.skyeng.tech/user/token/refresh/`, {
        method: 'POST',
        body: JSON.stringify({
          refresh: refresh,
        }),
        headers: {
          'content-type': 'application/json',
        },
      })

      const token = await res.json()
      return token
    }
    export async function getCategory(id) {
      const response = await fetch(`https://skypro-music-api.skyeng.tech/catalog/selection/${id}`,
      );
      
      if (!response.ok){
          throw new Error('ошибка сервера')
      }
      const data = await response.json();
      return data?.items;
      }