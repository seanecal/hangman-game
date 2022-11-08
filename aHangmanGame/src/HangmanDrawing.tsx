const HEAD = (
  <div style={{
    width: "50px",
    height: "50px",
    borderRadius: "100%",
    border: "10px solid black",
    position: "absolute",
    top: "25px",
    right: "-30px"
  }}/>
)

const BODY = (
  <div style={{
    width: "10px",
    height: "100px",
    background: "black",
    position: "absolute",
    top: "85px",
    right: "0"
  }}/>
)

const RIGHT_ARM = (
  <div style={{
    width: "10px",
    height: "80px",
    background: "black",
    position: "absolute",
    top: "38px",
    right: "0px",
    rotate: "60deg",
    transformOrigin: "left bottom"
  }}/>
)

const LEFT_ARM = (
  <div style={{
    width: "10px",
    height: "80px",
    background: "black",
    position: "absolute",
    top: "38px",
    right: "0px",
    rotate: "-60deg",
    transformOrigin: "right bottom"
  }}/>
)

const RIGHT_LEG = (
  <div style={{
    width: "10px",
    height: "80px",
    background: "black",
    position: "absolute",
    top: "95px",
    right: "-5px",
    rotate: "120deg",
    transformOrigin: "left bottom"
  }}/>
)

const LEFT_LEG = (
  <div style={{
    width: "10px",
    height: "80px",
    background: "black",
    position: "absolute",
    top: "95px",
    right: "5px",
    rotate: "-120deg",
    transformOrigin: "right bottom"
  }}/>
)

export function HangmanDrawing() {
  return(
  <div style={{ position: "relative" }}>
    {HEAD}
    {BODY}
    {RIGHT_ARM}
    {LEFT_ARM}
    {RIGHT_LEG}
    {LEFT_LEG}
    <div style={{ height: "25px", width: "10px", background: "black", position: "absolute", top: "0", right: "0"}}/>
    <div style={{ height: "10px", width: "200px", marginLeft:  "120px", background: "black"}} />
    <div style={{ height: "400px", width: "10px",marginLeft: "120px", background: "black"}}/>
    <div style={{ height: "10px", width: "250px", background: "black"}} />
  </div>)
}
