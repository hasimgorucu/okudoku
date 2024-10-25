import { useEffect, useState } from 'react';
import "./Hece.css";
import { Button, Row, Col, ButtonGroup } from 'reactstrap';


function Hece() {
    const harfGrubu = ["a, n ,e ,t , i , l", "o", "k", "u", "r", "ı", "m", "ü", "s", "ö", "y", "d", "z", "ç", "b", "g", "c", "ş", "p", "h", "v", "ğ", "f", "j"];

    const hece = [
        ["an", "na", "en", "ne", "at", "ta", "et", "te",
            "ant", "tat", "ten", "net", "tan", "in", "it",
            "ni", "ti", "tin", "al", "el", "il", "li",
            "la", "le", "nil", "nal"],
        ["on", "ol", "ot", "nota", "no", "lo", "to", "nat", "ton"],
        ["ak", "ka", "kok", "ok", "ko", "kan", "ken", "nek", "nak",
            "tok", "kot", "kon", "kak", "kek", "kil", "kit",
            "tik", "kin", "tek", "ket", "kol", "kat"],
        ["un", "nu", "tu", "ut", "ul", "ku", "kul", "tut"],
        ["ar", "er", "ir", "ra", "re", "ri",
            "rak", "kar", "nar", "rik", "nur",
            "tur", "kur"],
        ["ın", "ıt", "tı", "kı", "rı", "lı", "ıl",
            "tır", "tıl", "kıl", "rık", "kır", "ırk"],
        ["ma", "me", "em", "im", "mi", "om", "mo", "um", "mu",
            "mı", "mor", "mır", "mar", "mer", "rem", "ram", "rim",
            "lem", "mut", "mum", "kim", "tam", "mert"],
        ["ün", "nü", "üt", "tü", "ül", "lü", "lüle", "lül",
            "kül", "mülk", "ük", "kü", "mü", "üm", "ür", "rü"],
        ["as", "es", "se", "sa", "is", "sis", "si",
            "sos", "so", "üs", "sü", "süs", "ses",
            "sil", "sel", "sal", "sol", "süt", "sır",
            "sür", "kas", "kes", "küs"],
        ["Ön", "nö", "ös", "sö", "mö", "ör",
            "kör", "kök", "öt", "kö", "sök"],
        ["ay", "ya", "ey", "ye", "iy", "yi", "oy",
            "yo", "yu", "uy", "söy", "yös", "yas",
            "yes", "yan", "yen", "yil", "yel", "yal",
            "yol", "yul", "yön", "say"],
        ["da", "ad", "de", "dan", "den", "di",
            "od", "ud", "du", "do", "öd", "döy",
            "düy", "doy", "duy", "dal", "dil",
            "dik", "dur", "dön", "dut"],
        ["az", "ez", "za", "ze", "iz", "zi", "oz",
            "uz", "üz", "üzüm", "öz", "özü", "yüz",
            "züm", "tuz", "muz", "kaz", "zil", "zan",
            "zen"],
        ["aç", "ça", "çe", "eç", "iç", "çi",
            "çok", "çök", "çay", "çim", "çiz", "uç",
            "maç", "saç", "taç", "çal"],
        ["ba", "be", "bi", "bo", "bu", "bü",
            "ban", "ben", "bin", "ab", "eb", "bö",
            "bir", "bol"],
        ["ga", "ge", "go", "gu", "göz", "gür", "gir", "gör", "gar", "geç", "gül", "gün"],
        ["ec", "ca", "ce", "cü", "cam", "can",
            "cik", "cem", "cim", "ciy", "cit", "cis"],
        ["aş", "şa", "eş", "şe", "iş", "üş", "şu", "şü", "beş", "taş", "kış"],
        ["ip", "ap", "ep", "pe", "pu", "pil",
            "top", "kap", "kep", "küp", "pas",
            "yap", "zıp", "park"],
        ["ah", "eh", "ih", "hi", "ho", "oh",
            "öh", "hü", "üh", "püh", "tüh", "hoh",
            "hoş", "hal", "his"],
        ["av", "ev", "ve", "va", "var", "ov",
            "ver", "öv", "söv", "döv", "vi", "vip",
            "vim", "völ", "kav", "kuv", "dav", "dev",
            "tev"],
        ["ağ", "eğ", "öğ", "oğ", "dağ", "bağ",
            "sağ", "yağ", "boğ"],
        ["af", "fe", "ef", "of", "üf", "püf",
            "küp", "tef", "kuf", "köf", "fa", "fe",
            "far", "fır", "fal", "fel", "fev"],
        ["je", "ja", "jo", "aj", "ej", "jü",
            "jö", "raj", "gaj", "saj", "jüt", "jur",
            "jet", "jön", "loj", "mej", "maj", "kaj",
            "jak"],
    ];


    const kelime = [
        ["ana", "nana", "nene", "anne", "nane", "ela", "lale", "ali", "ile", "etli",
            "alet", "atlet", "taneli", "aile", "nail",
            "lila", "Lina", "elli", "alan", "alana",
            "anla", "ele"],
        ["nota", "onat", "otel", "olta", "oto",
            "ota", "tona"],
        ["iki", "kekik", "Okan", "toka", "ilke",
            "Kaan", "kale", "teke", "tek", "ket",
            "kokla", "kilo", "kene"],
        ["ulu", "unu", "okul", "Utku", "tutku",
            "kutu", "kule", "kulak", "koku", "unla",
            "oku", "okut", "konu", "tutkal", "kokulu",
            "tuna", "kolu", "kukla"],
        ["lira", "kara", "tere", "rak", "kar",
            "tarak", "erik", "Rana", "Onur", "Eren", "tere",
            "iri", "ara", "tara", "renkli", "Turan",
            "kurut", "kuru", "Taner", "tekrar", "anar",
            "karar", "okur", "Kuran", "kuna", "konan",
            "unlar", "koklar"],
        ["tırtıl", "anı", "Anıl", "kırık", "Tarık",
            "katı", "atkı", "altı", "altın", "tatlı",
            "tattı", "kulaklık", "tanı", "ıtır", "kıtır",
            "atanı", "arı", "tıkır", "ırmak", "Akın",
            "kalın", "takı", "aktı", "attı", "katıl",
            "takıl"],
        ["Kerim", "terim", "kalem", "armut", "minik",
            "elma", "Mete", "ekmek", "Kemal", "Mine",
            "kimin", "kimi", "Murat", "Meltem", "marul",
            "Ekrem", "Metin", "Emine", "limon",
            "alma", "lokum", "kemik", "Kamil", "kalemi",
            "Melek", "Emel", "Kerem", "temel", "Melike",
            "tekme", "atma", "alim", "elleme", "Emin",
            "Umut", "katma"],
        ["ütü", "ürün", "ünlü", "ümit", "tül",
            "tünel", "ülke", "Ülkü", "Atatürk", "Ümran",
            "ütülü", "ütüle", "tülü", "Ünal",
            "kütük", "ülke", "kütle", "küte"],
        ["askı", "saat", "suna", "sulu",
            "Esma", "soru", "simit", "Sinan", "Selim",
            "sarı", "mısır", "aslan", "sıra", "asker",
            "makas", "masal", "sesli", "asar",
            "eser", "keser", "kasar", "sürer", "süre",
            "kase", "uslu", "üslü", "küsen", "küser"],
        ["örnek", "önlem", "kömür", "tören", "Önal",
            "önlük", "Ömer", "önemli", "örtü", "tören",
            "öner", "öteki", "örüm", "ömür", "önel"],
        ["uyu", "yala", "yürü", "yara", "yere",
            "sayı", "öykü", "oyna", "oya", "oyun",
            "yemek", "Ayla", "kaykay", "ayı", "ayıcık",
            "yatak", "kamyon", "ayna", "leylek", "kolye",
            "yelek", "koyun", "koyuna", "yaka", "maya",
            "mayala", "Koray", "Simay", "Aylin", "Yaman"],
        ["kedi", "dere", "döner", "dört", "Dilek", "Arda", "Eda", "oynadı", "odun", "ördek", "adam", "dede", "doktor", "yedi", "düdük", "dondurma", "Derya", "duman", "oldu"],
        ["üzüm", "azra", "yazı", "zeki",
            "yazıyor", "kazak", "teyze", "yüzük", "Mirza",
            "taze", "zeytin", "kiraz", "yüzü", "sekiz",
            "dokuz", "üzümlü", "müzik", "Ziya", "temiz",
            "Nazlı", "İzzet"],
        ["küçük", "çizdi", "içti", "Ayça", "saçına",
            "çilek", "çiçek", "reçel", "Çetin",
            "çitle", "çekirdek", "reçete", "çizme", "serçe",
            "sütlaç", "Çınar"],
        ["abla", "ebe", "börek", "Sabri", "sabır",
            "bayrak", "Ebru", "balık", "Burak",
            "boya", "baba", "Aybüke", "Aybars", "Buse",
            "banu", "Ebrar", "bere", "balon", "Bülent",
            "araba", "bindi", "otobüs", "bayram", "bakkal"],
        ["gaga", "Ege", "guguk", "gözlük", "Gaye",
            "gazoz", "gitar", "bilge", "dergi", "gamze",
            "günaydın", "gazete", "üçgen", "yenge",
            "gözüne", "günü", "karga", "gömlek", "Gülce",
            "gezi", "Giray", "göremedi", "gözlükçü", "silgi"],
        ["cüce", "baca", "gece", "ocak", "cana",
            "cene", "tencere", "oyuncak", "bilmece", "bulmaca",
            "Necmettin", "salıncak", "Ece", "Canan", "cici",
            "boncuk", "minicik", "tanecik", "Ceyda"],
        ["şarkı", "Şule", "arkadaş", "şemsiye", "yemiş",
            "komşu", "şimdi", "geçiş", "yetiş", "Şenay",
            "çarşı", "Şermin", "başkan",
            "alkış", "kalkış", "yatış", "satış", "kışlık",
            "çeşit", "üşüt"],
        ["ipli", "iplik", "pide", "Peyami", "paten",
            "küpe", "Pelin", "kapı", "pazartesi", "perşembe",
            "portakal", "pazar", "pırasa", "ipek", "Polat",
            "topla", "pasta", "Pınar", "Serap", "püskül",
            "köpek", "zıpla", "pamuk",],
        ["halı", "hala", "hırka", "Hülya", "Abdullah",
            "hediye", "ahmet", "hakim", "hacer", "ıhlamur",
            "huzur", "bahar", "Hasan", "sabah", "halsiz",
            "hale", "hekim"],
        ["hava", "havuz", "havan", "kova", "kovan",
            "varsın", "ayva", "manav", "vişne", "Veli",
            "eldiven", "voleybol", "avukat", "Vildan", "eldiven",
            "sevgi", "vatan", "kavun", "kivi", "meyve",
            "kuvvet", "kuvvetli", "küvet", "kıvrım", "kıvır"],
        ["oğa", "öğe", "iğne", "kurbağa", "ağaç",
            "düğün", "yağız", "poğaça", "öğretmen", "öğret",
            "öğren", "yağmur", "ağa", "yoğurt", "mesleği",
            "tuğba", "boğaç", "buğra", "uludağ", "doğra",
            "soğan", "doğa", "pikniğe", "çiğdem", "çoğal",
            "dağıt"],
        ["Fare", "fındık", "kafa", "fidan", "efe",
            "köfte", "fatma", "defter", "fasulye", "fatih",
            "efsun", "fadik", "faruk", "telefon", "akif",
            "futbol", "fethi", "fıstık", "afiyet", "affet",
            "afet", "afra", "lütfen", "fırın", "fırıncı",
            "nefis"],
        ["jeton", "panjur", "jüri", "baraj", "garaj",
            "jale", "judo", "mesaj", "masaj", "lojman",
            "pijama", "Jülide", "müjde", "pijama", "ajda",
            "viraj", "bagaj"]
    ];

    const listGroup = [hece, kelime]

    const [listIndex, setListIndex] = useState(0)

    const [currentList, setCurrentList] = useState(listGroup[listIndex]);
    const [currentGroup, setCurrentGroup] = useState(0);
    const [wordIndex, setWordIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState(currentList[currentGroup][wordIndex]);
    const [delay, setDelay] = useState(2000);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const interval = isActive && setInterval(() => {
            if (wordIndex < currentList[currentGroup].length - 1) {
                setWordIndex(prevIndex => prevIndex + 1);
            } else {
                setWordIndex(0);
            }
        }, delay);

        return () => clearInterval(interval);
    }, [delay, currentGroup, currentList, wordIndex, isActive, listIndex]);

    useEffect(() => {
        if (currentList.length > 0 && currentList[currentGroup].length > 0) {
            setCurrentWord(currentList[currentGroup][wordIndex]);
        }
    }, [currentGroup, currentList, wordIndex, listIndex]);

    const handleSpeedChange = (newDelay) => {
        setDelay(newDelay);
    };

    const handleStartStop = () => {
        setIsActive(prev => !prev);
    };

    const [buttonSize, setButtonSize] = useState('lg');
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 780) {
                setButtonSize('sm'); 
            } else {
                setButtonSize('lg'); 
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
    }

    );


    return (
        <main className='hece'>
            <div className="heceContainer">
                <div className="heceButtonGroupContainer">
                    <ButtonGroup className="my-2" size={buttonSize}>
                        <Button
                            outline
                            active={listIndex == 0}
                            onClick={() => { setListIndex(0); setCurrentGroup(0); setWordIndex(0); setCurrentList(hece) }}
                        >
                            Hece
                        </Button>
                        <Button
                            outline
                            active={listIndex == 1}
                            onClick={() => { setListIndex(1); setCurrentGroup(0); setWordIndex(0); setCurrentList(kelime) }}
                        >
                            Kelime
                        </Button>
                    </ButtonGroup>
                    {buttonSize == "lg" ? <ButtonGroup className="my-2" size="sm">
                        {harfGrubu.map((item, index) => (
                            <Button
                                outline
                                key={index}
                                active={currentGroup === index}
                                onClick={() => { setCurrentGroup(index); setWordIndex(0); }}
                            >
                                {item}
                            </Button>
                        ))}
                    </ButtonGroup> : <Row className="g-3">
                        {harfGrubu.map((item, index) => (

                            <Col key={index} xs={2}>
                                <Button size="sm" 
                                    outline
                                    active={currentGroup === index}
                                    onClick={() => { setCurrentGroup(index); setWordIndex(0); }}
                                >
                                    {item}
                                </Button>
                            </Col>
                        ))}

                    </Row>}
                </div>
                <div>
                    <h2 className='currentWord'>{currentWord}</h2>
                </div>
                <div className="heceAllButtons">
                    <div className='startStopButton'>
                        <Button onClick={handleStartStop}>{isActive ? "Durdur" : "Başlat"}</Button>
                    </div>
                    <div className='heceButtons'>
                        <Button onClick={() => handleSpeedChange(2000)} color='success'>Hızlı (2 saniye)</Button>
                        <Button onClick={() => handleSpeedChange(4000)} color='warning'>Orta (4 saniye)</Button>
                        <Button onClick={() => handleSpeedChange(6000)} color='danger'>Yavaş (6 saniye)</Button>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default Hece;
