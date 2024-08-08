// import styles from "./styles.module.scss"
// import { AiFillGoogleCircle } from "react-icons/ai"
// import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
// import { app } from "../../../firebase"
// import { useDispatch } from "react-redux"
// // import { signInSuccess } from "../redux/user/userSlice"
// import { useNavigate } from "react-router-dom"

// const OAuth = () => {
//   const auth = getAuth(app)
//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   const handleGoggleClick = async () => {
//     const provider = new GoogleAuthProvider()
//     provider.setCustomParameters({ prompt: "select_account" })

//     try {
//       const resultFromGoogle = await signInWithPopup(auth, provider)
//       console.log("Result from Google:", resultFromGoogle)
//       navigate("/")

//       const res = await fetch("/api/user", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: resultFromGoogle.user.displayName,
//           email: resultFromGoogle.user.email,
//           googlePhotoUrl: resultFromGoogle.user.photoURL,
//         }),
//       })

//       const data = await res.json()
//       console.log("Response data:", data)
//       if (res.ok) {
//         // dispatch(signInSuccess(data))
//       } else {
//         console.error("Failed to sign in:", data)
//       }
//     } catch (error) {
//       console.log("Error:", error)
//     }
//   }

//   return (
//     <button className={styles.registerBtn} onClick={handleGoggleClick}>
//       <AiFillGoogleCircle className={styles.icon} />
//       Continue with Google
//     </button>
//   )
// }

// export default OAuth

// import styles from "./styles.module.scss"
// import { AiFillGoogleCircle } from "react-icons/ai"
// import { useState, useEffect } from "react"

// const OAuth = () => {
//   const [loginUrl, setLoginUrl] = useState(null)
//   const [error, setError] = useState("")

//   useEffect(() => {
//     fetch("/api/auth", {
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     })
//       .then((response) => {
//         if (response.ok) {
//           return response.json()
//         }
//         throw new Error("Something went wrong!")
//       })
//       .then((data) => {
//         if (data.url) {
//           setLoginUrl(data.url)
//         } else {
//           throw new Error("URL not found in response")
//         }
//       })
//       .catch((error) => {
//         console.log(error)
//         setError("Failed to load Google login URL.")
//       })
//   }, [])

//   return (
//     <div>
//       {error && <div className={styles.error}>{error}</div>}

//       {loginUrl != null && (
//         <a href={loginUrl} className={styles.registerBtn}>
//           <AiFillGoogleCircle className={styles.icon} />
//           Continue with Google
//         </a>
//       )}
//     </div>
//   )
// }

// export default OAuth

import React, { useState } from "react"
import axios from "axios"

const OAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleGoogleLogin = async () => {
    try {
      const response = await axios.get("/auth/google")
      console.log(response.data)

      if (response.data.url) {
        window.location.href = response.data.url
      } else {
        console.error("No URL found in response")
      }
    } catch (error) {
      console.error("Error during Google login:", error)
    }
  }

  // Check if user is already logged in (e.g., using a token)
  const checkLoggedIn = async () => {
    try {
      const response = await axios.get("/api/auth/check") 
      if (response.data.isLoggedIn) {
        setIsLoggedIn(true)
      }
    } catch (error) {
      console.error("Error checking login status:", error)
    }
  }

  // Call checkLoggedIn on component mount
  React.useEffect(() => {
    checkLoggedIn()
  }, [])

  return (
    <div>
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <button onClick={handleGoogleLogin}>Login with Google</button>
      )}
    </div>
  )
}

export default OAuth
