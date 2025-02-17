import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TranslationTestApp = () => {
  const [content, setContent] = useState('Hello, this is a test content for translation.');
  const [translatedContent, setTranslatedContent] = useState('');

  const handleTranslate = async () => {
    try {
      const response = await fetch('https://translation-api.example.com/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: content })
      });
      const data = await response.json();
      setTranslatedContent(data.translatedText);
    } catch (error) {
      console.error('Error translating content:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-lg">
        <CardContent>
          <h1 className="text-2xl font-bold mb-4">Translation Testing Web App</h1>
          <textarea
            className="w-full p-2 border rounded mb-4"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter text to translate..."
          />
          <Button onClick={handleTranslate} className="mb-4">Translate</Button>
          {translatedContent && (
            <div className="mt-4 p-2 border rounded bg-white">
              <h2 className="text-xl font-semibold mb-2">Translated Content:</h2>
              <p>{translatedContent}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TranslationTestApp;
