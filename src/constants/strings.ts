export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Harika!', 'Süper!', 'İ-na-nıl-maz!']
export const GAME_COPIED_MESSAGE = 'Oyun panoya kopyalandı'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Yeteri kadar harf yok'
export const WORD_NOT_FOUND_MESSAGE = 'Kelime bulunamadı'
export const HARD_MODE_ALERT_MESSAGE =
  'Zor mod sadece başlangıçta seçilebilir'
export const HARD_MODE_DESCRIPTION =
  'Herhangi bir ipucu sonraki tahminlerde kullanılmalıdır'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Daha gelişmiş renk görünümü için'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Doğru kelime ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Tahmin şunu içermeli: ${letter}`
export const ENTER_TEXT = 'Giriş'
export const DELETE_TEXT = 'Sil'
export const STATISTICS_TITLE = 'İstatistikler'
export const GUESS_DISTRIBUTION_TEXT = 'Tahmin dağılımı'
export const NEW_WORD_TEXT = 'Yeni kelime'
export const SHARE_TEXT = 'Paylaş'
export const MIGRATE_BUTTON_TEXT = 'Transfer'
export const MIGRATE_DESCRIPTION_TEXT =
  'İstatistiklerini yeni bir cihaza transfer için buraya tıklayın.'
export const TOTAL_TRIES_TEXT = 'Toplam deneme'
export const SUCCESS_RATE_TEXT = 'Başarı oranı'
export const CURRENT_STREAK_TEXT = 'Şu anki seri'
export const BEST_STREAK_TEXT = 'En iyi seri'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  "You are using an embedded browser and may experience problems sharing or saving your results. We encourage you rather to use your device's default browser."
