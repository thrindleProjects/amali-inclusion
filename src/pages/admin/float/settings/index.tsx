import FloatSettingsLayout from "@/components/pages-layout/admin/float/settings/FloatSettingsLayout";
import { loanSettingsData } from "@/data/data";
import { NextPage } from "next";
import React from "react";

const LoanSettings: NextPage = () => {
	return <FloatSettingsLayout settings={loanSettingsData} />;
};

export default LoanSettings;
