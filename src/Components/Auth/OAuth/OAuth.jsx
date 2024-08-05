// import styles from "./styles.module.scss"
// import { AiFillGoogleCircle } from "react-icons/ai"
// import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
// import { app } from "../../../firebase"
// // import { useDispatch } from "react-redux"
// // import { signInSuccess } from "../redux/user/userSlice"
// import { useNavigate } from "react-router-dom"

// const OAuth = () => {
//   const auth = getAuth(app)
//   const navigate = useNavigate()

//   const handleGoggleClick = async () => {
//     const provider = new GoogleAuthProvider()
//     provider.setCustomParameters({ prompt: "select_account" })

//     try {
//       const resultFromGoogle = await signInWithPopup(auth, provider)
//       console.log("Result from Google:", resultFromGoogle)
//       navigate("/")

//       // const res = await fetch("/user", {
//       //   method: "POST",
//       //   headers: {
//       //     "Content-Type": "application/json",
//       //   },
//       //   body: JSON.stringify({
//       //     name: resultFromGoogle.user.displayName,
//       //     email: resultFromGoogle.user.email,
//       //     googlePhotoUrl: resultFromGoogle.user.photoURL,
//       //   }),
//       // })

//       // const data = await res.json()
//       // console.log("Response data:", data)
//       // if (res.ok) {
//       //   // dispatch(signInSuccess(data))

//       // } else {
//       //   console.error("Failed to sign in:", data)
//       // }
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

import styles from "./styles.module.scss"
import { AiFillGoogleCircle } from "react-icons/ai"
import { useState, useEffect } from "react"

const OAuth = () => {
  const [loginUrl, setLoginUrl] = useState(null)
  const [error, setError] = useState("")

  useEffect(() => {
    fetch("https://filterr.net/dashboard/api/auth", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log(response)
          return response.json()
        }
        throw new Error("Something went wrong!")
      })
      .then((data) => setLoginUrl(data.url))
      .catch((error) => {
        console.error(error)
        setError("Failed to load Google login URL.")
      })
  }, [])

  return (
    <div>
      {error && <div className={styles.error}>{error}</div>}
      {loginUrl != null && <a href={loginUrl}>Google Sign In</a>}
    </div>
  )
}

export default OAuth
