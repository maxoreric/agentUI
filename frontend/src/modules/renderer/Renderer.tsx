import { type LayoutNode } from '../../types/ui-plan';
import { componentMap } from './ComponentMap';
import { mockData } from './mockData';

interface RendererProps {
    node: LayoutNode;
}

export const Renderer: React.FC<RendererProps> = ({ node }) => {
    if (node.type === 'container') {
        const directionClass = node.direction === 'row' ? 'flex-row' : 'flex-col';
        const gapClass = node.gap === 'large' ? 'gap-8' : node.gap === 'medium' ? 'gap-4' : 'gap-2';

        return (
            <div className={`flex ${directionClass} ${gapClass} flex-wrap w-full`}>
                {node.children.map((child, index) => (
                    <Renderer key={index} node={child} />
                ))}
            </div>
        );
    }

    if (node.type === 'component') {
        const Component = componentMap[node.componentName];

        if (!Component) {
            return (
                <div className="p-4 bg-danger-50 text-danger border border-danger-200 rounded">
                    Unknown Component: {node.componentName}
                </div>
            );
        }

        // Basic $ref resolver helper (simplistic for Phase 2)
        const resolveRefs = (obj: any, dataContext: any): any => {
            if (typeof obj !== 'object' || obj === null) return obj;

            if (obj['$ref']) {
                const path = obj['$ref'].split('.');
                let val = dataContext;
                for (const segment of path) {
                    val = val?.[segment];
                }
                return val;
            }

            if (Array.isArray(obj)) {
                return obj.map(item => resolveRefs(item, dataContext));
            }

            const res: any = {};
            for (const key in obj) {
                res[key] = resolveRefs(obj[key], dataContext);
            }
            return res;
        };

        const resolvedData = resolveRefs(node.data, mockData);

        const mergedProps = {
            ...node.props,
            ...resolvedData
        };

        return <Component {...mergedProps} />;
    }

    return null;
};
