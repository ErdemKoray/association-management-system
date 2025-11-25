import React, { useState } from 'react';
import { 
  User, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowLeft, 
  LogIn, 
  Wallet 
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  
  // State Yönetimi
  const [formData, setFormData] = useState({ tc: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Yazmaya başlayınca hatayı sil
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    // Giriş Simülasyonu
    setTimeout(() => {
      if (formData.tc === '12345' && formData.password === '12345') {
        // Başarılı
        navigate('/'); // Ana sayfaya veya Dashboard'a yönlendir
      } else {
        // Hatalı
        setError('Girdiğiniz bilgiler hatalı. Lütfen kontrol ediniz.');
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-gray-50 flex items-center justify-center p-4 overflow-hidden font-sans">
      
      {/* --- ARKA PLAN EFEKTLERİ (Aynı tutarlılık için) --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#54bd95] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      {/* --- ANA KART --- */}
      <div className="relative z-10 w-full max-w-lg">
        
        {/* Geri Dön Butonu (Yaşlılar kaybolmasın diye belirgin) */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#54bd95] font-semibold mb-6 transition-colors bg-white/50 px-4 py-2 rounded-full backdrop-blur-sm shadow-sm"
        >
          <ArrowLeft size={20} />
          Ana Sayfaya Dön
        </Link>

        {/* Login Formu */}
        <div className="bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl p-8 md:p-10">
          
          {/* Logo ve Başlık */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#54bd95]/10 text-[#54bd95] rounded-2xl mb-4">
              <Wallet size={32} />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Üye Girişi</h1>
            <p className="text-gray-500 mt-2 text-lg">
              Yönetim sistemine hoş geldiniz.
            </p>
          </div>

          {/* Hata Mesajı */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl flex items-center gap-3 animate-pulse">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            
            {/* TC Kimlik Input */}
            <div className="space-y-2">
              <label className="text-gray-700 font-semibold ml-1 block">
                TC Kimlik / Üye No
              </label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#54bd95] transition-colors">
                  <User size={24} />
                </div>
                <input 
                  type="text" 
                  name="tc"
                  value={formData.tc}
                  onChange={handleChange}
                  placeholder="123456789..." 
                  className="w-full h-14 pl-12 pr-4 bg-white border-2 border-gray-200 rounded-xl outline-none focus:border-[#54bd95] focus:ring-4 focus:ring-[#54bd95]/10 transition-all text-xl text-gray-800 placeholder:text-gray-300 shadow-sm"
                  required
                />
              </div>
            </div>

            {/* Şifre Input */}
            <div className="space-y-2">
              <label className="text-gray-700 font-semibold ml-1 block">
                Şifreniz
              </label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#54bd95] transition-colors">
                  <Lock size={24} />
                </div>
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••" 
                  className="w-full h-14 pl-12 pr-12 bg-white border-2 border-gray-200 rounded-xl outline-none focus:border-[#54bd95] focus:ring-4 focus:ring-[#54bd95]/10 transition-all text-xl text-gray-800 placeholder:text-gray-300 shadow-sm"
                  required
                />
                
                {/* Şifre Göster/Gizle Butonu (Büyük tutuldu) */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-2 bottom-2 aspect-square flex items-center justify-center text-gray-400 hover:text-[#54bd95] hover:bg-gray-100 rounded-lg transition-all"
                >
                  {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                </button>
              </div>
            </div>

            {/* Beni Hatırla & Şifremi Unuttum */}
            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input type="checkbox" className="w-6 h-6 rounded border-gray-300 text-[#54bd95] focus:ring-[#54bd95] cursor-pointer" />
                <span className="text-gray-600 font-medium">Beni Hatırla</span>
              </label>
              
              <a href="#" className="text-[#54bd95] font-semibold hover:underline">
                Şifremi Unuttum?
              </a>
            </div>

            {/* Giriş Butonu */}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full h-14 bg-[#54bd95] hover:bg-[#43a07d] text-white text-xl font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all disabled:opacity-70 disabled:hover:translate-y-0 flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Kontrol Ediliyor...
                </>
              ) : (
                <>
                  Giriş Yap <LogIn size={24} />
                </>
              )}
            </button>

          </form>

          {/* Alt Bilgi */}
          <div className="mt-8 text-center pt-6 border-t border-gray-100">
            <p className="text-gray-500">
              Hesabınız yok mu?{' '}
              <a href="#" className="text-[#54bd95] font-bold hover:underline">
                Yönetici ile iletişime geçin
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;