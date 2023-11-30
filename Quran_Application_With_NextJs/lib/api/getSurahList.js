export default async function getSurahList() {
  const res = await fetch("http://api.alquran.cloud/v1/surah");

  if (!res.ok) {
    return "Failed to fetch surah list";
  }

  return res.json();
}
