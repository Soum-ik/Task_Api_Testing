export default async function getSingleSurah(id) {
  const res = await fetch(
    `http://api.alquran.cloud/v1/surah/${id}/editions/quran-uthmani,en.asad,ar.alafasy`
  );

  if (!res.ok) {
    return "not working";
  }

  return res.json();
}
