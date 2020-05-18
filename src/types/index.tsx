export interface Education {
   university:string;
   location:string;
   degree:string;
   field:string;
   grade:string;
   startDate:string;
   endDate:string;
   description:string;
}
export type edu = Education;
export interface StoreState {
   userName: string;
   education: Array<edu>
}