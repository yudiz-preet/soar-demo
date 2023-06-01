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
import ApexRangeBar from "./components/ApexRangeBar";
import Nutshell from "./components/Nutshell";
import Patch from "./components/Nutshell/patch";
import Audit from "./components/Nutshell/audit";

const Dashboard = () => {
    const [isShowRoughCharts, setIsShowRoughCharts] = useState(false)

    return (<div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>Dashboard</div>
        <div style={{ display: 'none' }}><button onClick={() => setIsShowRoughCharts(!isShowRoughCharts)}>{isShowRoughCharts ? 'Home' : 'Show Rough Charts'}</button></div>
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
            {/* <ApexDateWiseVulnerability /> */}
            {/* <ApexRangeBar /> */}
            {/* <Nutshell /> */}
            {/* <Patch /> */}
            <Audit />
        </div>)}
    </div>)
}

export default Dashboard;