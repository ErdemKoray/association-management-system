import React, { useState } from 'react';
import {
  Search,
  CheckCircle,
  AlertCircle,
  History,
  Megaphone,
  LogIn,
  Calendar,
  Wallet,
  MessageSquare,
  Send,
  PenTool,
  User,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Skeleton from '@/components/ui/Skeleton';
import { X } from 'lucide-react';
import { useEffect } from 'react'
const HomePage = () => {
  const [searchId, setSearchId] = useState('');
  const [loading, setLoading] = useState(false);
  const [searching,setSearching] = useState(false)
  const [memberData, setMemberData] = useState(null);
const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  const [feedbackForm, setFeedbackForm] = useState({ name: '', message: '' });
  const [feedbackLoading, setFeedbackLoading] = useState(false);
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchId) return;

    setSearching(true);

    setTimeout(() => {
      if (searchId === '123') {
        setMemberData({
          name: 'Ahmet Yılmaz',
          status: 'unpaid',
          lastDebt: 450,
          period: 'Kasım 2025',
          history: [
            { date: '15.10.2025', amount: 450, status: 'Ödendi' },
            { date: '15.09.2025', amount: 450, status: 'Ödendi' },
            { date: '15.08.2025', amount: 400, status: 'Gecikmeli' },
          ],
        });
      } else {
        setLoading(false)
        setMemberData({
          name: 'Zeynep Kaya',
          status: 'paid',
          period: 'Kasım 2025',
          history: [
            { date: '01.11.2025', amount: 450, status: 'Ödendi' },
            { date: '01.10.2025', amount: 450, status: 'Ödendi' },
            { date: '01.09.2025', amount: 400, status: 'Ödendi' },
          ],
        });
      }
      setSearching(false);
    }, 1000);
  };

  const announcements = [
    {
      id: 1,
      tag: "Bina Yönetimi",
      tagColor: "text-[#54bd95] bg-[#54bd95]/10",
      time: "2 Saat önce",
      title: "Çatı Bakım Onarımı",
      summary: "Bina çatısında yapılacak olan izolasyon çalışmaları nedeniyle...",
      fullText: "Bina çatısında yapılacak olan izolasyon çalışmaları nedeniyle hafta sonu gürültü olabilir. Çalışmalar Cumartesi sabah 09:00'da başlayıp Pazar akşamı 17:00'da bitecektir. Anlayışınız için teşekkür ederiz."
    },
    {
      id: 2,
      tag: "Ödeme",
      tagColor: "text-orange-500 bg-orange-100",
      time: "1 Gün önce",
      title: "Aidat Artışı Hakkında",
      summary: "Genel kurul toplantısında alınan karar gereği, önümüzdeki aydan itibaren...",
      fullText: "Genel kurul toplantısında alınan karar gereği, artan enerji ve bakım maliyetleri sebebiyle aidatlara %20 oranında zam yapılmasına karar verilmiştir. Yeni aidat tutarları önümüzdeki aydan itibaren geçerli olacaktır."
    }
  ];

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (!feedbackForm.name || !feedbackForm.message) return;

    setFeedbackLoading(true);

    setTimeout(() => {
      setFeedbackLoading(false);
      setFeedbackSuccess(true);
      setFeedbackForm({ name: '', message: '' });

      setTimeout(() => setFeedbackSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden font-sans text-gray-800">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#54bd95] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-[#54bd95] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <nav className="relative z-10 flex justify-between items-center p-6 container mx-auto">
        <div className="flex items-center gap-2">
          <div className="bg-[#54bd95] p-2 rounded-lg text-white shadow-lg shadow-[#54bd95]/20">
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
          Yönetici Girişi
        </Link>
      </nav>

      <main className="relative z-10 container mx-auto px-6 py-8 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-6">
          <div className="animate-slide-down bg-white/70 backdrop-blur-md border border-white/50 p-8 rounded-3xl shadow-xl">
            {loading ? (
              <>
                <Skeleton className="h-10 w-3/4 mb-2" />

                <Skeleton className="h-5 w-full mb-6" />
              </>
            ) : (
              <>
                <h1 className="text-3xl font-bold mb-2 text-gray-800">
                  <span className="text-[#54bd95]">Aidat Sorgulama</span>
                </h1>
                <p className="text-gray-500 mb-6">
                  TC Kimlik veya Daire numaranızı girerek güncel borç durumunuzu öğrenebilirsiniz.
                </p>
              </>
            )}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="TC No veya Daire No giriniz..."
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-[#54bd95] focus:border-transparent outline-none transition-all text-lg shadow-sm"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
              />
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={24}
              />

              <button
                type="submit"
                disabled={searching}
                className="absolute right-2 top-2 bottom-2 bg-[#54bd95] hover:bg-[#43a07d] text-white px-6 rounded-lg font-semibold transition-all shadow-md disabled:opacity-70 flex items-center gap-2"
              >
                {searching ? 'Aranıyor...' : 'Sorgula'}
              </button>
            </form>
          </div>

          {memberData && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
              <div
                className={`p-6 rounded-3xl border shadow-lg backdrop-blur-md flex items-center justify-between ${
                  memberData.status === 'paid'
                    ? 'bg-green-50/80 border-green-100'
                    : 'bg-red-50/80 border-red-100'
                }`}
              >
                <div>
                  <p className="text-gray-500 text-sm font-medium mb-1">Sn. {memberData.name}</p>
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    {memberData.period} Dönemi
                    {memberData.status === 'paid' ? (
                      <span className="px-3 py-1 bg-green-200 text-green-800 text-xs rounded-full">
                        ÖDENDİ
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-red-200 text-red-800 text-xs rounded-full">
                        ÖDENMEDİ
                      </span>
                    )}
                  </h3>
                  {memberData.status === 'unpaid' && (
                    <p className="mt-2 text-red-600 font-medium">
                      Toplam Borç: {memberData.lastDebt} TL
                    </p>
                  )}
                </div>

                <div
                  className={`p-4 rounded-full ${memberData.status === 'paid' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}
                >
                  {memberData.status === 'paid' ? (
                    <CheckCircle size={40} />
                  ) : (
                    <AlertCircle size={40} />
                  )}
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-md border border-white/50 p-6 rounded-3xl shadow-lg">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-700">
                  <History size={20} className="text-[#54bd95]" />
                  Son 3 İşlem Geçmişi
                </h3>
                <div className="space-y-3">
                  {memberData.history.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 bg-white/60 rounded-xl hover:bg-white transition-colors border border-transparent hover:border-gray-100"
                    >
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

        <div className="lg:col-span-5 space-y-8">
          <div className="animate-slide-down bg-[#54bd95]/10 backdrop-blur-xl border border-[#54bd95]/20 p-8 rounded-3xl shadow-xl">
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
              {loading ? (
                <>
                   <AnnouncementSkeleton />
                   <AnnouncementSkeleton />
                </>
              ) : (
                <>
                  {announcements.map((item) => (
                    <AnnouncementCard 
                      key={item.id} 
                      data={item} 
                      onClick={() => setSelectedAnnouncement(item)} 
                    />
                  ))}
                </>
              )}
            </div>
          </div>

          <div className="animate-slide-down2 bg-white/70 backdrop-blur-md border border-white/50 p-8 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#54bd95]/10 rounded-bl-full -mr-4 -mt-4 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#54bd95] p-3 rounded-xl text-white shadow-lg shadow-[#54bd95]/30">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Bize Yazın</h2>
                  <p className="text-sm text-gray-500">Öneri, İstek ve Şikayetleriniz</p>
                </div>
              </div>

              {feedbackSuccess ? (
                <div className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center animate-in zoom-in duration-300">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Mesajınız İletildi!</h3>
                  <p className="text-gray-500 text-sm">
                    Görüşleriniz yönetim birimine başarıyla ulaştı. Teşekkür ederiz.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                  <div className="relative group">
                    <div className="absolute left-4 top-4 text-gray-400 group-focus-within:text-[#54bd95] transition-colors">
                      <User size={20} />
                    </div>
                    <input
                      type="text"
                      placeholder="Adınız Soyadınız"
                      className="w-full pl-12 pr-4 py-3.5 bg-white/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#54bd95] focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                      value={feedbackForm.name}
                      onChange={(e) => setFeedbackForm({ ...feedbackForm, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="relative group">
                    <div className="absolute left-4 top-4 text-gray-400 group-focus-within:text-[#54bd95] transition-colors">
                      <PenTool size={20} />
                    </div>
                    <textarea
                      rows="4"
                      placeholder="Şikayet, öneri veya talebinizi buraya yazabilirsiniz..."
                      className="w-full pl-12 pr-4 py-3.5 bg-white/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#54bd95] focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-400"
                      value={feedbackForm.message}
                      onChange={(e) =>
                        setFeedbackForm({ ...feedbackForm, message: e.target.value })
                      }
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={feedbackLoading}
                    className="w-full bg-[#54bd95] hover:bg-[#43a07d] text-white py-3.5 rounded-xl font-bold shadow-lg hover:shadow-[#54bd95]/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {feedbackLoading ? (
                      'Gönderiliyor...'
                    ) : (
                      <>
                        Gönder <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Modal 
        isOpen={!!selectedAnnouncement} 
        onClose={() => setSelectedAnnouncement(null)}
        title={selectedAnnouncement?.title}
      >
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
             <span className={`text-xs font-bold px-2 py-1 rounded-md ${selectedAnnouncement?.tagColor}`}>
                {selectedAnnouncement?.tag}
             </span>
             <span className="text-xs text-gray-400">{selectedAnnouncement?.time}</span>
          </div>
          
          <p className="text-gray-600 leading-relaxed">
            {selectedAnnouncement?.fullText}
          </p>
          
          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <button 
              onClick={() => setSelectedAnnouncement(null)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Tamam
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default HomePage;

const AnnouncementSkeleton = () => {
  return (
    <div className="bg-white/40 p-5 rounded-2xl border border-transparent">
      <div className="flex justify-between items-start mb-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-3 w-12" />
      </div>
      <Skeleton className="h-5 w-3/4 mb-2" />
      <Skeleton className="h-4 w-full mb-1" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  );
};

const AnnouncementCard = ({ data, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group bg-white/60 hover:bg-white p-5 rounded-2xl transition-all cursor-pointer border border-transparent hover:border-[#54bd95]/30 shadow-sm"
    >
      <div className="flex justify-between items-start mb-2">
        <span className={`text-xs font-bold px-2 py-1 rounded-md ${data.tagColor}`}>
          {data.tag}
        </span>
        <span className="text-xs text-gray-400">{data.time}</span>
      </div>
      <h3 className="font-bold text-gray-800 mb-1 group-hover:text-[#54bd95] transition-colors">
        {data.title}
      </h3>
      <p className="text-sm text-gray-500 line-clamp-2">
        {data.summary}
      </p>
    </div>
  );
};

;

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
        
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {children}
        </div>

      </div>
    </div>
  );
};

