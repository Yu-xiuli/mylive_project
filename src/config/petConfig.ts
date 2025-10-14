export interface PetlListItem {
  name: string;
  img: string;
  desc: string;
  sizeStyle?: { width: string; height: string };
  isBlack?: boolean;
}

export interface PetList {
  row: number;
  list: PetlListItem[];
}