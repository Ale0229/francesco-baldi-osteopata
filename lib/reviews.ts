import type { Review } from '@/types/review'

const staticReviews: Review[] = [
  {
    author: 'Rosa Massari',
    role: 'Paziente',
    rating: 5,
    date: 'marzo 2025',
    text: 'Il dottor Baldi è bravissimo. È competente,professionale. Il top. Non esiste uno come lui. Vivo a Milano e ogni volta che sono a Bari, passo da lui. È eccezionale.',
  },
  {
    author: 'Dante Ialongo',
    role: 'Paziente',
    rating: 5,
    date: 'maggio 2025',
    text: 'Ottima esperienza, professionista come pochi anche con i fatti, cosa che in questi casi conta molto. Professionale, cordiale e rispettoso. Mi ha risolto il problema che avevo di epicondilite! Lo consiglio',
  },
  {
    author: 'Cosmaele Vitucci',
    role: 'Paziente',
    rating: 5,
    date: 'novembre 2024',
    text: 'Il dott. Baldi é un grande professionista, altamente specializzato ed esperto. É stato l unico in grado di aiutarmi ad alleviare i miei sintomi di vertigini e tensione della zona cervicale del cranio e degli occhi, lavorando sulla mobilità del cranio e della zona temporo-mandibolare. Altamente consigliato!',
  },
]

export async function getReviews(): Promise<Review[]> {
  // TODO: sostituire con Google Places API quando disponibile il place_id
  // const res = await fetch(
  //   `https://maps.googleapis.com/maps/api/place/details/json` +
  //   `?place_id=${process.env.GOOGLE_PLACE_ID}` +
  //   `&fields=reviews&language=it&key=${process.env.GOOGLE_PLACES_API_KEY}`,
  //   { next: { revalidate: 86400 } }
  // )
  // const data = await res.json()
  // return data.result.reviews.map((r: any) => ({
  //   author: r.author_name,
  //   role: 'Paziente',
  //   text: r.text,
  //   rating: r.rating,
  //   date: r.relative_time_description,
  //   avatarUrl: r.profile_photo_url,
  // }))

  return staticReviews
}
