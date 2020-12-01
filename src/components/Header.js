/** @jsx jsx */
import { jsx } from "theme-ui"
import { useColorMode } from "theme-ui"
import { Flex, Box, Button } from "theme-ui"

export default props => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <header
      sx={{
        backgroundColor: "secondary",
        borderBottom: "1px solid",
        borderBottomColor: "border",
      }}
    >
      <Flex
        bg="muted"
        sx={{ mx: ["3", "6", "6"], height: "54px", alignItems: "center" }}
      >
        <Box sx={{ flex: "1 1 auto" }}>
          <span sx={{ fontSize: "1.2rem", color: "text" }}>Gitmeet</span>
        </Box>
        <Box bg="muted">
          <Button
            variant="secondary"
            sx={{ border: "1px solid", borderRadius: "18px" }}
            onClick={e => {
              setColorMode(colorMode === "default" ? "dark" : "default")
            }}
          >
            {colorMode === "default" ? "Dark" : "Light"}
          </Button>
        </Box>
      </Flex>
    </header>
  )
}
