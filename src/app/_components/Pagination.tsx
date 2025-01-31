"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter } from "next/navigation";

export default function PaginationOfMovies({ link }: { link: string }) {
  const router = useRouter();
  const clickHandler = () => {
    let number = 1;
    router.push(`${link}?page=${number + 1}`);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="1" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="2">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="3">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="4">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" onClick={clickHandler} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
