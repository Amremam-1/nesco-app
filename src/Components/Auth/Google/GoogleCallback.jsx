import React, { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const GoogleCallback = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({})
  const [user, setUser] = useState(null)
  const [error, setError] = useState("")
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    console.log("Location search:", location.search)
    fetch(`/api/auth/callback${location.search}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(async (response) => {
        console.log("Response status:", response.status)
        const text = await response.text()
        console.log("Response text:", text)
        return response.ok ? JSON.parse(text) : Promise.reject(text)
      })
      .then((data) => {
        console.log("Callback response data:", data)
        if (data.access_token) {
          setLoading(false)
          setData(data)
          console.log("Access token set:", data.access_token)
          navigate("/")
        } else {
          throw new Error("Access token missing in response")
        }
      })
      .catch((error) => {
        // console.error("Error in callback:", error)
        console.log(error)
        setLoading(false)
        setError("Failed to authenticate with Google.")
      })
  }, [location.search, navigate])

  function fetchUserData() {
    if (!data.access_token) {
      setError("Access token is missing.")
      return
    }

    fetch(`/api/user`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + data.access_token,
      },
    })
      .then((response) => {
        console.log("Response from fetchUserData:", response)
        if (response.ok) {
          return response.json()
        }
        throw new Error("Failed to fetch user data")
      })
      .then((data) => {
        console.log("User data fetched:", data)
        setUser(data)
      })
      .catch((error) => {
        console.error("Error in fetchUserData:", error)
        setError("Failed to fetch user data.")
      })
  }

  if (loading) {
    return <DisplayLoading />
  } else {
    return (
      <div>
        {error && <div>{error}</div>}
        <DisplayData data={data} />
        {!user && (
          <div style={{ marginTop: 10 }}>
            <button onClick={fetchUserData}>Fetch User</button>
          </div>
        )}
        {user && <DisplayData data={user} />}
      </div>
    )
  }
}

function DisplayLoading() {
  return <div>Loading....</div>
}

function DisplayData({ data }) {
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default GoogleCallback
