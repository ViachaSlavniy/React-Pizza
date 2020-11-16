import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={480}
    viewBox="0 0 280 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="138" cy="138" r="138" /> 
    <rect x="0" y="291" rx="6" ry="6" width="280" height="24" /> 
    <rect x="0" y="329" rx="6" ry="6" width="280" height="84" /> 
    <rect x="0" y="430" rx="6" ry="6" width="89" height="27" /> 
    <rect x="131" y="419" rx="25" ry="25" width="151" height="44" />
  </ContentLoader>
)

export default MyLoader