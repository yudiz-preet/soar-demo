import React from "react";
import SeverityWiseSummary from "./components/SeverityWiseSummary";
import DateWiseVulnerability from "./components/DateWiseVulnerability";

const Dashboard = () => {

    return (<div>
        <div>Dashboard</div>
        <SeverityWiseSummary />
        <DateWiseVulnerability />
    </div>)
}

export default Dashboard;