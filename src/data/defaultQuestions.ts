import { Question } from '../types';
import digestiveImg from '../assets/images/digestive_system_diagram_1795673364807.jpg';
import mealImg from '../assets/images/balanced_meal_plate_1795673367856.jpg';
import respiratoryImg from '../assets/images/respiratory_system_diagram_1795673366035.jpg';
import airQualityImg from '../assets/images/air_quality_comparison_1795673367725.jpg';
import heroesImg from '../assets/images/indonesian_heroes_struggle_1795673367945.jpg';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // PILIHAN GANDA (18 SOAL: No. 1-6 Bab 1, No. 7-12 Bab 2, No. 13-18 Bab 3)
  // =========================================================================

  // --- BAB 1: MAKANAN BERGIZI UNTUK KESEHATAN PENCERNAANMU (6 PG) ---
  {
    id: 1,
    type: 'pg',
    topic: 'Bab 1: Organ Pencernaan & Fungsinya',
    elemen: 'Bab 1: Pencernaan & Gizi',
    difficulty: 'Mudah',
    imageUrl: digestiveImg,
    imageAlt: 'Diagram sistem pencernaan manusia bernomor 1 sampai 5',
    imageCaption: 'Gambar 1. Diagram Organ Sistem Pencernaan Manusia',
    text: 'Perhatikan gambar organ sistem pencernaan manusia di atas! Organ yang ditunjukkan oleh nomor 3 dan nomor 4 secara berturut-turut memiliki fungsi utama untuk...',
    options: [
      { id: 'A', text: 'Mencerna makanan secara kimiawi dengan asam lambung dan menyerap sari-sari makanan' },
      { id: 'B', text: 'Mendorong makanan ke lambung dan menyerap kembali sisa air pada feses' },
      { id: 'C', text: 'Mengunyah makanan secara mekanik dan menghasilkan enzim amilase' },
      { id: 'D', text: 'Menghasilkan empedu dan mengeluarkan sisa pencernaan melalui anus' },
    ],
    correctAnswer: 'A',
    explanation:
      'Berdasarkan gambar:\n• Nomor 1: Mulut (mengunyah makanan & enzim ptialin/amilase)\n• Nomor 2: Kerongkongan (mendorong makanan dengan gerak peristaltik)\n• Nomor 3: Lambung (mencerna makanan secara kimiawi dengan asam lambung/HCl dan enzim pepsin)\n• Nomor 4: Usus halus (menyerap sari-sari makanan)\n• Nomor 5: Usus besar (menyerap air dan pembusukan sisa makanan).',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Bab 1: Proses Perjalanan Makanan',
    elemen: 'Bab 1: Pencernaan & Gizi',
    difficulty: 'Mudah',
    text: 'Urutan jalur perjalanan makanan dalam sistem pencernaan manusia dari awal masuk hingga sisa makanan dikeluarkan adalah...',
    options: [
      { id: 'A', text: 'Mulut → Tenggorokan → Lambung → Usus Besar → Usus Halus → Anus' },
      { id: 'B', text: 'Mulut → Kerongkongan → Lambung → Usus Halus → Usus Besar → Anus' },
      { id: 'C', text: 'Mulut → Kerongkongan → Usus Halus → Lambung → Usus Besar → Anus' },
      { id: 'D', text: 'Mulut → Lambung → Kerongkongan → Usus Halus → Usus Besar → Anus' },
    ],
    correctAnswer: 'B',
    explanation:
      'Makanan masuk melalui mulut, melewati kerongkongan (esofagus) dengan gerakan peristaltik menuju lambung. Selanjutnya sari-sari makanan diserap di usus halus, sisa air diserap di usus besar, dan ampas dibuang melalui anus.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Bab 1: Jenis Zat Gizi & Manfaatnya',
    elemen: 'Bab 1: Pencernaan & Gizi',
    difficulty: 'Mudah',
    text: 'Raka sedang dalam masa pertumbuhan dan baru saja sembuh dari luka jatuh saat bermain bola. Jenis zat gizi yang sangat dibutuhkan tubuh Raka untuk membangun sel-sel baru dan memperbaiki jaringan tubuh yang rusak adalah...',
    options: [
      { id: 'A', text: 'Karbohidrat' },
      { id: 'B', text: 'Protein' },
      { id: 'C', text: 'Lemak jenuh' },
      { id: 'D', text: 'Serat pangan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Protein berfungsi sebagai zat pembangun tubuh, membantu pertumbuhan, serta memperbaiki dan mengganti sel-sel atau jaringan tubuh yang rusak. Sumbernya antara lain ikan, telur, daging, tahu, tempe, dan kacang-kacangan.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Bab 1: Kriteria Makanan Bergizi Seimbang',
    elemen: 'Bab 1: Pencernaan & Gizi',
    difficulty: 'Sedang',
    imageUrl: mealImg,
    imageAlt: 'Ilustrasi piring makan gizi seimbang Isi Piringku',
    imageCaption: 'Gambar 2. Contoh Menu Makanan Bergizi Seimbang (Isi Piringku)',
    text: 'Perhatikan sajian menu makanan bergizi seimbang pada gambar di atas! Jika seorang siswa hanya mengonsumsi nasi putih dan kerupuk saja setiap hari tanpa lauk, sayur, maupun buah seperti pada gambar, zat gizi apakah yang paling kurang terpenuhi oleh tubuhnya?',
    options: [
      { id: 'A', text: 'Karbohidrat dan zat tepung' },
      { id: 'B', text: 'Protein, vitamin, mineral, dan serat' },
      { id: 'C', text: 'Gula dan natrium berlebih' },
      { id: 'D', text: 'Karbohidrat kompleks dan lemak trans' },
    ],
    correctAnswer: 'B',
    explanation:
      'Nasi dan kerupuk sebagian besar hanya mengandung karbohidrat (dan lemak dari penggorengan). Tubuh tetap membutuhkan lauk pauk (sumber protein seperti ikan dan telur) serta sayur dan buah (sumber vitamin, mineral, dan serat) agar gizinya seimbang.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Bab 1: Kebiasaan Makan & Kesehatan Pencernaan',
    elemen: 'Bab 1: Pencernaan & Gizi',
    difficulty: 'Sedang',
    text: 'Siti sering melewatkan sarapan pagi, suka makan makanan yang sangat pedas, dan sering menunda waktu makan siang hingga sore hari. Kebiasaan makan tersebut dapat mengganggu kesehatan sistem pencernaan, yaitu berisiko tinggi menyebabkan penyakit...',
    options: [
      { id: 'A', text: 'Sembelit karena kekurangan air putih' },
      { id: 'B', text: 'Mag (gastritis) akibat iritasi dinding lambung oleh asam lambung' },
      { id: 'C', text: 'Gondongan akibat kekurangan yodium' },
      { id: 'D', text: 'Tifus akibat kurang mengonsumsi buah-buahan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Telat makan menyebabkan lambung kosong saat asam lambung tetap diproduksi, ditambah makanan terlalu pedas yang mengiritasi dinding lambung. Kondisi ini memicu sakit mag (gastritis).',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Bab 1: Gangguan Sistem Pencernaan & Pencegahannya',
    elemen: 'Bab 1: Pencernaan & Gizi',
    difficulty: 'Sedang',
    text: 'Dina mengeluh perutnya terasa melilit dan sulit buang air besar (feses keras) selama tiga hari berturut-turut. Upaya tepat yang harus dilakukan Dina untuk mengatasi dan mencegah gangguan pencernaan tersebut di kemudian hari adalah...',
    options: [
      { id: 'A', text: 'Mengurangi minum air putih dan memperbanyak makanan cepat saji' },
      { id: 'B', text: 'Memperbanyak minum air putih serta mengonsumsi sayur dan buah kaya serat' },
      { id: 'C', text: 'Mengonsumsi makanan yang sangat pedas dan asam setiap pagi' },
      { id: 'D', text: 'Langsung tidur telentang setelah makan malam dalam porsi besar' },
    ],
    correctAnswer: 'B',
    explanation:
      'Keluhan sulit buang air besar dengan feses keras disebut sembelit (konstipasi). Cara mencegah dan mengatasinya adalah memperbanyak asupan serat dari sayur serta buah-buahan dan mencukupi kebutuhan air putih.',
  },

  // --- BAB 2: TARIK DAN EMBUSKAN (6 PG) ---
  {
    id: 7,
    type: 'pg',
    topic: 'Bab 2: Organ Pernapasan & Fungsinya',
    elemen: 'Bab 2: Sistem Pernapasan',
    difficulty: 'Mudah',
    imageUrl: respiratoryImg,
    imageAlt: 'Diagram anatomi organ pernapasan manusia bernomor 1 sampai 5',
    imageCaption: 'Gambar 3. Diagram Organ Sistem Pernapasan Manusia',
    text: 'Perhatikan gambar sistem pernapasan manusia di atas! Bagian yang ditunjukkan oleh nomor 1 dan nomor 5 secara berurutan adalah...',
    options: [
      { id: 'A', text: 'Rongga hidung dan diafragma' },
      { id: 'B', text: 'Trakea dan paru-paru' },
      { id: 'C', text: 'Bronkus dan rongga hidung' },
      { id: 'D', text: 'Alveolus dan tenggorokan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Berdasarkan gambar sistem pernapasan:\n• Nomor 1: Rongga hidung (menyaring debu, menghangatkan, dan melembapkan udara)\n• Nomor 2: Laring (pangkal tenggorokan)\n• Nomor 3: Trakea (batang tenggorokan)\n• Nomor 4: Paru-paru\n• Nomor 5: Diafragma (otot pemisah rongga dada dan rongga perut yang berperan dalam pernapasan perut).',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Bab 2: Proses Masuk & Keluarnya Udara',
    elemen: 'Bab 2: Sistem Pernapasan',
    difficulty: 'Sedang',
    text: 'Pada saat kita menarik napas (inspirasi) menggunakan pernapasan perut, perubahan yang terjadi pada otot diafragma dan volume rongga dada adalah...',
    options: [
      { id: 'A', text: 'Otot diafragma relaksasi (melengkung ke atas) dan rongga dada mengecil' },
      { id: 'B', text: 'Otot diafragma berkontraksi (mendatar) dan rongga dada membesar sehingga udara masuk' },
      { id: 'C', text: 'Otot diafragma mendatar dan tekanan udara di paru-paru menjadi lebih besar dari udara luar' },
      { id: 'D', text: 'Tulang rusuk turun sehingga udara terdorong keluar dari paru-paru' },
    ],
    correctAnswer: 'B',
    explanation:
      'Saat menarik napas (inspirasi) pernapasan perut, otot diafragma berkontraksi sehingga posisinya mendatar. Rongga dada membesar, tekanan udara di dalam paru-paru menjadi lebih kecil daripada tekanan udara luar, sehingga udara masuk ke paru-paru.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Bab 2: Jalur Perjalanan Udara',
    elemen: 'Bab 2: Sistem Pernapasan',
    difficulty: 'Mudah',
    text: 'Urutan jalur perjalanan udara yang benar saat manusia menghirup oksigen dari lingkungan menuju tempat pertukaran gas di dalam paru-paru adalah...',
    options: [
      { id: 'A', text: 'Hidung → Kerongkongan → Trakea → Bronkus → Alveolus' },
      { id: 'B', text: 'Hidung → Faring → Laring → Trakea → Bronkus → Bronkiolus → Alveolus' },
      { id: 'C', text: 'Hidung → Trakea → Laring → Alveolus → Bronkus' },
      { id: 'D', text: 'Hidung → Bronkus → Trakea → Faring → Alveolus' },
    ],
    correctAnswer: 'B',
    explanation:
      'Udara masuk melalui rongga hidung → faring (persimpangan saluran napas & cerna) → laring → trakea (tenggorokan) → bronkus → bronkiolus → alveolus (tempat pertukaran oksigen dan karbon dioksida).',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Bab 2: Gangguan Sistem Pernapasan',
    elemen: 'Bab 2: Sistem Pernapasan',
    difficulty: 'Sedang',
    text: 'Seorang anak mengalami sesak napas disertai bunyi mengi ketika terpapar udara dingin dan debu, karena saluran pernapasannya mengalami penyempitan dan peradangan. Gangguan pernapasan yang dialami anak tersebut adalah...',
    options: [
      { id: 'A', text: 'Asma' },
      { id: 'B', text: 'Tuberkulosis (TBC)' },
      { id: 'C', text: 'Sinusitis' },
      { id: 'D', text: 'Diare' },
    ],
    correctAnswer: 'A',
    explanation:
      'Asma adalah gangguan pada sistem pernapasan berupa penyempitan saluran napas yang sering dipicu oleh alergi (debu, bulu hewan, udara dingin), ditandai dengan sesak napas, batuk, dan bunyi mengi.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Bab 2: Kualitas Udara & Kesehatan Pernapasan',
    elemen: 'Bab 2: Sistem Pernapasan',
    difficulty: 'Sedang',
    imageUrl: airQualityImg,
    imageAlt: 'Perbandingan lingkungan udara bersih dan lingkungan udara tercemar asap pabrik dan kendaraan',
    imageCaption: 'Gambar 4. Perbandingan Lingkungan Udara Bersih (Kiri) dan Udara Tercemar (Kanan)',
    text: 'Perhatikan perbandingan dua kondisi lingkungan pada gambar di atas! Jika seseorang tinggal dan beraktivitas setiap hari di lingkungan sebelah kanan tanpa perlindungan, dampak paling berbahaya bagi sistem pernapasannya adalah...',
    options: [
      { id: 'A', text: 'Kadar oksigen dalam darah meningkat drastis dan paru-paru menjadi lebih kuat' },
      { id: 'B', text: 'Partikel polutan dan gas beracun mengiritasi saluran napas sehingga memicu ISPA dan bronkitis' },
      { id: 'C', text: 'Rambut hidung menghilang permanen dan fungsi lambung langsung terhenti' },
      { id: 'D', text: 'Suhu udara sejuk membuat diafragma tidak perlu bergerak lagi' },
    ],
    correctAnswer: 'B',
    explanation:
      'Asap pabrik dan asap kendaraan bermotor mengandung debu halus, karbon monoksida, dan zat beracun yang mengiritasi saluran pernapasan, menurunkan kualitas udara, dan meningkatkan risiko ISPA, asma, hingga bronkitis.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Bab 2: Menjaga Kesehatan Organ Pernapasan',
    elemen: 'Bab 2: Sistem Pernapasan',
    difficulty: 'Mudah',
    text: 'Berikut ini yang merupakan tindakan nyata dan tepat untuk menjaga kebersihan udara serta kesehatan organ pernapasan di lingkungan sekolah adalah...',
    options: [
      { id: 'A', text: 'Membakar tumpukan sampah plastik dan daun kering di halaman belakang sekolah' },
      { id: 'B', text: 'Menanam pohon rindang, membuka jendela kelas agar sirkulasi udara lancar, dan berolahraga rutin' },
      { id: 'C', text: 'Menutup seluruh ventilasi kelas agar debu dari luar tidak masuk sama sekali' },
      { id: 'D', text: 'Membiarkan ruang kelas berdebu dan jarang dibersihkan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Menanam tumbuhan hijau menghasilkan oksigen dan menyerap karbon dioksida, membuka jendela menjaga pertukaran udara segar di kelas, serta berolahraga rutin melatih kapasitas paru-paru.',
  },

  // --- BAB 3: JEJAK SANG PAHLAWAN (6 PG) ---
  {
    id: 13,
    type: 'pg',
    topic: 'Bab 3: Kondisi Kehidupan Masa Penjajahan',
    elemen: 'Bab 3: Jejak Sang Pahlawan',
    difficulty: 'Mudah',
    text: 'Pada masa penjajahan Belanda dan Jepang, rakyat Indonesia mengalami penderitaan yang sangat berat. Kebijakan tanam paksa (Cultuurstelsel) yang diterapkan oleh pemerintah kolonial Belanda mengakibatkan rakyat...',
    options: [
      { id: 'A', text: 'Bebas memilih tanaman pangan sendiri dan memperoleh keuntungan berlipat' },
      { id: 'B', text: 'Dipaksa menanam tanaman ekspor yang laku di pasar Eropa sehingga mengalami kelaparan dan kemiskinan' },
      { id: 'C', text: 'Mendapat pendidikan gratis di seluruh sekolah Belanda tanpa dipungut biaya' },
      { id: 'D', text: 'Diberikan hak penuh untuk memimpin pemerintahan di tiap daerah' },
    ],
    correctAnswer: 'B',
    explanation:
      'Tanam paksa (Cultuurstelsel) yang dipimpin Johannes van den Bosch memaksa rakyat menyerahkan tanah dan tenaganya untuk menanam tanaman ekspor (kopi, tebu, nila, teh), sehingga lahan padi terbengkalai dan rakyat mengalami kelaparan serta kemiskinan.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Bab 3: Bentuk Perlawanan Rakyat',
    elemen: 'Bab 3: Jejak Sang Pahlawan',
    difficulty: 'Sedang',
    imageUrl: heroesImg,
    imageAlt: 'Ilustrasi perjuangan pahlawan dan rakyat Indonesia bersatu mengibarkan Merah Putih',
    imageCaption: 'Gambar 5. Ilustrasi Perjuangan Rakyat Mempertahankan Kemerdekaan Indonesia',
    text: 'Perhatikan ilustrasi perjuangan rakyat pada gambar di atas! Selain melalui perjuangan fisik bersenjata menggunakan bambu runcing, bentuk perlawanan bangsa Indonesia terhadap penjajah setelah abad ke-20 juga dilakukan melalui...',
    options: [
      { id: 'A', text: 'Perjuangan organisasi pergerakan nasional, pendidikan, dan jalur diplomasi/perundingan' },
      { id: 'B', text: 'Menyerahkan seluruh hasil bumi secara sukarela kepada pemerintah kolonial' },
      { id: 'C', text: 'Membatasi persatuan hanya pada satu suku daerah tertentu saja' },
      { id: 'D', text: 'Menghentikan semua kegiatan belajar mengajar di sekolah pribumi' },
    ],
    correctAnswer: 'A',
    explanation:
      'Sejak masa Kebangkitan Nasional (berdirinya Budi Utomo tahun 1908 dan Sumpah Pemuda 1928) hingga mempertahankan kemerdekaan, perjuangan tidak hanya bersifat fisik/bersenjata, tetapi juga melalui organisasi modern, pendidikan, pers, dan jalur diplomasi.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Bab 3: Tokoh Pahlawan & Perjuangannya',
    elemen: 'Bab 3: Jejak Sang Pahlawan',
    difficulty: 'Mudah',
    text: 'Perhatikan pasangan tokoh pahlawan nasional dan peristiwa perjuangan berikut ini. Pasangan yang TEPAT antara nama tokoh pahlawan dan daerah perjuangannya adalah...',
    options: [
      { id: 'A', text: 'Pangeran Diponegoro — memimpin Perang Padri di Sumatera Barat' },
      { id: 'B', text: 'I Gusti Ngurah Rai — memimpin pertempuran Puputan Margarana di Bali' },
      { id: 'C', text: 'Cut Nyak Dien — memimpin perlawanan rakyat Maluku melawan VOC' },
      { id: 'D', text: 'Pattimura — memimpin perlawanan rakyat Jawa Tengah melawan Belanda' },
    ],
    correctAnswer: 'B',
    explanation:
      '• I Gusti Ngurah Rai adalah pahlawan nasional dari Bali yang memimpin pasukan Ciung Wanara dalam pertempuran Puputan Margarana (1946).\n• Pangeran Diponegoro memimpin Perang Jawa (Yogyakarta/Jawa Tengah).\n• Cut Nyak Dien berjuang di Aceh.\n• Pattimura berjuang di Maluku.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Bab 3: Peristiwa Sejarah Perjuangan Daerah',
    elemen: 'Bab 3: Jejak Sang Pahlawan',
    difficulty: 'Sedang',
    text: 'Pada tanggal 10 November 1945 terjadi pertempuran heroik rakyat Surabaya melawan pasukan Sekutu yang dibakar semangatnya melalui pidato Bung Tomo. Peristiwa bersejarah tersebut setiap tahunnya diperingati bangsa Indonesia sebagai...',
    options: [
      { id: 'A', text: 'Hari Kebangkitan Nasional' },
      { id: 'B', text: 'Hari Sumpah Pemuda' },
      { id: 'C', text: 'Hari Pahlawan' },
      { id: 'D', text: 'Hari Kesaktian Pancasila' },
    ],
    correctAnswer: 'C',
    explanation:
      'Pertempuran Surabaya pada 10 November 1945 menunjukkan keberanian luar biasa arek-arek Suroboyo dalam mempertahankan kemerdekaan Indonesia sehingga ditetapkan sebagai Hari Pahlawan.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Bab 3: Nilai-Nilai Perjuangan Pahlawan',
    elemen: 'Bab 3: Jejak Sang Pahlawan',
    difficulty: 'Sedang',
    text: 'Sebelum tahun 1908, banyak perlawanan rakyat di berbagai daerah seperti di Aceh, Maluku, dan Jawa mengalami kegagalan karena mudah diadu domba oleh Belanda (politik devide et impera). Pelajaran penting dan nilai perjuangan utama yang dapat dipetik dari peristiwa tersebut adalah pentingnya...',
    options: [
      { id: 'A', text: 'Mengutamakan kepentingan daerah sendiri di atas kepentingan bangsa' },
      { id: 'B', text: 'Persatuan dan kesatuan seluruh bangsa tanpa membeda-bedakan suku dan daerah' },
      { id: 'C', text: 'Menunggu bantuan militer dari negara penjajah lainnya' },
      { id: 'D', text: 'Menghindari kerja sama antarorganisasi kepemudaan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Perlawanan sebelum abad ke-20 bersifat kedaerahan dan terpisah-pisah sehingga mudah dipatahkan oleh politik adu domba (devide et impera). Oleh karena itu, persatuan dan kesatuan nasional menjadi kunci keberhasilan meraih kemerdekaan.',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Bab 3: Penerapan Nilai Pahlawan Sehari-hari',
    elemen: 'Bab 3: Jejak Sang Pahlawan',
    difficulty: 'Mudah',
    text: 'Sebagai pelajar kelas VI sekolah dasar, tindakan berikut yang paling mencerminkan penerapan nilai semangat pantang menyerah dan cinta tanah air dalam kehidupan sehari-hari adalah...',
    options: [
      { id: 'A', text: 'Belajar dengan tekun, bangga memakai produk dalam negeri, dan menjaga kerukunan dengan teman' },
      { id: 'B', text: 'Menyontek saat ujian agar selalu mendapatkan nilai tertinggi di kelas' },
      { id: 'C', text: 'Hanya mau berteman dengan siswa yang berasal dari daerah yang sama' },
      { id: 'D', text: 'Mengabaikan tugas piket kelas karena merasa bukan tanggung jawab pribadi' },
    ],
    correctAnswer: 'A',
    explanation:
      'Meneladani nilai pahlawan di masa kini diwujudkan dengan belajar sungguh-sungguh, pantang menyerah saat menghadapi pelajaran sulit, mencintai produk dan budaya bangsa, serta menjaga persatuan di sekolah.',
  },

  // =========================================================================
  // PILIHAN GANDA KOMPLEKS (3 SOAL: 1 Bab 1, 1 Bab 2, 1 Bab 3)
  // Ketentuan: Setiap soal memiliki 3 pilihan jawaban (A, B, C), >1 jawaban benar
  // =========================================================================
  {
    id: 19,
    type: 'pgk',
    topic: 'Bab 1: Organ & Proses Pencernaan',
    elemen: 'Bab 1: Pencernaan & Gizi',
    difficulty: 'Sedang',
    imageUrl: digestiveImg,
    imageAlt: 'Diagram sistem pencernaan manusia bernomor 1 sampai 5',
    imageCaption: 'Gambar 6. Diagram Sistem Pencernaan untuk Soal No. 19',
    text: 'Perhatikan kembali diagram organ sistem pencernaan manusia di atas! Pilihlah SEMUA pernyataan yang BENAR mengenai proses pencernaan makanan berdasarkan nomor organ pada gambar! (Pilihan benar bisa lebih dari satu)',
    options: [
      { id: 'A', text: 'Pada organ nomor 1 (mulut), terjadi pencernaan mekanik oleh gigi dan pencernaan kimiawi oleh enzim amilase pada air liur' },
      { id: 'B', text: 'Organ nomor 2 (kerongkongan) menyerap sebagian besar sari-sari makanan sebelum masuk ke lambung' },
      { id: 'C', text: 'Organ nomor 5 (usus besar) berfungsi menyerap kembali air dan garam mineral serta membusukkan sisa makanan dengan bantuan bakteri baik' },
    ],
    correctAnswer: ['A', 'C'],
    explanation:
      '• A BENAR: Di mulut terjadi pencernaan mekanik (gigi & lidah) serta kimiawi (enzim ptialin/amilase mengubah zat tepung menjadi gula sederhana).\n• B SALAH: Kerongkongan hanya menyalurkan makanan ke lambung lewat gerak peristaltik; penyerapan sari makanan terjadi di usus halus (nomor 4).\n• C BENAR: Usus besar (nomor 5) mengatur kadar air pada sisa makanan dan melakukan pembusukan dengan bantuan bakteri E. coli.',
  },
  {
    id: 20,
    type: 'pgk',
    topic: 'Bab 2: Kualitas Udara & Kebiasaan Sehat Pernapasan',
    elemen: 'Bab 2: Sistem Pernapasan',
    difficulty: 'Sedang',
    imageUrl: airQualityImg,
    imageAlt: 'Perbandingan lingkungan udara bersih dan udara tercemar',
    imageCaption: 'Gambar 7. Kondisi Udara Bersih vs Tercemar untuk Soal No. 20',
    text: 'Perhatikan gambar perbandingan kualitas udara di atas! Manakah tindakan-tindakan berikut yang BENAR dan efektif untuk menjaga kesehatan organ pernapasan manusia? (Pilihan benar bisa lebih dari satu)',
    options: [
      { id: 'A', text: 'Menggunakan masker saat berada di area jalan raya padat kendaraan atau daerah berasap seperti gambar sebelah kanan' },
      { id: 'B', text: 'Menghirup asap rokok secara pasif di ruangan tertutup karena tidak berbahaya bagi paru-paru anak' },
      { id: 'C', text: 'Berolahraga secara teratur di ruang terbuka hijau dan memperbanyak menanam pohon di sekitar rumah' },
    ],
    correctAnswer: ['A', 'C'],
    explanation:
      '• A BENAR: Masker menyaring debu dan partikel polutan agar tidak langsung terhirup ke saluran napas.\n• B SALAH: Asap rokok sangat berbahaya baik bagi perokok aktif maupun perokok pasif karena mengandung zat beracun perusak paru-paru.\n• C BENAR: Olahraga rutin di lingkungan sejuk dan penghijauan menjaga kebugaran paru-paru dan ketersediaan oksigen bersih.',
  },
  {
    id: 21,
    type: 'pgk',
    topic: 'Bab 3: Nilai Perjuangan Pahlawan',
    elemen: 'Bab 3: Jejak Sang Pahlawan',
    difficulty: 'Sukar',
    imageUrl: heroesImg,
    imageAlt: 'Ilustrasi pahlawan dan rakyat Indonesia bersatu melawan penjajah',
    imageCaption: 'Gambar 8. Semangat Persatuan Pejuang Indonesia untuk Soal No. 21',
    text: 'Amati ilustrasi semangat perjuangan bangsa Indonesia pada gambar di atas! Nilai-nilai kepahlawanan manakah yang tercermin dari perjuangan tersebut dan patut kita teladani saat ini? (Pilihan benar bisa lebih dari satu)',
    options: [
      { id: 'A', text: 'Rela berkorban dan berani membela kebenaran demi kemerdekaan bangsa' },
      { id: 'B', text: 'Persatuan dan gotong royong rakyat dari berbagai latar belakang daerah dan golongan' },
      { id: 'C', text: 'Sikap mementingkan keuntungan pribadi di atas kepentingan masyarakat umum' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• A BENAR: Para pahlawan menunjukkan keberanian dan kerelaan berkorban jiwa raga demi kemerdekaan.\n• B BENAR: Tampak seluruh lapisan masyarakat bersatu padu bahu-membahu memperjuangkan dan mengibarkan Sang Merah Putih.\n• C SALAH: Pahlawan justru mengutamakan kepentingan bangsa dan negara di atas kepentingan pribadi.',
  },

  // =========================================================================
  // PILIHAN GANDA KOMPLEKS KATEGORI (9 SOAL: 3 Bab 1, 3 Bab 2, 3 Bab 3)
  // Ketentuan: Setiap soal memiliki 3 deskripsi pernyataan (Benar / Salah)
  // =========================================================================

  // --- BAB 1 (3 PGK Kategori: No. 22-24) ---
  {
    id: 22,
    type: 'pgk_kategori',
    topic: 'Bab 1: Zat Gizi & Pola Makan Seimbang',
    elemen: 'Bab 1: Pencernaan & Gizi',
    difficulty: 'Sedang',
    imageUrl: mealImg,
    imageAlt: 'Ilustrasi Isi Piringku makanan bergizi seimbang',
    imageCaption: 'Gambar 9. Piring Makan Gizi Seimbang untuk Soal No. 22',
    text: 'Perhatikan sajian makanan bergizi seimbang ("Isi Piringku") pada gambar di atas! Tentukan kebenaran dari masing-masing pernyataan mengenai jenis zat gizi dan pola makan seimbang berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Nasi putih pada piring berperan sebagai sumber karbohidrat yang menghasilkan energi utama bagi tubuh untuk beraktivitas.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Ikan bakar dan telur rebus merupakan sumber protein hewani yang membantu pertumbuhan dan mengganti sel-sel tubuh yang rusak.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Dalam pola makan seimbang, porsi makanan manis dan gorengan harus lebih banyak daripada porsi sayur dan buah-buahan.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. BENAR: Nasi kaya karbohidrat sebagai sumber energi utama.\n2. BENAR: Ikan dan telur adalah sumber protein hewani berkualitas tinggi.\n3. SALAH: Pada pedoman Isi Piringku, porsi sayur, buah, makanan pokok, dan lauk pauk harus proporsional, sedangkan gula, garam, dan minyak/gorengan justru harus dibatasi.',
  },
  {
    id: 23,
    type: 'pgk_kategori',
    topic: 'Bab 1: Kebiasaan Makan & Gangguan Pencernaan',
    elemen: 'Bab 1: Pencernaan & Gizi',
    difficulty: 'Sedang',
    text: 'Diare sering menyerang anak-anak sekolah yang gemar membeli jajanan terbuka di pinggir jalan tanpa mencuci tangan terlebih dahulu. Tentukan kebenaran dari masing-masing pernyataan mengenai gangguan pencernaan dan pencegahannya berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Penyakit diare dapat disebabkan oleh infeksi bakteri, virus, atau parasit dari makanan dan minuman yang tidak higienis.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Penderita diare yang terus-menerus buang air besar bertekstur cair berisiko mengalami dehidrasi (kekurangan cairan tubuh) sehingga perlu minum oralit.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Mencuci tangan memakai sabun sebelum makan tidak berpengaruh terhadap pencegahan penyakit diare.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. BENAR: Makanan tercemar kuman memicu peradangan usus yang menyebabkan diare.\n2. BENAR: Cairan tubuh banyak keluar saat diare sehingga perlu diganti dengan air putih dan larutan oralit.\n3. SALAH: Mencuci tangan dengan sabun di air mengalir adalah cara paling efektif memutus penularan kuman penyebab diare.',
  },
  {
    id: 24,
    type: 'pgk_kategori',
    topic: 'Bab 1: Enzim & Mekanisme Pencernaan',
    elemen: 'Bab 1: Pencernaan & Gizi',
    difficulty: 'Sukar',
    text: 'Sistem pencernaan manusia bekerja memadukan proses pencernaan mekanik (gerakan fisik) dan pencernaan kimiawi (bantuan enzim). Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Asam klorida (HCl) di dalam lambung berfungsi membantu membunuh kuman penyakit yang ikut terbawa bersama makanan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Gerakan meremas dan mendorong makanan dari kerongkongan menuju lambung disebut gerakan peristaltik.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Penyerapan seluruh sari-sari makanan ke dalam pembuluh darah terjadi di organ kerongkongan.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. BENAR: Asam lambung (HCl) bersifat sangat asam untuk membunuh mikroorganisme/kuman dalam makanan dan mengaktifkan pepsin.\n2. BENAR: Dinding kerongkongan melakukan gerak peristaltik mendorong bolus makanan masuk ke lambung.\n3. SALAH: Penyerapan sari-sari makanan terjadi di usus halus, bukan di kerongkongan.',
  },

  // --- BAB 2 (3 PGK Kategori: No. 25-27) ---
  {
    id: 25,
    type: 'pgk_kategori',
    topic: 'Bab 2: Organ Pernapasan & Pertukaran Gas',
    elemen: 'Bab 2: Sistem Pernapasan',
    difficulty: 'Sedang',
    imageUrl: respiratoryImg,
    imageAlt: 'Diagram anatomi organ pernapasan manusia bernomor 1 sampai 5',
    imageCaption: 'Gambar 10. Diagram Sistem Pernapasan untuk Soal No. 25',
    text: 'Perhatikan kembali gambar anatomi sistem pernapasan manusia di atas! Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Pada bagian nomor 1 (rongga hidung), terdapat rambut-rambut halus dan selaput lendir yang menyaring debu serta menyesuaikan suhu udara.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Di dalam bagian nomor 4 (paru-paru), terdapat gelembung-gelembung halus bernama alveolus sebagai tempat pertukaran oksigen dan karbon dioksida.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Saat kita mengembuskan napas (ekspirasi), otot diafragma pada nomor 5 berkontraksi dan menekan paru-paru agar udara masuk.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. BENAR: Rongga hidung memiliki rambut hidung (silia) dan lendir untuk menyaring kotoran serta menghangatkan dan melembapkan udara.\n2. BENAR: Alveolus di dalam paru-paru menjadi tempat pertukaran O₂ dan CO₂ secara difusi.\n3. SALAH: Saat mengembuskan napas (ekspirasi), otot diafragma justru relaksasi (melengkung ke atas), rongga dada mengecil, sehingga udara terdorong keluar.',
  },
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Bab 2: Penyakit Sistem Pernapasan',
    elemen: 'Bab 2: Sistem Pernapasan',
    difficulty: 'Sedang',
    text: 'Berbagai penyakit dapat menyerang saluran dan organ pernapasan manusia jika daya tahan tubuh lemah atau terpapar bakteri dan virus. Tentukan kebenaran dari masing-masing pernyataan mengenai penyakit sistem pernapasan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Tuberkulosis (TBC) adalah penyakit infeksi menular pada paru-paru yang disebabkan oleh bakteri Mycobacterium tuberculosis.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Influenza merupakan penyakit pernapasan yang disebabkan oleh virus dan dapat menular melalui percikan batuk atau bersin.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Pneumonia adalah gangguan pernapasan yang hanya menyerang rongga hidung dan tidak memengaruhi kantong udara (alveolus) di paru-paru.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. BENAR: TBC disebabkan oleh bakteri Mycobacterium tuberculosis yang menyerang paru-paru.\n2. BENAR: Virus influenza menular lewat droplet (percikan saat batuk/bersin).\n3. SALAH: Pneumonia adalah peradangan pada paru-paru yang menyebabkan kantong udara (alveolus) terisi cairan atau nanah.',
  },
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Bab 2: Kebiasaan Menjaga Kesehatan Pernapasan',
    elemen: 'Bab 2: Sistem Pernapasan',
    difficulty: 'Mudah',
    text: 'Udara bersih sangat penting untuk mendukung kinerja paru-paru yang sehat setiap hari. Tentukan kebenaran dari masing-masing pernyataan mengenai kebiasaan menjaga kesehatan pernapasan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Beristirahat cukup, makan makanan bergizi, dan rajin berolahraga membantu meningkatkan daya tahan sistem pernapasan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Menutup mulut dan hidung menggunakan tisu atau lengan atas bagian dalam saat batuk dan bersin dapat mencegah penularan penyakit pernapasan.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Bernapas melalui mulut jauh lebih baik daripada bernapas melalui hidung karena mulut menyaring debu lebih sempurna.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. BENAR: Pola hidup sehat menjaga imunitas dan kapasitas kerja paru-paru.\n2. BENAR: Etika batuk dan bersin mencegah penyebaran droplet berisi kuman.\n3. SALAH: Bernapas melalui hidung jauh lebih sehat karena di hidung terdapat rambut penyaring debu dan selaput lendir pengatur suhu/kelembapan udara.',
  },

  // --- BAB 3 (3 PGK Kategori: No. 28-30) ---
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Bab 3: Masa Penjajahan & Perlawanan Daerah',
    elemen: 'Bab 3: Jejak Sang Pahlawan',
    difficulty: 'Sedang',
    imageUrl: heroesImg,
    imageAlt: 'Ilustrasi perjuangan rakyat Indonesia melawan penjajah',
    imageCaption: 'Gambar 11. Ilustrasi Sejarah Perjuangan Rakyat untuk Soal No. 28',
    text: 'Sejarah perjuangan bangsa Indonesia mencatat penderitaan rakyat pada masa penjajahan serta perlawanan heroik di berbagai daerah. Tentukan kebenaran dari masing-masing pernyataan sejarah berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Pada masa pendudukan Jepang, rakyat Indonesia dipaksa melakukan kerja paksa yang dikenal dengan istilah Romusha.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Perang Diponegoro (1825–1830) dipimpin oleh Pangeran Diponegoro karena campur tangan Belanda dan pemasangan patok jalan di makam leluhur.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Kerja paksa pembangunan Jalan Raya Pos dari Anyer hingga Panarukan pada masa kolonial Belanda memberikan upah besar dan kesejahteraan bagi rakyat Jawa.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. BENAR: Romusha adalah sistem kerja paksa yang sangat menyengsarakan rakyat pada masa penjajahan Jepang.\n2. BENAR: Salah satu pemicu utama Perang Diponegoro adalah campur tangan Belanda di keraton dan pemasangan patok jalan melintasi makam leluhur Pangeran Diponegoro di Tegalrejo.\n3. SALAH: Kerja rodi membangun Jalan Raya Pos Anyer–Panarukan (masa Daendels) dilakukan secara paksa tanpa upah layak dan menelan ribuan korban jiwa.',
  },
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Bab 3: Tokoh Pahlawan Nasional & Daerah',
    elemen: 'Bab 3: Jejak Sang Pahlawan',
    difficulty: 'Mudah',
    text: 'Para pahlawan Indonesia berjuang di berbagai bidang, mulai dari medan pertempuran hingga bidang pendidikan dan emansipasi. Tentukan kebenaran dari masing-masing pernyataan tentang tokoh pahlawan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Ki Hajar Dewantara mendirikan Taman Siswa dan dikenal sebagai Bapak Pendidikan Nasional Indonesia.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'R.A. Kartini memperjuangkan hak pendidikan dan kemajuan kaum perempuan di Indonesia melalui gagasan serta surat-suratnya.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Tuanku Imam Bonjol adalah tokoh pemimpin perjuangan rakyat melawan Belanda dalam Perang Aceh.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. BENAR: Ki Hajar Dewantara mendirikan Perguruan Taman Siswa (1922) dan semboyannya Ing Ngarsa Sung Tuladha, Ing Madya Mangun Karsa, Tut Wuri Handayani menjadi semboyan pendidikan nasional.\n2. BENAR: R.A. Kartini memperjuangkan kesetaraan pendidikan bagi perempuan (kumpulan suratnya diterbitkan menjadi "Habis Gelap Terbitlah Terang").\n3. SALAH: Tuanku Imam Bonjol memimpin Perang Padri di Sumatera Barat, sedangkan Perang Aceh dipimpin tokoh seperti Cut Nyak Dien dan Teuku Umar.',
  },
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Bab 3: Refleksi & Penerapan Nilai Kepahlawanan',
    elemen: 'Bab 3: Jejak Sang Pahlawan',
    difficulty: 'Sedang',
    text: 'Menghargai jasa para pahlawan tidak cukup hanya dengan menghafal nama mereka, tetapi harus diwujudkan dalam sikap hidup sehari-hari. Tentukan kebenaran dari masing-masing pernyataan penerapan nilai kepahlawanan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Berdiskusi secara damai untuk mencapai mufakat saat menentukan ketua kelas merupakan penerapan nilai persatuan dan kebersamaan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Membantu teman yang tertimpa musibah tanpa mengharapkan imbalan mencerminkan nilai rela berkorban dan kepedulian sosial.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Menganggap budaya daerah lain lebih rendah dibandingkan budaya daerah sendiri adalah wujud rasa cinta tanah air.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. BENAR: Musyawarah mufakat menjaga persatuan dan menghargai pendapat sesama.\n2. BENAR: Menolong dengan tulus tanpa pamrih adalah wujud pengamalan sifat rela berkorban.\n3. SALAH: Cinta tanah air justru menghargai seluruh keberagaman budaya Nusantara sebagai kekayaan bersama bangsa Indonesia (Bhinneka Tunggal Ika).',
  },
];
