"use client"
import { useState } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";

export default function ContactFooter(){

      const [email, setEmail] = useState("");

     const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe:", email);
    setEmail("");
  };

    return(<div className="bg-greenDeep">
    <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className=' pb-16 border-b border-goldAccent/20'
        >
          <div className='max-w-2xl mx-auto text-center'>
            <h3 className='text-3xl lg:text-4xl mb-4 text-white font-serif'>
              Ilhomlanishda <span className='text-goldAccent'>Davom eting</span>
            </h3>
            <p className='text-base mb-8 text-white/70'>
              Eksklyuziv dizaynlar, yangi kolleksiyalarga erta kirish va
              mutaxassislarimizdan ichki dizayn bo‘yicha maslahatlar uchun
              bizning axborot byulletenimizga obuna bo‘ling.
            </p>

            <form
              onSubmit={handleSubscribe}
              className='flex gap-3 max-w-lg mx-auto'
            >
              <input
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='Emailingizni kiriting'
                className='flex-1 px-6 py-4 rounded-full outline-none transition-all duration-300 bg-white/10 border border-goldAccent/30 text-white'
                required
              />
              <button
                type='submit'
                className='px-8 py-4 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-goldAccent text-greenDeep font-medium'
              >
                <span className='hidden md:block'>Obuna bo&apos;lish</span>
                <Send className='w-4 h-4' />
              </button>
            </form>
          </div>
        </motion.div></div>) 
}