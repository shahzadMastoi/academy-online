
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, GenerateContentResponse } from '@google/genai';
import { Send, X, Bot, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

const TarbiyahAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'model'; text: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatHistory, isTyping]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage = message;
    setMessage('');
    setChatHistory(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...chatHistory.map(m => ({ 
            role: m.role, 
            parts: [{ text: m.text }] 
          })), 
          { 
            role: 'user', 
            parts: [{ text: userMessage }] 
          }
        ],
        config: {
          systemInstruction: "You are the 'NoorLearn AI Assistant', an expert in Islamic Tarbiyah (parenting). You are kind, scholarly, and supportive. Help parents with advice on Islamic education for kids. Mention that NoorLearn Academy offers specialized live courses for these topics.",
          temperature: 0.7,
        },
      });

      const botText = response.text || "I'm sorry, I couldn't process that. Please try again.";
      setChatHistory(prev => [...prev, { role: 'model', text: botText }]);
    } catch (error) {
      console.error('Gemini Error:', error);
      setChatHistory(prev => [...prev, { role: 'model', text: "I'm having a little technical trouble. Please feel free to reach out to our support team!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all z-50 group"
      >
        <MessageCircle size={32} />
      </button>

      {isOpen && (
        <div className="fixed bottom-8 right-8 w-[90vw] sm:w-[400px] h-[600px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col z-[60] overflow-hidden">
          <div className="p-6 bg-emerald-600 text-white flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Bot size={24} />
              <div>
                <h3 className="font-bold leading-none">Tarbiyah AI</h3>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)}><X size={24} /></button>
          </div>

          <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-4 bg-slate-50">
            {chatHistory.length === 0 && (
              <div className="text-center py-8">
                <Sparkles size={32} className="mx-auto text-emerald-600 mb-4" />
                <h4 className="font-bold mb-2">As-salamu Alaykum!</h4>
                <p className="text-sm text-slate-500">Ask me anything about Islamic parenting.</p>
              </div>
            )}
            {chatHistory.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${
                  m.role === 'user' ? 'bg-emerald-600 text-white' : 'bg-white text-slate-700 border'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && <div className="text-xs text-slate-400 animate-pulse">Assistant is thinking...</div>}
          </div>

          <div className="p-4 border-t bg-white">
            <div className="relative flex items-center">
              <input 
                type="text" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your question..." 
                className="w-full pl-5 pr-14 py-4 bg-slate-100 rounded-2xl focus:outline-none text-sm"
              />
              <button 
                onClick={handleSend}
                disabled={!message.trim() || isTyping}
                className="absolute right-2 p-2.5 bg-emerald-600 text-white rounded-xl"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TarbiyahAssistant;
