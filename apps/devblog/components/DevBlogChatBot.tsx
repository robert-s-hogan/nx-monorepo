import React, { useState } from 'react';
import { Button } from '@with-nx/generic-ui';
import { fetchResponseFromAssistant } from './DevBlogOpenai';

interface ChatResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

const ChatComponent = () => {
  const [input, setInput] = useState('');
  const [responses, setResponses] = useState<ChatResponse[]>([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    const response = await fetchResponseFromAssistant(input);
    if (response && response.choices && response.choices.length > 0) {
      setResponses((prevResponses) => [...prevResponses, response]);
    }
    setInput(''); // Clear input after sending
  };

  return (
    <div>
      <input value={input} onChange={handleInput} />
      <Button onClick={handleSubmit} text="Send" theme="primary" />
      <div>
        {responses.map((resp, index) => (
          <p key={index}>
            {resp.choices && resp.choices[0] && resp.choices[0].message
              ? resp.choices[0].message.content
              : 'Loading...'}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ChatComponent;
