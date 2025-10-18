import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles, Target, Users, Award, Lightbulb, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef } from 'react';

interface HeroSectionProps {
  language: 'fr' | 'en';
}

export function HeroSection({ language }: HeroSectionProps) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const content = {
    fr: {
      hero: {
        welcome: 'Bienvenue chez',
        company: 'GOLDEN IDEAS',
        tagline: 'HYE',
        subtitle: 'Votre Partenaire Stratégique en Transformation Digitale',
        description:
          'Dématérialisation • Digitalisation • Formation • Valorisation des Données',
        cta: 'Découvrir Nos Services',
        scroll: 'Défiler pour découvrir',
      },
      values: {
        title: 'NOS VALEURS',
        subtitle: 'Les principes qui guident notre excellence',
        items: [
          { icon: Lightbulb, label: 'Innovation', desc: 'Technologies de pointe' },
          { icon: Target, label: 'Responsabilité', desc: 'Engagement total' },
          { icon: Users, label: "Esprit d'équipe", desc: 'Collaboration forte' },
          { icon: Sparkles, label: 'Engagement', desc: 'Dévoués à votre succès' },
          { icon: Award, label: 'Excellence', desc: 'Qualité premium' },
        ],
      },
      cta: {
        title: 'VOUS AVEZ UNE IDÉE',
        subtitle: 'À DIGITALISER OU DÉMATÉRIALISER',
        action: 'CONTACTEZ-NOUS !',
        button: 'Nous Contacter',
      },
      transformation: {
        title: 'GOLDEN IDEAS',
        subtitle: 'LA TRANSFORMATION',
        features: ['POSITIVE', 'ÉVIDENTE', 'POUR VOTRE ENTREPRISE'],
      },
    },
    en: {
      hero: {
        welcome: 'Welcome to',
        company: 'GOLDEN IDEAS',
        tagline: 'HYE',
        subtitle: 'Your Strategic Partner in Digital Transformation',
        description: 'Dematerialization • Digitalization • Training • Data Valorization',
        cta: 'Discover Our Services',
        scroll: 'Scroll to discover',
      },
      values: {
        title: 'OUR VALUES',
        subtitle: 'The principles guiding our excellence',
        items: [
          { icon: Lightbulb, label: 'Innovation', desc: 'Cutting-edge tech' },
          { icon: Target, label: 'Responsibility', desc: 'Total commitment' },
          { icon: Users, label: 'Team Spirit', desc: 'Strong collaboration' },
          { icon: Sparkles, label: 'Commitment', desc: 'Devoted to success' },
          { icon: Award, label: 'Excellence', desc: 'Premium quality' },
        ],
      },
      cta: {
        title: 'YOU HAVE AN IDEA',
        subtitle: 'TO DIGITALIZE OR DEMATERIALIZE',
        action: 'CONTACT US!',
        button: 'Contact Us',
      },
      transformation: {
        title: 'GOLDEN IDEAS',
        subtitle: 'THE TRANSFORMATION',
        features: ['POSITIVE', 'EVIDENT', 'FOR YOUR BUSINESS'],
      },
    },
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="relative overflow-hidden" ref={sectionRef}>
      {/* First Slide - Main Hero with Parallax */}
      <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758194190679-198a77cba84f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBidXNpbmVzc3xlbnwxfHx8fDE3NjA3NzU5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Golden Ideas Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/85"></div>
          
          {/* Animated golden particles overlay */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#D4AF37] rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity, scale }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[#D4AF37] text-xl md:text-2xl mb-6 tracking-widest uppercase"
            >
              {content[language].hero.welcome}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl text-white mb-4 tracking-tight" style={{ fontWeight: 900 }}>
                {content[language].hero.company}
              </h1>
              <div className="inline-block px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full">
                <span className="text-white text-2xl md:text-3xl tracking-wider" style={{ fontWeight: 700 }}>
                  {content[language].hero.tagline}
                </span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-2xl md:text-4xl text-[#F4E4C1] mb-6 max-w-4xl mx-auto leading-relaxed"
            >
              {content[language].hero.subtitle}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
            >
              {content[language].hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] hover:from-[#FFD700] hover:to-[#D4AF37] text-white px-10 py-7 text-lg shadow-2xl shadow-[#D4AF37]/30 hover:shadow-[#D4AF37]/50 transition-all duration-500 group"
              >
                {content[language].hero.cta}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                onClick={scrollToNext}
                variant="outline"
                size="lg"
                className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-10 py-7 text-lg transition-all duration-300"
              >
                {content[language].hero.scroll}
                <ChevronDown className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent"></div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="cursor-pointer"
            onClick={scrollToNext}
          >
            <div className="w-8 h-14 border-3 border-[#D4AF37] rounded-full flex justify-center pt-3">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                className="w-2 h-2 bg-[#D4AF37] rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Second Slide - Values with Modern Cards */}
      <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNEREFGMzciIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDEzNGg3djFoLTd6bTAtNWg3djFoLTd6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl mb-6 text-white">{content[language].values.title}</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-400">{content[language].values.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {content[language].values.items.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-[#D4AF37] transition-all duration-500 overflow-hidden shadow-xl">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#FFD700]/0 group-hover:from-[#D4AF37]/10 group-hover:to-[#FFD700]/5 transition-all duration-500"></div>

                  <div className="relative">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#FFD700] flex items-center justify-center shadow-2xl shadow-[#D4AF37]/30 group-hover:shadow-[#D4AF37]/60 transition-all duration-500 group-hover:rotate-6">
                      <item.icon className="w-10 h-10 text-white" />
                    </div>

                    <h3 className="text-2xl mb-3 text-white text-center group-hover:text-[#D4AF37] transition-colors duration-300">
                      {item.label}
                    </h3>

                    <p className="text-gray-400 text-center text-sm">{item.desc}</p>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Third Slide - CTA with Elegant Design */}
      <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F4E4C1] via-white to-[#F4E4C1]"></div>
        
        {/* Geometric patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-8"
            >
              <div className="px-6 py-3 bg-gradient-to-r from-[#D4AF37]/20 to-[#FFD700]/20 rounded-full border-2 border-[#D4AF37]/30">
                <p className="text-[#B8941E] tracking-widest uppercase">
                  {language === 'fr' ? 'Prêt à commencer ?' : 'Ready to start?'}
                </p>
              </div>
            </motion.div>

            <h2 className="text-5xl md:text-7xl mb-6 text-[#0a0a0a]" style={{ fontWeight: 800 }}>
              {content[language].cta.title}
            </h2>
            <h3 className="text-4xl md:text-6xl mb-8 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
              {content[language].cta.subtitle}
            </h3>
            <p className="text-3xl md:text-5xl mb-16 text-[#1a1a1a]" style={{ fontWeight: 600 }}>
              {content[language].cta.action}
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] hover:from-[#FFD700] hover:via-[#D4AF37] hover:to-[#FFD700] text-white px-16 py-8 text-2xl shadow-2xl shadow-[#D4AF37]/40 hover:shadow-[#D4AF37]/60 transition-all duration-500 group bg-[length:200%_100%] hover:bg-right"
              >
                {content[language].cta.button}
                <ArrowRight className="ml-3 w-7 h-7 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Fourth Slide - Transformation Statement */}
      <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]"></div>
        
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/20 to-[#FFD700]/20 rounded-full blur-3xl"
        ></motion.div>

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#FFD700]/20 to-[#D4AF37]/20 rounded-full blur-3xl"
        ></motion.div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-7xl md:text-9xl mb-12 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent"
              style={{ fontWeight: 900 }}
            >
              {content[language].transformation.title}
            </motion.h2>

            <h3 className="text-4xl md:text-6xl mb-16 text-white" style={{ fontWeight: 600 }}>
              {content[language].transformation.subtitle}
            </h3>

            <div className="space-y-8">
              {content[language].transformation.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="inline-block"
                >
                  <div className="relative px-12 py-6 bg-gradient-to-r from-[#D4AF37]/10 to-[#FFD700]/10 rounded-2xl border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 group cursor-pointer">
                    <span className="text-3xl md:text-5xl text-white group-hover:text-[#FFD700] transition-colors duration-300" style={{ fontWeight: 700 }}>
                      {feature}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 to-[#FFD700]/0 group-hover:from-[#D4AF37]/20 group-hover:to-[#FFD700]/20 rounded-2xl transition-all duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
