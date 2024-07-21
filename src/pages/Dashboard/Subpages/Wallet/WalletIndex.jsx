import { Helmet } from "react-helmet"


const WalletIndex = () => {
  return (
    <div>
      <Helmet>
        <title>QuickPay - Wallet</title>
      </Helmet>
      <h1 className="text-5" style={{ fontSize: "1.5rem" }}>
        Wallet
      </h1>

      <p className='mt-8'>Todo: </p>
      <ul className='list-disc ml-8'>
        <li>Account overview</li>
        <li>Fund Wallet</li>
        <li>See Transaction</li>
      </ul>
    </div>
  )
}

export default WalletIndex
