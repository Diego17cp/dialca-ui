import React, { useState } from 'react';
import { Modal, Button } from 'dialca-ui';
import { FaCircleExclamation } from 'react-icons/fa6';

export const BasicModalExample: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="space-y-4">
            <Button onClick={() => setIsOpen(true)}>
                Open Modal
            </Button>

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Confirm Action"
                classes={{
                    container: "dark:bg-gray-800!",
                    header: "dark:border-gray-700!",
                    title: "dark:text-white!",
                    closeButton: "dark:text-gray-400! hover:dark:text-white! dark:hover:bg-gray-700!",
                }}
            >
                <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                                <FaCircleExclamation className="text-red-600" size={20} />
                            </div>
                        </div>
                        <div className="flex-1">
                            <p className="text-gray-900 font-medium dark:text-white">
                                This action cannot be undone
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                                Are you sure you want to proceed?
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <Button
                            variant="danger"
                            onClick={() => {
                                console.log("Confirmed");
                                setIsOpen(false);
                            }}
                        >
                            Yes, confirm
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => setIsOpen(false)}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};