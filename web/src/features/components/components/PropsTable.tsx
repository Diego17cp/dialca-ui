import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { ComponentProp } from '../types';
import { ImInfo } from 'react-icons/im';

interface PropsTableProps {
    props: ComponentProp[];
}

export const PropsTable: React.FC<PropsTableProps> = ({ props }) => {
    const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
    const [isClosing, setIsClosing] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
    const tooltipRef = useRef<HTMLDivElement>(null);
    const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

    const toggleTooltip = (propName: string) => {
        if (activeTooltip === propName) {
            closeTooltip();
            return;
        }        
        const button = buttonRefs.current[propName];
        if (button) {
            const rect = button.getBoundingClientRect();
            setTooltipPosition({
                top: rect.top - 8,
                left: rect.left - 16 
            });
        }
        
        setIsClosing(false);
        setActiveTooltip(propName);
    };

    const closeTooltip = () => {
        setIsClosing(true);
        setTimeout(() => {
            setActiveTooltip(null);
            setIsClosing(false);
        }, 150);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
                const clickedButton = Object.values(buttonRefs.current).find(button => 
                    button && button.contains(event.target as Node)
                );
                if (!clickedButton) closeTooltip();
            }
        };
        
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeTooltip();
        };

        const handleScroll = () => {
            if (activeTooltip) closeTooltip();
        };

        if (activeTooltip) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleEscape);
            window.addEventListener('scroll', handleScroll, true);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
                document.removeEventListener('keydown', handleEscape);
                window.removeEventListener('scroll', handleScroll, true);
            };
        }
    }, [activeTooltip]);

    const currentProp = props.find(p => p.name === activeTooltip);

    return (
        <>
            <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-lg">
                <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                            <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                                Name
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                                Type
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                                Default
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                                Required
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900">
                        {props.map((prop) => (
                            <tr 
                                key={prop.name}
                                className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                            >
                                <td className="py-3 px-4">
                                    <div className="flex items-center gap-2">
                                        <code className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-primary font-medium">
                                            {prop.name}
                                        </code>
                                        <button
                                            ref={(el) => { buttonRefs.current[prop.name] = el; }}
                                            onClick={() => toggleTooltip(prop.name)}
                                            className="text-secondary hover:text-blue-700 dark:text-primary dark:hover:text-blue-300 transition-all duration-200 hover:scale-110 cursor-pointer"
                                            aria-label={`Show description for ${prop.name}`}
                                        >
                                            <ImInfo size={16} />
                                        </button>
                                    </div>
                                </td>
                                <td className="py-3 px-4">
                                    <code className="text-sm text-gray-600 dark:text-gray-400 break-all">
                                        {prop.type}
                                    </code>
                                </td>
                                <td className="py-3 px-4">
                                    {prop.default ? (
                                        <code className="text-sm text-gray-600 dark:text-gray-400">
                                            {prop.default}
                                        </code>
                                    ) : (
                                        <span className="text-gray-400">—</span>
                                    )}
                                </td>
                                <td className="py-3 px-4">
                                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                        prop.required 
                                            ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                                            : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                                    }`}>
                                        {prop.required ? 'Required' : 'Optional'}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {activeTooltip && currentProp && createPortal(
                <div 
                    ref={tooltipRef}
                    className={`
                        fixed z-[9999] pointer-events-auto
                        transition-all duration-150 ease-out
                        ${isClosing 
                            ? 'animate-zoom-out' 
                            : 'animate-zoom-in'
                        }
                    `}
                    style={{
                        top: tooltipPosition.top,
                        left: tooltipPosition.left,
                        transform: 'translateY(-100%)',
                        maxWidth: 'min(320px, calc(100vw - 2rem))'
                    }}
                >
                    <div className="bg-gray-900 dark:bg-gray-800 text-white text-sm rounded-lg p-4 shadow-2xl border border-gray-700 dark:border-gray-600 backdrop-blur-sm">
                        {/* Arrow */}
                        <div className="absolute top-full left-6 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-gray-900 dark:border-t-gray-800"></div>
                        {/* Content */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 flex-wrap">
                                <code className="text-blue-300 font-semibold bg-blue-900/30 px-2 py-1 rounded text-xs">
                                    {currentProp.name}
                                </code>
                                {currentProp.required && (
                                    <span className="text-red-300 text-xs font-medium bg-red-900/30 px-2 py-1 rounded">
                                        Required
                                    </span>
                                )}
                            </div>
                            <div className="text-gray-300 leading-relaxed">
                                {currentProp.description}
                            </div>
                            <div className="pt-2 border-t border-gray-700">
                                <div className="text-gray-400 text-xs">
                                    <span className="font-medium">Type:</span>{' '}
                                    <code className="text-gray-300 bg-gray-800/50 px-1.5 py-0.5 rounded">
                                        {currentProp.type}
                                    </code>
                                </div>
                                {currentProp.default && (
                                    <div className="text-gray-400 text-xs mt-1">
                                        <span className="font-medium">Default:</span>{' '}
                                        <code className="text-gray-300 bg-gray-800/50 px-1.5 py-0.5 rounded">
                                            {currentProp.default}
                                        </code>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};