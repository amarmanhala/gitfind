/** @jsx jsx */
import { jsx } from "theme-ui"
import { Avatar } from "theme-ui"

export default props => {
  const users = props.data
  return (
    <div>
      {users.map((user, index) => (
        <a href={user.html_url} target="_blank" rel="noreferrer">
          <Avatar
            src={user.avatar_url}
            sx={{
              padding: "2px",
              borderRadius: "100%",
              width: "70px",
              height: "70px",
              borderWidth: "4px",
              borderStyle: "solid",
              borderRadius: "100%",
              borderColor: "#005e7f",
              marginX: "4px",
            }}
          ></Avatar>
        </a>
      ))}
    </div>
  )
}
