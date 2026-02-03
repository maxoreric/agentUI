import type { Card, CardResponse } from '../../types/card';
import { BriefingCard } from './BriefingCard';
import { ChoiceCard } from './ChoiceCard';
import { CodeReviewCard } from './CodeReviewCard';

// Card Registry: maps card types to their components
export const CardRegistry: Record<Card['type'], React.ComponentType<{ card: any; onRespond: (r: CardResponse) => void }>> = {
    briefing: BriefingCard,
    choice: ChoiceCard,
    code_review: CodeReviewCard,
};

export { BriefingCard, ChoiceCard, CodeReviewCard };
