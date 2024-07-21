import { Helmet } from "react-helmet";
import Summary from "./Summary";
import Shortcuts from "./Shortcuts";
import TransactionsPreview from "./TransactionsPreview";

const DashboardIndex = () => {
  return (
    <div className="space-y-4">
      <Helmet>
        <title>QuickPay - Dashboard</title>
      </Helmet>

      <Summary />
      <Shortcuts />
      <TransactionsPreview />
    </div>
  );
};

export default DashboardIndex;
