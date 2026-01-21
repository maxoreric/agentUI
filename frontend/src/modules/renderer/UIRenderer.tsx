import React from 'react';
import { type UIPlan } from '../../types/ui-plan';
import { Renderer } from './Renderer';

interface UIRendererProps {
    plan: UIPlan;
}

export const UIRenderer: React.FC<UIRendererProps> = ({ plan }) => {
    return (
        <div className="p-6 max-w-7xl mx-auto">
            <header className="mb-8">
                <h1 className="text-4xl font-extrabold tracking-tight">{plan.meta?.title}</h1>
                <p className="text-default-500 mt-2">{plan.meta?.description}</p>
            </header>
            <main>
                <Renderer node={plan.layout} />
            </main>
        </div>
    );
};
