export const WA_NUMBER = "6285185417702";

export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const defaultReservasiMessage =
  "Halo, saya tertarik untuk reservasi rumah di *Gajah Mada Residence* (Tipe 36 - Harga Promo Rp 166 Juta). Mohon info ketersediaan unit & jadwal survei. Terima kasih.";
