/** @jsx jsx */
import { jsx, Text } from "theme-ui"
import Header from "../components/Header"

export default function Layout({ children }) {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header></Header>
      <main
        sx={{
          width: "100%",
          display: "flex",
          flex: "1 1 auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </main>

      <footer
        sx={{
          width: "100%",
          backgroundColor: "transparent",
          pb: "4",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Text>
          Made by{" "}
          <a
            href="https://twitter.com/hyumanamar"
            target="_blank"
            rel="noreferrer"
            sx={{ color: "text" }}
          >
            hyumanamar
          </a>{" "}
          with ♥️
        </Text>
      </footer>
    </div>
  )
}
