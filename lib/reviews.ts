import type { Review } from '@/types/review'

const staticReviews: Review[] = [
  {
    author: 'Maria R.',
    role: 'Paziente',
    rating: 5,
    date: 'marzo 2025',
    text: 'Il Dott. Baldi è un professionista straordinario. Dopo anni di mal di schiena cronico, dopo poche sedute ho ritrovato una qualità di vita che non ricordavo. Approccio umano, ascolto attivo e grande competenza.',
  },
  {
    author: 'Luca T.',
    role: 'Paziente',
    rating: 5,
    date: 'gennaio 2025',
    text: 'Ho portato mio figlio di 8 mesi per alcune tensioni post-parto. Il dottore è stato delicatissimo e professionale. Risultati visibili già dalla prima seduta. Lo consiglio a tutti i neo-genitori.',
  },
  {
    author: 'Giovanna M.',
    role: 'Paziente',
    rating: 5,
    date: 'novembre 2024',
    text: 'Dopo un incidente ho seguito un percorso di fisioterapia manuale con il Dott. Baldi. Preciso, puntuale e molto attento ai progressi. Studio pulito e accogliente. Tornerò sicuramente.',
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
