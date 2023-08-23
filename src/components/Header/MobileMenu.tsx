import { XMarkIcon } from '@heroicons/react/24/solid';
import NavBarList from './NavBarList';
import { SelectedPage } from '@/shared/types';

type Props = {
    onClose: () => void,
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

export const MobileMenu = ({onClose, selectedPage, setSelectedPage}: Props) => {
    return (
        <div className="fixed right-0 bottom-0 z-60 h-full w-[300px] bg-primary-100 drop-shadow-xl">
            <div className="flex justify-end p-8">
                <button onClick={onClose}>
                    <XMarkIcon className="h-8 w-8 text-secondary-500 " />
                </button>

            </div>
            <nav className='ml-[25%] flex flex-col justify-center gap-8 text-2xl '>
                <NavBarList selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            </nav>
        </div>
    );
}

export default MobileMenu;