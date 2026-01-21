export interface UIPlan {
    version: string;
    meta?: {
        title: string;
        description: string;
    };
    dataSources: Record<string, DataSource>;
    layout: LayoutNode;
}

export type DataSource = {
    type: 'fetch' | 'subscription';
    url?: string;
    method?: string;
    refreshInterval?: number;
    channel?: string;
};

export type LayoutNode = ContainerNode | ComponentNode;

export interface ContainerNode {
    type: 'container';
    direction?: 'row' | 'column';
    gap?: 'small' | 'medium' | 'large';
    children: LayoutNode[];
}

export interface ComponentNode {
    type: 'component';
    componentName: string;
    id?: string;
    props?: Record<string, any>;
    data?: Record<string, any>;
}
