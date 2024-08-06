import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

function GoogleCallback() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({})
  const [user, setUser] = useState(null)
  const [error, setError] = useState("")
  const location = useLocation()

  useEffect(() => {
    fetch(`/api/auth/callback${location.search}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw new Error("Callback failed")
      })
      .then((data) => {
        if (data.access_token) {
          setLoading(false)
          setData(data)
        } else {
          throw new Error("Access token missing in response")
        }
      })
      .catch((error) => {
        console.error(error)
        setLoading(false)
        setError("Failed to authenticate with Google.")
      })
  }, [location.search])

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
        if (response.ok) {
          return response.json()
        }
        throw new Error("Failed to fetch user data")
      })
      .then((data) => {
        setUser(data)
      })
      .catch((error) => {
        console.error(error)
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
