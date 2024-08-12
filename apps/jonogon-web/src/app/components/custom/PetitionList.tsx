import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '../ui/pagination';
import PetitionCard from './PetitionCard';

const PetitionList = () => {
    return (
        <div>
            <div className="flex flex-wrap gap-4">
                <PetitionCard />
                <PetitionCard />
                <PetitionCard />
                <PetitionCard />
                <PetitionCard />
                <PetitionCard />
                <PetitionCard />
                <PetitionCard />
            </div>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
};

export default PetitionList;
