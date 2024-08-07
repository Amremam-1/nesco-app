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
    const authenticateUser = async () => {
      try {
        const response = await fetch(`/api/auth/callback${location.search}`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })

        const text = await response.text()
        if (!response.ok) throw new Error(text)

        const data = JSON.parse(text)
        if (data.access_token) {
          setLoading(false)
          setData(data)
          navigate("/")
        } else {
          throw new Error("Access token missing in response")
        }
      } catch (error) {
        setLoading(false)
        setError("Failed to authenticate with Google.")
      }
    }

    authenticateUser()
  }, [location.search, navigate])

  const fetchUserData = async () => {
    if (!data.access_token) {
      setError("Access token is missing.")
      return
    }

    try {
      const response = await fetch(`/api/user`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + data.access_token,
        },
      })

      if (!response.ok) throw new Error("Failed to fetch user data")

      const data = await response.json()
      setUser(data)
    } catch (error) {
      setError("Failed to fetch user data.")
    }
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
