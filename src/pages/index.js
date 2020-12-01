/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from "react"
import Layout from "../components/Layout"
import { Input, Button } from "theme-ui"
import { Flex, Box, Link } from "theme-ui"
import "react-placeholder/lib/reactPlaceholder.css"
import axios from "axios"
import Faker from "faker"
import UserAvtar from "../components/UserAvtar"
import { GoX, GoSearch, GoOctoface } from "react-icons/go"
import Fade from "react-reveal/Fade"
import { Helmet } from "react-helmet"

export default function Home(props) {
  const [search, setSearch] = useState("")
  const [showResult, setShowResult] = useState(false)
  const [userData, setUserdata] = React.useState(null)
  const [notFound, setNotFound] = useState(false)

  function getWeirdLocation() {
    var weirdLocationName = Faker.address.country()
    setSearch(weirdLocationName)
  }
  function getUsers() {
    axios
      .get(
        `https://api.github.com/search/users?q=location:${search.trim()}&sort=stars&order=desc`
      )
      .then(function (response) {
        setUserdata(response.data.items)
        if (response.data.items.length === 0) {
          setShowResult(false)

          setNotFound(true)
          console.log("not found")
        } else {
          setShowResult(true)
          console.log("found")
        }
        console.log(userData.length)
      })
      .catch(function (error) {
        // handle error
      })
      .then(function () {})
  }
  function handleOnChange() {
    if (search !== "") {
      getUsers()
      setNotFound(false)
    } else {
      setShowResult(false)
    }
  }
  function clearInput() {
    setSearch("")
    setShowResult(false)
    setNotFound(false)
  }

  return (
    <>
      <Helmet>
        <title>Git Find</title>
      </Helmet>
      <Layout>
        <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
          {showResult ? (
            <Fade bottom>
              <Box
                sx={{
                  overflow: "auto",
                  width: "900px",
                  whiteSpace: "nowrap",
                  backgroundColor: "secondary",
                  py: "3",
                  mb: "4",
                  border: "1px solid",
                  borderColor: "border",
                  borderRadius: "3px",
                }}
              >
                <UserAvtar data={userData}></UserAvtar>
              </Box>
            </Fade>
          ) : null}

          {notFound ? (
            <Box sx={{ display: "flex", alignItems: "center", py: "4" }}>
              <GoOctoface></GoOctoface>
              <h1>Sorry :( no body found.</h1>
            </Box>
          ) : null}

          <p sx={{ pb: "1", marginTop: "0" }}>
            Discover developers from Github who are in your city or country.
          </p>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "400px",
              border: "1px solid",
              borderColor: "border",
              borderRadius: "24px",
              backgroundColor: "transparent",
              px: "4",
            }}
          >
            <GoSearch style={{ color: "#7a7a7a" }}></GoSearch>

            <Input
              value={search}
              onChange={e => setSearch(e.target.value)}
              title="Search"
              maxlength="50"
              placeholder="Search City or Country"
              sx={{
                font: "16px Inter",
                border: "none",
                height: "55px",
                backgroundColor: "transparent",
                "&:focus": {
                  outline: "none",
                },
              }}
            ></Input>

            <GoX
              onClick={clearInput}
              style={{ color: "#7a7a7a", cursor: "pointer" }}
            ></GoX>
          </Box>
          <Box sx={{ paddingTop: "3" }}>
            <Button
              variant="primary"
              sx={{ px: "20px", py: "12px" }}
              onClick={handleOnChange}
            >
              Search
            </Button>
          </Box>
          <Box sx={{ pt: "4" }}>
            <Link
              onClick={getWeirdLocation}
              sx={{ cursor: "pointer", bg: "transparent", color: "text" }}
            >
              <u>Get random location?</u>
            </Link>
          </Box>
        </Flex>
      </Layout>
    </>
  )
}
