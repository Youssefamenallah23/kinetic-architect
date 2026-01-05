
import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, MessageCircle, ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';
import { NavigationSection } from '../types';
import emailjs from '@emailjs/browser';
export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'error' | 'success'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);


// ... inside your component
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Rate Limiting Logic
  const lastSubmission = localStorage.getItem('last_contact_time');
  const now = Date.now();
  if (lastSubmission && now - parseInt(lastSubmission) < 120000) {
    setFormState('error');
    setErrorMsg('Transmission cooldown active. Please wait 2 minutes.');
    setTimeout(() => setFormState('idle'), 3000);
    return;
  }

  // Validation Check
  if (!serviceId || !templateId || !publicKey) {
    setFormState('error');
    setErrorMsg('System Error: Missing environment configuration.');
    return;
  }

  setFormState('submitting');

  // Prepare the parameters to match your EmailJS Template tags
 const templateParams = {
  name: formData.name,    // Changed from from_name to name
  email: formData.email,  // Changed from from_email to email
  message: formData.message,
  // If you want to use that {{time}} tag in your template, add this:
  time: new Date().toLocaleString(), 
};
  try {
    // Using the official SDK method
    const result = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    if (result.status === 200) {
      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
      localStorage.setItem('last_contact_time', now.toString());
      setTimeout(() => setFormState('idle'), 5000);
    }
  } catch (err: any) {
    console.error('Submission Error:', err);
    setFormState('error');

    // EmailJS specific error handling
    if (err.text?.includes('Invalid grant') || err.text?.includes('reconnect')) {
      setErrorMsg('System Error: Gmail connection expired. Reconnect in EmailJS dashboard.');
    } else {
      setErrorMsg('Handshake failed. The neural link is unstable. Please try again.');
    }
    
    setTimeout(() => setFormState('idle'), 6000);
  }
};
  return (
    <section 
      id={NavigationSection.CONTACT} 
      ref={containerRef}
      className="relative py-32 px-4 md:px-8 overflow-hidden transition-colors duration-500 dark:bg-void bg-paper"
    >
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
        className="absolute bottom-1/4 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                className="h-1 bg-accent mb-6 rounded-full"
              />
              <h2 className="text-5xl md:text-7xl font-black dark:text-white text-ink tracking-tighter leading-[0.9] mb-6">
                Let's Build <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">The Future.</span>
              </h2>
              <p className="text-xl dark:text-gray-400 text-gray-600 max-w-md leading-relaxed">
                I'm currently open to collaborations on Agentic AI and Full Stack architectures.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Mail size={20} />, label: "Direct Signal", val: "youssefamenallah.contact@gmail.com" },
                { icon: <MapPin size={20} />, label: "Operational Hub", val: "Sousse, Tunisia" },
                { icon: <MessageCircle size={20} />, label: "Uptime Sync", val: "Response within 24h" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-default">
                  <div className="w-12 h-12 rounded-2xl dark:bg-white/5 bg-black/5 flex items-center justify-center dark:text-accent text-indigo-600 transition-transform group-hover:scale-110 group-hover:rotate-6">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest dark:text-gray-500 text-gray-400">{item.label}</div>
                    <div className="text-sm font-bold dark:text-white text-ink">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className={`
              p-8 md:p-12 rounded-[2.5rem] border backdrop-blur-3xl transition-all duration-700
              ${'dark:bg-white/5 dark:border-white/10 dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-white/70 border-white/50 shadow-2xl shadow-indigo-500/10'}
            `}>
              <form onSubmit={handleSubmit} className="space-y-8">
                
                <div className="group relative">
                  <input 
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 dark:border-white/10 border-black/10 py-4 dark:text-white text-ink focus:outline-none focus:border-accent transition-all duration-500 font-bold text-lg"
                  />
                  <label className="absolute left-0 top-4 text-gray-500 font-mono text-[10px] uppercase tracking-widest pointer-events-none transition-all duration-500 peer-focus:-top-4 peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-4">
                    usr // FULL NAME
                  </label>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 group-focus-within:w-full" />
                </div>

                <div className="group relative">
                  <input 
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 dark:border-white/10 border-black/10 py-4 dark:text-white text-ink focus:outline-none focus:border-accent transition-all duration-500 font-bold text-lg"
                  />
                  <label className="absolute left-0 top-4 text-gray-500 font-mono text-[10px] uppercase tracking-widest pointer-events-none transition-all duration-500 peer-focus:-top-4 peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-4">
                    msg // EMAIL ADDRESS
                  </label>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 group-focus-within:w-full" />
                </div>

                <div className="group relative">
                  <textarea 
                    required
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 dark:border-white/10 border-black/10 py-4 dark:text-white text-ink focus:outline-none focus:border-accent transition-all duration-500 font-medium resize-none text-lg"
                  />
                  <label className="absolute left-0 top-4 text-gray-500 font-mono text-[10px] uppercase tracking-widest pointer-events-none transition-all duration-500 peer-focus:-top-4 peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-4">
                    data // YOUR MESSAGE
                  </label>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 group-focus-within:w-full" />
                </div>

                <div className="pt-6">
                  <AnimatePresence mode="wait">
                    {formState === 'error' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0 }}
                        className="mb-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-500 text-xs font-mono"
                      >
                        <AlertCircle size={18} /> {errorMsg}
                      </motion.div>
                    )}
                    {formState === 'success' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0 }}
                        className="mb-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3 text-green-500 text-xs font-mono"
                      >
                        <CheckCircle2 size={18} /> Transmission Complete. Handshake successful.
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button 
                    type="submit"
                    disabled={formState === 'submitting'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                      w-full relative group py-5 rounded-2xl font-black uppercase tracking-[0.2em] transition-all duration-500 overflow-hidden
                      ${formState === 'submitting' 
                        ? 'bg-gray-500 text-white cursor-wait opacity-50' 
                        : 'bg-ink dark:bg-gradient-to-r dark:from-accent dark:to-purple-600 text-white hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]'
                      }
                    `}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {formState === 'submitting' ? (
                        <>AUTHENTICATING...</>
                      ) : (
                        <>TRANSMIT SIGNAL <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" /></>
                      )}
                    </span>
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0" />
                  </motion.button>
                  
                  <p className="mt-4 text-center text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                    Operational_Status: {formState === 'idle' ? 'LISTENING' : 'ACTIVE'}
                  </p>
                </div>
              </form>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 dark:bg-white/10 bg-black/5 rounded-3xl -z-10 blur-xl animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
