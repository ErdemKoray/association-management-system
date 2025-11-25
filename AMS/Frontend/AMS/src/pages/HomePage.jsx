import React, { useState } from 'react';
import { 
  Search, 
  CheckCircle, 
  AlertCircle, 
  History, 
  Megaphone, 
  LogIn, 
  ArrowRight, 
  Calendar,
  Wallet
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [searchId, setSearchId] = useState('');
  const [loading, setLoading] = useState(false);
  const [memberData, setMemberData] = useState(null);

  // Sahte Sorgulama Fonksiyonu
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchId) return;

    setLoading(true);
    
    // API isteği simülasyonu (1 saniye bekle)
    setTimeout(() => {
      // Örnek: Eğer ID "123" ise borçlu, değilse ödemiş gibi davranalım
      if (searchId === '123') {
        setMemberData({
          name: "Ahmet Yılmaz",
          status: "unpaid", // paid | unpaid
          lastDebt: 450,
          period: "Kasım 2025",
          history: [
            { date: "15.10.2025", amount: 450, status: "Ödendi" },
            { date: "15.09.2025", amount: 450, status: "Ödendi" },
            { date: "15.08.2025", amount: 400, status: "Gecikmeli Ödendi" },
          ]
        });
      } else {
        setMemberData({
          name: "Zeynep Kaya",
          status: "paid",
          period: "Kasım 2025",
          history: [
            { date: "01.11.2025", amount: 450, status: "Ödendi" },
            { date: "01.10.2025", amount: 450, status: "Ödendi" },
            { date: "01.09.2025", amount: 400, status: "Ödendi" },
          ]
        });
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden font-sans text-gray-800">
      
      {/* --- ARKA PLAN EFEKTLERİ (Blurry Blobs) --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#54bd95] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-[#54bd95] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* --- NAVBAR --- */}
      <nav className="relative z-10 flex justify-between items-center p-6 container mx-auto">
        <div className="flex items-center gap-2">
          <div className="bg-[#54bd95] p-2 rounded-lg text-white">
            <Wallet size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tight text-gray-800">
            Site<span className="text-[#54bd95]">Yönetim</span>
          </span>
        </div>
        
        <Link 
          to="/login" 
          className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full font-medium shadow-sm hover:shadow-md hover:bg-white transition-all"
        >
          <LogIn size={18} />
          Üye Girişi
        </Link>
      </nav>

      {/* --- ANA İÇERİK --- */}
      <main className="relative z-10 container mx-auto px-6 py-8 grid lg:grid-cols-12 gap-8">
        
        {/* SOL KOLON: Sorgulama ve Durum (7 Birim) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Sorgulama Kartı */}
          <div className="bg-white/70 backdrop-blur-md border border-white/50 p-8 rounded-3xl shadow-xl">
            <h1 className="text-3xl font-bold mb-2 text-gray-800">
              Hızlı <span className="text-[#54bd95]">Aidat Sorgula</span>
            </h1>
            <p className="text-gray-500 mb-6">
              TC Kimlik veya Daire numaranızı girerek güncel borç durumunuzu öğrenebilirsiniz.
            </p>

            <form onSubmit={handleSearch} className="relative">
              <input 
                type="text" 
                placeholder="TC No veya Daire No giriniz..." 
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-[#54bd95] focus:border-transparent outline-none transition-all text-lg shadow-sm"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
              
              <button 
                type="submit" 
                disabled={loading}
                className="absolute right-2 top-2 bottom-2 bg-[#54bd95] hover:bg-[#43a07d] text-white px-6 rounded-lg font-semibold transition-all shadow-md disabled:opacity-70 flex items-center gap-2"
              >
                {loading ? 'Aranıyor...' : 'Sorgula'}
              </button>
            </form>
          </div>

          {/* SONUÇ ALANI (Veri varsa görünür) */}
          {memberData && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
              
              {/* Durum Kartı */}
              <div className={`p-6 rounded-3xl border shadow-lg backdrop-blur-md flex items-center justify-between ${
                memberData.status === 'paid' 
                  ? 'bg-green-50/80 border-green-100' 
                  : 'bg-red-50/80 border-red-100'
              }`}>
                <div>
                  <p className="text-gray-500 text-sm font-medium mb-1">Sn. {memberData.name}</p>
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    {memberData.period} Dönemi
                    {memberData.status === 'paid' ? (
                      <span className="px-3 py-1 bg-green-200 text-green-800 text-xs rounded-full">ÖDENDİ</span>
                    ) : (
                      <span className="px-3 py-1 bg-red-200 text-red-800 text-xs rounded-full">ÖDENMEDİ</span>
                    )}
                  </h3>
                  {memberData.status === 'unpaid' && (
                    <p className="mt-2 text-red-600 font-medium">
                      Toplam Borç: {memberData.lastDebt} TL
                    </p>
                  )}
                </div>
                
                <div className={`p-4 rounded-full ${memberData.status === 'paid' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                   {memberData.status === 'paid' ? <CheckCircle size={40} /> : <AlertCircle size={40} />}
                </div>
              </div>

              {/* Son 3 Ödeme Geçmişi */}
              <div className="bg-white/70 backdrop-blur-md border border-white/50 p-6 rounded-3xl shadow-lg">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-700">
                  <History size={20} className="text-[#54bd95]" />
                  Son 3 İşlem Geçmişi
                </h3>
                <div className="space-y-3">
                  {memberData.history.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-white/60 rounded-xl hover:bg-white transition-colors border border-transparent hover:border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-100 rounded-lg text-gray-500">
                          <Calendar size={18} />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">{item.amount} TL</p>
                          <p className="text-xs text-gray-500">{item.date}</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* SAĞ KOLON: Duyurular (5 Birim) */}
        <div className="lg:col-span-5">
          <div className="bg-[#54bd95]/10 backdrop-blur-xl border border-[#54bd95]/20 p-8 rounded-3xl h-full shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Megaphone className="text-[#54bd95]" />
                Duyurular
              </h2>
              <span className="text-xs font-bold bg-white/50 text-[#54bd95] px-3 py-1 rounded-full border border-[#54bd95]/20">
                Genel
              </span>
            </div>

            <div className="space-y-4">
              {/* Duyuru 1 */}
              <div className="group bg-white/60 hover:bg-white p-5 rounded-2xl transition-all cursor-pointer border border-transparent hover:border-[#54bd95]/30 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-[#54bd95] bg-[#54bd95]/10 px-2 py-1 rounded-md">Bina Yönetimi</span>
                  <span className="text-xs text-gray-400">2 Saat önce</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-1 group-hover:text-[#54bd95] transition-colors">Çatı Bakım Onarımı</h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                  Bina çatısında yapılacak olan izolasyon çalışmaları nedeniyle hafta sonu...
                </p>
                <div className="mt-3 flex items-center gap-1 text-xs font-bold text-gray-400 group-hover:translate-x-1 transition-transform">
                  Devamını Oku <ArrowRight size={12} />
                </div>
              </div>

              {/* Duyuru 2 */}
              <div className="group bg-white/60 hover:bg-white p-5 rounded-2xl transition-all cursor-pointer border border-transparent hover:border-[#54bd95]/30 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-orange-500 bg-orange-100 px-2 py-1 rounded-md">Ödeme</span>
                  <span className="text-xs text-gray-400">1 Gün önce</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-1 group-hover:text-[#54bd95] transition-colors">Aidat Artışı Hakkında</h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                  Genel kurul toplantısında alınan karar gereği, önümüzdeki aydan itibaren aidatlar...
                </p>
                <div className="mt-3 flex items-center gap-1 text-xs font-bold text-gray-400 group-hover:translate-x-1 transition-transform">
                  Devamını Oku <ArrowRight size={12} />
                </div>
              </div>

               {/* Duyuru 3 */}
               <div className="group bg-white/60 hover:bg-white p-5 rounded-2xl transition-all cursor-pointer border border-transparent hover:border-[#54bd95]/30 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-blue-500 bg-blue-100 px-2 py-1 rounded-md">Etkinlik</span>
                  <span className="text-xs text-gray-400">3 Gün önce</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-1 group-hover:text-[#54bd95] transition-colors">Yaz Sonu Bahçe Düzenlemesi</h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                  Site sakinlerimizle beraber yapacağımız peyzaj çalışması için gönüllüler...
                </p>
                <div className="mt-3 flex items-center gap-1 text-xs font-bold text-gray-400 group-hover:translate-x-1 transition-transform">
                  Devamını Oku <ArrowRight size={12} />
                </div>
              </div>

            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default HomePage;