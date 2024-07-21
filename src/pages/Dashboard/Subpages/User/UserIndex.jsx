import { Helmet } from "react-helmet"


const UserIndex = () => {
  return (
    <div>
      <Helmet>
        <title>QuickPay - My Account</title>
      </Helmet>
      <h1 className="text-5" style={{ fontSize: "1.5rem" }}>
        Profile settings
      </h1>
    </div>
  )
}

export default UserIndex
