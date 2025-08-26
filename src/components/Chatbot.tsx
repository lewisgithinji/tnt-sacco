import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  quickReplies?: string[];
}

interface FAQ {
  question: string;
  answer: string;
  keywords: string[];
  quickReplies?: string[];
}

const faqs: FAQ[] = [
  {
    question: "What services does TNT Sacco offer?",
    answer: "We provide savings, loans, dividends, and investment opportunities to our members. Our goal is to empower members financially through affordable credit and reliable savings plans.",
    keywords: ["services", "offer", "provide", "what do you do"],
    quickReplies: ["Loan Products", "Savings Plans", "Investment Options"]
  },
  {
    question: "How do I become a member?",
    answer: "You can join by filling out a membership application form at any of our branches. You'll need a copy of your ID, passport photos, and a small registration fee.",
    keywords: ["join", "member", "membership", "become", "register", "sign up"],
    quickReplies: ["Required Documents", "Branch Locations", "Registration Fee"]
  },
  {
    question: "What loan products are available?",
    answer: "TNT Sacco offers personal loans, development loans, school fees loans, emergency loans, and business loans at competitive interest rates. Loan eligibility depends on your savings and repayment capacity.",
    keywords: ["loan", "loans", "borrow", "credit", "financing"],
    quickReplies: ["Personal Loans", "Business Loans", "Emergency Loans", "Loan Requirements"]
  },
  {
    question: "How long does it take to process a loan?",
    answer: "Loan processing typically takes 3–5 working days, depending on documentation and approval requirements. Complete documentation speeds up the process.",
    keywords: ["processing time", "how long", "loan approval", "duration"],
    quickReplies: ["Required Documents", "Loan Status", "Expedite Process"]
  },
  {
    question: "Where are your branches located?",
    answer: "Our head office is at Teachers Plaza, Ground Floor, Kitale. We have other branches across the region. You can view maps and directions on our Contact Page or visit our website for complete branch information.",
    keywords: ["branch", "location", "office", "where", "address"],
    quickReplies: ["Head Office", "Branch List", "Contact Details", "Directions"]
  },
  {
    question: "Do members earn dividends?",
    answer: "Yes! Every year, TNT Sacco distributes dividends and interest on deposits to members based on performance and savings. The dividend rate depends on the Sacco's annual performance.",
    keywords: ["dividend", "earnings", "returns", "interest", "profit sharing"],
    quickReplies: ["Dividend Rates", "Payment Schedule", "Savings Products"]
  },
  {
    question: "Can I contact TNT Sacco online?",
    answer: "Yes! You can use the Contact Page form, email us at info@tntsacco.co.ke, call us at +254 111 050 510, or reach us on WhatsApp via the quick chat button on our website.",
    keywords: ["contact", "online", "email", "phone", "whatsapp", "reach"],
    quickReplies: ["Email Support", "Phone Support", "WhatsApp Chat", "Visit Office"]
  },
  {
    question: "What are your operating hours?",
    answer: "We're open Monday to Friday: 8:00 AM - 5:00 PM, Saturday: 8:00 AM - 1:00 PM, and closed on Sundays. Our online services are available 24/7.",
    keywords: ["hours", "time", "open", "operating", "schedule", "when"],
    quickReplies: ["Weekend Hours", "Holiday Schedule", "Online Services"]
  },
  {
    question: "What documents do I need to open an account?",
    answer: "You need a copy of your national ID, passport photos (2), KRA PIN certificate, and the minimum initial deposit as required for your chosen account type.",
    keywords: ["documents", "requirements", "open account", "needed", "ID"],
    quickReplies: ["Account Types", "Minimum Deposit", "Branch Visit"]
  },
  {
    question: "How can I check my account balance?",
    answer: "You can check your balance by visiting any branch, calling our customer service line, using our mobile banking service, or through SMS banking if registered.",
    keywords: ["balance", "check", "account", "statement", "inquiry"],
    quickReplies: ["Mobile Banking", "SMS Banking", "Visit Branch", "Call Support"]
  }
];

