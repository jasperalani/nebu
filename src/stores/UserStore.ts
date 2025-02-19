import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

//const apiUrl = import.meta.env.VITE_API_URL

export const useUserStore = defineStore('user', () => {
  //  const router = useRouter()

  // Data
  const clientId = ref<string>(import.meta.env.VITE_OAUTH_CLIENT_ID)
  const clientSecret = ref<string>(import.meta.env.VITE_OAUTH_CLIENT_SECRET)
  const userData = ref<object>({})

  const logout = async () => {
    try {
      // Reset user data
      userData.value = ref<object>({})

      // Clear any stored tokens
      // Adjust based on your token storage method
      localStorage.removeItem('user') // authorization_code

      // Clear any other user-related data
      // ...

      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    }
  }

  // todo: use never instead
  // code: any
  const fetchUserDataFrom = async (code: string | unknown | never) => {
    try {
      localStorage.setItem('gCode', JSON.stringify(code))

      const { data } = await axios.post('https://oauth2.googleapis.com/token', {
        code,
        client_id: clientId.value,
        client_secret: clientSecret.value,
        redirect_uri: import.meta.env.VITE_OAUTH_REDIRECT_URL,
        grant_type: 'authorization_code',
      })

      if (data) {
        const accessToken = data.access_token

        // Fetch user details using the access token
        const userObj = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })

        if (userObj && userObj.data) {
          // save copy in storage
          localStorage.setItem('user', JSON.stringify(userObj.data))
          userData.value = userObj.data
        } else {
          // Handle the case where userResponse or userResponse.data is undefined
          console.error('Failed to fetch user data')
        }
      }
    } catch (e) {
      console.error('Failed to exchange token', e)
    }
  }

  return {
    // Data
    clientId,
    clientSecret,
    userData,

    // Functions
    fetchUserDataFrom,
    logout,
  }
})

export default useUserStore
