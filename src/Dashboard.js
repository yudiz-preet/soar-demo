import React, { useState } from "react";
import SeverityWiseSummary from "./components/SeverityWiseSummary";
import DateWiseVulnerability from "./components/DateWiseVulnerability";
import SummaryOfDifferentScans from "./components/SummaryOfDifferentScans";
import SystemWiseSummary from "./components/SystemWiseSummary";
import VulnerabilityWiseSummary from "./components/VulnerabilityWiseSummary";
import PortWiseSummary from "./components/PortWiseSummary";
import ScanTimeWiseSummary from "./components/ScanTimeWiseSummary";
import TopVulnerabilityWiseSummary from "./components/TopVulnerabilityWiseSummary";
import TopPortWiseSummary from "./components/TopPortWiseSummary";
import ApexDateWiseVulnerability from "./components/ApexDateWiseVulnerability";

const Dashboard = () => {
    const [isShowRoughCharts, setIsShowRoughCharts] = useState(false)

    return (<div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>Dashboard</div>
        <div><button onClick={() => setIsShowRoughCharts(!isShowRoughCharts)}>{isShowRoughCharts ? 'Home' : 'Show Rough Charts'}</button></div>
        </div>
        {isShowRoughCharts ? (
            <div>
            <SeverityWiseSummary />
            <DateWiseVulnerability />
            <SummaryOfDifferentScans />
            <SystemWiseSummary />
            <VulnerabilityWiseSummary />
            <PortWiseSummary />
            <ScanTimeWiseSummary />
            <TopVulnerabilityWiseSummary />
            <TopPortWiseSummary />
            </div>
        ) : (<div>
            {/* <DateWiseVulnerability /> */}
            <ApexDateWiseVulnerability />
        </div>)}
    </div>)
}

export default Dashboard;