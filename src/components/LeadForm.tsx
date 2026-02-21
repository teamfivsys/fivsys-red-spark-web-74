import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowRight, ArrowLeft, CheckCircle, Loader2, User, Mail, Phone, Briefcase, FileText, IndianRupee, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { supabase } from '@/lib/supabase';

const step1Schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number').optional().or(z.literal('')),
  city: z.string().min(2, 'Please enter your city'),
});

const step2Schema = z.object({
  service_interest: z.string().min(1, 'Please select a service'),
});

const step3Schema = z.object({
  budget_range: z.string().min(1, 'Please select a budget range'),
  project_details: z.string().min(10, 'Please describe your project in at least 10 characters'),
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;
type Step3Data = z.infer<typeof step3Schema>;

type FormData = Step1Data & Step2Data & Step3Data;

const services = [
  'Web Development',
  'App Development',
  'Web App / E-commerce',
  'Digital Marketing & SEO',
  'Social Media Marketing',
  'AI Sales Strategy',
  'MLM Solutions',
  'Branding & Logo Design',
];

const budgets = [
  'Under ₹25,000',
  '₹25,000 – ₹50,000',
  '₹50,000 – ₹1,00,000',
  '₹1,00,000 – ₹3,00,000',
  'Above ₹3,00,000',
  'Custom / Enterprise',
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

const inputClass = "bg-slate-900/60 border-slate-700 text-white placeholder:text-slate-500 focus:border-fivsys-red focus:ring-fivsys-red/30 focus:ring-2 transition-all duration-200";
const labelClass = "text-slate-300 text-sm font-medium mb-1.5 flex items-center gap-2";

const LeadForm = () => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const form1 = useForm<Step1Data>({ resolver: zodResolver(step1Schema), defaultValues: formData });
  const form2 = useForm<Step2Data>({ resolver: zodResolver(step2Schema), defaultValues: formData });
  const form3 = useForm<Step3Data>({ resolver: zodResolver(step3Schema), defaultValues: formData });

  const goNext = async () => {
    let valid = false;
    if (step === 1) valid = await form1.trigger();
    if (step === 2) valid = await form2.trigger();
    if (step === 3) valid = await form3.trigger();

    if (!valid) return;

    if (step === 1) setFormData(prev => ({ ...prev, ...form1.getValues() }));
    if (step === 2) setFormData(prev => ({ ...prev, ...form2.getValues() }));

    if (step < totalSteps) {
      setDirection(1);
      setStep(s => s + 1);
    } else {
      await submitForm();
    }
  };

  const goBack = () => {
    setDirection(-1);
    setStep(s => s - 1);
  };

  const submitForm = async () => {
    setLoading(true);
    setError('');
    const allData = { ...formData, ...form3.getValues() };
    const { error: dbError } = await supabase.from('leads').insert([{
      name: allData.name ?? '',
      email: allData.email ?? '',
      phone: allData.phone ?? '',
      city: allData.city ?? '',
      service_interest: allData.service_interest ?? '',
      budget_range: allData.budget_range ?? '',
      project_details: allData.project_details ?? '',
    }]);

    setLoading(false);
    if (dbError) {
      setError('Something went wrong. Please try again or contact us directly.');
    } else {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', mass: 0.5 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">We've Got Your Request!</h3>
        <p className="text-slate-400 max-w-sm mx-auto leading-relaxed">
          Our team will reach out within <span className="text-white font-semibold">24 hours</span>. For urgent queries, WhatsApp us directly.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Step {step} of {totalSteps}</span>
          <span className="text-xs text-fivsys-red font-semibold">{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} className="h-1 bg-slate-800 [&>div]:bg-fivsys-red" />
      </div>

      <div className="overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', mass: 0.4, stiffness: 200, damping: 22 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Tell us about yourself</h3>
              <div className="space-y-4">
                <div>
                  <Label className={labelClass}>
                    <User className="w-3.5 h-3.5 text-fivsys-red" />
                    Full Name
                  </Label>
                  <Input {...form1.register('name')} placeholder="Your full name" className={inputClass} />
                  {form1.formState.errors.name && <p className="text-fivsys-red text-xs mt-1">{form1.formState.errors.name.message}</p>}
                </div>
                <div>
                  <Label className={labelClass}>
                    <Mail className="w-3.5 h-3.5 text-fivsys-red" />
                    Email Address
                  </Label>
                  <Input {...form1.register('email')} type="email" placeholder="you@company.com" className={inputClass} />
                  {form1.formState.errors.email && <p className="text-fivsys-red text-xs mt-1">{form1.formState.errors.email.message}</p>}
                </div>
                <div>
                  <Label className={labelClass}>
                    <Phone className="w-3.5 h-3.5 text-fivsys-red" />
                    Phone Number <span className="text-slate-600 font-normal">(optional)</span>
                  </Label>
                  <Input {...form1.register('phone')} type="tel" placeholder="+91 XXXXX XXXXX" className={inputClass} />
                  {form1.formState.errors.phone && <p className="text-fivsys-red text-xs mt-1">{form1.formState.errors.phone.message}</p>}
                </div>
                <div>
                  <Label className={labelClass}>
                    <MapPin className="w-3.5 h-3.5 text-fivsys-red" />
                    Your City
                  </Label>
                  <Input {...form1.register('city')} placeholder="Kochi, Trivandrum, etc." className={inputClass} />
                  {form1.formState.errors.city && <p className="text-fivsys-red text-xs mt-1">{form1.formState.errors.city.message}</p>}
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', mass: 0.4, stiffness: 200, damping: 22 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">What can we help you with?</h3>
              <div>
                <Label className={labelClass}>
                  <Briefcase className="w-3.5 h-3.5 text-fivsys-red" />
                  Service Interest
                </Label>
                <div className="grid grid-cols-2 gap-2.5 mt-2">
                  {services.map((service) => {
                    const selected = form2.watch('service_interest') === service;
                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => form2.setValue('service_interest', service, { shouldValidate: true })}
                        className={`px-3 py-2.5 rounded-lg text-xs font-medium text-left border transition-all duration-200 ${
                          selected
                            ? 'bg-fivsys-red/15 border-fivsys-red text-white'
                            : 'bg-slate-900/50 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200'
                        }`}
                      >
                        {service}
                      </button>
                    );
                  })}
                </div>
                {form2.formState.errors.service_interest && (
                  <p className="text-fivsys-red text-xs mt-2">{form2.formState.errors.service_interest.message}</p>
                )}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', mass: 0.4, stiffness: 200, damping: 22 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Project details & budget</h3>
              <div className="space-y-5">
                <div>
                  <Label className={labelClass}>
                    <IndianRupee className="w-3.5 h-3.5 text-fivsys-red" />
                    Budget Range
                  </Label>
                  <div className="grid grid-cols-2 gap-2.5 mt-2">
                    {budgets.map((budget) => {
                      const selected = form3.watch('budget_range') === budget;
                      return (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => form3.setValue('budget_range', budget, { shouldValidate: true })}
                          className={`px-3 py-2.5 rounded-lg text-xs font-medium text-left border transition-all duration-200 ${
                            selected
                              ? 'bg-fivsys-red/15 border-fivsys-red text-white'
                              : 'bg-slate-900/50 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200'
                          }`}
                        >
                          {budget}
                        </button>
                      );
                    })}
                  </div>
                  {form3.formState.errors.budget_range && (
                    <p className="text-fivsys-red text-xs mt-2">{form3.formState.errors.budget_range.message}</p>
                  )}
                </div>
                <div>
                  <Label className={labelClass}>
                    <FileText className="w-3.5 h-3.5 text-fivsys-red" />
                    Project Details
                  </Label>
                  <textarea
                    {...form3.register('project_details')}
                    rows={4}
                    placeholder="Briefly describe your project, goals, and timeline..."
                    className={`w-full rounded-md px-3 py-2 text-sm resize-none ${inputClass}`}
                  />
                  {form3.formState.errors.project_details && (
                    <p className="text-fivsys-red text-xs mt-1">{form3.formState.errors.project_details.message}</p>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {error && (
        <p className="text-fivsys-red text-sm mt-4 text-center">{error}</p>
      )}

      <div className="flex gap-3 mt-8">
        {step > 1 && (
          <Button
            type="button"
            variant="outline"
            onClick={goBack}
            className="flex-1 border-slate-700 text-slate-300 hover:border-white/30 hover:text-white bg-transparent h-12"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        )}
        <Button
          type="button"
          onClick={goNext}
          disabled={loading}
          className="flex-1 bg-fivsys-red hover:bg-fivsys-darkRed text-white font-semibold h-12 shadow-lg shadow-fivsys-red/20 hover:shadow-fivsys-red/40 transition-all duration-300"
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : step === totalSteps ? (
            <>Submit Request <CheckCircle className="w-4 h-4 ml-2" /></>
          ) : (
            <>Next <ArrowRight className="w-4 h-4 ml-2" /></>
          )}
        </Button>
      </div>
    </div>
  );
};

export default LeadForm;
