export interface BikeProps {
  id?: number;
  color: string;
  size: string;
  material: string;
  gender: string;
  speedkit: string;
  rim: string;
  suspension: string;
  description: string;
  hourlyvalue: string;
  dailyvalue: string;
  latitude: string;
  longitude: string;
  user?: UserProps;
  brand?: BrandProps;
  category?: CategoryProps;
  photos?: PhotoProps[];
  idbrand?: string;
  idcategory?: string;
  iduser?: string;
}

export interface BrandProps {
  id: number;
  name: string;
}

export interface CategoryProps {
  id: number;
  name: string;
}

export interface ErrorProps {
  error: string;
  props: string;
}

export interface PhotoProps {
  id: number;
  filename: string;
}

export interface UserProps {
  id?: number;
  alias: string;
  mail: string;
  phone: string;
}
