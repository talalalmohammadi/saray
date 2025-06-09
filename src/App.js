import './index.css';
import bgPattern from './pattern.svg'; // صورة الزخرفة اليمنى/اليسرى
import logo from './logo.png';
function App() {
  return (
    <div className="min-h-screen bg-khuzama-light font-arabic text-gray-800 relative overflow-hidden">
      {/* خلفية زخرفية يمين ويسار */}
      <img src={bgPattern} alt="زخرفة يمين" className="hidden md:block absolute right-0 top-0 h-full opacity-10 z-0" />
      <img src={bgPattern} alt="زخرفة يسار" className="hidden md:block absolute left-0 bottom-0 h-full opacity-10 z-0 transform scale-x-[-1]" />

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center px-6 py-4 bg-khuzama-light">
        <nav className="text-sm text-khuzama-dark font-semibold flex gap-6">
          <a href="#">الرؤية</a>
          <a href="#">الخدمات</a>
          <a href="#">تواصل معنا</a>
        </nav>
        <div className="flex items-center gap-2 text-2xl font-bold text-khuzama-dark">
          <img src={logo} alt="شعار سراي" className="h-12" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 bg-khuzama text-white py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold leading-relaxed">
             سَرَّاي <br /> شغلك سرى
          </h1>
          <p className="mt-4 text-white/80">
            منصة تشغيل ذكية تساعد المشاريع الصغيرة على تنظيم أعمالهم اليومية بكل سهولة وسلاسة، وتوفر أدوات متطورة تدعم نمو مشروعك وتبسيط الإجراءات.
          </p>
          <button className="mt-6 bg-khuzama-light text-khuzama-dark font-bold py-2 px-6 rounded-full hover:bg-white hover:text-khuzama transition">
            حمّل التطبيق
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 bg-khuzama-light text-center py-16 px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-lg font-bold mb-2">لوحة تحكم احترافية</h3>
            <p className="text-sm text-gray-600">تتحكم بعملائك</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-lg font-bold mb-2">سـهولة التعـامل</h3>
            <p className="text-sm text-gray-600">إدارة تميزك مع عملائك</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-lg font-bold mb-2">تنظيم مواعيدك</h3>
            <p className="text-sm text-gray-600">إعادة التنظيم وسرعة الانجاز</p>
          </div>
        </div>
      </section>

      {/* Why Saray */}
      <section className="relative z-10 text-center py-16 px-6 bg-white">
        <h2 className="text-2xl font-bold text-khuzama-dark mb-4">لين سمّيناه سَرَّاي؟</h2>
        <p className="max-w-3xl mx-auto text-sm text-gray-600">
          "سَرَّاي" مأخوذة من الجذر العربي "سَرَى" – أي مضى ليلًا بهدوء وثقة.
منصتنا تحمل نفس المعنى:
تسير أعمالك بانسيابية وهدوء، حتى وأنت ما تدري.
سَرَّاي... اسم من الأصل السعودي العربي، وهوية تُعبّر عن تنظيم، احتراف، وراحة بال
        </p>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-khuzama-dark text-white py-8 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
          <div className="flex space-x-4 text-sm mb-4 md:mb-0">
            <a href="#">تواصل معنا</a>
            <a href="#">الرؤى</a>
            <a href="#">أراء</a>
          </div>
          <div className="text-sm">© 2024 جميع الحقوق محفوظة لسَرَّاي</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
