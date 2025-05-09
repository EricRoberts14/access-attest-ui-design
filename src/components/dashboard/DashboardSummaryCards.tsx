
import React from 'react';
import DashboardSummary from './DashboardSummary';
import DelegateInfoCard from './DelegateInfoCard';

interface DashboardSummaryCardsProps {
  onNavigateToAttestations: () => void;
}

const DashboardSummaryCards = ({ onNavigateToAttestations }: DashboardSummaryCardsProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <DashboardSummary onNavigateToAttestations={onNavigateToAttestations} />
      <DelegateInfoCard />
    </div>
  );
};

export default DashboardSummaryCards;