const quickStartOptions = [
  "Loan Products",
  "How to Join", 
  "Branch Contacts",
  "Savings Plans",
  "Dividend Information",
  "Contact Support"
];

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your TNT Sacco assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date(),
      quickReplies: quickStartOptions
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const findBestMatch = (userInput: string): FAQ | null => {
    const input = userInput.toLowerCase();
    let bestMatch: FAQ | null = null;
    let maxScore = 0;

    faqs.forEach(faq => {
      let score = 0;
      faq.keywords.forEach(keyword => {
        if (input.includes(keyword.toLowerCase())) {
          score += keyword.length;
        }
      });
      
      if (score > maxScore) {
        maxScore = score;
        bestMatch = faq;
      }
    });

    return maxScore > 0 ? bestMatch : null;
  };

  const handleSendMessage = async (text: string = inputValue) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Log query to console (in production, this would be sent to info@tntsacco.co.ke)
    console.log('Chatbot Query:', {
      query: text.trim(),
      timestamp: new Date().toISOString(),
      forwardTo: 'info@tntsacco.co.ke'
    });

    // Simulate typing delay
    setTimeout(() => {
      const bestMatch = findBestMatch(text);
      
      let botResponse: Message;
      
      if (bestMatch) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: bestMatch.answer,
          isBot: true,
          timestamp: new Date(),
          quickReplies: bestMatch.quickReplies || ["More Questions", "Contact Support", "Branch Locations"]
        };
      } else {
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: "I apologize, but I don't have specific information about that. For detailed assistance, please contact our team at info@tntsacco.co.ke or call +254 111 050 510. Our staff will be happy to help you!",
          isBot: true,
          timestamp: new Date(),
          quickReplies: ["Contact Support", "Common Questions", "Branch Locations"]
        };
      }

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg transition-all duration-300",
          "bg-primary hover:bg-primary/90 hover:scale-110",
          isOpen && "rotate-180"
        )}
        size="icon"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-3rem)] h-[500px] shadow-2xl animate-scale-in">
          <CardHeader className="bg-primary text-primary-foreground p-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Bot size={20} />
              TNT Sacco Assistant
            </CardTitle>
          </CardHeader>

          <CardContent className="p-0 flex flex-col h-[calc(500px-60px)]">
            {/* Messages Area */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex gap-2",
                      message.isBot ? "justify-start" : "justify-end"
                    )}
                  >
                    {message.isBot && (
                      <div className="flex-shrink-0">
                        <Bot className="w-6 h-6 text-primary mt-1" />
                      </div>
                    )}
                    
                    <div className={cn(
                      "max-w-[80%] rounded-lg px-3 py-2 text-sm",
                      message.isBot 
                        ? "bg-muted text-foreground" 
                        : "bg-primary text-primary-foreground ml-auto"
                    )}>
                      <p className="leading-relaxed">{message.text}</p>
                      
                      {/* Quick Reply Buttons */}
                      {message.isBot && message.quickReplies && (
                        <div className="flex flex-wrap gap-1 mt-3">
                          {message.quickReplies.map((reply, index) => (
                            <Button
                              key={index}
                              variant="secondary"
                              size="sm"
                              className="text-xs h-7 px-2"
                              onClick={() => handleQuickReply(reply)}
                            >
                              {reply}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>

                    {!message.isBot && (
                      <div className="flex-shrink-0">
                        <User className="w-6 h-6 text-muted-foreground mt-1" />
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex gap-2 items-center">
                    <Bot className="w-6 h-6 text-primary" />
                    <div className="bg-muted rounded-lg px-3 py-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div ref={messagesEndRef} />
            </ScrollArea>

            {/* Input Area */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me anything about TNT Sacco..."
                  className="flex-1"
                />
                <Button 
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isTyping}
                  size="icon"
                >
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};