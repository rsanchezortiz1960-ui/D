import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  ShieldCheck, 
  Star, 
  Users, 
  ArrowRight, 
  BookOpen, 
  Layout, 
  CreditCard, 
  ChevronDown,
  Sun,
  Moon,
  Baby,
  Heart,
  Zap,
  Coffee,
  Smile
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function App() {
  const [timeLeft, setTimeLeft] = useState(10 * 60 * 60); // 10 hours in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-900 font-sans selection:bg-coral-100 selection:text-coral-900">
      {/* 14. URGENCIA/ESCASEZ (Top Banner) */}
      <div className="bg-coral-500 text-white py-2 text-center text-sm font-medium sticky top-0 z-50">
        <p className="flex items-center justify-center gap-2">
          <Clock className="w-4 h-4" />
          El precio de $12 USD termina pronto: <span className="font-mono bg-white/20 px-2 py-0.5 rounded ml-1">{formatTime(timeLeft)}</span>
        </p>
      </div>

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. HEADLINE & 2. SUBTITLE */}
        <section className="py-16 md:py-24 text-center">
          <motion.div {...fadeIn}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              ¿Cansada de las Peleas Diarias? <br />
              <span className="text-mint-600">Transforma a Tu Hijo en Autónomo</span> <br />
              con Rutinas Visuales en Solo 30 Días
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              El Sistema de Rutinas Visuales Progresivas que Ya Usan Miles de Familias para Lograr Niños Independientes Sin Gritos, Negociaciones ni Estrés
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://pay.hotmart.com/W105297243J?checkoutMode=10" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="w-full h-auto bg-mint-600 hover:bg-mint-700 text-white px-6 py-6 md:px-10 md:py-8 text-lg md:text-xl rounded-full shadow-lg shadow-mint-200 transition-all hover:scale-105 active:scale-95 whitespace-normal">
                  ¡SÍ, QUIERO EMPEZAR HOY! <ArrowRight className="ml-2 w-5 h-5 shrink-0" />
                </Button>
              </a>
              <p className="text-sm text-slate-500 flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-green-500" /> Garantía de 7 días
              </p>
            </div>
          </motion.div>
        </section>

        {/* 3. INTRO/STORY */}
        <section className="py-16 border-t border-slate-100">
          <div className="max-w-2xl mx-auto space-y-6 text-lg text-slate-700 leading-relaxed">
            <motion.div {...fadeIn}>
              <p className="font-semibold text-coral-600 uppercase tracking-wider text-sm">¿Te suena familiar?</p>
              <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-6">Son las 7:00 AM y ya empezó el caos...</h2>
              <div className="rounded-3xl overflow-hidden shadow-xl mb-8">
                <img 
                  src="https://i.imgur.com/VwerstI.png" 
                  alt="Caos matutino con niños" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            
            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <p className="italic">"¡A lavarse los dientes!" <span className="not-italic text-slate-400">— No hay respuesta.</span></p>
              <p className="italic">"¡La ropa!" <span className="not-italic text-slate-400">— Siguen jugando.</span></p>
              <p className="italic">"¡El desayuno se enfría!" <span className="not-italic text-slate-400">— Y tú ya perdiste la paciencia.</span></p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
              <p>
                Esta escena se repite todos los días. Las mañanas son una batalla, las noches un drama, y tú sientes que pasas más tiempo siendo <span className="font-semibold text-slate-900">"policía"</span> que mamá.
              </p>
              <p className="mt-4">
                Pero, ¿y si te dijera que existe una forma diferente?
              </p>
              <p className="mt-4 font-medium text-slate-900">
                Una manera donde tu hijo <span className="text-coral-600 underline underline-offset-4">QUIERA</span> seguir sus rutinas, donde las transiciones sean suaves, y donde tú recuperes esas 1-2 horas diarias que ahora pierdes en negociaciones.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 4. UVP (PROPUESTA ÚNICA DE VALOR) */}
        <section className="py-16">
          <motion.div 
            {...fadeIn}
            className="bg-mint-50 border-2 border-mint-200 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Baby className="w-32 h-32 text-mint-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 max-w-3xl mx-auto">
              "Sistema de Rutinas Visuales Progresivas: La única metodología que convierte las rutinas en un juego visual que tu hijo QUIERE completar, desarrollando autonomía real en 30 días"
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                "Los niños procesan mejor la información visual que las instrucciones verbales",
                "Gamifica las rutinas convirtiéndolas en logros visuales",
                "Desarrolla independencia gradual sin crear dependencia del adulto"
              ].map((text, i) => (
                <div key={i} className="flex gap-3 items-start bg-white/50 p-4 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <p className="text-slate-700 font-medium">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 5. BULLETS DE BENEFICIOS */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">🏠 Transforma tu hogar en 30 días:</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Sun className="text-amber-500" />, title: "Mañanas sin drama", desc: "Tu hijo se levanta y sigue su rutina visual sin que tengas que recordarle cada paso" },
              { icon: <Clock className="text-blue-500" />, title: "Recupera 1-2 horas diarias", desc: "El tiempo que antes perdías en negociaciones, ahora lo inviertes en lo que realmente importa" },
              { icon: <Baby className="text-purple-500" />, title: "Niños más seguros", desc: "Desarrollan confianza al completar tareas por sí mismos y se sienten capaces" },
              { icon: <Heart className="text-coral-500" />, title: "Paz familiar real", desc: "Reduce el estrés en un 80% y elimina las peleas constantes por las tareas diarias" },
              { icon: <Zap className="text-yellow-500" />, title: "Funciona con cualquier rutina", desc: "Desde lavarse los dientes hasta prepararse para dormir o hacer la tarea" },
              { icon: <Smile className="text-green-500" />, title: "Resultados inmediatos", desc: "Verás cambios positivos en la actitud de tu hijo desde la primera semana" }
            ].map((benefit, i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6. PRUEBA SOCIAL */}
        <section className="py-16 bg-slate-50 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-[3rem]">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Miles de Familias Ya Han Transformado Sus Rutinas</h2>
              <div className="flex justify-center gap-1 mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />)}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                { name: "María González", role: "Mamá de Lucía (5 años)", text: "En solo 2 semanas, mi hija de 5 años ya se prepara sola para el colegio. ¡No lo podía creer! Las mañanas pasaron de ser un campo de batalla a un momento de conexión.", initial: "MG", color: "bg-coral-100 text-coral-600" },
                { name: "Patricia Ruiz", role: "Mamá de gemelos (4 años)", text: "Pensé que era imposible, pero ahora mis gemelos de 4 años siguen sus rutinas como si fuera un juego. El sistema visual es realmente mágico para su edad.", initial: "PR", color: "bg-mint-100 text-mint-600" },
                { name: "Ricardo M.", role: "Papá de Sofía (3 años)", text: "Increíble. Sofía solía llorar cada vez que tocaba vestirse. Con el panel visual, ahora ella misma busca sus zapatos. Ha sido un cambio de 180 grados en nuestra paz matutina.", initial: "RM", color: "bg-blue-100 text-blue-600" },
                { name: "Javier S.", role: "Papá de Mateo (6 años)", text: "Como padre soltero, las mañanas eran un caos total. Este sistema le dio a Mateo la estructura que necesitaba. Ahora prepara su mochila solo y desayuna sin que yo tenga que repetirle nada.", initial: "JS", color: "bg-amber-100 text-amber-600" },
                { name: "Andrés L.", role: "Papá de Hugo (8 años)", text: "Hugo se enganchó enseguida. El manual maestro nos ayudó a delegar responsabilidades sin que se sintiera como una carga. Su habitación ahora está ordenada por iniciativa propia.", initial: "AL", color: "bg-slate-100 text-slate-600" },
                { name: "Elena V.", role: "Mamá de Leo (3 años)", text: "Las comidas eran una batalla constante. Usar las fichas visuales para el orden de los alimentos hizo que Leo se sintiera en control. ¡Ahora come feliz y sin berrinches!", initial: "EV", color: "bg-pink-100 text-pink-600" },
                { name: "Claudia R.", role: "Mamá de Valentina (7 años)", text: "La rutina de noche era eterna. Valentina siempre encontraba una excusa. El protocolo nocturno fue la clave. Ahora sigue sus pasos y se duerme tranquila a su hora.", initial: "CR", color: "bg-indigo-100 text-indigo-600" },
                { name: "Mónica T.", role: "Mamá de Santi (4 años)", text: "El cepillado de dientes era nuestro mayor conflicto. El método de higiene lo convirtió en un juego. Santi ahora corre al baño emocionado por completar su ficha visual.", initial: "MT", color: "bg-green-100 text-green-600" },
                { name: "Beatriz F.", role: "Mamá de Martina (6 años)", text: "Las transiciones eran fatales, especialmente dejar de jugar. Las estrategias de transición nos salvaron la vida. Martina entiende lo que sigue y lo acepta con calma.", initial: "BF", color: "bg-purple-100 text-purple-600" },
                { name: "Laura P.", role: "Mamá de Nico (5 años)", text: "Gestionar las pantallas era imposible. El bono de tecnología nos dio una estructura clara que Nico respeta. Él mismo apaga la tablet cuando su panel se lo indica.", initial: "LP", color: "bg-orange-100 text-orange-600" }
              ].map((t, i) => (
                <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-8">
                    <p className="text-slate-700 mb-6 leading-relaxed">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${t.color}`}>
                        {t.initial}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                        <p className="text-xs text-slate-500">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {[
                { label: "Mejoras en la 1ª semana", value: "87%" },
                { label: "Autonomía en 30 días", value: "94%" },
                { label: "Familias transformadas", value: "+2,847" }
              ].map((stat, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl shadow-sm">
                  <p className="text-4xl font-black text-coral-600 mb-2">{stat.value}</p>
                  <p className="text-slate-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. GARANTÍA */}
        <section className="py-16">
          <motion.div 
            {...fadeIn}
            className="bg-green-50 border border-green-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
          >
            <div className="shrink-0">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-inner">
                <ShieldCheck className="w-16 h-16 text-green-500" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">🛡️ Garantía de Satisfacción Total - 7 Días</h2>
              <p className="text-slate-700 leading-relaxed text-lg">
                Si no ves progreso en la primera semana, te devolvemos cada centavo sin preguntas. Sabemos que funciona porque lo hemos visto en miles de familias. Por eso podemos ofrecerte esta garantía sin riesgo.
              </p>
            </div>
          </motion.div>
        </section>

        {/* 8. PARA QUIÉN NO ES / SÍ ES */}
        <section className="py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-red-50/50 p-8 rounded-3xl border border-red-100">
              <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
                <XCircle className="w-6 h-6" /> Este sistema NO es para ti si:
              </h3>
              <ul className="space-y-4">
                {[
                  "Buscas resultados mágicos sin implementar nada",
                  "No estás dispuesta a ser constante por 2-3 semanas",
                  "Prefieres seguir con el método de gritos y amenazas",
                  "Tu hijo tiene necesidades especiales que requieren acompañamiento profesional"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-red-800/80">
                    <span className="text-red-500 font-bold">❌</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50/50 p-8 rounded-3xl border border-green-100">
              <h3 className="text-xl font-bold text-green-900 mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6" /> SÍ es perfecto para ti si:
              </h3>
              <ul className="space-y-4">
                {[
                  "Tienes niños de 2-8 años",
                  "Estás cansada del caos diario",
                  "Quieres criar con amor, no con estrés",
                  "Buscas autonomía real, no dependencia"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-green-800/80">
                    <span className="text-green-500 font-bold">✅</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 9. ENTREGABLES */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">🎁 Lo Que Recibes Hoy:</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-slate-100 flex flex-col">
              <div className="bg-mint-50 aspect-video flex items-center justify-center overflow-hidden p-4">
                <img 
                  src="https://i.imgur.com/j2zKsob.png" 
                  alt="Manual Maestro de Autonomía Infantil" 
                  className="max-w-full max-h-full object-contain drop-shadow-md"
                  referrerPolicy="no-referrer"
                />
              </div>
              <CardContent className="p-6 flex-grow">
                <p className="text-xs font-bold text-mint-600 uppercase mb-2">Guía Principal</p>
                <h4 className="text-xl font-bold mb-3">"Manual Maestro de Autonomía Infantil"</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  El sistema completo paso a paso para implementar rutinas visuales que realmente funcionan.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-slate-100 flex flex-col">
              <div className="bg-mint-50 aspect-video flex items-center justify-center overflow-hidden p-4">
                <img 
                  src="https://i.imgur.com/5whOMCC.png" 
                  alt="Paneles de Progreso Diario" 
                  className="max-w-full max-h-full object-contain drop-shadow-md"
                  referrerPolicy="no-referrer"
                />
              </div>
              <CardContent className="p-6 flex-grow">
                <p className="text-xs font-bold text-mint-600 uppercase mb-2">Herramientas Visuales</p>
                <h4 className="text-xl font-bold mb-3">"Paneles de Progreso Diario"</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  20 diseños personalizables listos para imprimir y adaptar a tu familia.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-slate-100 flex flex-col">
              <div className="bg-mint-50 aspect-video flex items-center justify-center overflow-hidden p-4">
                <img 
                  src="https://i.imgur.com/JeBEu79.jpeg" 
                  alt="Fichas de Logros Visuales" 
                  className="max-w-full max-h-full object-contain drop-shadow-md"
                  referrerPolicy="no-referrer"
                />
              </div>
              <CardContent className="p-6 flex-grow">
                <p className="text-xs font-bold text-mint-600 uppercase mb-2">Fichas de Logros</p>
                <h4 className="text-xl font-bold mb-3">"Fichas de Logros Visuales"</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  50 actividades ilustradas diseñadas para captar la atención infantil.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 10. BONOS */}
        <section className="py-16">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">🎯 BONOS EXCLUSIVOS - Solo Hoy:</h2>
              <p className="text-slate-400 text-lg">Valor total de los bonos: <span className="line-through">$87 USD</span> ¡GRATIS hoy!</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Protocolo Matutino Sin Estrés", img: "https://i.imgur.com/ql35qxi.png" },
                { title: "Fórmula Nocturna para Dormir Bien", img: "https://i.imgur.com/8iMLbjC.png" },
                { title: "Sistema de Alimentación Autónoma", img: "https://i.imgur.com/qAH6EBp.png" },
                { title: "Método de Higiene Personal Independiente", img: "https://i.imgur.com/Pbmw5nP.png" },
                { title: "Estrategias para Transiciones Sin Drama", img: "https://i.imgur.com/wruBDGD.png" },
                { title: "Técnicas de Orden y Limpieza Divertida", img: "https://i.imgur.com/UridbUF.jpeg" },
                { title: "Rutinas Escolares Exitosas", img: "https://i.imgur.com/iGUFrTU.jpeg" },
                { title: "Gestión de Pantallas y Tecnología", img: "https://i.imgur.com/gLsWkCF.png" },
                { title: "Sistema de Recompensas Efectivo", img: "https://i.imgur.com/wmIRnLv.png" },
                { title: "Manual de Resolución de Conflictos", img: "https://i.imgur.com/DxYjR2m.jpeg" }
              ].map((bono, i) => (
                <div key={i} className="bg-white/10 border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:bg-white/15 transition-colors group">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={bono.img} 
                      alt={bono.title} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-mint-500 rounded-full flex items-center justify-center text-xs font-bold shrink-0 text-white">
                      {i + 1}
                    </div>
                    <p className="text-sm font-bold leading-tight">{bono.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. ANCLAJE DE VALOR & 12. CTA #1 */}
        <section className="py-24 text-center">
          <motion.div {...fadeIn} className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">💰 ¿Cuánto Vale la Paz en Tu Familia?</h2>
            <div className="space-y-4 mb-12 text-left bg-slate-50 p-8 rounded-3xl">
              <div className="flex justify-between items-center text-slate-600">
                <span>Consulta con especialista:</span>
                <span className="font-bold">$150 USD</span>
              </div>
              <div className="flex justify-between items-center text-slate-600">
                <span>Curso presencial:</span>
                <span className="font-bold">$89 USD</span>
              </div>
              <div className="flex justify-between items-center text-slate-600">
                <span>Terapia familiar:</span>
                <span className="font-bold">$200 USD</span>
              </div>
              <div className="pt-4 border-t border-slate-200 flex justify-between items-center text-xl font-bold text-slate-400">
                <span>VALOR TOTAL:</span>
                <span className="line-through">$439 USD</span>
              </div>
              <div className="pt-4 flex justify-between items-center text-3xl font-black text-mint-600">
                <span>PRECIO HOY:</span>
                <span>$12 USD</span>
              </div>
            </div>
            
            <p className="mb-8 text-slate-600 font-medium">Acceso inmediato - Sin mensualidades - Tuyo para siempre</p>
            
            <a 
              href="https://pay.hotmart.com/W105297243J?checkoutMode=10" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" className="w-full sm:w-auto h-auto bg-mint-600 hover:bg-mint-700 text-white px-8 py-6 md:px-16 md:py-10 text-xl md:text-2xl rounded-full shadow-xl shadow-mint-200 transition-all hover:scale-105 mb-6 whitespace-normal">
                🚀 SÍ, QUIERO TRANSFORMAR MI FAMILIA
              </Button>
            </a>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> Garantía 7 días</span>
              <span className="flex items-center gap-1"><CreditCard className="w-4 h-4" /> Pago Seguro</span>
              <span className="flex items-center gap-1"><Users className="w-4 h-4" /> +2,800 Alumnos</span>
            </div>
          </motion.div>
        </section>

        {/* 13. FAQ */}
        <section className="py-16 border-t border-slate-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">❓ Preguntas Frecuentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "¿Funcionará con mi hijo de [edad específica]?", a: "El sistema está diseñado para niños de 2-8 años y se adapta a diferentes niveles de desarrollo." },
                { q: "¿Qué pasa si mi hijo tiene comportamientos muy difíciles?", a: "Las rutinas visuales son especialmente efectivas con niños desafiantes porque eliminan la confrontación directa y el 'tira y afloja' verbal." },
                { q: "¿Cuánto tiempo necesito dedicar diariamente?", a: "Los primeros días requieren 15-20 minutos de implementación para explicar y jugar con el sistema. Después, el sistema funciona prácticamente solo." },
                { q: "¿Y si no funciona con mi familia?", a: "Tienes nuestra garantía completa de 7 días. Si no ves progreso o sientes que no es para ti, te reembolsamos el 100% sin preguntas." },
                { q: "¿Es digital o físico?", a: "Todo es digital con descarga inmediata. Las herramientas las imprimes en casa cuando las necesites, lo que te permite personalizarlas al máximo." }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-bold text-slate-800">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* 16. DEEP DIVE */}
        <section className="py-24 bg-mint-50/30 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-[3rem] mt-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">🔍 ¿Por Qué Funciona Cuando Otros Métodos Fallan?</h2>
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-coral-600 mb-2">El problema de los métodos tradicionales:</h4>
                <p className="text-slate-700 leading-relaxed">
                  La mayoría de consejos sobre rutinas se basan en repetición verbal y disciplina, pero ignoran cómo realmente aprenden los niños. Las órdenes verbales a menudo se procesan como "ruido" cuando el niño está concentrado en otra cosa.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-mint-600 mb-2">La ciencia detrás del Sistema Visual:</h4>
                <p className="text-slate-700 leading-relaxed">
                  Los niños procesan la información visual 60,000 veces más rápido que el texto o el habla. Cuando convertimos rutinas en elementos visuales, estamos hablando su idioma natural, reduciendo la carga cognitiva y la resistencia.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { t: "Progresivo", d: "Se adapta al ritmo de cada niño" },
                  { t: "Visual", d: "Usa el canal de aprendizaje más efectivo" },
                  { t: "Gamificado", d: "Convierte obligaciones en logros" },
                  { t: "Autónomo", d: "Reduce la dependencia del adulto" }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-mint-100">
                    <p className="font-bold text-slate-900 mb-1">• {item.t}</p>
                    <p className="text-sm text-slate-600">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 17. CIERRE FINAL + CTA #3 */}
        <section className="py-24 text-center">
          <motion.div {...fadeIn} className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🏡 Imagina Tu Nueva Realidad:</h2>
            <div className="text-lg text-slate-600 space-y-4 mb-12 italic">
              <p>Son las 7:00 AM...</p>
              <p>Tu hijo se despierta, mira su panel visual y comienza su rutina. Se viste, se lava los dientes, desayuna.</p>
              <p>Tú tomas tu café tranquila, observando cómo tu pequeño se ha vuelto independiente y seguro.</p>
              <p className="not-italic font-bold text-slate-900">No más gritos. No más negociaciones. Solo paz familiar.</p>
            </div>
            
            <p className="text-xl font-bold text-slate-900 mb-8">Esta transformación comienza hoy, con una pequeña decisión.</p>
            
            <a 
              href="https://pay.hotmart.com/W105297243J?checkoutMode=10" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button size="lg" className="w-full h-auto bg-mint-600 hover:bg-mint-700 text-white px-8 py-6 md:px-16 md:py-10 text-xl md:text-2xl rounded-full shadow-2xl shadow-mint-200 transition-all hover:scale-105 mb-6 whitespace-normal">
                🎯 QUIERO ESTA TRANSFORMACIÓN AHORA
              </Button>
            </a>
            
            <p className="text-slate-500 text-sm max-w-lg mx-auto">
              <span className="font-bold">PD:</span> Recuerda, tienes 7 días completos para probar el sistema. Si no funciona, te devolvemos tu dinero. No tienes nada que perder y una familia en paz que ganar.
            </p>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 text-center text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} Sistema de Rutinas Visuales Progresivas. Todos los derechos reservados.</p>
      </footer>

      {/* Sticky Mobile CTA (18. RECOMENDACIONES) */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
        <a 
          href="https://pay.hotmart.com/W105297243J?checkoutMode=10" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button className="w-full h-auto bg-mint-600 hover:bg-mint-700 text-white py-5 px-6 rounded-full shadow-2xl shadow-mint-300 font-bold text-lg whitespace-normal leading-tight">
            ¡QUIERO EL SISTEMA POR $12!
          </Button>
        </a>
      </div>
    </div>
  );
}
