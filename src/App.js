import './index.css';
import logo from './logo.png';

function App() {
  return (
    <div className="min-h-screen bg-khuzama-light flex flex-col">
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <img src={logo} alt="شعار سراي" className="h-10" />
        <nav className="flex gap-6 text-khuzama-dark font-semibold">
          <a href="#">الرؤية</a>
          <a href="#">الخدمات</a>
          <a href="#">تواصل معنا</a>
        </nav>
      </header>

      <section className="text-center px-6 py-16 bg-khuzama">
        <h1 className="text-3xl md:text-5xl text-white font-bold mb-4">هذا سَرَّاي السعودي – شغلك على سرى</h1>
        <p className="text-white mb-6">سا عنّا يجعلك ترتب متاعبك بلمسة سعودية أنيقة.</p>
        <button className="bg-white text-khuzama font-semibold py-2 px-4 rounded-full hover:bg-gray-100 transition">حمّل التطبيق</button>
      </section>
    </div>
  );
}

export default App;
