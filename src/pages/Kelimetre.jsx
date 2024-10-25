import { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import Header from '../components/Header/Header';
import "./Kelimetre.css"

function Kelimetre() {
    const kelimeler = [  "ben", "sen", "o", "biz", "siz", "onlar", "bu", "şu", "ne", "kim",
        "nerede", "nasıl", "neden", "niçin", "hangi", "her", "bazı", "bir",
        "birkaç", "tüm", "çok", "az", "yeni", "eski", "büyük", "küçük", 
        "uzun", "kısa", "güzel", "çirkin", "iyi", "kötü", "doğru", "yanlış", 
        "önce", "sonra", "şimdi", "geçmiş", "gelecek", "zaman", "yer", 
        "şey", "durum", "mesele", "fikir", "görüş", "hissetmek", "düşünmek",
        "yapmak", "etmek", "gitmek", "gelmek", "gel", "almak", "vermek", 
        "görmek", "duymak", "konuşmak", "yazmak", "okumak", "öğrenmek", 
        "bilmek", "belirlemek", "seçmek", "istemek", "hatırlamak", 
        "unutmak", "çalışmak", "başlamak", "bitirmek", "geçmek", 
        "bakmak", "söylemek", "bulmak", "göndermek", "getirmek", 
        "koymak", "tutmak", "taşımak", "kullanmak", "birleştirmek", 
        "şekillendirmek", "yürümek", "oturmak", "durmak", "çalışmak", 
        "yaşamak", "hayal etmek", "sevmek", "nefret etmek", "gülmek", 
        "ağlamak", "düşmek", "yükselmek", "azalmak", "artmak", 
        "dolaşmak", "denemek", "saymak", "çizmek", "birleşmek", 
        "yaratmak", "geliştirmek", "gözlemlemek", "başarmak", 
        "kazanmak", "kaybetmek", "yemek", "içmek", "yatmak", 
        "uyanmak", "uyumak", "şarkı söylemek", "dans etmek", 
        "güvenmek", "yardım etmek", "katılmak", "seçmek", 
        "anlamak", "sormak", "cevap vermek", "belirtmek", 
        "uygulamak", "başarı", "sevinç", "üzüntü", "şüphe", 
        "hayal", "gerçek", "hikaye", "masal", "anlatmak", 
        "okuyucu", "yazar", "sanat", "müzik", "film", "resim", 
        "fotoğraf", "oyun", "rekabet", "şampiyon", "zafer", 
        "kaybetmek", "yarışmak", "katılmak", "hedef", "amaç", 
        "plan", "projeler", "süreç", "güç", "yetki", 
        "liderlik", "grup", "ekip", "yetenek", "kaynak", 
        "toplantı", "konferans", "seminer", "eğitim", 
        "öğrenmek", "paylaşmak", "sosyal", "bağlantı", 
        "iletişim", "etkileşim", "duygu", "gelişmek", 
        "şans", "buluş", "yenilik", "teknoloji", "ilişki", 
        "toplum", "aile", "arkadaş", "komşu", "üniversite", 
        "okul", "iş", "sektör", "pazar", "mülakat", 
        "satış", "alışveriş", "ürün", "fiyat", "indirim", 
        "para", "hesap", "gelir", "gider", "fatura", 
        "ödemek", "borç", "tasarruf", "yatırım", "kredi", 
        "bütçe", "ekonomi", "gelişim", "değişim", "sermaye", 
        "süreç", "sorun", "çözüm", "analiz", "karar", 
        "seçenek", "alternatif", "soru", "açıklama", 
        "tahmin", "izleme", "değerlendirme", "feedback", 
        "iyileştirme", "strateji", "zamanlama", "verimlilik", 
        "uygunluk", "örnek", "model", "kullanım", 
        "düşünce", "sosyal", "duygu", "deneyim", "şu", 
        "bu", "on", "altı", "yirmi", "kırk", "yetmiş", 
        "seksen", "dokuz", "bir", "iki", "üç", 
        "dört", "beş", "altı", "yedi", "sekiz", 
        "dokuz", "sıfır", "milyon", "bilyon", "trilyon", 
        "tarih", "kültür", "gelenek", "değer", "ahlak", 
        "etik", "yasa", "kurallar", "hak", "sorumluluk", 
        "özgürlük", "adalet", "seçim", "oy", "gelişim", 
        "yönetim", "sosyal", "değişim", "işbirliği", "katılım", 
        "etkinlik", "özlem", "hüzün", "neşe", "sevinç", 
        "ümit", "kaygı", "korku", "rahat", "güzel", 
        "çirkin", "dış", "iç", "hayal", "gerçek", 
        "hayat", "yaşamak", "doğmak", "ölmek", "yaşlanmak", 
        "çocuk", "genç", "yaşlı", "erkek", "kadın", 
        "insan", "hayvan", "bitki", "doğa", "çevre", 
        "hava", "su", "toprak", "orman", "dağ", 
        "deniz", "göl", "nehir", "çay", "bölge", 
        "şehir", "kasaba", "mahalle", "kır", "birlik", 
        "yardım", "katkı", "birlikte", "birlik", "beraber", 
        "karşı", "yan", "ön", "arka", "yanında", 
        "karşısında", "sağında", "solunda", "içinde", "dışında", 
        "üstünde", "altında", "üzerinde", "arasında", 
        "etrafında", "ötesinde", "bölüm", "kısım", 
        "parça", "miktar", "tahmin", "ölçmek", 
        "fark", "benzerlik", "aynı", "farklı", "çeşit",
        "katman", "katkı", "özellik", "değer", "kalite", 
        "tip", "model", "şekil", "yüzey", "görünüm", 
        "dış görünüş", "iç görünüş", "düşünce", "seçim", 
        "tahmin", "kural", "ilke", "fikir", "düşünce", 
        "görüş", "açıklama", "yorum", "gelişme", "değişim", 
        "serin", "sıcak", "soğuk", "nemli", "kurak", 
        "yağışlı", "rüzgarlı", "güneşli", "bulutlu", "fırtınalı", 
        "tahmin", "öngörü", "iklim", "hava durumu", 
        "doğa", "yapı", "mimari", "bina", "oda", 
        "salon", "mutfak", "banyo", "bahçe", "çatı", 
        "kapı", "pencere", "duvar", "zemin", "mobilya", 
        "elektronik", "cihaz", "alet", "makine", "araç", 
        "otomobil", "motor", "bisiklet", "otobüs", "tren", 
        "uçak", "gemiler", "kargo", "yük", "sefer", 
        "park", "bahçe", "doğa", "hayvanat bahçesi", 
        "müzik", "güzel sanatlar", "sergi", "konser", 
        "etkinlik", "kültürel", "sanatçı", "yazar", 
        "şair", "resim", "heykel", "performans", "yetenek", 
        "yaratıcılık", "eğitim", "öğrenme", "öğretim", 
        "bilgi", "veri", "çalışma", "çalışkanlık", 
        "çalışma disiplini", "zaman yönetimi", "proje yönetimi", 
        "süreç yönetimi", "iş planı", "proje", "hedef", 
        "amaç", "gözlem", "analiz", "sonuç", "değerlendirme"
      ];


    const [wordIndex, setWordIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState([wordIndex]);
    const [delay, setDelay] = useState(2000);
    const [isActive, setIsActive] = useState(false);
    const [selectedWords, setSelectedWords] = useState([]);

    useEffect(() => {
        const interval = isActive && setInterval(() => {
            if (wordIndex < kelimeler.length - 1) {
                const remainingWords = kelimeler.filter(
                    (kelime) => !selectedWords.includes(kelime)
                  );
                  
                const randomIndex = Math.floor(Math.random() * remainingWords.length)
                setWordIndex(randomIndex);
            setSelectedWords([...selectedWords, kelimeler[randomIndex]])

            } else {
                setWordIndex(0);
            }
        }, delay);

        return () => clearInterval(interval);
    }, [delay,  wordIndex, isActive, kelimeler.length]);

    useEffect(() => {
        if (kelimeler.length >0) {
            setCurrentWord(kelimeler[wordIndex]);
        }
    }, [wordIndex]);

    const handleSpeedChange = (newDelay) => {
        setDelay(newDelay);
    };

    const handleStartStop = () => {
        setIsActive(prev => !prev);
    };

  
    


    return (
        <main className='kelimetre'>
            <Header buttons={false}/>
            <div className="kelimetreContainer">
                <div>
                    <h2 className='currentWord'>{currentWord}</h2>
                </div>
                <div className="heceAllButtons">
                    <div className='startStopButton'>
                        <Button onClick={handleStartStop}>{isActive ? "Durdur" : "Başlat"}</Button>
                    </div>
                    <div className='kelimetreButtons'>
                        <Button onClick={() => handleSpeedChange(500)} color='primary'>Turbo (0.5 saniye)</Button>
                        <Button onClick={() => handleSpeedChange(1000)} color='success'>Hızlı (1 saniye)</Button>
                        <Button onClick={() => handleSpeedChange(2000)} color='warning'>Orta (2 saniye)</Button>
                        <Button onClick={() => handleSpeedChange(3000)} color='danger'>Yavaş (3 saniye)</Button>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default Kelimetre;
