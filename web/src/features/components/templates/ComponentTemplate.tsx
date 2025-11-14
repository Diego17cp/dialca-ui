import type { ComponentTemplateProps } from '../types';
import { ComponentHeader } from './ComponentHeader';
import { ComponentExamples } from './ComponentExamples';
import { ComponentAPI } from './ComponentAPI';
import { RelatedComponents } from './RelatedComponents';
import { ComponentTypes } from './ComponentTypes';

export const ComponentTemplate: React.FC<ComponentTemplateProps> = ({
    name,
    description,
    basicUsage,
    basicUsageComponent,
    examples,
    api,
    types,
    relatedComponents, 
    srcUrl,
    issueUrl,
    playgroundUrl,
    basicUsageDisplay
}) => {
    return (
        <div className="min-h-full">
            <ComponentHeader 
                name={name}
                description={description}
                basicUsage={basicUsage}
                srcUrl={srcUrl}
                issueUrl={issueUrl}
                playgroundUrl={playgroundUrl}
                basicUsageComponent={basicUsageComponent}
                basicUsageDisplay={basicUsageDisplay}
            />
            
            <ComponentExamples examples={examples} />
            
            <ComponentAPI api={api} />
            {types && types.length > 0 && (
                <ComponentTypes types={types} />
            )}
            {relatedComponents && relatedComponents.length > 0 && (
                <RelatedComponents components={relatedComponents} />
            )}
        </div>
    );
};