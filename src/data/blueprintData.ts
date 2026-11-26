import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas VI) Mata Pelajaran IPAS
 * Lingkup Materi: Bab 1, Bab 2, dan Bab 3
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 30 butir soal IPAS Kelas VI Kurikulum Merdeka
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  // BAB 1 (PG: 1-6)
  1: {
    elemen: 'Bab 1: Pencernaan & Gizi',
    tujuanPembelajaran:
      'Memahami, menganalisis, dan menerapkan konsep sistem pencernaan serta pola hidup sehat.',
    indikatorSoal:
      'Disajikan gambar diagram sistem pencernaan manusia bernomor 1-5, peserta didik dapat mengidentifikasi fungsi utama organ nomor 3 (lambung) dan nomor 4 (usus halus).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Bab 1: Pencernaan & Gizi',
    tujuanPembelajaran:
      'Memahami, menganalisis, dan menerapkan konsep sistem pencernaan serta pola hidup sehat.',
    indikatorSoal:
      'Peserta didik dapat mengurutkan jalur perjalanan makanan pada sistem pencernaan manusia dari mulut hingga anus secara tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Bab 1: Pencernaan & Gizi',
    tujuanPembelajaran:
      'Memahami, menganalisis, dan menerapkan konsep sistem pencernaan serta pola hidup sehat.',
    indikatorSoal:
      'Disajikan ilustrasi kondisi anak dalam masa pertumbuhan dan pemulihan luka, peserta didik dapat menentukan jenis zat gizi (protein) yang paling dibutuhkan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Bab 1: Pencernaan & Gizi',
    tujuanPembelajaran:
      'Memahami, menganalisis, dan menerapkan konsep sistem pencernaan serta pola hidup sehat.',
    indikatorSoal:
      'Disajikan gambar piring makan bergizi seimbang (Isi Piringku), peserta didik dapat menganalisis kekurangan zat gizi dari pola makan yang tidak seimbang.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Bab 1: Pencernaan & Gizi',
    tujuanPembelajaran:
      'Memahami, menganalisis, dan menerapkan konsep sistem pencernaan serta pola hidup sehat.',
    indikatorSoal:
      'Disajikan studi kasus kebiasaan melewatkan sarapan dan mengonsumsi makanan pedas, peserta didik dapat menganalisis gangguan pencernaan yang berisiko terjadi.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Bab 1: Pencernaan & Gizi',
    tujuanPembelajaran:
      'Memahami, menganalisis, dan menerapkan konsep sistem pencernaan serta pola hidup sehat.',
    indikatorSoal:
      'Disajikan kasus keluhan sembelit pada anak, peserta didik dapat menentukan cara mengatasi dan menjaga kesehatan organ pencernaan secara tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },

  // BAB 2 (PG: 7-12)
  7: {
    elemen: 'Bab 2: Sistem Pernapasan',
    tujuanPembelajaran:
      'Memahami, menganalisis, dan menerapkan konsep sistem pernapasan serta menjaga kualitas kesehatan pernapasan.',
    indikatorSoal:
      'Disajikan gambar anatomi sistem pernapasan manusia bernomor 1-5, peserta didik dapat mengidentifikasi organ nomor 1 (rongga hidung) dan nomor 5 (diafragma).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Bab 2: Sistem Pernapasan',
    tujuanPembelajaran:
      'Memahami, menganalisis, dan menerapkan konsep sistem pernapasan serta menjaga kualitas kesehatan pernapasan.',
    indikatorSoal:
      'Peserta didik dapat menganalisis mekanisme masuknya udara (inspirasi) pada pernapasan perut yang melibatkan kontraksi otot diafragma.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Bab 2: Sistem Pernapasan',
    tujuanPembelajaran:
      'Memahami, menganalisis, dan menerapkan konsep sistem pernapasan serta menjaga kualitas kesehatan pernapasan.',
    indikatorSoal:
      'Peserta didik dapat menentukan urutan jalur perjalanan udara dari rongga hidung hingga alveolus pada paru-paru manusia.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Bab 2: Sistem Pernapasan',
    tujuanPembelajaran:
      'Memahami, menganalisis, dan menerapkan konsep sistem pernapasan serta menjaga kualitas kesehatan pernapasan.',
    indikatorSoal:
      'Disajikan gejala sesak napas disertai bunyi mengi akibat paparan debu/udara dingin, peserta didik dapat mengidentifikasi penyakit asma.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Bab 2: Sistem Pernapasan',
    tujuanPembelajaran:
      'Memahami, menganalisis, dan menerapkan konsep sistem pernapasan serta menjaga kualitas kesehatan pernapasan.',
    indikatorSoal:
      'Disajikan gambar perbandingan lingkungan udara bersih dan udara tercemar asap pabrik/kendaraan, peserta didik dapat menganalisis dampak polusi udara terhadap kesehatan pernapasan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Bab 2: Sistem Pernapasan',
    tujuanPembelajaran:
      'Memahami, menganalisis, dan menerapkan konsep sistem pernapasan serta menjaga kualitas kesehatan pernapasan.',
    indikatorSoal:
      'Peserta didik dapat menentukan tindakan yang tepat untuk menjaga kebersihan udara dan kesehatan organ pernapasan di lingkungan sekolah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },

  // BAB 3 (PG: 13-18)
  13: {
    elemen: 'Bab 3: Jejak Sang Pahlawan',
    tujuanPembelajaran:
      'Memahami, menganalisis, dan merefleksikan peristiwa sejarah serta nilai perjuangan pahlawan.',
    indikatorSoal:
      'Peserta didik dapat menjelaskan dampak kebijakan tanam paksa (Cultuurstelsel) terhadap kondisi kehidupan masyarakat Indonesia pada masa penjajahan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Bab 3: Jejak Sang Pahlawan',
    tujuanPembelajaran:
      'Memahami, menganalisis, dan merefleksikan peristiwa sejarah serta nilai perjuangan pahlawan.',
    indikatorSoal:
      'Disajikan ilustrasi perjuangan rakyat Indonesia, peserta didik dapat mengidentifikasi bentuk perlawanan melalui organisasi pergerakan nasional, pendidikan, dan diplomasi.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Bab 3: Jejak Sang Pahlawan',
    tujuanPembelajaran:
      'Memahami, menganalisis, dan merefleksikan peristiwa sejarah serta nilai perjuangan pahlawan.',
    indikatorSoal:
      'Peserta didik dapat menentukan pasangan yang tepat antara tokoh pahlawan nasional/daerah dengan peristiwa dan wilayah perjuangannya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Bab 3: Jejak Sang Pahlawan',
    tujuanPembelajaran:
      'Memahami, menganalisis, dan merefleksikan peristiwa sejarah serta nilai perjuangan pahlawan.',
    indikatorSoal:
      'Disajikan narasi peristiwa heroik pertempuran 10 November 1945 di Surabaya, peserta didik dapat mengaitkannya dengan peringatan Hari Pahlawan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Bab 3: Jejak Sang Pahlawan',
    tujuanPembelajaran:
      'Memahami, menganalisis, dan merefleksikan peristiwa sejarah serta nilai perjuangan pahlawan.',
    indikatorSoal:
      'Disajikan analisis kegagalan perlawanan daerah sebelum 1908 akibat politik adu domba, peserta didik dapat menyimpulkan pentingnya nilai persatuan dan kesatuan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Bab 3: Jejak Sang Pahlawan',
    tujuanPembelajaran:
      'Memahami, menganalisis, dan merefleksikan peristiwa sejarah serta nilai perjuangan pahlawan.',
    indikatorSoal:
      'Peserta didik dapat memilih contoh penerapan nilai pantang menyerah dan cinta tanah air dalam kehidupan sehari-hari sebagai pelajar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },

  // PILIHAN GANDA KOMPLEKS (19-21)
  19: {
    elemen: 'Bab 1: Pencernaan & Gizi',
    tujuanPembelajaran:
      'Memahami, menganalisis, dan menerapkan konsep sistem pencernaan serta pola hidup sehat.',
    indikatorSoal:
      'Disajikan gambar diagram sistem pencernaan manusia, peserta didik dapat memilih lebih dari satu pernyataan yang benar mengenai fungsi mulut, kerongkongan, dan usus besar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Bab 2: Sistem Pernapasan',
    tujuanPembelajaran:
      'Memahami, menganalisis, dan menerapkan konsep sistem pernapasan serta menjaga kualitas kesehatan pernapasan.',
    indikatorSoal:
      'Disajikan gambar perbandingan kualitas udara, peserta didik dapat memilih semua tindakan yang benar untuk melindungi organ pernapasan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Bab 3: Jejak Sang Pahlawan',
    tujuanPembelajaran:
      'Memahami, menganalisis, dan merefleksikan peristiwa sejarah serta nilai perjuangan pahlawan.',
    indikatorSoal:
      'Disajikan ilustrasi perjuangan rakyat Indonesia, peserta didik dapat mengevaluasi dan memilih nilai-nilai kepahlawanan yang patut diteladani.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },

  // PILIHAN GANDA KOMPLEKS KATEGORI (22-30)
  22: {
    elemen: 'Bab 1: Pencernaan & Gizi',
    tujuanPembelajaran:
      'Memahami, menganalisis, dan menerapkan konsep sistem pencernaan serta pola hidup sehat.',
    indikatorSoal:
      'Disajikan gambar Isi Piringku, peserta didik dapat menentukan kebenaran (Benar/Salah) pada 3 pernyataan terkait fungsi karbohidrat, protein, dan proporsi gizi seimbang.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Bab 1: Pencernaan & Gizi',
    tujuanPembelajaran:
      'Memahami, menganalisis, dan menerapkan konsep sistem pencernaan serta pola hidup sehat.',
    indikatorSoal:
      'Disajikan kasus gangguan pencernaan diare, peserta didik dapat menilai kebenaran (Benar/Salah) pada 3 pernyataan tentang penyebab, bahaya dehidrasi, dan pencegahannya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Bab 1: Pencernaan & Gizi',
    tujuanPembelajaran:
      'Memahami, menganalisis, dan menerapkan konsep sistem pencernaan serta pola hidup sehat.',
    indikatorSoal:
      'Peserta didik dapat menganalisis dan menentukan kebenaran (Benar/Salah) 3 pernyataan terkait fungsi HCl lambung, gerak peristaltik, dan lokasi penyerapan sari makanan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Bab 2: Sistem Pernapasan',
    tujuanPembelajaran:
      'Memahami, menganalisis, dan menerapkan konsep sistem pernapasan serta menjaga kualitas kesehatan pernapasan.',
    indikatorSoal:
      'Disajikan gambar sistem pernapasan manusia, peserta didik dapat menentukan kebenaran (Benar/Salah) pada 3 pernyataan terkait rongga hidung, alveolus paru-paru, dan mekanisme ekspirasi diafragma.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Bab 2: Sistem Pernapasan',
    tujuanPembelajaran:
      'Memahami, menganalisis, dan menerapkan konsep sistem pernapasan serta menjaga kualitas kesehatan pernapasan.',
    indikatorSoal:
      'Peserta didik dapat menilai kebenaran (Benar/Salah) pada 3 pernyataan mengenai penyakit sistem pernapasan (TBC, influenza, dan pneumonia).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Bab 2: Sistem Pernapasan',
    tujuanPembelajaran:
      'Memahami, menganalisis, dan menerapkan konsep sistem pernapasan serta menjaga kualitas kesehatan pernapasan.',
    indikatorSoal:
      'Peserta didik dapat mengevaluasi kebenaran (Benar/Salah) pada 3 pernyataan kebiasaan menjaga kesehatan organ pernapasan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Bab 3: Jejak Sang Pahlawan',
    tujuanPembelajaran:
      'Memahami, menganalisis, dan merefleksikan peristiwa sejarah serta nilai perjuangan pahlawan.',
    indikatorSoal:
      'Disajikan ilustrasi sejarah perjuangan, peserta didik dapat menentukan kebenaran (Benar/Salah) pada 3 pernyataan mengenai Romusha, Perang Diponegoro, dan kerja rodi Jalan Raya Pos.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Bab 3: Jejak Sang Pahlawan',
    tujuanPembelajaran:
      'Memahami, menganalisis, dan merefleksikan peristiwa sejarah serta nilai perjuangan pahlawan.',
    indikatorSoal:
      'Peserta didik dapat menilai kebenaran (Benar/Salah) pada 3 pernyataan tentang peran Ki Hajar Dewantara, R.A. Kartini, dan Tuanku Imam Bonjol.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Bab 3: Jejak Sang Pahlawan',
    tujuanPembelajaran:
      'Memahami, menganalisis, dan merefleksikan peristiwa sejarah serta nilai perjuangan pahlawan.',
    indikatorSoal:
      'Peserta didik dapat merefleksikan dan menentukan kebenaran (Benar/Salah) pada 3 pernyataan penerapan nilai kepahlawanan dalam kehidupan sehari-hari.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  // Gunakan data dari definisi atau field internal question, atau inferensi logis
  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu memahami, menganalisis, dan menerapkan konsep materi ${q.topic} dalam mata pelajaran IPAS.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus masalah tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('bab 1') || t.includes('pencernaan') || t.includes('gizi') || t.includes('makanan')) {
    return 'Bab 1: Pencernaan & Gizi';
  }
  if (t.includes('bab 2') || t.includes('pernapasan') || t.includes('udara') || t.includes('paru')) {
    return 'Bab 2: Sistem Pernapasan';
  }
  if (t.includes('bab 3') || t.includes('pahlawan') || t.includes('penjajahan') || t.includes('perjuangan')) {
    return 'Bab 3: Jejak Sang Pahlawan';
  }
  return 'Bab 1: Pencernaan & Gizi';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  // Distribusi Elemen
  const elemenCountMap: Record<string, number> = {};
  // Distribusi Level Kognitif
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  // Distribusi Tingkat Kesukaran
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  // Distribusi Bentuk Soal
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    // Elemen
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    // Level
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    // Diff
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
