import React, { useState } from 'react';
import { TxtArea } from 'dialca-ui';
import { FaComment } from 'react-icons/fa6';
import { FaEdit, FaExclamationCircle } from 'react-icons/fa';

export const BasicTxtAreaExample: React.FC = () => {
    const [comment, setComment] = useState("");
    const [description, setDescription] = useState("");
    const [feedback, setFeedback] = useState("");
    const [message, setMessage] = useState("");
    
    return (
        <div className="space-y-6 max-w-2xl mx-auto">
            <TxtArea
                label="Comments"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Enter your comments here..."
                icon={<FaComment />}
            />
            <TxtArea
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your project..."
                required
                hasCharCount
                charCountType="bottom"
                maxLength={300}
                icon={<FaEdit />}
            />
            <TxtArea
                label="Feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Share your feedback..."
                hasCharCount
                charCountType="floating-circle"
                maxLength={500}
                allowResize
            />
            <TxtArea
                label="Required Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter a message..."
                hasErrors
                errorMessage="This field is required"
                required
                icon={<FaExclamationCircle />}
            />
            <TxtArea
                label="Read Only Content"
                value="This content cannot be edited"
                disabled
                icon={<FaComment />}
            />
        </div>
    );
};