import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Nasıl oynanır" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
          Kelimeyi 6 denemede tahmin edin. Her tahminden sonra, harflerin arka plan rengi kelimeye ne kadar
          yakın olduğunuzu gösterecek.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="Ş"
          status="correct"
        />
        <Cell value="A" />
        <Cell value="P" />
        <Cell value="K" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Ş hedef kelimenin bir harfi ve doğru yerde.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="K" />
        <Cell value="İ" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="M"
          status="present"
        />
        <Cell value="Y" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        M hedef kelimenin bir harfi ama yanlış yerde.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="T" />
        <Cell value="A" />
          <Cell value="L" />
          <Cell value="E" />
          <Cell isRevealing={true} isCompleted={true} value="P" status="absent" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        P harfi hedef kelimede değil.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Bu oyun open source bir kod paketinden klonlanarak yapıldı.
        -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          Pakete buraya tıklayarak ulaşabilirsiniz!
        </a>{' '}
      </p>
    </BaseModal>
  )
}
