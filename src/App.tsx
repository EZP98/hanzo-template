import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, Plus, Minus, Star } from 'lucide-react'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

// Header Component
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl sm:text-3xl font-bold tracking-tight"
          >
            Hanzo
          </motion.a>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setIsMenuOpen(true)}
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </motion.button>
        </div>
      </header>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#1A1A1A] text-white"
          >
            <div className="h-full flex flex-col p-6">
              <div className="flex items-center justify-between mb-12">
                <span className="text-2xl sm:text-3xl font-bold">Hanzo</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 flex flex-col justify-center">
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="space-y-4"
                >
                  {['Work', 'About', 'Process', 'Pricing', 'FAQ', 'Contact'].map((item) => (
                    <motion.li key={item} variants={fadeInUp}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-4xl sm:text-6xl font-bold hover:text-[#FF3700] transition-colors"
                      >
                        {item}
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>

              <div className="flex gap-6 text-white/60">
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">Dribbble</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Hero Section
function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 pb-12">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-8">
            Unlimited Design
            <br />
            <span className="text-[#FF3700]">for Solid Startups</span>
          </h1>

          <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto mb-10">
            Design subscription that scales with your needs. Pause or cancel anytime.
            Get unlimited requests and revisions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FF3700] text-white rounded-full font-semibold hover:bg-[#E63200] transition-colors"
            >
              See Plans
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#work"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-text rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              View Work
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Logo Ticker
function LogoTicker() {
  const logos = [
    'Stripe', 'Notion', 'Slack', 'Linear', 'Figma', 'Vercel', 'Webflow', 'Framer'
  ]

  return (
    <section className="py-12 overflow-hidden border-y border-border">
      <div className="flex animate-marquee">
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 px-8 sm:px-12 text-text-muted text-lg sm:text-xl font-medium"
          >
            {logo}
          </div>
        ))}
      </div>
    </section>
  )
}

// Image Showcase
function ImageShowcase() {
  const images = [
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
    'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800',
    'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800',
  ]

  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <img
                src={img}
                alt={`Showcase ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// About Section
function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium mb-6">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              We're a creative studio building brands that stand out
            </h2>
            <p className="text-text-muted text-lg mb-8">
              Founded in 2020, Hanzo has helped over 100+ startups transform their
              visual identity. We believe great design should be accessible to
              everyone, which is why we created a subscription model that works.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-4xl sm:text-5xl font-bold text-[#FF3700]">100+</p>
                <p className="text-text-muted">Happy Clients</p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-bold text-[#FF3700]">500+</p>
                <p className="text-text-muted">Projects Done</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                alt="Team"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FF3700] rounded-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Process Section
function Process() {
  const steps = [
    {
      number: '01',
      title: 'Subscribe',
      description: 'Pick a plan that fits your needs. No contracts, cancel anytime.'
    },
    {
      number: '02',
      title: 'Request',
      description: 'Submit unlimited design requests through our simple dashboard.'
    },
    {
      number: '03',
      title: 'Receive',
      description: 'Get your designs delivered in 48 hours on average. Revise until perfect.'
    }
  ]

  return (
    <section id="process" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-surface-dark rounded-full text-sm font-medium mb-6">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Simple Process, Great Results
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-surface-dark"
            >
              <span className="text-5xl font-bold text-[#FF3700]/30 mb-4 block">
                {step.number}
              </span>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-text-muted">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Work/Projects Section
function Work() {
  const projects = [
    {
      title: 'Fintech Dashboard',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800'
    },
    {
      title: 'E-commerce Rebrand',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800'
    },
    {
      title: 'Health App UI',
      category: 'Mobile App',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800'
    },
    {
      title: 'SaaS Landing Page',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800'
    }
  ]

  return (
    <section id="work" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <span className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium mb-6">
              Our Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Recent Projects
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#FF3700] font-semibold hover:gap-3 transition-all"
          >
            View All <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-text-muted text-sm">{project.category}</span>
              <h3 className="text-xl sm:text-2xl font-bold group-hover:text-[#FF3700] transition-colors">
                {project.title}
              </h3>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Testimonials Section
function Testimonials() {
  const testimonials = [
    {
      quote: "Hanzo transformed our brand completely. The subscription model is genius - we get unlimited revisions and the quality is always top-notch.",
      author: "Sarah Chen",
      role: "CEO, TechFlow",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
    },
    {
      quote: "Best investment we've made. The turnaround time is incredible and the designs consistently exceed our expectations.",
      author: "Marcus Rodriguez",
      role: "Founder, Skyline",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
    },
    {
      quote: "Finally, a design service that understands startups. Fast, flexible, and affordable. Highly recommended!",
      author: "Emily Watson",
      role: "CMO, GrowthLab",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            What Our Clients Say
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.author}
              variants={fadeInUp}
              className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FF3700] text-[#FF3700]" />
                ))}
              </div>
              <p className="text-white/80 mb-6">{t.quote}</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{t.author}</p>
                  <p className="text-white/60 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Pricing Section
function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$1,995',
      period: '/month',
      description: 'Perfect for startups and small teams',
      features: [
        'One request at a time',
        'Average 48h delivery',
        'Unlimited revisions',
        'Pause or cancel anytime'
      ],
      featured: false
    },
    {
      name: 'Pro',
      price: '$3,995',
      period: '/month',
      description: 'For growing companies with more needs',
      features: [
        'Two requests at a time',
        'Average 24h delivery',
        'Unlimited revisions',
        'Priority support',
        'Pause or cancel anytime'
      ],
      featured: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large teams with custom needs',
      features: [
        'Unlimited requests',
        'Same-day delivery',
        'Dedicated designer',
        '24/7 support',
        'Custom integrations'
      ],
      featured: false
    }
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium mb-6">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            No surprises. No hidden fees. Pick a plan that works for you.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-3xl ${
                plan.featured
                  ? 'bg-[#1A1A1A] text-white ring-2 ring-[#FF3700]'
                  : 'bg-white'
              }`}
            >
              {plan.featured && (
                <span className="inline-block px-3 py-1 bg-[#FF3700] text-white text-xs font-semibold rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={plan.featured ? 'text-white/60 mb-6' : 'text-text-muted mb-6'}>
                {plan.description}
              </p>
              <div className="mb-6">
                <span className="text-4xl sm:text-5xl font-bold">{plan.price}</span>
                <span className={plan.featured ? 'text-white/60' : 'text-text-muted'}>
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <svg
                      className={`w-5 h-5 ${plan.featured ? 'text-[#FF3700]' : 'text-green-500'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className={plan.featured ? 'text-white/80' : ''}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-full font-semibold transition-colors ${
                  plan.featured
                    ? 'bg-[#FF3700] text-white hover:bg-[#E63200]'
                    : 'bg-[#1A1A1A] text-white hover:bg-black'
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How does the subscription work?',
      answer: 'Simply choose a plan and submit as many design requests as you need. We work on them one at a time (or two for Pro) and deliver within 48 hours on average.'
    },
    {
      question: 'What if I don\'t like the design?',
      answer: 'No worries! We offer unlimited revisions. We\'ll keep iterating until you\'re 100% satisfied with the result.'
    },
    {
      question: 'Can I really pause or cancel anytime?',
      answer: 'Yes! There are no contracts or commitments. Pause when you don\'t need design work, and resume when you do.'
    },
    {
      question: 'What types of design do you cover?',
      answer: 'We handle everything from web and mobile UI design, branding, social media graphics, presentations, and more.'
    },
    {
      question: 'Who are the designers?',
      answer: 'Our team consists of senior designers with 5+ years of experience working with startups and Fortune 500 companies.'
    }
  ]

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-surface-dark rounded-full text-sm font-medium mb-6">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Got Questions?
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-4"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="rounded-2xl bg-surface-dark overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {openIndex === i ? (
                  <Minus className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-6 text-text-muted">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// CTA Section
function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-12 sm:p-16 rounded-3xl bg-[#1A1A1A] text-white text-center overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF3700] rounded-full blur-[100px] opacity-30" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FF3700] rounded-full blur-[80px] opacity-20" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform
              <br />
              Your Brand?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              Join 100+ startups already growing with Hanzo. Start your design journey today.
            </p>
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF3700] text-white rounded-full font-semibold hover:bg-[#E63200] transition-colors"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <span className="text-2xl font-bold">Hanzo</span>
            <p className="text-text-muted mt-2">Design subscriptions for startups</p>
          </div>

          <div className="flex gap-6">
            <a href="#work" className="text-text-muted hover:text-text transition-colors">Work</a>
            <a href="#about" className="text-text-muted hover:text-text transition-colors">About</a>
            <a href="#pricing" className="text-text-muted hover:text-text transition-colors">Pricing</a>
            <a href="#faq" className="text-text-muted hover:text-text transition-colors">FAQ</a>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-text-muted text-sm">
          <p>&copy; 2024 Hanzo. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-text transition-colors">Privacy</a>
            <a href="#" className="hover:text-text transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Marquee Animation CSS (add to index.css)
// We'll add it inline for now

// Main App
function App() {
  useEffect(() => {
    // Add marquee animation styles
    const style = document.createElement('style')
    style.textContent = `
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        animation: marquee 20s linear infinite;
      }
    `
    document.head.appendChild(style)
    return () => { document.head.removeChild(style) }
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <LogoTicker />
      <ImageShowcase />
      <About />
      <Process />
      <Work />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
