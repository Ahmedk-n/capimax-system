'use client';

import { useParams } from 'next/navigation';
import OpportunityDetails from '@/components/opportunity-details';
import Wrapper from '@/layout/Wrapper';

export default function OpportunityDetailPage() {
  const params = useParams();

  if (!params || !params.id) {
    return (
      <Wrapper>
        <div>Loading...</div>
      </Wrapper>
    );
  }

  const id = String(params.id);

  return (
    <Wrapper>
      <OpportunityDetails id={id} />
    </Wrapper>
  );
}

// Metadata can be handled in a separate layout.tsx file if needed
// since we're now using client-side component