import { Billboard as BillboardType } from '@/types';

interface BillboardProps {
    data: BillboardType
};

const Billboard: React.FC<BillboardProps> = ({ 
    data
 }) => {
    return (
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
            <div
                className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden"
                style={{ backgroundImage: `url(${data?.imageUrl})` }}>
                    <div className="flex flex-col items-center justify-center w-full h-full text-center gap-y-8">
                        <div className="text-3xl font-bold sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
                            {data?.label}
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Billboard;